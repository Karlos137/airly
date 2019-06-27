import React from "react";

import StyledTabs from "./StyledTabs";
import Tab from "./Tab/index";

const Tabs = props => {
  return (
    <StyledTabs>
      <Tab to="/weather-aqi" content="WEATHER &amp; AQI" />
      <Tab to="/compare-aqi" content="COMPARE AQI" />
    </StyledTabs>
  );
};

export default Tabs;
