import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Text from '../../components/Text';
// etc
import { ACTION_TYPES } from '../../constants';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function City(props) {
  const { query } = props.history.location.state;

  const [{ weather, loadingWeather, favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  const history = useHistory();
  const { fetchWeather } = useWeather();

  useEffect(() => {
    if (query) {
      fetchWeather(query, ACTION_TYPES.SET_WEATHER_CURRENT);
    }
  }, [fetchWeather, query]);

  return (
    <Container>
      <Panel>
        <Button onClick={() => history.push('/')}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon={faChevronLeft} size="2x" />
            <Text style={{ marginLeft: '1rem' }} size="1.5rem" secondary>Back to home&nbsp;&nbsp;&nbsp;</Text>
          </div>
        </Button>
      </Panel>
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
