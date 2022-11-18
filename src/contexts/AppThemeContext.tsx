import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import colors, { PossibleThemes } from "../styles/colors";

interface IThemeContext {
  theme: PossibleThemes;
  toggleTheme: () => void;
  setTheme: (theme: PossibleThemes) => void;
}

const initialValue: IThemeContext = {
  theme: (localStorage.getItem("@theme") as PossibleThemes) || "light",
  toggleTheme: () => {},
  setTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initialValue);

const AppThemeContext: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setThemeState] = useState(initialValue.theme);

  function toggleTheme(): void {
    setThemeState((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("@theme", newTheme);

      return newTheme;
    });
  }

  function setTheme(theme: PossibleThemes) {
    setThemeState(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <ThemeProvider theme={colors[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeContext;
