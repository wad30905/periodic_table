import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BASE_URL } from "../api";
import { synBoundState } from "../assets/atom";
import SideBar from "../components/molecules/SideBar";
export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Hr = styled.hr`
  margin: 50px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  width: 100%;
`;

const resultWrapper = styled.div`
  border: 1px solidb;
`;
export interface infoProps {
  minSynIndex: string;
  maxSynIndex: string;
  minBandGap: string;
  maxBandGap: string;
  minD11: string;
  maxD11: string;
  minD31: string;
  maxD31: string;
}
export interface Material {
  _id: string;
  Phase: string;
  name: string;
  A: string;
  B: string;
  C: string;
  indexing: string;
  latt_x: string;
  latt_y: string;
  latt_z: string;
  angle_x: string;
  anlge_y: string;
  angle_z: string;
  space_group: string;
  total_energy: string;
  energy_form: string;
  e11: string;
  e22: string;
  e31: string;
  e32: string;
  C11: string;
  C12: string;
  C22: string;
  C21: string;
  d11: string;
  d22: string;
  d31: string;
  d32: string;
  Eg_pbe: string;
  dielec_elec_xx: string;
  dielec_elec_yy: string;
  dielec_elec_zz: string;
  dielec_ion_xx: string;
  dielec_ion_yy: string;
  dielec_ion_zz: string;
  born_charge_A_xx: string;
  born_charge_A_yy: string;
  born_charge_A_zz: string;
  born_charge_B_xx: string;
  born_charge_B_yy: string;
  born_charge_B_zz: string;
  born_charge_C_xx: string;
  born_charge_C_yy: string;
  born_charge_C_zz: string;
  Parent_1: string;
  Parent_2: string;
  Parent_1_e: string;
  Parent_2_e: string;
  Parent_min: string;
  Parent_max: string;
  synthesis_index: string;
  createdAt: string;
  updatedAt: string;
  __v: string;
}
function Search() {
  const [searchStr, setSearchStr] = useState<string>("");
  const [result, setResult] = useState<Material[]>();
  const [showResult, setShowResult] = useState<Material[]>();
  const [info, setInfo] = useState<infoProps>();
  const [synBound, setSynBound] = useRecoilState(synBoundState);
  const { state } = useLocation();

  const fetchResult = async (searchStr: string) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/material?search=${searchStr}`
      );
      setResult(data.slice(0, -1));
      setShowResult(data.slice(0, -1));
      setInfo(data[data.length - 1]);
      setSynBound([
        data[data.length - 1].minSynIndex,
        data[data.length - 1].maxSynIndex,
        data[data.length - 1].minBandGap,
        data[data.length - 1].maxBandGap,
        data[data.length - 1].minD11,
        data[data.length - 1].maxD11,
        data[data.length - 1].minD31,
        data[data.length - 1].maxD31,
      ]);
    } catch (error) {}
  };

  useEffect(() => {
    fetchResult(state);
  }, []);

  const onInput = (e: any) => {
    setSearchStr(e.target.value);
  };
  const onElementClick = (e: any) => {
    setSearchStr((prev) => prev + e.target.id);
  };

  // bound 필터를 변경시
  useEffect(() => {
    if (!synBound) return;
    if (!result) return;
    setShowResult(
      result?.filter(
        (material: Material) =>
          parseFloat(material.synthesis_index) >= synBound[0] &&
          parseFloat(material.synthesis_index) <= synBound[1] &&
          parseFloat(material.Eg_pbe) >= synBound[2] &&
          parseFloat(material.Eg_pbe) <= synBound[3] &&
          parseFloat(material.d11) >= synBound[4] &&
          parseFloat(material.d11) <= synBound[5] &&
          parseFloat(material.d31) >= synBound[6] &&
          parseFloat(material.d31) <= synBound[7]
      )
    );
  }, [synBound]);
  console.log("synboudn", synBound);
  console.log("result", result?.length);
  console.log("showResult", showResult?.length);
  return (
    <div style={{ height: "3000px" }}>
      <div style={{ marginTop: "100px" }}>
        <TableWrapper>
          <div className="search-box" style={{ width: "80%" }}>
            <input
              type="text"
              placeholder="Search..."
              onChange={onInput}
              value={searchStr}
            />
            <Link to="/search" state={""}>
              <button type="submit">
                <FiSearch />
              </button>
            </Link>
          </div>
          <Hr />
        </TableWrapper>
        <SearchWrapper>
          <SideBar {...info!} />

          <table className="cool-table">
            <thead>
              <h1>{showResult?.length}</h1>
              <tr>
                <th>Formula</th>
                <th>Phase</th>
                <th>Space Group</th>
                <th>Formation Energy</th>
                <th>Synthesis Index</th>
                <th>Eg_PBE</th>
                <th>d11</th>
                <th>d22</th>
                <th>d31</th>
                <th>d32</th>
              </tr>
            </thead>
            <tbody>
              {showResult
                ? showResult.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.Phase}</td>
                        <td>{item.space_group}</td>
                        <td>{item.energy_form}</td>
                        <td>{item.synthesis_index}</td>
                        <td>{item.Eg_pbe}</td>
                        <td>{item.d11}</td>
                        <td>{item.d22}</td>
                        <td>{item.d31}</td>
                        <td>{item.d32}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </SearchWrapper>
      </div>
    </div>
  );
}

export default Search;
