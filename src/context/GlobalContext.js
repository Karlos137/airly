import React, { useState, createContext } from "react";
//import Cities from "../data/data.json";
//import Cities from "../data/data.js";
import Cities from "../data/data2-small.js";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  // let cityList = [];
  // let id = 0;
  // Cities.forEach(country => {
  //   country.states.forEach(state => {
  //     state.cities.forEach(city => {
  //       cityList.push({
  //         id: id,
  //         city: city,
  //         state: state.state,
  //         country: country.country
  //       });
  //       id++;
  //     });
  //   });
  // });

  const [cities] = useState([Cities]);
  return (
    <GlobalContext.Provider value={cities}>
      {props.children}
    </GlobalContext.Provider>
  );
};
