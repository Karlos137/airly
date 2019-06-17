import React, { useState } from "react";

//styled components imports
import ToggleWrapper from "./ToggleWrapper";
import Text from "./Text";
import Switch from "./Switch";
import Slider from "./Slider";

const DarkModeToggle = () => {
  let [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  return (
    <ToggleWrapper>
      <Text>DARK MODE</Text>
      <Switch onClick={handleClick}>
        {isChecked ? <Slider checked /> : <Slider />}
      </Switch>
    </ToggleWrapper>
  );
};

export default DarkModeToggle;
