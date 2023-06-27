import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Search from "./pages/Search";
import App from "./App";
import MaterialPage from "./pages/materialpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search/:searchstr?",
        element: <Search />,
      },
      {
        path: "materials/:materialId",
        element: <MaterialPage />,
      },
    ],
  },
]);
