import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
export const Img = styled.img`
  width: 60px;
  height: 60px;
`;

export const H1_logo = styled.h1`
  margin-left: 10px;
  font-family: "Merriweather", serif;
  color: #29b1da;
  font-size: 40px;
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
  const logo = "$$ \\textsc{Hallo} $$";

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
          {scrolled ? <H1_logo>JanusNet</H1_logo> : <H1_logo>JanusNet</H1_logo>}
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "8%",
          marginRight: "30px",
        }}
      >
        <a href="/search" style={{ display: "block" }}>
          <FiSearch color={scrolled ? "white" : "black"} size={45} />
        </a>
        <a href="/about" style={{ display: "block" }}>
          <CgProfile color={scrolled ? "white" : "black"} size={45} />
        </a>
      </div>
    </Nav>
  );
}

export default NavBar;
