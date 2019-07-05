import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

// styled component imports
import Wrapper from "./Wrapper";
import StyledSelectInput from "./StyledSelectInput";
import ArrowIcon from "./ArrowIcon";

import OptionList from "./OptionList/index2";

import { TestContext } from "../../context/TestContext";

const SelectInput = props => {
  const [optionListOpen, setOptionList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [test, setTest] = useContext(TestContext);

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
    // console.log(test);
    setTest(!test);
    setTest(!test);
    setOptionList(!optionListOpen);
  };

  // after changing url set full/filtered option list and input value to default
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

      {optionListOpen ? (
        <OptionList
          setInputValue={setInputValue}
          setOptionList={setOptionList}
          inputText={inputValue}
          second={props.second}
        />
      ) : null}
    </Wrapper>
  );
};

export default withRouter(SelectInput);
