import React from "react";

import Wrapper from "./Wrapper";
import IconWrapper from "./IconWrapper";
import ItemText from "./ItemText";
import Units from "./Units";
import Name from "./Name";

import { ReactComponent as Temp } from "../../images/sun.svg";
import { ReactComponent as Wind } from "../../images/wind.svg";
import { ReactComponent as Hum } from "../../images/humidity.svg";

const WeatherItem = props => {
  let icon;
  let units;
  if (props.name === "temp") {
    icon = <Temp />;
    units = "°C";
  } else if (props.name === "wind") {
    icon = <Wind />;
    units = "m/s";
  } else {
    icon = <Hum />;
    units = "%";
  }
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <ItemText>{props.value}</ItemText>
      <Units>{units}</Units>
      <Name>{props.name}</Name>
    </Wrapper>
  );
};

export default WeatherItem;
