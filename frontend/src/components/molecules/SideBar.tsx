import React, { useEffect, useRef, useState } from "react";
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
function SideBar({
  setBandGapMin,
  setBandGapMax,
  setSynthesisIndexMin,
  setSynthesisIndexMax,
  setD11Max,
  setD11Min,
  setD31Max,
  setD31Min,
}: any) {
  const inputLeft = useRef<any>();
  const inputRight = useRef<any>();
  const range = useRef<any>();
  const thumbLeft = useRef<any>();
  const thumbRight = useRef<any>();

  useEffect(() => {
    function setLeftValue() {
      const min = parseInt(inputLeft.current.min);
      const max = parseInt(inputLeft.current.max);

      inputLeft.current.value = Math.min(
        parseInt(inputLeft.current.value),
        parseInt(inputRight.current.value) - 1
      );

      const percent = ((inputLeft.current.value - min) / (max - min)) * 100;

      thumbLeft.current.style.left = percent + "%";
      range.current.style.left = percent + "%";
    }
    setLeftValue();

    function setRightValue() {
      const min = parseInt(inputRight.current.min);
      const max = parseInt(inputRight.current.max);

      inputRight.current.value = Math.max(
        parseInt(inputRight.current.value),
        parseInt(inputLeft.current.value) + 1
      );

      const percent = ((inputRight.current.value - min) / (max - min)) * 100;

      thumbRight.current.style.right = 100 - percent + "%";
      range.current.style.right = 100 - percent + "%";
    }
    setRightValue();
    inputLeft.current.addEventListener("input", setLeftValue);
    inputRight.current.addEventListener("input", setRightValue);

    inputLeft.current.addEventListener("mouseover", function () {
      thumbLeft.current.classList.add("hover");
    });
    inputLeft.current.addEventListener("mouseout", function () {
      thumbLeft.current.classList.remove("hover");
    });
    inputLeft.current.addEventListener("mousedown", function () {
      thumbLeft.current.classList.add("active");
    });
    inputLeft.current.addEventListener("mouseup", function () {
      thumbLeft.current.classList.remove("active");
    });

    // right
    inputRight.current.addEventListener("mouseover", function () {
      thumbRight.current.classList.add("hover");
    });
    inputRight.current.addEventListener("mouseout", function () {
      thumbRight.current.classList.remove("hover");
    });
    inputRight.current.addEventListener("mousedown", function () {
      thumbRight.current.classList.add("active");
    });
    inputRight.current.addEventListener("mouseup", function () {
      thumbRight.current.classList.remove("active");
    });
  }, []);
  return (
    <Wrapper className="sidebar">
      <H1>Search Options</H1>
      <p>The # of Elements</p>
      <ul>
        <div className="middle" style={{ width: "100%" }}>
          <div className="multi-range-slider">
            <input
              type="range"
              id="input-left"
              ref={inputLeft}
              min="0"
              max="100"
              value="25"
            />
            <input
              type="range"
              id="input-right"
              ref={inputRight}
              min="0"
              max="100"
              value="75"
            />

            <div className="slider">
              <div className="track"></div>
              <div className="range" ref={range}></div>
              <div className="thumb left" ref={thumbLeft}></div>
              <div className="thumb right" ref={thumbRight}></div>
            </div>
          </div>
        </div>
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
