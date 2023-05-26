import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/molecules/NavBar";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
