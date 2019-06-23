import React from "react";

import Wrapper from "./Wrapper";
import Header from "../../Header/index";
import SelectInput from "../../SelectInput/index";
import DarkModeToggle from "../../DarkModeToggle/index";

const MainPage = props => {
  return (
    <Wrapper>
      <Header />
      {props.tab === "compare" ? (
        <>
          <SelectInput /> <SelectInput marginTop={"20px"} />
        </>
      ) : (
        <SelectInput />
      )}
      <DarkModeToggle />
    </Wrapper>
  );
};

export default MainPage;
