import React, { useContext, useEffect } from "react";

import axios from "axios";

import StyledOptionList from "./StyledOptionList";
import Option from "./Option";

//context imports
import { GlobalContext } from "../../../context/GlobalContext";
import { OptionContext } from "../../../context/OptionContext";
import { WeatherContext } from "../../../context/WeatherContext";
import { LoadingContext } from "../../../context/LoadingContext";

const OptionList = props => {
  const [cities] = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useContext(OptionContext);
  const [weather, setWeather] = useContext(WeatherContext);
  const [, setLoading] = useContext(LoadingContext);

  // check if selected option in first select is not null (after using COMPARE link) and setting value of this select
  if (selectedOption.firstSelect !== null && !props.second) {
    props.setInputText(
      selectedOption.firstSelect.city +
        ", " +
        selectedOption.firstSelect.country
    );
  }

  useEffect(() => {
    const fetchWeather = async () => {
      // if value in first/second select is not empty string set weather in weather context
      if (props.second && props.inputText !== "") {
        setWeather({ firstSelect: null, secondSelect: null });
        setLoading(true);
        const response = await axios.get(
          `https://api.airvisual.com/v2/city?city=${
            selectedOption.secondSelect.city
          }&state=${selectedOption.secondSelect.state}&country=${
            selectedOption.secondSelect.country
            // }&key=vLkxx5tGKKJenCmyF`
          }&key=cce3afea-c44a-4e56-aedc-a586bdd818a3`
        );
        const weatherData = response.data.data.current;
        setLoading(false);
        setWeather({ ...weather, secondSelect: weatherData });
      } else if (props.inputText !== "") {
        setWeather({ firstSelect: null, secondSelect: null });
        setLoading(true);
        const response = await axios.get(
          `https://api.airvisual.com/v2/city?city=${
            selectedOption.firstSelect.city
          }&state=${selectedOption.firstSelect.state}&country=${
            selectedOption.firstSelect.country
            //  }&key=vLkxx5tGKKJenCmyF`
          }&key=cce3afea-c44a-4e56-aedc-a586bdd818a3`
        );
        const weatherData = response.data.data.current;
        setLoading(false);
        setWeather({ ...weather, firstSelect: weatherData });
      }
    };

    if (
      selectedOption.firstSelect !== null ||
      selectedOption.secondSelect !== null
    ) {
      fetchWeather();
    }
  }, [selectedOption, setWeather]);

  //after clicking on option from option list close option list and set input value in select
  const handleClick = e => {
    props.setOptionList(false);
    props.setFullOptionList(false);
    props.setInputText(
      cities[e.target.id].city + ", " + cities[e.target.id].country
    );
    // check for first or second select
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
      {city.city + ", " + city.state + ", " + city.country}
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
            {city.city + ", " + city.state + ", " + city.country}
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
