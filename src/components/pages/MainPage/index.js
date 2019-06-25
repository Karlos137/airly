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
import ContentWrapper from "./ContentWrapper";
import AqiItemWrapper from "./AqiItemWrapper";
import NavLink from "./NavLink";

import Header from "../../Header/index";
import SelectInput from "../../SelectInput/index";
import CityImage from "./CityImage/index";
import WeatherItem from "../../WeatherItem/index";
import AqiItem from "../../AqiItem/index";
import DarkModeToggle from "../../DarkModeToggle/index";

const MainPage = props => {
  return (
    <Wrapper>
      <ContentWrapper>
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
            <CityImage src="https://hoodline.imgix.net/uploads/story/image/417236/..destination_photo_url..PRAG-sky.jpg.jpg?auto=format" />
            <Title>WEATHER</Title>
            <WeatherItems>
              <WeatherItem name="temp" />
              <WeatherItem name="wind" />
              <WeatherItem name="hum" />
            </WeatherItems>
            <Title>AIR POLLUTION</Title>
            <AqiItemWrapper>
              <AqiItem />
              <div />
              <NavLink to="/compare">COMPARE</NavLink>
            </AqiItemWrapper>
          </>
        )}
      </ContentWrapper>
      <DarkModeToggle />
    </Wrapper>
  );
};

export default MainPage;
