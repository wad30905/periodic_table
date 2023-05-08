import React from "react";
import styled from "styled-components";
import { elementClasses } from "../../assets/SampleData";

export interface elementProps {
  number: number | string;
  name: string;
  elementClassName: string;
}

export interface ElementWrapperProps {
  color: string;
}
export const ElementWrapper = styled.div<ElementWrapperProps>`
  width: 5vw;
  height: 5vw;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Element({ number, name, elementClassName }: elementProps) {
  return (
    <ElementWrapper color={elementClasses[elementClassName]}>
      <h1>{name}</h1>
      <h3>{number}</h3>
    </ElementWrapper>
  );
}

export default Element;
