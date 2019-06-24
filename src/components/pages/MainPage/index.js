import React from "react";

//styled components
import Wrapper from "./Wrapper";
import Title from "./Title";
import WeatherItems from "./WeatherItems";
import Text from "./Text";
import HighlightedText from "./HighlightedText";
import VerticalLine from "./VerticalLine";
import Cities from "./Cities";
import City from "./City";
import CityName from "./CityName";
import CityCountry from "./CityCountry";
import AqiItems from "./AqiItems";

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
          <Cities>
            <City>
              <CityName>Prague</CityName>
              <CityCountry>Czech Republic</CityCountry>
            </City>
            <VerticalLine height={"62px"} />
            <City>
              <CityName>Brno</CityName>
              <CityCountry>Czech Republic</CityCountry>
            </City>
          </Cities>
          <Title compare>AIR POLLUTION</Title>
          <AqiItems>
            <AqiItem compare />
            <VerticalLine height={"200px"} />
            <AqiItem compare />
          </AqiItems>
          <Text>
            Prague has AQ Index <HighlightedText>20% higher</HighlightedText>{" "}
            than Brno.
          </Text>
        </>
      ) : (
        <>
          <SelectInput />
          <Title>WEATHER</Title>
          <WeatherItems>
            <WeatherItem name="temp" />
            <WeatherItem name="wind" />
            <WeatherItem name="hum" />
          </WeatherItems>
          <Title>AIR POLLUTION</Title>
          <AqiItem />
        </>
      )}
      <DarkModeToggle />
    </Wrapper>
  );
};

export default MainPage;
