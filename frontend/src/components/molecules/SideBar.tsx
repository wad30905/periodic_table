import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { BoundState } from "../../assets/atom";
import { infoProps } from "../../pages/Search";
import Filter from "./filter";

const Wrapper = styled.div`
  position: sticky;
  top: 100px;
  border: 1px solid #dddddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-size: 20px;
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
        filterName={"d11"}
        BoundIndex={2}
      />
      <Filter
        minBound={minD31}
        maxBound={maxD31}
        filterName={"d31"}
        BoundIndex={3}
      />
    </Wrapper>
  );
}

export default SideBar;
