import React from "react";

import { ReactComponent as Logo } from "../../images/logo-small.svg";

import StyledHeader from "./StyledHeader";
import LogoWrapper from "./LogoWrapper";
import Tabs from "./Tabs/index";

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Tabs />
    </StyledHeader>
  );
};

export default Header;
