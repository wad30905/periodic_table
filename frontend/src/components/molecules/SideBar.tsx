import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import { synBoundState } from "../../assets/atom";
import { infoProps } from "../../pages/Search";

const Wrapper = styled.div`
  border: 1px solid #dddddd;
  padding: 20px;
  margin: 10px;
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const H1 = styled.h1`
  font-size: 20px;
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
  // syn
  const [synBound, setSynBound] = useRecoilState(synBoundState);
  const [draggingThumb1, setDraggingThumb1] = useState(null);
  const sliderRef1 = useRef<any>(null);

  useEffect(() => {
    const handleMouseUp1 = () => {
      setDraggingThumb1(null);
    };

    document.addEventListener("mouseup", handleMouseUp1);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp1);
    };
  }, []);

  const handleThumbMouseDown1 = (event: any, thumb: any) => {
    event.preventDefault();
    setDraggingThumb1(thumb);
  };

  const handleMouseMove1 = (event: any) => {
    if (!sliderRef1.current || draggingThumb1 === null) return;

    const sliderRect = sliderRef1.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percentage = (offsetX / sliderRect.width) * 100;

    if (draggingThumb1 === "min") {
      if (
        percentage >= 0 &&
        percentage <=
          ((synBound[1] - parseFloat(minSynIndex)) /
            (parseFloat(maxSynIndex) - parseFloat(minSynIndex))) *
            100
      ) {
        setSynBound([
          parseFloat(minSynIndex) +
            0.01 *
              percentage *
              (parseFloat(maxSynIndex) - parseFloat(minSynIndex)),
          synBound[1],
          synBound[2],
          synBound[3],
          synBound[4],
          synBound[5],
          synBound[6],
          synBound[7],
        ]);
      }
    } else if (draggingThumb1 === "max") {
      if (
        percentage >=
          ((synBound[0] - parseFloat(minSynIndex)) /
            (parseFloat(maxSynIndex) - parseFloat(minSynIndex))) *
            100 &&
        percentage <= 100
      ) {
        setSynBound([
          synBound[0],
          parseFloat(minSynIndex) +
            0.01 *
              percentage *
              (parseFloat(maxSynIndex) - parseFloat(minSynIndex)),
          synBound[2],
          synBound[3],
          synBound[4],
          synBound[5],
          synBound[6],
          synBound[7],
        ]);
      }
    }
  };

  // bandgap;
  const [draggingThumb2, setDraggingThumb2] = useState(null);
  const sliderRef2 = useRef<any>(null);
  useEffect(() => {
    const handleMouseUp2 = () => {
      setDraggingThumb2(null);
    };

    document.addEventListener("mouseup", handleMouseUp2);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp2);
    };
  }, []);

  const handleThumbMouseDown2 = (event: any, thumb: any) => {
    event.preventDefault();
    setDraggingThumb2(thumb);
  };

  const handleMouseMove2 = (event: any) => {
    if (!sliderRef2.current || draggingThumb2 === null) return;

    const sliderRect = sliderRef2.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percentage = (offsetX / sliderRect.width) * 100;

    if (draggingThumb2 === "min") {
      if (
        percentage >= 0 &&
        percentage <=
          ((synBound[3] - parseFloat(minBandGap)) /
            (parseFloat(maxBandGap) - parseFloat(minBandGap))) *
            100
      ) {
        setSynBound([
          synBound[0],
          synBound[1],
          parseFloat(minBandGap) +
            0.01 *
              percentage *
              (parseFloat(maxBandGap) - parseFloat(minBandGap)),
          synBound[3],
          synBound[4],
          synBound[5],
          synBound[6],
          synBound[7],
        ]);
      }
    } else if (draggingThumb2 === "max") {
      if (
        percentage >=
          ((synBound[2] - parseFloat(minBandGap)) /
            (parseFloat(maxBandGap) - parseFloat(minBandGap))) *
            100 &&
        percentage <= 100
      ) {
        setSynBound([
          synBound[0],
          synBound[1],
          synBound[2],
          parseFloat(minBandGap) +
            0.01 *
              percentage *
              (parseFloat(maxBandGap) - parseFloat(minBandGap)),
          synBound[4],
          synBound[5],
          synBound[6],
          synBound[7],
        ]);
      }
    }
  };

  // d11;
  const [draggingThumb3, setDraggingThumb3] = useState(null);
  const sliderRef3 = useRef<any>(null);
  useEffect(() => {
    const handleMouseUp3 = () => {
      setDraggingThumb3(null);
    };

    document.addEventListener("mouseup", handleMouseUp3);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp3);
    };
  }, []);

  const handleThumbMouseDown3 = (event: any, thumb: any) => {
    event.preventDefault();
    setDraggingThumb3(thumb);
  };

  const handleMouseMove3 = (event: any) => {
    if (!sliderRef3.current || draggingThumb3 === null) return;

    const sliderRect = sliderRef3.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percentage = (offsetX / sliderRect.width) * 100;

    if (draggingThumb3 === "min") {
      if (
        percentage >= 0 &&
        percentage <=
          ((synBound[5] - parseFloat(minD11)) /
            (parseFloat(maxD11) - parseFloat(minD11))) *
            100
      ) {
        setSynBound([
          synBound[0],
          synBound[1],
          synBound[2],
          synBound[3],
          parseFloat(minD11) +
            0.01 * percentage * (parseFloat(maxD11) - parseFloat(minD11)),
          synBound[5],
          synBound[6],
          synBound[7],
        ]);
      }
    } else if (draggingThumb3 === "max") {
      if (
        percentage >=
          ((synBound[4] - parseFloat(minD11)) /
            (parseFloat(maxD11) - parseFloat(minD11))) *
            100 &&
        percentage <= 100
      ) {
        setSynBound([
          synBound[0],
          synBound[1],
          synBound[2],

          synBound[3],
          synBound[4],
          parseFloat(minD11) +
            0.01 * percentage * (parseFloat(maxD11) - parseFloat(minD11)),
          synBound[6],
          synBound[7],
        ]);
      }
    }
  };

  // d11;
  const [draggingThumb4, setDraggingThumb4] = useState(null);
  const sliderRef4 = useRef<any>(null);
  useEffect(() => {
    const handleMouseUp4 = () => {
      setDraggingThumb4(null);
    };

    document.addEventListener("mouseup", handleMouseUp4);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp4);
    };
  }, []);

  const handleThumbMouseDown4 = (event: any, thumb: any) => {
    event.preventDefault();
    setDraggingThumb4(thumb);
  };

  const handleMouseMove4 = (event: any) => {
    if (!sliderRef4.current || draggingThumb4 === null) return;

    const sliderRect = sliderRef4.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percentage = (offsetX / sliderRect.width) * 100;

    if (draggingThumb4 === "min") {
      if (
        percentage >= 0 &&
        percentage <=
          ((synBound[7] - parseFloat(minD31)) /
            (parseFloat(maxD31) - parseFloat(minD31))) *
            100
      ) {
        setSynBound([
          synBound[0],
          synBound[1],
          synBound[2],
          synBound[3],
          synBound[4],
          synBound[5],
          parseFloat(minD31) +
            0.01 * percentage * (parseFloat(maxD31) - parseFloat(minD31)),
          synBound[7],
        ]);
      }
    } else if (draggingThumb4 === "max") {
      if (
        percentage >=
          ((synBound[6] - parseFloat(minD31)) /
            (parseFloat(maxD31) - parseFloat(minD31))) *
            100 &&
        percentage <= 100
      ) {
        setSynBound([
          synBound[0],
          synBound[1],
          synBound[2],
          synBound[3],
          synBound[4],
          synBound[5],
          synBound[6],
          parseFloat(minD31) +
            0.01 * percentage * (parseFloat(maxD31) - parseFloat(minD31)),
        ]);
      }
    }
  };
  return (
    <Wrapper className="sidebar">
      <h1 style={{ fontSize: "25px" }}># Options</h1>
      {/* 1 */}
      <div>
        <h1>Synthesis Index</h1>
        <div className="slider-container">
          <div
            className="range-slider"
            ref={sliderRef1}
            onMouseMove={handleMouseMove1}
          >
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[0] - parseFloat(minSynIndex)) /
                    (parseFloat(maxSynIndex) - parseFloat(minSynIndex))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown1(event, "min")}
            />
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[1] - parseFloat(minSynIndex)) /
                    (parseFloat(maxSynIndex) - parseFloat(minSynIndex))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown1(event, "max")}
            />
            <div
              className="slider-range"
              style={{
                left: `${
                  ((synBound[0] - parseFloat(minSynIndex)) /
                    (parseFloat(maxSynIndex) - parseFloat(minSynIndex))) *
                  100
                }%`,
                width: `${
                  ((synBound[1] - synBound[0]) /
                    (parseFloat(maxSynIndex) - parseFloat(minSynIndex))) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="input-container">
            <input
              className="slider-input"
              value={synBound[0]}
              onChange={(e: any) => {
                console.log("asdf");
                setSynBound([
                  e.target.value,
                  synBound[1],
                  synBound[2],
                  synBound[3],
                  synBound[4],
                  synBound[5],
                  synBound[6],
                  synBound[7],
                ]);
              }}
            />
            <input
              className="slider-input"
              value={synBound[1]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  e.target.value,
                  synBound[2],
                  synBound[3],
                  synBound[4],
                  synBound[5],
                  synBound[6],
                  synBound[7],
                ]);
              }}
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div>
        <h1>BandGap</h1>
        <div className="slider-container">
          <div
            className="range-slider"
            ref={sliderRef2}
            onMouseMove={handleMouseMove2}
          >
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[2] - parseFloat(minBandGap)) /
                    (parseFloat(maxBandGap) - parseFloat(minBandGap))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown2(event, "min")}
            />
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[3] - parseFloat(minBandGap)) /
                    (parseFloat(maxBandGap) - parseFloat(minBandGap))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown2(event, "max")}
            />
            <div
              className="slider-range"
              style={{
                left: `${
                  ((synBound[2] - parseFloat(minBandGap)) /
                    (parseFloat(maxBandGap) - parseFloat(minBandGap))) *
                  100
                }%`,
                width: `${
                  ((synBound[3] - synBound[2]) /
                    (parseFloat(maxBandGap) - parseFloat(minBandGap))) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="input-container">
            <input
              className="slider-input"
              value={synBound[2]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  synBound[1],
                  e.target.value,
                  synBound[3],
                  synBound[4],
                  synBound[5],
                  synBound[6],
                  synBound[7],
                ]);
              }}
            />
            <input
              className="slider-input"
              value={synBound[3]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  synBound[1],
                  synBound[2],
                  e.target.value,
                  synBound[4],
                  synBound[5],
                  synBound[6],
                  synBound[7],
                ]);
              }}
            />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div>
        <h1>D11</h1>
        <div className="slider-container">
          <div
            className="range-slider"
            ref={sliderRef3}
            onMouseMove={handleMouseMove3}
          >
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[4] - parseFloat(minD11)) /
                    (parseFloat(maxD11) - parseFloat(minD11))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown3(event, "min")}
            />
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[5] - parseFloat(minD11)) /
                    (parseFloat(maxD11) - parseFloat(minD11))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown3(event, "max")}
            />
            <div
              className="slider-range"
              style={{
                left: `${
                  ((synBound[4] - parseFloat(minD11)) /
                    (parseFloat(maxD11) - parseFloat(minD11))) *
                  100
                }%`,
                width: `${
                  ((synBound[5] - synBound[4]) /
                    (parseFloat(maxD11) - parseFloat(minD11))) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="input-container">
            <input
              className="slider-input"
              value={synBound[4]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  synBound[1],
                  synBound[2],
                  synBound[3],
                  e.target.value,
                  synBound[5],
                  synBound[6],
                  synBound[7],
                ]);
              }}
            />
            <input
              className="slider-input"
              value={synBound[5]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  synBound[1],
                  synBound[2],
                  synBound[3],
                  synBound[4],
                  e.target.value,
                  synBound[6],
                  synBound[7],
                ]);
              }}
            />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div>
        <h1>D31</h1>
        <div className="slider-container">
          <div
            className="range-slider"
            ref={sliderRef4}
            onMouseMove={handleMouseMove4}
          >
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[6] - parseFloat(minD31)) /
                    (parseFloat(maxD31) - parseFloat(minD31))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown4(event, "min")}
            />
            <div
              className="slider-thumb"
              style={{
                left: `${
                  ((synBound[7] - parseFloat(minD31)) /
                    (parseFloat(maxD31) - parseFloat(minD31))) *
                  100
                }%`,
              }}
              onMouseDown={(event) => handleThumbMouseDown4(event, "max")}
            />
            <div
              className="slider-range"
              style={{
                left: `${
                  ((synBound[6] - parseFloat(minD31)) /
                    (parseFloat(maxD31) - parseFloat(minD31))) *
                  100
                }%`,
                width: `${
                  ((synBound[7] - synBound[6]) /
                    (parseFloat(maxD31) - parseFloat(minD31))) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="input-container">
            <input
              className="slider-input"
              value={synBound[6]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  synBound[1],
                  synBound[2],
                  synBound[3],
                  synBound[4],
                  synBound[5],
                  e.target.value,
                  synBound[7],
                ]);
              }}
            />
            <input
              className="slider-input"
              value={synBound[7]}
              onChange={(e: any) => {
                setSynBound([
                  synBound[0],
                  synBound[1],
                  synBound[2],
                  synBound[3],
                  synBound[4],
                  synBound[5],
                  synBound[6],
                  e.target.value,
                ]);
              }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SideBar;
