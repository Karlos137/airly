import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// styled component imports
import Wrapper from "./Wrapper";
import StyledSelectInput from "./StyledSelectInput";
import ArrowIcon from "./ArrowIcon";
import OptionList from "./OptionList/index";

const SelectInput = props => {
  const [optionListOpen, setOptionList] = useState(false);
  const [fullOptionListOpen, setFullOptionList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  //after change in select input set value of input and set filtered option list visible/hidden
  const handleChange = e => {
    if (e.target.value !== "") {
      setOptionList(true);
    } else {
      setOptionList(false);
    }
    setInputValue(e.target.value);
  };

  // after clicking on arrow in input set full option list to visible/hidden
  const handleClick = () => {
    setFullOptionList(!fullOptionListOpen);
  };

  // after changing url set full/filtered option list and input value to default
  props.history.listen(() => {
    setOptionList(false);
    setFullOptionList(false);
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
        isOpen={optionListOpen || fullOptionListOpen}
        setOptionList={setOptionList}
        setFullOptionList={setFullOptionList}
        fullList={fullOptionListOpen}
        inputText={inputValue}
        setInputText={setInputValue}
        second={props.second}
      />
    </Wrapper>
  );
};

export default withRouter(SelectInput);
