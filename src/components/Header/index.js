import React, { useContext } from "react";

import { ReactComponent as Logo } from "../../images/logo-small.svg";
import { ReactComponent as LogoDarkMode } from "../../images/logo-small-dark-mode.svg";

import StyledHeader from "./StyledHeader";
import LogoWrapper from "./LogoWrapper";
import Tabs from "./Tabs/index";

import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <StyledHeader>
      <LogoWrapper>{darkTheme ? <LogoDarkMode /> : <Logo />}</LogoWrapper>
      <Tabs />
    </StyledHeader>
  );
};

export default Header;
