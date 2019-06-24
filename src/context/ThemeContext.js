import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
