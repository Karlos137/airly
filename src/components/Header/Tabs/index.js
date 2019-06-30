import React, { useContext } from "react";

import { WeatherContext } from "../../../context/WeatherContext";
import { OptionContext } from "../../../context/OptionContext";

import StyledTabs from "./StyledTabs";
import Tab from "./Tab/index";

const Tabs = props => {
  const [, setSelectedOption] = useContext(OptionContext);
  const [, setWeather] = useContext(OptionContext);
  const handleClick = () => {
    setSelectedOption({ firstSelect: null, secondSelect: null });
    setWeather({ firstSelect: null, secondSelect: null });
  };
  return (
    <StyledTabs onClick={handleClick}>
      <Tab
        to="/weather-aqi"
        content="WEATHER &amp; AQI"
        position="left"
        onClick={handleClick}
      />
      <Tab to="/compare-aqi" content="COMPARE AQI" position="right" />
    </StyledTabs>
  );
};

export default Tabs;
