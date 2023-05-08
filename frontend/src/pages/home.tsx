import React from "react";
import {
  elementColumns,
  FirstColumn,
  SubElementRows,
} from "../assets/SampleData";
import NavBar from "../components/molecules/NavBar";
import styled from "styled-components";
import Element, { elementProps } from "../components/molecules/Element";
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Table = styled.div`
  display: flex;
`;

export const SubTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
`;
function Home() {
  return (
    <>
      <NavBar />
      <Table>
        {elementColumns.map((item: elementProps[], index: number) => (
          <Column key={index}>
            {item.map((element: elementProps, elementIndex: number) => (
              <Element {...element} />
            ))}
          </Column>
        ))}
      </Table>
      <SubTable>
        {SubElementRows.map((item: elementProps[], index: number) => (
          <Row key={index}>
            {item.map((element: elementProps, elementIndex: number) => (
              <Element {...element} />
            ))}
          </Row>
        ))}
      </SubTable>
    </>
  );
}

export default Home;
