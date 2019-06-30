import React, { useContext, useEffect } from "react";

import axios from "axios";

import StyledOptionList from "./StyledOptionList";
import Option from "./Option";

//context imports
import { GlobalContext } from "../../../context/GlobalContext";
import { OptionContext } from "../../../context/OptionContext";
import { WeatherContext } from "../../../context/WeatherContext";
import { PortableWifiOff } from "styled-icons/material";

const OptionList = props => {
  const [cities] = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useContext(OptionContext);
  const [, setWeather, , setWeather2] = useContext(WeatherContext);

  useEffect(() => {
    const fetchWeather = async () => {
      if (props.second && props.inputText !== "") {
        const response = await axios.get(
          `https://api.airvisual.com/v2/city?city=${
            selectedOption.secondSelect.city
          }&state=${selectedOption.secondSelect.state}&country=${
            selectedOption.secondSelect.country
          }&key=vLkxx5tGKKJenCmyF`
        );
        const weatherData = response.data.data.current;
        setWeather2(weatherData);
      } else {
        const response = await axios.get(
          `https://api.airvisual.com/v2/city?city=${
            selectedOption.firstSelect.city
          }&state=${selectedOption.firstSelect.state}&country=${
            selectedOption.firstSelect.country
          }&key=vLkxx5tGKKJenCmyF`
        );
        const weatherData = response.data.data.current;
        setWeather(weatherData);
      }
    };
    if (
      selectedOption.firstSelect !== null ||
      selectedOption.secondSelect !== null
    ) {
      fetchWeather();
    }
  }, [selectedOption, setWeather]);

  const handleClick = e => {
    props.setOptionList(false);
    props.setFullOptionList(false);
    props.setInputText(
      cities[e.target.id].city + ", " + cities[e.target.id].country
    );
    if (props.second) {
      setSelectedOption({
        ...selectedOption,
        secondSelect: {
          city: cities[e.target.id].city,
          state: cities[e.target.id].state,
          country: cities[e.target.id].country
        }
      });
    } else {
      setSelectedOption({
        ...selectedOption,
        firstSelect: {
          city: cities[e.target.id].city,
          state: cities[e.target.id].state,
          country: cities[e.target.id].country
        }
      });
    }
  };

  let options = cities.map(city => (
    <Option key={city.id} id={city.id} onClick={handleClick}>
      {city.city + ", " + city.country + ", " + city.state}
    </Option>
  ));
  let filteredOptions = props.inputText
    ? cities
        .filter(
          city =>
            city.city.toLowerCase().includes(props.inputText.toLowerCase()) ||
            city.country.toLowerCase().includes(props.inputText.toLowerCase())
        )
        .map(city => (
          <Option key={city.id} id={city.id} onClick={handleClick}>
            {city.city + ", " + city.country}
          </Option>
        ))
    : [];

  return (
    <StyledOptionList isOpen={props.isOpen}>
      {props.inputText ? (
        !props.fullList ? (
          filteredOptions.length ? (
            filteredOptions
          ) : (
            <Option noHover>No results found</Option>
          )
        ) : (
          options
        )
      ) : (
        options
      )}
    </StyledOptionList>
  );
};

export default OptionList;
