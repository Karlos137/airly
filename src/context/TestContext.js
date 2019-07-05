import React, { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = props => {
  const [test, setTest] = useState(false);

  return (
    <TestContext.Provider value={[test, setTest]}>
      {props.children}
    </TestContext.Provider>
  );
};
