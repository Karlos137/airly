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
import { ImageContext } from "../../../context/ImageContext";

const OptionList = props => {
  const [cityList] = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useContext(OptionContext);
  const [weather, setWeather] = useContext(WeatherContext);
  const [, setLoading] = useContext(LoadingContext);
  const [loadingOptions, setLoadingOptions] = useState(true);
  const [ops, setOps] = useState(null);
  const [optionListOpen] = useContext(OptionListContext);
  const [, setImage] = useContext(ImageContext);

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
      if (props.second && props.inputText !== "") {
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
        setLoading(true);
        const imageQuery =
          props.inputText.split(",")[0] +
          " " +
          props.inputText.split(",")[1] +
          " city";

        console.log(imageQuery);
        const responseImage = await axios.get(
          `https://api.unsplash.com/search/photos?client_id=cacdd0440db064f81ff57fed9acb29fb3701fbd3296e7e3f0dc0d19be877f479&page=1&per_page=1&query=${imageQuery}`
        );

        const imageURL = responseImage.data.results[0].urls.regular;
        setImage(imageURL);

        const responseWeather = await axios.get(
          `https://api.airvisual.com/v2/city?city=${
            selectedOption.firstSelect.city
          }&state=${selectedOption.firstSelect.state}&country=${
            selectedOption.firstSelect.country
            //  }&key=vLkxx5tGKKJenCmyF`
          }&key=cce3afea-c44a-4e56-aedc-a586bdd818a3`
        );
        const weatherData = responseWeather.data.data.current;
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

  useEffect(() => {
    if (props.filtered === true) {
      const renderOptions = () => {
        const options = cityList
          .filter(
            city =>
              city.city.toLowerCase().includes(props.inputText.toLowerCase()) ||
              city.country.toLowerCase().includes(props.inputText.toLowerCase())
          )
          .map((city, index) => {
            return (
              <Option key={index} id={index} onClick={handleOptionClick}>
                {city.city + ", " + city.country}
              </Option>
            );
          });
        return options;
      };
      const setOptions = async () => {
        const result = await renderOptions();
        setOps(result);
        setLoadingOptions(false);
      };
      setOptions();
    }
  }, [props.inputText]);

  return (
    <>
      <StyledOptionList filtered={props.filtered}>
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
