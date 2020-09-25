import React, { useContext, useEffect } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// hooks
import useForecast from '../../hooks/useForecast';
import useWeather from '../../hooks/useWeather';
// components
import Container from '../../components/Container';
import Weather from '../../components/Weather';
// etc
import { ACTION_TYPES } from '../../constants';

function City(props) {
  const { query, position } = props.history.location.state;

  const [{ weather, favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  const { fetchWeather } = useWeather();
  const { forecast, isFetchingForecast } = useForecast(query);

  useEffect(() => {
    if (query) {
      fetchWeather(query, ACTION_TYPES.SET_WEATHER_CURRENT);
    }
    if (position) {
      fetchWeather(position, ACTION_TYPES.SET_WEATHER_CURRENT);
    }
  }, [fetchWeather, query, position]);

  return (
    <Container>
      <Weather
        weather={weather}
        favorites={favorites}
        onToggleFavorites={() =>
          dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather })
        }
      />
    </Container>
  );
}

export default City;
