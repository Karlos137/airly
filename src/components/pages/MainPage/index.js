import React from "react";

import Wrapper from "./Wrapper";
import Header from "../../Header/index";
import SelectInput from "../../SelectInput/index";
import DarkModeToggle from "../../DarkModeToggle/index";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <SelectInput />
      <DarkModeToggle />
    </Wrapper>
  );
};

export default MainPage;
