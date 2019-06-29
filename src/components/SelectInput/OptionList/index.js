import React, { useContext } from "react";

import StyledOptionList from "./StyledOptionList";
import Option from "./Option";

//context imports
import { GlobalContext } from "../../../context/GlobalContext";

const OptionList = props => {
  const [cities] = useContext(GlobalContext);

  let options = cities
    .map((city, index) => (
      <Option key={index}>{city.city + ", " + city.country}</Option>
    ))
    .slice(0, 10);

  console.log(props.inputText);
  let filteredOptions = props.inputText
    ? cities
        .filter(
          city =>
            city.city.toLowerCase().includes(props.inputText.toLowerCase()) ||
            city.country.toLowerCase().includes(props.inputText.toLowerCase())
        )
        .map((city, index) => (
          <Option key={index}>{city.city + ", " + city.country}</Option>
        ))
        .slice(0, 10)
    : [];

  return (
    <StyledOptionList isOpen={props.isOpen}>
      {props.inputText ? filteredOptions : options}
    </StyledOptionList>
  );
};

export default OptionList;
