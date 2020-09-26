import React, { useContext } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Weather from '../../components/Weather';
import { ACTION_TYPES } from '../../constants';

function CityWeather({ source }) {
  const [
    { loadingWeather, searchResult, favorites, weather },
    dispatch
  ] = useContext(WeatherContext.WeatherStateContext);
  return (
    <Weather
      loading={loadingWeather}
      weather={source === 'search' ? searchResult : weather}
      favorites={favorites}
      onToggleFavorites={() =>
        dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather: searchResult })
      }
    />
  );
}

export default CityWeather;
