import React, { useEffect, useContext } from "react";

import axios from "axios";

//SVG imports
import { ReactComponent as Loading } from "../../../images/loading.svg";

//context imports
import { WeatherContext } from "../../../context/WeatherContext";
import { OptionContext } from "../../../context/OptionContext";
import { LoadingContext } from "../../../context/LoadingContext";

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
  // console.log(CitysData);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = [];
  //     let countryCounter = 0;

  //     const delay = t => new Promise(resolve => setTimeout(resolve, t));

  //     const response = await axios.get(
  //       //"https://api.airvisual.com/v2/countries?key=vLkxx5tGKKJenCmyF"
  //       "https://api.airvisual.com/v2/countries?key=928ee30f-04de-41c2-95a2-364c5fe4c140"
  //     );
  //     const countries = response.data.data;

  //     console.log(countries);
  //     for (const country of countries) {
  //       result.push({ country: country.country, states: [] });
  //       const response = await axios.get(
  //         `https://api.airvisual.com/v2/states?country=${
  //           country.country
  //         }&key=928ee30f-04de-41c2-95a2-364c5fe4c140`
  //       );
  //       await delay(10000);
  //       const states = response.data.data;

  //       let stateCounter = 0;
  //       for (const state of states) {
  //         if (state.state === "South Australia") {
  //           state.state = "SouthAustralia";
  //         }

  //         if (state.state === "Federation of B&H") {
  //           state.state = "Federation of B H";
  //         }
  //         result[countryCounter].states.push({
  //           state: state.state,
  //           cities: []
  //         });
  //         try {
  //           console.log(result);
  //           const response = await axios.get(
  //             `https://api.airvisual.com/v2/cities?state=${
  //               state.state
  //             }&country=${
  //               country.country
  //             }&key=928ee30f-04de-41c2-95a2-364c5fe4c140`
  //           );
  //           await delay(10000);
  //           const cities = response.data.data;
  //           for (const city of cities) {
  //             result[countryCounter].states[stateCounter].cities.push(
  //               city.city
  //             );
  //           }
  //           stateCounter += 1;
  //         } catch (error) {
  //           console.error(error);
  //         }
  //       }

  //       countryCounter += 1;
  //       console.log(JSON.stringify(result));
  //       console.log("Countries: " + countryCounter);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [weather] = useContext(WeatherContext);
  const [selectedOption] = useContext(OptionContext);
  const [loading] = useContext(LoadingContext);

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
      let aqiText = "";
      if (weather.firstSelect.pollution.aqius <= 50) {
        aqiText = "GOOD";
      } else if (weather.pollution.aqius <= 100) {
        aqiText = "MODERATE";
      } else if (weather.pollution.aqius <= 150) {
        aqiText = "UNHEALTHY FOR SENSITIVE GROUPS";
      } else if (weather.pollution.aqius <= 200) {
        aqiText = "UNHEALTHY";
      } else if (weather.pollution.aqius <= 300) {
        aqiText = "VERY UNHEALTHY";
      } else {
        aqiText = "HAZARDOUS";
      }
      return (
        <>
          <SelectInput />
          <CityImage src="https://hoodline.imgix.net/uploads/story/image/417236/..destination_photo_url..PRAG-sky.jpg.jpg?auto=format" />
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
                  text={aqiText}
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
          <SelectInput /> <SelectInput marginTop={"20px"} second />
        </>
      );
    } else {
      let aqiText = "";
      let aqiText2 = "";
      if (weather.firstSelect.pollution.aqius <= 50) {
        aqiText = "GOOD";
      } else if (weather.firstSelect.pollution.aqius <= 100) {
        aqiText = "MODERATE";
      } else if (weather.firstSelect.pollution.aqius <= 150) {
        aqiText = "UNHEALTHY FOR SENSITIVE GROUPS";
      } else if (weather.firstSelect.pollution.aqius <= 200) {
        aqiText = "UNHEALTHY";
      } else if (weather.firstSelect.pollution.aqius <= 300) {
        aqiText = "VERY UNHEALTHY";
      } else {
        aqiText = "HAZARDOUS";
      }
      if (weather.secondSelect.pollution.aqius <= 50) {
        aqiText2 = "GOOD";
      } else if (weather.secondSelect.pollution.aqius <= 100) {
        aqiText2 = "MODERATE";
      } else if (weather.secondSelect.pollution.aqius <= 150) {
        aqiText2 = "UNHEALTHY FOR SENSITIVE GROUPS";
      } else if (weather.secondSelect.pollution.aqius <= 200) {
        aqiText2 = "UNHEALTHY";
      } else if (weather.secondSelect.pollution.aqius <= 300) {
        aqiText2 = "VERY UNHEALTHY";
      } else {
        aqiText2 = "HAZARDOUS";
      }

      const aqiDifference =
        100 -
        Math.round(
          (weather.firstSelect.pollution.aqius * 100) /
            weather.secondSelect.pollution.aqius
        );
      return (
        <>
          <SelectInput /> <SelectInput marginTop={"20px"} second />
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
              text={aqiText}
            />
            <VerticalLine height={"200px"} />
            <AqiItem
              compare
              value={weather.secondSelect.pollution.aqius}
              text={aqiText2}
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

  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        {props.tab === "compare" ? renderCompareTab() : renderWeatherTab()}
      </ContentWrapper>
      <DarkModeToggle for="mobile" />
    </Wrapper>
  );
};

export default MainPage;
