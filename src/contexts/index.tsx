import React from "react";

import AppThemeContext from "./AppThemeContext";
import SettingsContextProvider from "./SettingsContext";

const Contexts: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SettingsContextProvider>
      <AppThemeContext>{children}</AppThemeContext>
    </SettingsContextProvider>
  );
};

export default Contexts;
