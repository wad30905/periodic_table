import React from "react";
import styled from "styled-components";

export interface elementProps {
  number: number;
  name: string;
  color: string;
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
function Element({ number, name, color }: elementProps) {
  return (
    <ElementWrapper color={color}>
      <h1>{name}</h1>
      <h3>{number}</h3>
    </ElementWrapper>
  );
}

export default Element;
