import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  faStar as regular,
  faFolderOpen
} from '@fortawesome/free-regular-svg-icons';
import { faStar as solid, faSpinner } from '@fortawesome/free-solid-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// hooks
import useCities from '../../hooks/useCities';
// components
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Empty from '../../components/Empty';
import Header from '../../components/Header';
// etc
import { ACTION_TYPES } from '../../constants';

function TopCities() {
  const [
    { cities, loadingCities, favorites, allCitiesRemoved },
    dispatch
  ] = useContext(WeatherContext.WeatherStateContext);
  const history = useHistory();
  const { fetchCities } = useCities();

  useEffect(() => {
    if (cities.length === 0 && !allCitiesRemoved) {
      fetchCities();
    }
  }, [fetchCities, cities, allCitiesRemoved]);

  const getFavoritesName = () => {
    let lookup = {};
    for (let city of favorites) {
      lookup[city.location.name] = city.location.name;
    }
    return lookup;
  };

  const handleRemoveCity = (cityIdx) => {
    dispatch({ type: ACTION_TYPES.REMOVE_CITY, cityIdx });
  };

  const renderCities = () => {
    const fav = getFavoritesName();
    const addComma = /\B(?=(\d{3})+(?!\d))/g;

    return cities.map((city, idx) => {
      const { current, location, population, rank } = city;

      return (
        <Card key={idx} hover>
          <Card.Header title={location.name} subtitle={location.region}>
            <Icon
              hover
              color="orange"
              size="2x"
              icon={fav[location.name] ? solid : regular}
              onIconClick={() =>
                dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather: city })
              }
            />
          </Card.Header>
          <Card.Body>
            <div>
              <Text size="5rem" secondary>
                {current.temperature}&deg;
              </Text>
            </div>
            <p style={{ minHeight: '3.7rem' }}>
              <Text size="1.5rem" weight="200" secondary>
                {current.weather_descriptions[0]}
              </Text>
            </p>
          </Card.Body>
          <div>
            <div>
              <Text weight="600" size="1.4rem" secondary>
                Rank: {rank}
              </Text>
            </div>
            <div>
              <Text weight="600" size="1.4rem" secondary>
                Population: {population.toString().replace(addComma, ',')}
              </Text>
            </div>
          </div>
          <Card.Overlay className="overlay">
            <Button.Group>
              <Button
                onClick={() =>
                  history.push('/details', {
                    weather: city,
                    query: location.name
                  })
                }
              >
                <Text size="1.3rem" weight="300" secondary>
                  Learn More
                </Text>
              </Button>
              <Button onClick={() => handleRemoveCity(idx)}>
                <Text size="1.3rem" weight="300" secondary>
                  Remove
                </Text>
              </Button>
            </Button.Group>
          </Card.Overlay>
        </Card>
      );
    });
  };

  return (
    <>
      <Header>
        <h2>
          <Text size="2.5rem" weight="600" secondary>
            Top 15 cities by population (A-Z)
          </Text>
        </h2>
      </Header>
      {loadingCities || cities.length === 0 ? (
        <Empty
          size="6x"
          text={loadingCities ? 'Loading cities...' : 'No cities found'}
          icon={loadingCities ? faSpinner : faFolderOpen}
          spin={loadingCities}
        />
      ) : (
        <Grid>{renderCities()}</Grid>
      )}
    </>
  );
}

export default TopCities;
