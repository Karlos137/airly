import React, { useState, createContext } from "react";
import Cities from "../data/data-small.js";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const [cities] = useState([Cities]);
  return (
    <GlobalContext.Provider value={cities}>
      {props.children}
    </GlobalContext.Provider>
  );
};
