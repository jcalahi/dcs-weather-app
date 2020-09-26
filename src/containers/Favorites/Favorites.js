import React, { useContext } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
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
import Empty from '../../components/Empty';
import Header from '../../components/Header';

function Favorites() {
  const [{ favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );
  const history = useHistory();

  const renderFavorites = () => {
    return favorites.map((favorite, idx) => {
      const { current, location } = favorite;
      return (
        <Card key={idx} hover>
          <Card.Header title={location.name} subtitle={location.region}>
            <Icon
              hover
              color="orange"
              size="2x"
              icon={faStar}
              onIconClick={() =>
                dispatch({
                  type: ACTION_TYPES.TOGGLE_FAVORITES,
                  weather: favorite
                })
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
          <Card.Overlay className="overlay">
            <Button.Group>
              <Button
                onClick={() =>
                  history.push('/details', {
                    weather: favorite,
                    query: location.name
                  })
                }
              >
                Learn more
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
          <Text size="3rem" primary>{`Favorites (${favorites.length})`}</Text>
        </h2>
      </Header>
      {favorites.length === 0 ? (
        <Empty size="6x" text="No favorites" icon={faFolderOpen} />
      ) : (
        <Grid style={{ minHeight: '14.25rem' }}>{renderFavorites()}</Grid>
      )}
    </>
  );
}

export default Favorites;
