import React, { useState, createContext } from "react";
import Cities from "../data/data.json";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  let cityList = [];
  Cities.forEach(country => {
    country.states.forEach(state => {
      state.cities.forEach(city => {
        cityList.push({
          city: city,
          state: state.state,
          country: country.country
        });
      });
    });
  });

  const [cities] = useState([cityList]);
  return (
    <GlobalContext.Provider value={cities}>
      {props.children}
    </GlobalContext.Provider>
  );
};
