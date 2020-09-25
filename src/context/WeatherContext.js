import React, { createContext, useReducer } from 'react';
import { ACTION_TYPES } from '../constants';

const initialState = {
  searchResult: {}, // weather data from searching
  weather: {}, // weather data from clicking a card/city
  cities: [],
  favorites: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SEARCH_RESULT: {
      return {
        ...state,
        searchResult: action.weather
      };
    }
    case ACTION_TYPES.SET_WEATHER_CURRENT: {
      return {
        ...state,
        weather: action.weather
      };
    }
    case ACTION_TYPES.ADD_CITIES: {
      return {
        ...state,
        cities: action.cities
      };
    }
    case ACTION_TYPES.REMOVE_CITY: {
      return {
        ...state,
        cities: [
          ...state.cities.slice(0, action.cityIdx),
          ...state.cities.slice(action.cityIdx + 1)
        ]
      };
    }
    case ACTION_TYPES.TOGGLE_FAVORITES: {
      const { name } = action.weather.location;
      const cityIndex = state.favorites.findIndex(
        (city) => city.location.name === name
      );
      // favorites must be unique
      // then remove if selected again
      if (cityIndex === -1) {
        const favorites = [...state.favorites, action.weather].sort((a, b) =>
          a.location.name.localeCompare(b.location.name)
        );
        return {
          ...state,
          favorites
        };
      } else {
        return {
          ...state,
          favorites: [
            ...state.favorites.slice(0, cityIndex),
            ...state.favorites.slice(cityIndex + 1)
          ]
        };
      }
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
