import React, { useState } from "react";

import Wrapper from "./Wrapper";
import StyledSelectInput from "./StyledSelectInput";
import ArrowIcon from "./ArrowIcon";
import OptionList from "./OptionList/index";

const SelectInput = props => {
  const [optionListOpen, setOptionList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    if (e.target.value !== "") {
      setOptionList(true);
      setInputValue(e.target.value);
    } else {
      setOptionList(false);
    }
  };
  const handleClick = () => {
    setOptionList(!optionListOpen);
  };
  return (
    <Wrapper margin={props.marginTop}>
      <StyledSelectInput placeholder="Select city" onChange={handleChange} />
      <ArrowIcon size="32" onClick={handleClick} />
      <OptionList isOpen={optionListOpen} inputText={inputValue} />
    </Wrapper>
  );
};

export default SelectInput;
