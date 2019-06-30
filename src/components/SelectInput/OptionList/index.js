import React, { useContext, useEffect } from "react";

import axios from "axios";

import StyledOptionList from "./StyledOptionList";
import Option from "./Option";

//context imports
import { GlobalContext } from "../../../context/GlobalContext";
import { OptionContext } from "../../../context/OptionContext";
import { WeatherContext } from "../../../context/WeatherContext";

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
    console.log(e.target.id);
    props.setInputText(
      cities[e.target.id].city + ", " + cities[e.target.id].country
    );
    setSelectedOption({
      city: cities[e.target.id].city,
      state: cities[e.target.id].state,
      country: cities[e.target.id].country
    });
    console.log(selectedOption);
    console.log(props.inputText);
  };

  let options = cities
    .map((city, index) => (
      <Option key={index} id={index} onClick={handleClick}>
        {city.city + ", " + city.country + ", " + city.state}
      </Option>
    ))
    .slice(0, 10);

  let filteredOptions = props.inputText
    ? cities
        .filter(
          city =>
            city.city.toLowerCase().includes(props.inputText.toLowerCase()) ||
            city.country.toLowerCase().includes(props.inputText.toLowerCase())
        )
        .map((city, index) => (
          <Option key={index} id={index} onClick={handleClick}>
            {city.city + ", " + city.country}
          </Option>
        ))
        .slice(0, 10)
    : [];

  return (
    <StyledOptionList isOpen={props.isOpen}>
      {props.inputText ? (
        filteredOptions.length ? (
          filteredOptions
        ) : (
          <Option noHover>No results found</Option>
        )
      ) : (
        options
      )}
    </StyledOptionList>
  );
};

export default OptionList;
