import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #dddddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 500px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;
function SideBar() {
  return (
    <Wrapper>
      <H1>Search Options</H1>
      <p>The # of Elements</p>
      <ul>
        <li>
          <label htmlFor="unary">
            <input type={"checkbox"} id="unary" />
            Unary
          </label>
        </li>

        <li>
          <label htmlFor="binary">
            <input type={"checkbox"} id="binary" />
            Binary
          </label>
        </li>
        <li>
          <label htmlFor="ternary">
            <input type={"checkbox"} id="ternary" />
            Ternary
          </label>
        </li>
        <li>
          <label htmlFor="1uaternery">
            <input type={"checkbox"} id="quaternery" />
            Quaternery
          </label>
        </li>
        <li>
          <label htmlFor="etc">
            <input type={"checkbox"} id="etc" />
            etc
          </label>
        </li>
      </ul>
      <H1>Sorting by</H1>
      <ul>
        <li>
          <label htmlFor="MaterialId">
            <input type={"radio"} id="MaterialId" />
            Material ID
          </label>
        </li>
        <li>
          <label htmlFor="HSE">
            <input type={"radio"} id="HSE" />
            Band Gap (HSE)
          </label>
        </li>
        <li>
          <label htmlFor="FreeEnergy">
            <input type={"radio"} id="FreeEnergy" />
            Free Energy
          </label>
        </li>
      </ul>
    </Wrapper>
  );
}

export default SideBar;
