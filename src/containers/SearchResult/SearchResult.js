import React, { useContext } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Weather from '../../components/Weather';
import { ACTION_TYPES } from '../../constants';

function SearchResult() {
  const [{ searchResult, favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  return (
    <Weather
      weather={searchResult}
      favorites={favorites}
      onToggleFavorites={() =>
        dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather: searchResult })
      }
      onReloadClick={() => {}}
    />
  );
}

export default SearchResult;
