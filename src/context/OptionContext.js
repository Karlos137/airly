import React, { useState, createContext } from "react";

export const OptionContext = createContext();

export const OptionProvider = props => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <OptionContext.Provider value={[selectedOption, setSelectedOption]}>
      {props.children}
    </OptionContext.Provider>
  );
};
