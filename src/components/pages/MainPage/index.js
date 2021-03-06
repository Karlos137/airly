import React, { useContext } from "react";

//SVG imports
import { ReactComponent as Loading } from "../../../images/loading.svg";

//context imports
import { WeatherContext } from "../../../context/WeatherContext";
import { OptionContext } from "../../../context/OptionContext";
import { LoadingContext } from "../../../context/LoadingContext";
import { OptionListContext } from "../../../context/OptionListContext";
import { ImageContext } from "../../../context/ImageContext";

//styled components imports
import Wrapper from "./Wrapper";
import Title from "./Title";
import Content from "./Content";
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
import LoadingWrapper from "./LoadingWrapper";

import Header from "../../Header/index";
import SelectInput from "../../SelectInput/index";
import CityImage from "./CityImage/index";
import WeatherItem from "../../WeatherItem/index";
import AqiItem from "../../AqiItem/index";
import DarkModeToggle from "../../DarkModeToggle/index";

const MainPage = props => {
  const [weather] = useContext(WeatherContext);
  const [selectedOption] = useContext(OptionContext);
  const [loading] = useContext(LoadingContext);
  const [, setOptionListOpen] = useContext(OptionListContext);
  const [image] = useContext(ImageContext);

  //get AQI text according to aqi value
  const getAqiText = aqi => {
    let aqiTextValue = "";
    let aqiTextColor = "";
    if (aqi <= 50) {
      aqiTextValue = "GOOD";
      aqiTextColor = "#24AC5E";
    } else if (aqi <= 100) {
      aqiTextValue = "MODERATE";
      aqiTextColor = "#DFAC07";
    } else if (aqi <= 150) {
      aqiTextValue = "UNHEALTHY FOR SENSITIVE GROUPS";
      aqiTextColor = "#DFAC07";
    } else if (aqi <= 200) {
      aqiTextValue = "UNHEALTHY";
      aqiTextColor = "#E53935";
    } else if (aqi <= 300) {
      aqiTextValue = "VERY UNHEALTHY";
      aqiTextColor = "#E53935";
    } else {
      aqiTextValue = "HAZARDOUS";
      aqiTextColor = "#E53935";
    }
    return { aqiTextValue, aqiTextColor };
  };

  const renderWeatherTab = () => {
    if (weather.firstSelect === null) {
      return (
        <>
          <SelectInput />
          {loading ? (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          ) : null}
        </>
      );
    } else {
      return (
        <>
          <SelectInput />
          <CityImage src={image} />
          <Content>
            <div>
              <Title>WEATHER</Title>
              <WeatherItems>
                <WeatherItem
                  name="temp"
                  value={weather.firstSelect.weather.tp}
                />
                <WeatherItem
                  name="wind"
                  value={weather.firstSelect.weather.ws}
                />
                <WeatherItem
                  name="hum"
                  value={weather.firstSelect.weather.hu}
                />
              </WeatherItems>
            </div>
            <div>
              <Title>AIR POLLUTION</Title>
              <AqiItemWrapper>
                <AqiItem
                  value={weather.firstSelect.pollution.aqius}
                  text={
                    getAqiText(weather.firstSelect.pollution.aqius).aqiTextValue
                  }
                  color={
                    getAqiText(weather.firstSelect.pollution.aqius).aqiTextColor
                  }
                />
                <div />
                <NavLink to="/compare-aqi">COMPARE</NavLink>
              </AqiItemWrapper>
            </div>
          </Content>
        </>
      );
    }
  };

  const renderCompareTab = () => {
    if (weather.firstSelect === null || weather.secondSelect === null) {
      return (
        <>
          <>
            <SelectInput first />
          </>
          <SelectInput marginTop={"20px"} second />
          {loading ? (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          ) : null}
        </>
      );
    } else {
      const aqiDifference =
        100 -
        Math.round(
          (weather.firstSelect.pollution.aqius * 100) /
            weather.secondSelect.pollution.aqius
        );
      return (
        <>
          <SelectInput first />
          <SelectInput marginTop={"20px"} second />
          <Cities>
            <City>
              <CityName>{selectedOption.firstSelect.city}</CityName>
              <CityCountry>{selectedOption.firstSelect.country}</CityCountry>
            </City>
            <VerticalLine height={"62px"} />
            <City>
              <CityName>{selectedOption.secondSelect.city}</CityName>
              <CityCountry>{selectedOption.secondSelect.country}</CityCountry>
            </City>
          </Cities>
          <Title compare>AIR POLLUTION</Title>
          <AqiItems>
            <AqiItem
              compare
              value={weather.firstSelect.pollution.aqius}
              text={
                getAqiText(weather.firstSelect.pollution.aqius).aqiTextValue
              }
              color={
                getAqiText(weather.firstSelect.pollution.aqius).aqiTextColor
              }
            />
            <VerticalLine height={"200px"} />
            <AqiItem
              compare
              value={weather.secondSelect.pollution.aqius}
              text={
                getAqiText(weather.secondSelect.pollution.aqius).aqiTextValue
              }
              color={
                getAqiText(weather.secondSelect.pollution.aqius).aqiTextColor
              }
            />
          </AqiItems>
          <Text>
            {selectedOption.firstSelect.city} has AQ Index{" "}
            <HighlightedText difference={aqiDifference > 0}>
              {Math.abs(aqiDifference)}%{" "}
              {aqiDifference > 0 ? "lower" : "higher"}{" "}
            </HighlightedText>
            than {selectedOption.secondSelect.city}.
          </Text>
        </>
      );
    }
  };

  const handleCloseOptionListClick = e => {
    if (!(e.target.tagName === "svg" || e.target.tagName === "path")) {
      setOptionListOpen(false);
    }
  };
  return (
    <Wrapper>
      <ContentWrapper onClick={handleCloseOptionListClick}>
        <Header />
        {props.tab === "compare" ? renderCompareTab() : renderWeatherTab()}
      </ContentWrapper>
      <DarkModeToggle for="mobile" />
    </Wrapper>
  );
};

export default MainPage;
