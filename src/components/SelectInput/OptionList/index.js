import React, { useContext } from "react";

import StyledOptionList from "./StyledOptionList";
import Option from "./Option";

//context imports
import { GlobalContext } from "../../../context/GlobalContext";

const OptionList = props => {
  const [cities] = useContext(GlobalContext);

  const handleClick = e => {
    props.setOptionList(false);
    props.setInputText(
      cities[e.target.id].city + ", " + cities[e.target.id].country
    );
  };

  let options = cities
    .map((city, index) => (
      <Option key={index} id={index} onClick={handleClick}>
        {city.city + ", " + city.country}
      </Option>
    ))
    .slice(0, 10);

  let filteredOptions = props.inputText
    ? cities
        .filter(
          city =>
            city.city.toLowerCase().includes(props.inputText.toLowerCase()) ||
            city.country.toLowerCase().includes(props.inputText.toLowerCase())
        )
        .map((city, index) => (
          <Option key={index} id={index} onClick={handleClick}>
            {city.city + ", " + city.country}
          </Option>
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
