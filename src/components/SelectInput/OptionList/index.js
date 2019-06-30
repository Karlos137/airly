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
        "https://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=vLkxx5tGKKJenCmyF"
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
    props.setInputText(
      cities[e.target.id].city + ", " + cities[e.target.id].country
    );
    setSelectedOption({
      city: cities[e.target.id].city,
      country: cities[e.target.id].country
    });
  };

  let options = cities
    .map((city, index) => (
      <Option key={index} id={index} onClick={handleClick}>
        {city.city + ", " + city.country}
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
      {props.inputText ? filteredOptions : options}
    </StyledOptionList>
  );
};

export default OptionList;
