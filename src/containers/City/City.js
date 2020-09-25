import React, { useContext, useEffect } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// hooks
import useWeather from '../../hooks/useWeather';
// components
import Container from '../../components/Container';
import Panel from '../../components/Panel';
import Weather from '../../components/Weather';
import Forecast from '../../components/Forecast';
import Notes from '../../components/Notes';
// etc
import { ACTION_TYPES } from '../../constants';

function City(props) {
  const { query } = props.history.location.state;

  const [{ weather, loadingWeather, favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  const { fetchWeather } = useWeather();

  useEffect(() => {
    if (query) {
      fetchWeather(query, ACTION_TYPES.SET_WEATHER_CURRENT);
    }
  }, [fetchWeather, query]);

  return (
    <Container>
      <Panel>
        <Weather
          loading={loadingWeather}
          weather={weather}
          favorites={favorites}
          onToggleFavorites={() =>
            dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather })
          }
        />
      </Panel>
      <Panel>
        <Panel.Title>7-day Forecast</Panel.Title>
        <Forecast cityData={query} />
      </Panel>
      <Panel>
        <Panel.Title>Notes</Panel.Title>
        <Notes />
      </Panel>
    </Container>
  );
}

export default City;
