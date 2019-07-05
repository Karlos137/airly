import React from "react";

//styled components imports
import Num from "./Num";
import Text from "./Text";
import Title from "./Title";
import Wrapper from "./Wrapper";

const AqiItem = props => {
  return (
    <>
      {props.compare ? (
        <Wrapper compare>
          <Num compare>{props.value}</Num>
          <Text compare>{props.text}</Text>
          <Title compare>AIR QUALITY INDEX</Title>
        </Wrapper>
      ) : (
        <Wrapper>
          <Num>{props.value}</Num>
          <Text color={props.color}>{props.text}</Text>
          <Title>AIR QUALITY INDEX</Title>
        </Wrapper>
      )}
    </>
  );
};

export default AqiItem;
