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
  const [, setWeather] = useContext(WeatherContext);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.airvisual.com/v2/city?city=${selectedOption.city}&state=${
          selectedOption.state
        }&country=${selectedOption.country}&key=vLkxx5tGKKJenCmyF`
      );
      const weatherData = response.data.data.current;

      setWeather(weatherData);
    };
    if (selectedOption !== null) {
      fetchWeather();
    }
  }, [selectedOption, setWeather]);

  const handleClick = e => {
    props.setOptionList(false);
    props.setFullOptionList(false);
    props.setInputText(
      cities[e.target.id].city + ", " + cities[e.target.id].country
    );
    setSelectedOption({
      city: cities[e.target.id].city,
      state: cities[e.target.id].state,
      country: cities[e.target.id].country
    });
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
