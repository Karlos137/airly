import React, { createContext, useState } from "react";

export const OptionListContext = createContext();

export const OptionListProvider = props => {
  const [optionListOpen, setOptionListOpen] = useState(false);

  return (
    <OptionListContext.Provider value={[optionListOpen, setOptionListOpen]}>
      {props.children}
    </OptionListContext.Provider>
  );
};
