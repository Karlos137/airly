import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

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
    } else {
      setOptionList(false);
    }
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setOptionList(!optionListOpen);
  };

  props.history.listen(() => {
    setOptionList(false);
    setInputValue("");
  });

  return (
    <Wrapper margin={props.marginTop}>
      <StyledSelectInput
        placeholder="Select city"
        onChange={handleChange}
        value={inputValue}
      />
      <ArrowIcon size="32" onClick={handleClick} />
      <OptionList
        isOpen={optionListOpen}
        setOptionList={setOptionList}
        inputText={inputValue}
        setInputText={setInputValue}
      />
    </Wrapper>
  );
};

export default withRouter(SelectInput);
