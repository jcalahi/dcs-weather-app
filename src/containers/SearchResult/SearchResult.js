import React, { useContext } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Weather from '../../components/Weather';
import { ACTION_TYPES } from '../../constants';

function SearchResult() {
  const [{ weather, favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  return (
    <Weather
      weather={weather}
      favorites={favorites}
      onIconClick={() =>
        dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather })
      }
    />
  );
}

export default SearchResult;
