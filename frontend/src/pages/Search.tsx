import axios from "axios";
import { format } from "path";
import React, { useEffect, useState } from "react";
import Latex from "react-latex";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { BASE_URL } from "../api";
import { BoundState, PhaseState } from "../assets/atom";
import SearchBox from "../components/molecules/searchbox";
import SideBar from "../components/molecules/SideBar";
import Spinner from "../components/molecules/Spinner";

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

const H1 = styled.h1`
  font-family: "Merriweather", serif;
  color: #29b1da;
  font-size: 30px;
`;

const Sub = styled.sub`
  font-size: 1px;
  font-weight: bold;
`;
const Th = styled.th`
  font-size: 10px;
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
  angle_y: string;
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
  const [result, setResult] = useState<Material[]>();
  const [showResult, setShowResult] = useState<Material[]>();
  const [info, setInfo] = useState<infoProps>();
  const [Bound, setBound] = useRecoilState(BoundState);
  const { searchstr } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const PhaseArr = useRecoilValue(PhaseState);

  const fetchResult = async (searchStr: string) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/material?search=${searchStr}`
      );
      setResult(data.slice(0, -1));
      setShowResult(data.slice(0, -1));
      setInfo(data[data.length - 1]);
      setBound([
        data[data.length - 1].minSynIndex,
        data[data.length - 1].maxSynIndex,
        data[data.length - 1].minBandGap,
        data[data.length - 1].maxBandGap,
        data[data.length - 1].minD11,
        data[data.length - 1].maxD11,
        data[data.length - 1].minD31,
        data[data.length - 1].maxD31,
      ]);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchResult(searchstr ? searchstr : "");
  }, []);

  // bound 필터를 변경시
  useEffect(() => {
    if (!Bound) return;
    if (!result) return;
    setShowResult(
      result?.filter(
        (material: Material) =>
          parseFloat(material.synthesis_index) >= Bound[0] &&
          parseFloat(material.synthesis_index) <= Bound[1] &&
          parseFloat(material.Eg_pbe) >= Bound[2] &&
          parseFloat(material.Eg_pbe) <= Bound[3] &&
          ((parseFloat(material.d11) >= Bound[4] &&
            parseFloat(material.d11) <= Bound[5] &&
            parseFloat(material.d31) >= Bound[6] &&
            parseFloat(material.d31) <= Bound[7]) ||
            (material.d11 === "" && material.d31 === "")) &&
          PhaseArr.includes(material.Phase)
      )
    );
  }, [Bound, PhaseArr]);

  const formation = "${\\Delta}H_f^{GGA} \\\\ [eV/f.u.]$";
  const band = "$E_g^{GGA} \\\\ [eV]$";

  return (
    <div style={{ height: "3000px" }}>
      <div style={{ marginTop: "100px" }}>
        <TableWrapper>
          <SearchBox />
          <Hr />
        </TableWrapper>
        <SearchWrapper>
          <SideBar {...info!} />
          <div style={{ width: "80%", marginInline: "20px" }}>
            <div style={{ height: "70px" }}>
              <H1>
                {!isLoading
                  ? `There Is Total of ${showResult?.length} Materials.`
                  : `Loading...`}
              </H1>
            </div>
            {!isLoading ? (
              <table className="cool-table">
                <colgroup>
                  <col className="width1" />
                  <col className="width2" />
                  <col className="width3" />
                  <col className="width4" />
                  <col className="width5" />
                  <col className="width6" />
                  <col className="width7" />
                  <col className="width8" />
                  <col className="width9" />
                  <col className="width10" />
                </colgroup>
                <thead>
                  <tr>
                    <Th>Formula</Th>
                    <Th>Phase</Th>
                    <Th>Space Group</Th>
                    <Th style={{ fontSize: "10px" }}>
                      <Latex>{formation}</Latex>
                    </Th>
                    <Th>Synthesis Index</Th>
                    <Th style={{ fontSize: "10px" }}>
                      <Latex>{band}</Latex>
                    </Th>
                    <Th>
                      d<Sub>11</Sub>
                    </Th>
                    <Th>
                      d<Sub>22</Sub>
                    </Th>
                    <Th>
                      d<Sub>31</Sub>
                    </Th>
                    <Th>
                      d<Sub>32</Sub>
                    </Th>
                  </tr>
                </thead>
                <tbody>
                  {showResult
                    ? showResult?.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            onClick={(e: any) => {
                              navigate(`/materials/${item._id}`);
                              window.location.reload();
                            }}
                          >
                            <td>{item.name}</td>
                            <td>{item.Phase}</td>
                            <td>{item.space_group}</td>
                            <td>{parseFloat(item.energy_form).toFixed(2)}</td>
                            <td>
                              {parseFloat(item.synthesis_index).toFixed(2)}
                            </td>
                            <td>{parseFloat(item.Eg_pbe).toFixed(2)}</td>
                            <td>
                              {item.d11 ? parseFloat(item.d11).toFixed(2) : "-"}
                            </td>
                            <td>
                              {item.d22 ? parseFloat(item.d22).toFixed(2) : "-"}
                            </td>
                            <td>
                              {item.d31 ? parseFloat(item.d31).toFixed(2) : "-"}
                            </td>
                            <td>
                              {item.d32 ? parseFloat(item.d32).toFixed(2) : "-"}
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            ) : (
              <Spinner />
            )}
          </div>
        </SearchWrapper>
      </div>
    </div>
  );
}

export default Search;
