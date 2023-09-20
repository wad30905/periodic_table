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
  font-family: "Merriweather", serif;
  color: black;
  font-size: 28px;
`;

function About() {
  return (
    <Wrapper>
      <H1_unified_black_contributor>
        The JanusNet contributors are: <br></br>
        <br></br>Professor Aloysius Soon (aloysius.soon@yonsei.ac.kr)<br></br>
        <br></br> Dr. Woosun Jang (woosunjang@yonsei.ac.kr)
        <br></br>
        <br></br>
        Mr. Woohyun Huang<br></br> <br></br>Mr. Seung-Hyun Victor Oh<br></br>
        <br></br>
        <br></br> The JanusNet is maintained by Mr. Hongjin Park
      </H1_unified_black_contributor>
    </Wrapper>
  );
}

export default About;
