import React from "react";
import Element, { elementProps } from "../components/molecules/Element";
import NavBar from "../components/molecules/NavBar";

export const data: elementProps = {
  name: "H",
  number: 1,
  color: "red",
};
function Home() {
  return (
    <>
      <NavBar />
      <Element {...data} />
    </>
  );
}

export default Home;
