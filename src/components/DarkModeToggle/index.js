import React, { useState, useContext } from "react";

//styled components imports
import ToggleWrapper from "./ToggleWrapper";
import Text from "./Text";
import Switch from "./Switch";
import Slider from "./Slider";

//context imports
import { ThemeContext } from "../../context/ThemeContext";

const DarkModeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [, setDarkTheme] = useContext(ThemeContext);

  const handleClick = () => {
    if (isChecked) {
      setDarkTheme(false);
      setIsChecked(false);
    } else {
      setDarkTheme(true);
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
