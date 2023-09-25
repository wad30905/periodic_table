import React from "react";
import styled from "styled-components";
import { H1_unified, H1_unified_black } from "./Search";

const Wrapper = styled.div`
  padding-top: 200px;
  height: 100vh;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const H1_unified_black_contributor = styled.h1`
  color: black;
  font-size: 28px;
`;

function About() {
  return (
    <Wrapper>
      <H1_unified_black_contributor className="h1_unified">
        The JanusNet contributors are: <br></br>
        <br></br>Professor Aloysius Soon (aloysius.soon@yonsei.ac.kr)<br></br>
        <br></br> Professor Woosun Jang (woosunjang@yonsei.ac.kr)
        <br></br>
        <br></br>
        Mr. Woohyun Huang<br></br> <br></br>Mr. Seung-Hyun Victor Oh<br></br>
        <br></br>
        <br></br> The JanusNet is maintained by Mr. Hongjin Park<br></br>
        <p>
          <br></br>
          <br></br>
          This work has been supported by:<br></br>
          <ul>
            <li style={{ marginBlock: "50px" }}>
              <p style={{ width: "600px" }}>
                National Research Foundation of Korea under the Ministry of
                Science and ICT's<br></br>Creative Materials Discovery Prograxm
                (2018M3D1A1058536)
              </p>
            </li>
            <li style={{ marginBlock: "50px" }}>
              <p style={{ width: "600px" }}>
                Computational resources have been kindly provided by the KISTI
                <br></br>Supercomputing Center and the Australian National
                Computational Infrastructure (NCI)
              </p>
            </li>
          </ul>
        </p>
      </H1_unified_black_contributor>
    </Wrapper>
  );
}

export default About;
