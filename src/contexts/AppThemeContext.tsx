import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import colors, { PossibleThemes } from "../styles/colors";

interface IThemeContext {
  theme: PossibleThemes;
  toggleTheme: () => void;
}

const initialValue: IThemeContext = {
  theme: localStorage.getItem("@theme") as PossibleThemes || "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initialValue);

const AppThemeContext: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(initialValue.theme);

  function toggleTheme(): void {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("@theme", newTheme);

      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={colors[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeContext;
