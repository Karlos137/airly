import React from "react";
import { withRouter } from "react-router-dom";

import StyledTab from "./StyledTab";
import Text from "./Text";

const Tab = props => {
  return props.location.pathname === props.to ? (
    <StyledTab active to={props.to}>
      <Text active>{props.content}</Text>
    </StyledTab>
  ) : (
    <StyledTab to={props.to}>
      <Text>{props.content}</Text>
    </StyledTab>
  );
};

export default withRouter(Tab);
