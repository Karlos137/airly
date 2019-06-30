import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = props => {
  const [weather, setWeather] = useState(null);
  const [weather2, setWeather2] = useState(null);

  return (
    <WeatherContext.Provider
      value={[weather, setWeather, weather2, setWeather2]}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
