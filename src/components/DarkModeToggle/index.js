import React from "react";

//styled components imports
import ToggleWrapper from "./ToggleWrapper";
import Text from "./Text";
import Switch from "./Switch";
import Checkbox from "./Checkbox";
import Slider from "./Slider";

const DarkModeToggle = () => {
  return (
    <ToggleWrapper>
      <Text>DARK MODE</Text>
      <Switch>
        <Checkbox type="checkbox" />
        <Slider />
      </Switch>
    </ToggleWrapper>
  );
};

export default DarkModeToggle;
