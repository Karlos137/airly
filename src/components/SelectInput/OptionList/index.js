import React from "react";

import StyledOptionList from "./StyledOptionList";
import Option from "./Option";

const OptionList = props => {
  return (
    <StyledOptionList isOpen={props.isOpen}>
      <Option>Brno, Czech Republic</Option>
      <Option>Olomouc, Czech Republic</Option>
      <Option>Ostrava, Czech Republic</Option>
      <Option>Prague, Czech Republic</Option>
    </StyledOptionList>
  );
};

export default OptionList;
