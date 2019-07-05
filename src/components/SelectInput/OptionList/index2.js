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

const OptionList = props => {
  const [cityList] = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useContext(OptionContext);
  const [loading, setLoading] = useState(true);
  const [ops, setOps] = useState(null);

  const handleOptionClick = e => {
    props.setInputValue(e.target.textContent);
    props.setOptionList(false);

    const id = e.target.id;
    const option = {
      city: cityList[id].city,
      state: cityList[id].state,
      country: cityList[id].country
    };

    if (props.second) {
      setSelectedOption({ ...selectedOption, secondSelect: option });
    } else {
      setSelectedOption({ ...selectedOption, firstSelect: option });
    }
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

    const test = async () => {
      const result = await renderOptions();
      setOps(result);
      setLoading(false);
    };

    test();
  }, []);

  return (
    <>
      <StyledOptionList>
        {loading ? (
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
