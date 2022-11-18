import React from "react";
import { useRoutes, RouteObject } from "react-router-dom";

import ModalView from "../components/ModalView";
import SettingsModal from "../components/SettingsModal";
import CalculatorPage from "../pages/CalculatorPage";

const Routes: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <CalculatorPage />,
    },
    {
      path: "/settings",
      element: (
        <ModalView view={<CalculatorPage />}>
          <SettingsModal />
        </ModalView>
      ),
    },
  ];

  return useRoutes(routes);
};

export default Routes;
