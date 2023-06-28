import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import small_black_logo from "/Users/hongjinpark/Desktop/mtg/periodic_table/frontend/src/assets/images/small_black_logo.png";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiHome } from "react-icons/bi";

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;
export const Nav = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  height: 50px;
`;

export const H1_White = styled.div`
  font-size: 30px;
  color: white;
  margin: 20px;
`;
export const H1_Black = styled.div`
  font-size: 30px;
  color: black;
  margin: 20px;
`;

function NavBar() {
  const topBarRef = useRef<any>();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const topbar = topBarRef.current;
    const threshold = 50;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > threshold) {
        topbar!.classList.add("scrolled");
        setScrolled(true);
      } else {
        topbar!.classList.remove("scrolled");
        setScrolled(false);
      }
    });
  }, []);
  console.log("scrolled", scrolled);
  return (
    <Nav ref={topBarRef} className="topbar">
      <div>
        <a
          href={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Img src={small_black_logo} />
          {scrolled ? (
            <H1_White>MATERIALS THEORY GROUP</H1_White>
          ) : (
            <H1_Black>MATERIALS THEORY GROUP</H1_Black>
          )}
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "10%",
          marginRight: "30px",
        }}
      >
        <a href="/search" style={{ display: "block" }}>
          <FiSearch color={scrolled ? "white" : "black"} size={45} />
        </a>
        <a href="/" style={{ display: "block" }}>
          <BiHome color={scrolled ? "white" : "black"} size={45} />
        </a>
      </div>
    </Nav>
  );
}

export default NavBar;
