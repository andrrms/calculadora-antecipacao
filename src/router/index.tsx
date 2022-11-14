import React from "react";
import { useRoutes, RouteObject } from "react-router-dom";

import CalculatorPage from "../pages/CalculatorPage";

const Routes: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <CalculatorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Routes;