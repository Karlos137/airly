import React, { useContext, useState, useEffect } from "react";

import axios from "axios";

//SVG imports
import { ReactComponent as Loading } from "../../../images/loading.svg";

//styled components imports
import StyledOptionList from "./StyledOptionList";
import Option from "./Option";
import LoadingWrapper from "./LoadingWrapper";

//context imports
import { GlobalContext } from "../../../context/GlobalContext";
import { OptionContext } from "../../../context/OptionContext";
import { WeatherContext } from "../../../context/WeatherContext";
import { LoadingContext } from "../../../context/LoadingContext";
import { OptionListContext } from "../../../context/OptionListContext";

const OptionList = props => {
  const [cityList] = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useContext(OptionContext);
  const [weather, setWeather] = useContext(WeatherContext);
  const [, setLoading] = useContext(LoadingContext);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [ops, setOps] = useState(null);
  const [optionListOpen] = useContext(OptionListContext);

  if (optionListOpen === false) {
    props.setOptionList(false);
  }

  const handleOptionClick = async e => {
    props.setInputValue(e.target.textContent);

    const id = e.target.id;
    const option = {
      city: cityList[id].city,
      state: cityList[id].state,
      country: cityList[id].country
    };
    if (props.second) {
      await setSelectedOption({ ...selectedOption, secondSelect: option });
    } else {
      await setSelectedOption({ ...selectedOption, firstSelect: option });
    }

    props.setOptionList(false);
  };

  useEffect(() => {
    const renderOptions = () => {
      return new Promise((resolve, reject) => {
        const options = cityList.map(city => {
          return (
            <Option key={city.id} id={city.id} onClick={handleOptionClick}>
              {city.city + ", " + city.country}
            </Option>
          );
        });
        resolve(options);
      });
    };

    const setOptions = async () => {
      const result = await renderOptions();
      setOps(result);
      setLoadingOptions(false);
    };

    setOptions();
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      // if value in first/second select is not empty string set weather in weather context
      console.log("USE EFFECT");
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
        console.log(props.inputText);
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
  }, [selectedOption]);

  return (
    <>
      <StyledOptionList>
        {loadingOptions ? (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        ) : null}
        <>{ops}</>
      </StyledOptionList>
    </>
  );
};

export default OptionList;
