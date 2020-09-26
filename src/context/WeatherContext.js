import React, { createContext, useReducer } from 'react';
import { ACTION_TYPES } from '../constants';

export const initialState = {
  searchResult: {}, // weather data from searching
  weather: {}, // weather data from clicking a card/city
  cities: [],
  favorites: [],
  notes: [],
  loadingCities: false,
  loadingWeather: false
};

export const reducer = (state, action) => {
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
        cities: action.cities,
        error: action.error
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
    case ACTION_TYPES.LOADING_CITIES: {
      return {
        ...state,
        loadingCities: action.loading
      };
    }
    case ACTION_TYPES.LOADING_WEATHER: {
      return {
        ...state,
        loadingWeather: action.loading
      };
    }
    case ACTION_TYPES.ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    }
    case ACTION_TYPES.REMOVE_NOTE: {
      const filteredNotes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      return {
        ...state,
        notes: filteredNotes
      };
    }
    case ACTION_TYPES.EDIT_NOTE: {
      const idx = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      return {
        ...state,
        notes: [
          ...state.notes.slice(0, idx),
          {
            ...state.notes[idx],
            note: action.payload.note,
            editedAt: action.payload.editedAt
          },
          ...state.notes.slice(idx + 1)
        ]
      };
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
