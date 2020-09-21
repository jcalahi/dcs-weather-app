import React, { createContext, useState } from 'react';

const WeatherStateContext = createContext();

const WeatherStateProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  return (
    <WeatherStateContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </WeatherStateContext.Provider>
  );
};

export default { WeatherStateContext, WeatherStateProvider };
