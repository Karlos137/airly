import React, { useEffect, useContext } from "react";

import axios from "axios";

//context imports
import { WeatherContext } from "../../../context/WeatherContext";

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

  const renderWeatherTab = () => {
    if (weather === null) {
      return (
        <>
          <SelectInput />
        </>
      );
    } else {
      return (
        <>
          <SelectInput />
          <CityImage src="https://hoodline.imgix.net/uploads/story/image/417236/..destination_photo_url..PRAG-sky.jpg.jpg?auto=format" />
          <Content>
            <div>
              <Title>WEATHER</Title>
              <WeatherItems>
                <WeatherItem name="temp" value={weather.weather.tp} />
                <WeatherItem name="wind" value={weather.weather.ws} />
                <WeatherItem name="hum" value={weather.weather.hu} />
              </WeatherItems>
            </div>
            <div>
              <Title>AIR POLLUTION</Title>
              <AqiItemWrapper>
                <AqiItem value={weather.pollution.aqius} />
                <div />
                <NavLink to="/compare-aqi">COMPARE</NavLink>
              </AqiItemWrapper>
            </div>
          </Content>
        </>
      );
    }
  };

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
          renderWeatherTab()
        )}
      </ContentWrapper>
      <DarkModeToggle for="mobile" />
    </Wrapper>
  );
};

export default MainPage;
