import React, { createContext, useReducer } from 'react';

const initialState = {
  weather: {},
  favorites: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER': {
      return {
        ...state,
        weather: action.weather
      };
    }
    case 'ADD': {
      const { name } = action.weather.location;
      const cityIndex = state.favorites.findIndex((city) => city.location.name === name);
      // favorites must be unique
      if (cityIndex === -1) {
        return {
          ...state,
          favorites: [...state.favorites, action.weather]
        };
      }
      return state;
    }
    default:
      return state;
  }
};

const WeatherStateContext = createContext();

const WeatherStateProvider = ({ children }) => {
  return (
    <WeatherStateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </WeatherStateContext.Provider>
  );
};

export default { WeatherStateContext, WeatherStateProvider };
