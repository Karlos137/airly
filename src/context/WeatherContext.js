import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = props => {
  const [weather, setWeather] = useState({
    firstSelect: null,
    secondSelect: null
  });

  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {props.children}
    </WeatherContext.Provider>
  );
};
