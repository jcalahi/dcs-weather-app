import React, { useContext, useEffect } from 'react';
// hooks
import useForecast from '../../hooks/useForecast';
import useWeather from '../../hooks/useWeather';
// components
import Container from '../../components/Container';
import Weather from '../Weather';
import { ACTION_TYPES } from '../../constants';
import WeatherContext from '../../context/WeatherContext';

function City(props) {
  const { query, position } = props.history.location.state;
  const [, dispatch] = useContext(WeatherContext.WeatherStateContext);
  const { forecast, isFetchingForecast } = useForecast(query);
  const { weather, isFetchingCurrent, fetchCurrent } = useWeather();

  useEffect(() => {
    if (query) {
      fetchCurrent(query);
    }
    if (position) {
      fetchCurrent(position);
    }
  }, [fetchCurrent, query, position]);

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.FETCH_WEATHER, weather });
  }, [weather, dispatch]);

  return (
    <Container>
      <Weather />
    </Container>
  );
}

export default City;
