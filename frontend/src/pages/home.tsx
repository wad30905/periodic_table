import React, { useState } from "react";
import {
  elementColumns,
  elementProps,
  SubElementRows,
} from "../assets/SampleData";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import Element from "../components/molecules/Element";
import { AiOutlineDownCircle } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Table = styled.div`
  display: flex;
  margin: 20px auto;
`;

export const SubTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: 1px solid #111;
  border-radius: 5px;
  padding: 10px;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function Home() {
  const [searchStr, setSearchStr] = useState<string>("");
  const onInput = (e: any) => {
    setSearchStr(e.target.value);
  };
  const onElementClick = (e: any) => {
    setSearchStr((prev) => prev + e.target.id);
  };
  const onSlide = () => {
    window.scrollTo({
      top: document.getElementById("content")!.offsetHeight,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();

  return (
    <div id="content" style={{ height: "700px" }}>
      <div style={{ marginTop: "150px" }}>
        <TableWrapper>
          <form
            className="search-box"
            onSubmit={(e: any) => {
              navigate(`/search/${searchStr}`);
            }}
          >
            <input
              style={{ width: "100%" }}
              type="text"
              placeholder="Search..."
              onChange={onInput}
              value={searchStr}
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
          <Table>
            {elementColumns.map((item: elementProps[], index: number) => (
              <Column key={index}>
                {item.map((element: elementProps, elementIndex: number) => (
                  <Element
                    {...element}
                    key={elementIndex}
                    onclick={onElementClick}
                  />
                ))}
              </Column>
            ))}
          </Table>
          <SubTable>
            {SubElementRows.map((item: elementProps[], index: number) => (
              <Row key={index}>
                {item.map((element: elementProps, elementIndex: number) => (
                  <Element
                    {...element}
                    key={elementIndex}
                    onclick={onElementClick}
                  />
                ))}
              </Row>
            ))}
          </SubTable>

          <AiOutlineDownCircle
            onClick={onSlide}
            size={"30"}
            style={{ marginBlock: "20px" }}
          ></AiOutlineDownCircle>
        </TableWrapper>
      </div>
      {/* <div style={{ background: "#A0D7E6", height: "1000px" }}></div> */}
      {/* <button
        onClick={async (e: any) => {
          const response = await axios.post("/api/material/add");
        }}
      >
        add
      </button>
      <button
        onClick={async (e: any) => {
          const response = await axios.get("/api/material/count");
          console.log(response);
        }}
      >
        count
      </button> */}
    </div>
  );
}

export default Home;
