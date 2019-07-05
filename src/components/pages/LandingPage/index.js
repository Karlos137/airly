import React, { useState, useContext } from "react";

import { Redirect } from "react-router-dom";

import DarkModeToggle from "../../DarkModeToggle/index";

import { ThemeContext } from "../../../context/ThemeContext";

//svg imports as React components
import { ReactComponent as Logo } from "../../../images/logo-big.svg";
import { ReactComponent as LogoDarkMode } from "../../../images/logo-big-dark-mode.svg";

//styled components imports
import LogoWrapper from "./LogoWrapper";
import Paragraph from "./Paragraph";
import Button from "./Button";
import ContentWrapper from "./ContentWrapper";

const LandingPage = () => {
  const [darkTheme] = useContext(ThemeContext);

  const [redirect, setRedirect] = useState(false);

  const handleRedirect = () => {
    setRedirect(true);
  };

  //if redirect is true, render <Redirect /> that leads to /weather-aqi page
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/weather-aqi" />;
    }
  };
  return (
    <>
      <ContentWrapper>
        <LogoWrapper>{darkTheme ? <LogoDarkMode /> : <Logo />}</LogoWrapper>
        <Paragraph fontSize={"22px"} marginTop={"20px"}>
          Weather &amp; air quality index for cities all around the world.
        </Paragraph>
        <Paragraph fontSize={"22px"}>&amp;</Paragraph>
        <Paragraph fontSize={"18px"}>
          Air quality index comparasion between selected cities.
        </Paragraph>
        <Button onClick={handleRedirect}>START</Button>
        {renderRedirect()}
      </ContentWrapper>
      <DarkModeToggle for="mobile" landingPage />
    </>
  );
};

export default LandingPage;
