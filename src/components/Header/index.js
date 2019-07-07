import React, { useContext } from "react";
import { Link } from "react-router-dom";

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
import { WeatherContext } from "../../context/WeatherContext";

const Header = () => {
  const [darkTheme] = useContext(ThemeContext);
  const [, setWeather] = useContext(WeatherContext);

  const handleLogoClick = () => {
    setWeather({ firstSelect: null, seconfSelect: null });
  };
  return (
    <StyledHeader>
      <LogoWrapper>
        <Link to="/weather-aqi" onClick={handleLogoClick}>
          {darkTheme ? <LogoDarkMode /> : <Logo />}
        </Link>
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
