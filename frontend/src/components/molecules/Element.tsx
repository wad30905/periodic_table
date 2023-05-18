import React, { useEffect } from "react";
import styled from "styled-components";
import { elementClasses } from "../../assets/SampleData";

export interface elementComponentProps {
  number: number | string;
  name: string;
  elementClassName: string;
  onclick: any;
}

export interface ElementWrapperProps {
  color: string;
}
export const NullWrapper = styled.div`
  width: 3vw;
  height: 3vw;
  margin: 2px;
`;
export const H1 = styled.h1`
  font-size: 20px;
  color: inherit;
  opacity: 1;
`;
export const H3 = styled.h1`
  font-size: 5px;
  color: inherit;
  opacity: 1;
`;

export const ElementWrapper = styled.div<ElementWrapperProps>`
  width: 3vw;
  height: 3vw;
  background: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border-radius: 5px;
  transition: 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    background: #fffffe;
    color: ${(props) => props.color};
  }
`;
function Element({
  number,
  name,
  elementClassName,
  onclick,
}: elementComponentProps) {
  if (name != "") {
    return (
      <ElementWrapper
        color={elementClasses[elementClassName]}
        onClick={onclick}
        id={name}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "start",
          }}
        >
          <H3 id={name}>{number}</H3>
          <H1 id={name}>{name}</H1>
        </div>
      </ElementWrapper>
    );
  } else {
    return <NullWrapper />;
  }
}

export default Element;
