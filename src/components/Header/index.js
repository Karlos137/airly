import React, { useContext } from "react";

import { ReactComponent as Logo } from "../../images/logo-small.svg";
import { ReactComponent as LogoDarkMode } from "../../images/logo-small-dark-mode.svg";

import StyledHeader from "./StyledHeader";
import LogoWrapper from "./LogoWrapper";
import Wrapper from "./Wrapper";
import Tabs from "./Tabs/index";
import DarkModeToggle from "../DarkModeToggle/index";

import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <StyledHeader>
      <LogoWrapper>{darkTheme ? <LogoDarkMode /> : <Logo />}</LogoWrapper>
      <Wrapper>
        <div />
        <Tabs />
        <DarkModeToggle />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
