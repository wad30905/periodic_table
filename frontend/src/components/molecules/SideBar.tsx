import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { BoundState, PhaseState } from "../../assets/atom";
import { infoProps } from "../../pages/Search";
import Filter from "./filter";

const Wrapper = styled.div`
  position: sticky;
  top: 100px;
  border: 1px solid #dddddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const H3 = styled.h1`
  font-size: 30px;
  color: #29b1da;
  font-family: "Merriweather", serif;
`;
function SideBar({
  minSynIndex,
  maxSynIndex,
  minBandGap,
  maxBandGap,
  minD11,
  maxD11,
  minD31,
  maxD31,
}: infoProps) {
  const [selectedOptions, setSelectedOptions] = useRecoilState(PhaseState);

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]); // Add the value to the selectedOptions array
    } else {
      setSelectedOptions(
        selectedOptions.filter((option: any) => option !== value)
      ); // Remove the value from the selectedOptions array
    }
  };
  console.log(selectedOptions);
  return (
    <Wrapper className="sidebar">
      <H3># Options</H3>

      <Filter
        minBound={minSynIndex}
        maxBound={maxSynIndex}
        filterName={"Synthesis Index"}
        BoundIndex={0}
      />
      <Filter
        minBound={minBandGap}
        maxBound={maxBandGap}
        filterName={"Band Gap"}
        BoundIndex={1}
      />
      <Filter
        minBound={minD11}
        maxBound={maxD11}
        filterName={"| d11 |"}
        BoundIndex={2}
      />
      <Filter
        minBound={minD31}
        maxBound={maxD31}
        filterName={"| d31 |"}
        BoundIndex={3}
      />
      {/* radioes */}
      <H3>Phase</H3>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <label>
          <input
            type="checkbox"
            name="choices"
            value="T"
            checked={selectedOptions.includes("T")}
            onChange={handleOptionChange}
          />
          T
        </label>
        <label>
          <input
            type="checkbox"
            name="choices"
            value="T'"
            checked={selectedOptions.includes("T'")}
            onChange={handleOptionChange}
          />
          T'
        </label>
        <label>
          <input
            type="checkbox"
            name="choices"
            value="H"
            checked={selectedOptions.includes("H")}
            onChange={handleOptionChange}
          />
          H
        </label>
      </div>
    </Wrapper>
  );
}

export default SideBar;
