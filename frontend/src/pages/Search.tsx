import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../api";
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
function Search() {
  const [searchStr, setSearchStr] = useState<string>("");
  const [result, setResult] = useState<any>();
  const { state } = useLocation();

  const fetchResult = async (searchStr: string) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/material?search=${searchStr}`
      );
      setResult(data);
    } catch (error) {}
  };
  console.log(state);
  useEffect(() => {
    fetchResult(state);
  }, []);
  console.log(result);

  const onInput = (e: any) => {
    setSearchStr(e.target.value);
  };
  const onElementClick = (e: any) => {
    setSearchStr((prev) => prev + e.target.id);
  };
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
          <SideBar />
        </SearchWrapper>
      </div>
    </div>
  );
}

export default Search;
