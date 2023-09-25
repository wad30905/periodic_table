import React, { useEffect, useRef, useState } from "react";
import Latex from "react-latex";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BoundState } from "../../assets/atom";

interface filterProps {
  minBound: any;
  maxBound: any;
  filterName: string;
  BoundIndex: number;
}

const H3 = styled.h1`
  font-size: 30px;
  color: #29b1da;
`;
const ThumbWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  opacity: 0.95;
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(2) translateY(-25%);
    cursor: pointer;
  }
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
const SelectedThumb = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 80%;
  height: 80%;
  background-color: #2943fc;
  opacity: 1;
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.2s ease;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
`;

const FilterWrapper = styled.div`
  width: 100%;
  height: 20%;
`;

function Filter({ minBound, maxBound, filterName, BoundIndex }: filterProps) {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const [lastThumb, setLastThumb] = useState("max");
  const [Bound, setBound] = useRecoilState(BoundState);
  const [minIdx, maxIdx] = [BoundIndex * 2, BoundIndex * 2 + 1];
  const [minInput, setMinInput] = useState();
  const [maxInput, setMaxInput] = useState();

  const updateBound = (index: number, target: any) => {
    const newBound = [...Bound];

    newBound[index] = parseFloat(target);

    setBound(newBound);
  };
  const [draggingThumb, setdraggingThumb] = useState(null);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseUp = () => {
      setdraggingThumb(null);
      setIsSubmitted(true);
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handlethumbmousedown = (event: any, thumb: any) => {
    event.preventDefault();
    setdraggingThumb(thumb);
  };

  const handleMouseMove = (event: any) => {
    if (!sliderRef.current || draggingThumb === null) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percentage = (offsetX / sliderRect.width) * 100;

    if (draggingThumb === "min") {
      if (
        percentage >= 0 &&
        percentage <=
          ((Bound[maxIdx] - parseFloat(minBound)) /
            (parseFloat(maxBound) - parseFloat(minBound))) *
            100
      ) {
        updateBound(
          minIdx,
          parseFloat(minBound) +
            0.01 * percentage * (parseFloat(maxBound) - parseFloat(minBound))
        );
      }
    } else if (draggingThumb === "max") {
      if (
        percentage >=
          ((Bound[minIdx] - parseFloat(minBound)) /
            (parseFloat(maxBound) - parseFloat(minBound))) *
            100 &&
        percentage <= 100
      ) {
        updateBound(
          maxIdx,
          parseFloat(minBound) +
            0.01 * percentage * (parseFloat(maxBound) - parseFloat(minBound))
        );
      }
    }
  };

  //when you click slider
  const onSliderClick = (event: any) => {
    if (!sliderRef.current) return;

    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percentage = (offsetX / sliderRect.width) * 100;

    if (lastThumb === "min") {
      if (
        percentage >= 0 &&
        percentage <=
          ((Bound[maxIdx] - parseFloat(minBound)) /
            (parseFloat(maxBound) - parseFloat(minBound))) *
            100
      ) {
        updateBound(
          minIdx,
          parseFloat(minBound) +
            0.01 * percentage * (parseFloat(maxBound) - parseFloat(minBound))
        );
      }
      setLastThumb("min");
    } else if (lastThumb === "max") {
      if (
        percentage >=
          ((Bound[minIdx] - parseFloat(minBound)) /
            (parseFloat(maxBound) - parseFloat(minBound))) *
            100 &&
        percentage <= 100
      ) {
        updateBound(
          maxIdx,
          parseFloat(minBound) +
            0.01 * percentage * (parseFloat(maxBound) - parseFloat(minBound))
        );
      }
      setLastThumb("max");
    }
    setIsSubmitted(true);
  };
  return (
    <FilterWrapper onMouseMove={handleMouseMove}>
      <H3 style={{ fontSize: "10px" }}>
        <Latex>{filterName}</Latex>
      </H3>
      <div className="range-slider" ref={sliderRef} onClick={onSliderClick}>
        <ThumbWrapper
          style={{
            left: `${
              ((Bound[minIdx] - parseFloat(minBound)) /
                (parseFloat(maxBound) - parseFloat(minBound))) *
              100
            }%`,
          }}
          onMouseDown={(event) => {
            setLastThumb("min");
            handlethumbmousedown(event, "min");
          }}
        >
          {lastThumb === "min" ? <SelectedThumb /> : null}
        </ThumbWrapper>
        <ThumbWrapper
          style={{
            left: `${
              ((Bound[maxIdx] - parseFloat(minBound)) /
                (parseFloat(maxBound) - parseFloat(minBound))) *
              100
            }%`,
          }}
          onMouseDown={(event) => {
            setLastThumb("max");

            handlethumbmousedown(event, "max");
          }}
        >
          {lastThumb === "max" ? <SelectedThumb /> : null}
        </ThumbWrapper>
        <div
          className="slider-range"
          style={{
            left: `${
              ((Bound[minIdx] - parseFloat(minBound)) /
                (parseFloat(maxBound) - parseFloat(minBound))) *
              100
            }%`,
            width: `${
              ((Bound[maxIdx] - Bound[minIdx]) /
                (parseFloat(maxBound) - parseFloat(minBound))) *
              100
            }%`,
          }}
        />
      </div>
      <div className="input-container">
        <form
          className="slider-form"
          onSubmit={(e: any) => {
            e.preventDefault();
            updateBound(minIdx, minInput);
            setIsSubmitted(true);
          }}
        >
          <input
            className="slider-input"
            value={
              isSubmitted ? parseFloat(Bound[minIdx]).toFixed(2) : minInput
            }
            onChange={(e: any) => {
              setIsSubmitted(false);
              setMinInput(e.target.value);
            }}
          />
        </form>
        <form
          className="slider-form"
          onSubmit={(e: any) => {
            e.preventDefault();
            updateBound(maxIdx, maxInput);
            setIsSubmitted(true);
          }}
        >
          <input
            className="slider-input"
            value={
              isSubmitted ? parseFloat(Bound[maxIdx]).toFixed(2) : maxInput
            }
            onChange={(e: any) => {
              setIsSubmitted(false);
              setMaxInput(e.target.value);
            }}
          />
        </form>
      </div>
    </FilterWrapper>
  );
}

export default Filter;
