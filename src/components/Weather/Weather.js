import React from 'react';
import styled from 'styled-components';
import {
  faStar as regular,
  faCompass
} from '@fortawesome/free-regular-svg-icons';
import {
  faStar as solid,
  faWind,
  faWater,
  faCloud,
  faTemperatureLow,
  faSync
} from '@fortawesome/free-solid-svg-icons';
import { faCloudscale } from '@fortawesome/free-brands-svg-icons';
// components
import Icon from '../Icon';
import Text from '../Text';
import Tile from '../Tile';

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

const PageBody = styled.div`
  display: flex;
`;

const PageBodyLeft = styled.div`
  display: flex;
  flex-basis: 40%;
  justify-content: space-evenly;
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

const ReloadSpan = styled.span`
  display: 'inline-block';
  margin-left: 2rem;
  vertical-align: super;
`;

function Weather({ weather, favorites, onToggleFavorites, onReloadClick }) {
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
      <PageHeader>
        <div>
          <h2 style={{ display: 'inline-block' }}>
            <Text size="3rem" primary>
              {getCityName()}
            </Text>
          </h2>
          <ReloadSpan onClick={onReloadClick}>
            <Icon
              icon={faSync}
              size="2x"
            />
          </ReloadSpan>
          <p>
            <Text weight="300" size="2.5rem" secondary>
              {getCurrentDate()}
            </Text>
          </p>
        </div>
        <span onClick={onToggleFavorites}>
          <Icon
            color="orange"
            icon={isFavorite() ? solid : regular}
            size="3x"
          />
        </span>
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
        </PageBodyRight>
      </PageBody>
    </>
  );
}

export default Weather;
