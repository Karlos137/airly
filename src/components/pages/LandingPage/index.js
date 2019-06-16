import React from "react";

import DarkModeToggle from "../../DarkModeToggle/index";

//svg imports as React components
import { ReactComponent as Logo } from "../../../images/logo-big.svg";

//styled components imports
import LogoWrapper from "./LogoWrapper";
import Paragraph from "./Paragraph";
import Button from "./Button";

const LandingPage = () => {
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Paragraph fontSize={"22px"} marginTop={"20px"}>
        Weather &amp; air quality index for cities all around the world.
      </Paragraph>
      <Paragraph fontSize={"22px"}>&amp;</Paragraph>
      <Paragraph fontSize={"18px"}>
        Air quality index comparasion between selected cities.
      </Paragraph>
      <Button>START</Button>
      <DarkModeToggle />
    </>
  );
};

export default LandingPage;
