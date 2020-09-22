import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
import { faStar as solid } from '@fortawesome/free-solid-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Media from '../../components/Media';
import { default as Weather } from '../../components/Weather';
import { default as TextHeader } from '../../components/TextHeader';
// etc
import { ACTION_TYPES } from '../../constants';

const CityHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    align-self: 'center';
  }
`;

const { MediaHeader, MediaHeaderIcon, MediaContent } = Media;
const { WeatherIcon, WeatherTemp, WeatherTile } = Weather;
const { H2, H3 } = TextHeader;

function CityInfo() {
  const [{ weather, favorites }, dispatch] = useContext(WeatherContext.WeatherStateContext);
  const { current, location } = weather;

  const getCityName = () => {
    return `${location.name}, ${location.country}`;
  };

  const getCurrentDate = () => {
    return new Date(location.localtime_epoch * 1000).toDateString();
  };

  const isFavorite = () => {
    const idx = favorites.findIndex((favorite) => favorite.location.name === location.name);
    return idx !== -1;
  };

  if (Object.keys(weather).length === 0) return null;

  return (
    <div>
      <CityHeader>
        <H2>{getCityName()}</H2>
        <span style={{ alignSelf: 'center' }} onClick={() => dispatch({ type: ACTION_TYPES.ADD, weather })}>
          <FontAwesomeIcon icon={isFavorite() ? solid : regular} size="4x" />
        </span>
      </CityHeader>
      <H3>{getCurrentDate()}</H3>
      <Media>
        <MediaContent style={{ justifyContent: 'space-evenly' }}>
          <WeatherIcon icon={current.weather_icons[0]} size="12rem" />
          <WeatherTemp temperature={current.temperature} description={current.weather_descriptions[0]} />
        </MediaContent>
        <MediaContent>
          <WeatherTile value={`${current.wind_speed} km/h`} description="Wind Speed" />
          <WeatherTile value={`${current.wind_dir}`} description="Wind Direction" />
          <WeatherTile value={`${current.pressure} mb`} description="Pressure" />
          <WeatherTile value={`${current.humidity} %`} description="Humidity" />
          <WeatherTile value={`${current.cloudcover} %`} description="Cloud Cover" />
          <WeatherTile value={`${current.feelslike} ${'\u00b0'}C`} description="Feels like" />
        </MediaContent>
      </Media>
    </div>
  );
}

export default CityInfo;
