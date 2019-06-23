import React from "react";

//styled components
import Num from "./Num";
import Text from "./Text";
import Title from "./Title";
import Wrapper from "./Wrapper";

const AqiItem = props => {
  return (
    <>
      {props.compare ? (
        <Wrapper compare>
          <Num compare>42</Num>
          <Text compare>GOOD</Text>
          <Title compare>AIR QUALITY INDEX</Title>
        </Wrapper>
      ) : (
        <Wrapper>
          <Num>42</Num>
          <Text>GOOD</Text>
          <Title>AIR QUALITY INDEX</Title>
        </Wrapper>
      )}
    </>
  );
};

export default AqiItem;
