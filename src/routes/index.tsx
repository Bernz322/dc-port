import React from "react";
import { useRoutes } from "react-router-dom";
import { Main, NotFound } from "../pages";

const Routing = () => {
  return useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Routing;
