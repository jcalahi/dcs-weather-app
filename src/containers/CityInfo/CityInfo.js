import React, { useContext } from 'react';
import {
  faStar as regular,
  faCompass,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStar as solid,
  faWind,
  faWater,
  faCloud,
  faTemperatureLow,
} from '@fortawesome/free-solid-svg-icons';
import { faCloudscale } from '@fortawesome/free-brands-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Text from '../../components/Text';
import Icon from '../../components/Icon';
import Tile from '../../components/Tile';
// etc
import { ACTION_TYPES } from '../../constants';

function CityInfo() {
  const [{ weather, favorites }, dispatch] = useContext(
    WeatherContext.WeatherStateContext
  );
  const { current, location } = weather;

  const getCityName = () => {
    return `${location.name}, ${location.country}`;
  };

  const getCurrentDate = () => {
    return new Date(location.localtime_epoch * 1000).toDateString();
  };

  const isFavorite = () => {
    const idx = favorites.findIndex(
      (favorite) => favorite.location.name === location.name
    );
    return idx !== -1;
  };

  if (Object.keys(weather).length === 0) return null;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2.5rem',
        }}
      >
        <div>
          <h2 style={{ marginBottom: '1rem' }}>
            <Text size="3rem" primary>
              {getCityName()}
            </Text>
          </h2>
          <p>
            <Text weight="300" size="2.5rem" secondary>
              {getCurrentDate()}
            </Text>
          </p>
        </div>
        <span
          onClick={() =>
            dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather })
          }
        >
          <Icon
            color="orange"
            icon={isFavorite() ? solid : regular}
            size="3x"
            style={{ borderRadius: '10rem' }}
          />
        </span>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexBasis: '40%',
            justifyContent: 'space-evenly',
          }}
        >
          <span style={{ alignSelf: 'flex-end' }}>
            <img
              style={{ height: '12rem', width: '12rem' }}
              alt="weather icon"
              src={current.weather_icons[0]}
            />
          </span>
          <div>
            <h3>
              <Text size="10rem" secondary>
                {current.temperature}&deg;
              </Text>
            </h3>
            <h4>
              <Text size="2.5rem" weight="400" secondary>
                {current.weather_descriptions[0]}
              </Text>
            </h4>
          </div>
        </div>
        <Tile.Group
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-between',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Tile>
            <Text size="2rem" weight="300" primary>
              Wind Speed
            </Text>
            <Tile.Body>
              <Text size="2.5rem" secondary>
                {`${current.wind_speed} km/h`}
              </Text>
            </Tile.Body>
            <Icon icon={faWind} size="4x" />
          </Tile>
          <Tile>
            <Text size="2rem" weight="300" primary>
              Wind Direction
            </Text>
            <Tile.Body>
              <Text size="2.5rem" secondary>
                {`${current.wind_dir}`}
              </Text>
            </Tile.Body>
            <Icon icon={faCompass} size="4x" />
          </Tile>
          <Tile>
            <Text size="2rem" weight="300" primary>
              Pressure
            </Text>
            <Tile.Body>
              <Text size="2.5rem" secondary>{`${current.pressure} mb`}</Text>
            </Tile.Body>
            <Icon icon={faCloudscale} size="4x" />
          </Tile>
          <Tile>
            <Text size="2rem" weight="300" primary>
              Humidity
            </Text>
            <Tile.Body>
              <Text size="2.5rem" secondary>{`${current.humidity} %`}</Text>
            </Tile.Body>
            <Icon icon={faWater} size="4x" />
          </Tile>
          <Tile>
            <Text size="2rem" weight="300" primary>
              Cloud Cover
            </Text>
            <Tile.Body>
              <Text size="2.5rem" secondary>{`${current.cloudcover} %`}</Text>
            </Tile.Body>
            <Icon icon={faCloud} size="4x" />
          </Tile>
          <Tile>
            <Text size="2rem" weight="300" primary>
              Feels like
            </Text>
            <Tile.Body>
              <Text size="2.5rem" secondary>{`${
                current.feelslike
              } ${'\u00b0'}C`}</Text>
            </Tile.Body>
            <Icon icon={faTemperatureLow} size="4x" />
          </Tile>
        </Tile.Group>
      </div>
    </>
  );
}

export default CityInfo;

// wind speed - wind
// wind direction - compass
// wind pressure - cloud scale
// humidity - water
// cloud-cover- cloud
// feels-like - temperature low
