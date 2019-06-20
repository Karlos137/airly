import React from "react";

import StyledTabs from "./StyledTabs";
import Tab from "./Tab/index";

const Tabs = props => {
  return (
    <StyledTabs>
      <Tab to="/home" content="WEATHER &amp; AQI" />
      <Tab to="/compare" content="COMPARE AQI" />
    </StyledTabs>
  );
};

export default Tabs;
