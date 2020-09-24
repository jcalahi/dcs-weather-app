import React, { useContext } from 'react';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
import { faStar as solid } from '@fortawesome/free-solid-svg-icons';
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
// etc
import { ACTION_TYPES } from '../../constants';

function TopCities() {
  const [{ favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );

  const { cities, setCities } = useCities();

  const getFavoritesName = () => {
    let lookup = {};
    for (let city of favorites) {
      lookup[city.location.name] = city.location.name;
    }
    return lookup;
  };

  const handleRemoveCity = (cityIdx) => {
    setCities([...cities.slice(0, cityIdx), ...cities.slice(cityIdx + 1)]);
  };

  const renderCities = () => {
    const fav = getFavoritesName();

    return cities.map((city, idx) => {
      const { current, location } = city;
      return (
        <Card key={idx}>
          <Card.Header title={location.name} subtitle={location.region}>
            <span
              onClick={() =>
                dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather: city })
              }
            >
              <Icon
                color="orange"
                icon={fav[location.name] ? solid : regular}
                size="2x"
              />
            </span>
          </Card.Header>
          <Card.Body>
            <div>
              <Text size="5rem" secondary>
                {current.temperature}&deg;
              </Text>
            </div>
            <p>
              <Text size="1.5rem" weight="200" secondary>
                {current.weather_descriptions[0]}
              </Text>
            </p>
          </Card.Body>
          <Card.Overlay className="overlay">
            <Button.Group>
              <Button>Learn more</Button>
              <Button onClick={() => handleRemoveCity(idx)}>Remove</Button>
            </Button.Group>
          </Card.Overlay>
        </Card>
      );
      // return (
      //   <WeatherCard
      //     key={idx}
      //     name={location.name}
      //     region={location.region}
      //     icon={current.weather_icons[0]}
      //     temp={current.temperature}
      //     isFavorite={fav[location.name]}
      //     onCardClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather: city })}
      //   />
      // );
    });
  };

  if (cities.length === 0) return null;

  return (
    <>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2>
          <Text size="3rem" primary>
            Top 15 cities by population (A-Z)
          </Text>
        </h2>
      </div>
      <Grid>{renderCities()}</Grid>
    </>
  );
}

export default TopCities;
