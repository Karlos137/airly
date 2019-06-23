import React from "react";

//styled components
import Wrapper from "./Wrapper";
import Title from "./Title";
import GridContainer from "./GridContainer";

import Header from "../../Header/index";
import SelectInput from "../../SelectInput/index";
import WeatherItem from "../../WeatherItem/index";
import AqiItem from "../../AqiItem/index";
import DarkModeToggle from "../../DarkModeToggle/index";

const MainPage = props => {
  return (
    <Wrapper>
      <Header />
      {props.tab === "compare" ? (
        <>
          <SelectInput /> <SelectInput marginTop={"20px"} />
        </>
      ) : (
        <>
          <SelectInput />
          <Title>WEATHER</Title>
          <GridContainer>
            <WeatherItem name="temp" />
            <WeatherItem name="wind" />
            <WeatherItem name="hum" />
          </GridContainer>
          <Title>AIR POLLUTION</Title>
          <AqiItem />
        </>
      )}
      <DarkModeToggle />
    </Wrapper>
  );
};

export default MainPage;
