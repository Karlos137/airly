import React, { useContext } from "react";

//styled components imports
import StyledTabs from "./StyledTabs";
import Tab from "./Tab/index";

//context imports
import { WeatherContext } from "../../../context/WeatherContext";
import { OptionContext } from "../../../context/OptionContext";

const Tabs = props => {
  const [, setSelectedOption] = useContext(OptionContext);
  const [, setWeather] = useContext(WeatherContext);

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
