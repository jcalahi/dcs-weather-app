import React from 'react';
import { array, bool, object, func } from 'prop-types';
import styled from 'styled-components';
import {
  faStar as regular,
  faCompass,
  faSun
} from '@fortawesome/free-regular-svg-icons';
import {
  faStar as solid,
  faWind,
  faWater,
  faCloud,
  faTemperatureLow,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { faCloudscale } from '@fortawesome/free-brands-svg-icons';
// components
import Icon from '../Icon';
import Text from '../Text';
import Tile from '../Tile';
import Empty from '../Empty';

import { respondTo } from '../../utils';

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const PageBody = styled.div`
  ${respondTo.xxs`
    display: block;
  `}

  ${respondTo.xl`
    display: flex;
  `}
`;

const PageBodyLeft = styled.div`
  display: flex;
  flex-basis: 40%;
  justify-content: space-evenly;

  ${respondTo.xxs`
    margin-bottom: 2rem;
  `}

  ${respondTo.xl`
    margin-bottom: 0;
  `}
`;

const PageBodyRight = styled.div`
  flex: 1;
`;

const SpanImage = styled.span`
  align-self: flex-end;

  & > img {
    border-radius: 10rem;
    height: 12rem;
    width: 12rem;
  }
`;

function Weather({ weather, favorites, onToggleFavorites, loading }) {
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

  if (loading) {
    return (
      <Empty
        size="6x"
        text={loading ? 'Loading weather...' : 'Weather information'}
        icon={loading ? faSpinner : faSun}
        spin={loading}
      />
    );
  }

  if (Object.keys(weather).length === 0) return null;

  return (
    <>
      <PageHeader>
        <div>
          <h2 style={{ display: 'inline-block' }}>
            <Text size="2.4rem" primary>
              {getCityName()}
            </Text>
          </h2>
          <p>
            <Text size="2rem" weight="300" secondary>
              {getCurrentDate()}
            </Text>
          </p>
        </div>
        <Icon
          hover
          color="orange"
          size="3x"
          icon={isFavorite() ? solid : regular}
          onIconClick={onToggleFavorites}
        />
      </PageHeader>
      <PageBody>
        <PageBodyLeft>
          <SpanImage>
            <img alt="weather icon" src={current.weather_icons[0]} />
          </SpanImage>
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
        </PageBodyLeft>
        <PageBodyRight>
          <Tile.Group style={{ height: '100%' }}>
            <Tile>
              <Text weight="300" primary>
                Wind Speed
              </Text>
              <Tile.Body>
                <Text secondary>{`${current.wind_speed} km/h`}</Text>
              </Tile.Body>
              <Icon icon={faWind} size="4x" />
            </Tile>
            <Tile>
              <Text weight="300" primary>
                Wind Direction
              </Text>
              <Tile.Body>
                <Text secondary>{`${current.wind_dir}`}</Text>
              </Tile.Body>
              <Icon icon={faCompass} size="4x" />
            </Tile>
            <Tile>
              <Text weight="300" primary>
                Pressure
              </Text>
              <Tile.Body>
                <Text secondary>{`${current.pressure} mb`}</Text>
              </Tile.Body>
              <Icon icon={faCloudscale} size="4x" />
            </Tile>
            <Tile>
              <Text weight="300" primary>
                Humidity
              </Text>
              <Tile.Body>
                <Text secondary>{`${current.humidity} %`}</Text>
              </Tile.Body>
              <Icon icon={faWater} size="4x" />
            </Tile>
            <Tile>
              <Text weight="300" primary>
                Cloud Cover
              </Text>
              <Tile.Body>
                <Text secondary>{`${current.cloudcover} %`}</Text>
              </Tile.Body>
              <Icon icon={faCloud} size="4x" />
            </Tile>
            <Tile>
              <Text weight="300" primary>
                Feels like
              </Text>
              <Tile.Body>
                <Text secondary>{`${current.feelslike} ${'\u00b0'}C`}</Text>
              </Tile.Body>
              <Icon icon={faTemperatureLow} size="4x" />
            </Tile>
          </Tile.Group>
        </PageBodyRight>
      </PageBody>
    </>
  );
}

Weather.propTypes = {
  weather: object,
  favorties: array,
  loading: bool,
  onToggleFavorites: func
};

export default Weather;
