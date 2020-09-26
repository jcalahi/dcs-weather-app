import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// hooks
import useWeather from '../../hooks/useWeather';
// components
import Container from '../../components/Container';
import Forecast from '../../containers/Forecast';
import Notes from '../../containers/Notes';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Text from '../../components/Text';
// etc
import { ACTION_TYPES } from '../../constants';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import CityWeather from '../../containers/CityWeather';

function CityPage(props) {
  const { query } = props.history.location.state;

  const history = useHistory();
  const { fetchWeather } = useWeather();

  useEffect(() => {
    if (query) {
      fetchWeather(query, ACTION_TYPES.SET_WEATHER_CURRENT);
    }
  }, [fetchWeather, query]);

  return (
    <Container>
      <Container.Panel>
        <Button onClick={() => history.push('/')}>
          <Button.Icon>
            <Icon icon={faChevronLeft} />
            <Text style={{ marginLeft: '1rem' }} size="1.5rem" secondary>
              Back to home
            </Text>
          </Button.Icon>
        </Button>
      </Container.Panel>
      <Container.Panel>
        <CityWeather source="query" />
      </Container.Panel>
      <Container.Panel>
        <Forecast cityData={query} />
      </Container.Panel>
      <Container.Panel>
        <Notes />
      </Container.Panel>
    </Container>
  );
}

export default CityPage;
