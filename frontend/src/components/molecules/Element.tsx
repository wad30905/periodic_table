import React, { useState } from "react";
import styled from "styled-components";
import { elementClasses } from "../../assets/SampleData";

export interface elementComponentProps {
  number: number | string;
  name: string;
  elementClassName: string;
  onclick: any;
}

export const NullWrapper = styled.div`
  width: 4vw;
  height: 4vw;
  margin: 2px;
`;
export const H1 = styled.h1`
  font-size: 20px;
  color: inherit;
`;
export const H3 = styled.h1`
  font-size: 5px;
  color: inherit;
  margin-left: 3px;
`;

export interface ElementWrapperProps {
  color: string;
}

export const ElementWrapper = styled.div<ElementWrapperProps>`
  width: 4vw;
  height: 4vw;
  background: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  border-radius: 5px;
  transition: 0.1s ease-in-out;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 80;
  &:hover {
    z-index: 100;
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Element({
  number,
  name,
  elementClassName,
  onclick,
}: elementComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const onHoverIn = () => {
    setIsHovered(true);
  };
  const onHoverOut = () => {
    setIsHovered(false);
  };
  console.log(isHovered);
  if (name !== "") {
    return (
      <div style={{ position: "relative" }}>
        <NullWrapper />
        <ElementWrapper
          color={elementClasses[elementClassName]}
          onClick={onclick}
          id={name}
          onMouseOver={onHoverIn}
          onMouseOut={onHoverOut}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                width: "100%",
              }}
            >
              <H3 id={name}>{number}</H3>
            </div>
            <H1 id={name}>{name}</H1>
          </div>
        </ElementWrapper>
      </div>
    );
  } else {
    return <NullWrapper />;
  }
}

export default Element;
