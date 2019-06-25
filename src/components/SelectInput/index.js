import React, { useState } from "react";

import Wrapper from "./Wrapper";
import StyledSelectInput from "./StyledSelectInput";
import ArrowIcon from "./ArrowIcon";
import OptionList from "./OptionList/index";

const SelectInput = props => {
  const [optionListOpen, setOptionList] = useState(false);

  const handleChange = e => {
    if (e.target.value !== "") {
      setOptionList(true);
    } else {
      setOptionList(false);
    }
  };
  const handleClick = () => {
    setOptionList(!optionListOpen);
  };
  console.log(props.marginTop);
  return (
    <Wrapper margin={props.marginTop}>
      <StyledSelectInput placeholder="Select city" onChange={handleChange} />
      <ArrowIcon size="32" onClick={handleClick} />
      <OptionList isOpen={optionListOpen} />
    </Wrapper>
  );
};

export default SelectInput;
