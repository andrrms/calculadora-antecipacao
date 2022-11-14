import React from "react";

import AppThemeContext from "./AppThemeContext";

const Contexts: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <AppThemeContext>{children}</AppThemeContext>;
};

export default Contexts;
