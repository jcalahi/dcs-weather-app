import React, { useContext } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// hooks
import { useHistory } from 'react-router-dom';
// components
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import Text from '../../components/Text';
// etc
import { ACTION_TYPES } from '../../constants';

function Favorites() {
  const [{ favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );
  const history = useHistory();

  const renderFavorites = () => {
    return favorites.map((favorite, idx) => {
      const { current, location } = favorite;
      return (
        <Card key={idx}>
          <Card.Header title={location.name} subtitle={location.region}>
            <span
              onClick={() =>
                dispatch({
                  type: ACTION_TYPES.TOGGLE_FAVORITES,
                  weather: favorite,
                })
              }
            >
              <Icon color="orange" icon={faStar} size="2x" />
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
              <Button onClick={() => history.push('/details')}>
                Learn more
              </Button>
            </Button.Group>
          </Card.Overlay>
        </Card>
      );
    });
  };

  if (favorites.length === 0) return null;

  return (
    <>
      <div style={{ marginBottom: '2.5rem' }}>
        <h2>
          <Text size="3rem" primary>{`Favorites (${favorites.length})`}</Text>
        </h2>
      </div>
      <Grid>{renderFavorites()}</Grid>
    </>
  );
}

export default Favorites;
