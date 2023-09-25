import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { BoundState, PhaseState } from "../../assets/atom";
import { H1_unified, infoProps } from "../../pages/Search";
import Filter from "./filter";

const Wrapper = styled.div`
  position: sticky;
  top: 150px;
  border: 1px solid #dddddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  const band = "$ \\textit{E}_g^{GGA} [eV]$";
  const syn = "${\\Delta} \\textit{H}_{syn} [eV/f.u.]$";

  return (
    <Wrapper className="sidebar">
      <H1_unified className="h1_unified"># Options</H1_unified>

      <Filter
        minBound={minSynIndex}
        maxBound={maxSynIndex}
        filterName={syn}
        BoundIndex={0}
      />
      <Filter
        minBound={minBandGap}
        maxBound={maxBandGap}
        filterName={band}
        BoundIndex={1}
      />
      <Filter
        minBound={minD11}
        maxBound={maxD11}
        filterName={"$| \\textit{d}_{11} |$"}
        BoundIndex={2}
      />
      <Filter
        minBound={minD31}
        maxBound={maxD31}
        filterName={"$| \\textit{d}_{31} |$"}
        BoundIndex={3}
      />
      {/* radioes */}
      <H1_unified className="h1_unified">Phase</H1_unified>
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
