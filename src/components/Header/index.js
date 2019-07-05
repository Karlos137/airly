import React, { useContext } from "react";

import { ReactComponent as Logo } from "../../images/logo-small.svg";
import { ReactComponent as LogoDarkMode } from "../../images/logo-small-dark-mode.svg";

//styled components imports
import StyledHeader from "./StyledHeader";
import LogoWrapper from "./LogoWrapper";
import Wrapper from "./Wrapper";
import Tabs from "./Tabs/index";
import DarkModeToggle from "../DarkModeToggle/index";

//context imports
import { ThemeContext } from "../../context/ThemeContext";
import { TestContext } from "../../context/TestContext";

const Header = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [test, setTest] = useContext(TestContext);
  return (
    <StyledHeader>
      <LogoWrapper
        onClick={() => {
          setTest(false);
        }}
      >
        {darkTheme ? <LogoDarkMode /> : <Logo />}
      </LogoWrapper>
      <Wrapper>
        <div />
        <Tabs />
        <DarkModeToggle />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
