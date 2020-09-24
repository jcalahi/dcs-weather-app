import React, { useContext } from 'react';
import styled from 'styled-components';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
import { faStar as solid } from '@fortawesome/free-solid-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Media from '../../components/Media';
import Weather from '../../components/Weather';
import Header from '../../components/Header';
import FavoriteIcon from '../../components/FavoriteIcon';
// etc
import { ACTION_TYPES } from '../../constants';

const { MediaContent } = Media;
const { WeatherIcon, WeatherTemp, WeatherTile } = Weather;
const { HeaderTitle, HeaderIcon } = Header;

const Container = styled.div`
  &.city-info {
    .header {
      margin-bottom: 2.5rem;

      &__title {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      &__subTitle {
        font-size: 2rem;
      }
    }
  }
`;

function CityInfo() {
  const [{ weather, favorites }, dispatch] = useContext(WeatherContext.WeatherStateContext);
  const { current, location } = weather;

  const getCityName = () => {
    return `${location.name}, ${location.country}`;
  };

  const getCurrentDate = () => {
    const d = new Date(location.localtime_epoch * 1000);
    console.log(d.getUTCDay());
    return new Date(location.localtime_epoch * 1000).toDateString();
  };

  const isFavorite = () => {
    const idx = favorites.findIndex((favorite) => favorite.location.name === location.name);
    return idx !== -1;
  };

  if (Object.keys(weather).length === 0) return null;

  return (
    <Container className="city-info">
      <Header>
        <HeaderTitle title={getCityName()} subTitle={getCurrentDate()} />
        <HeaderIcon onIconClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather })}>
          <FavoriteIcon icon={isFavorite() ? solid : regular} size="3x" />
        </HeaderIcon>
      </Header>
      <Media>
        <MediaContent style={{ justifyContent: 'space-evenly' }}>
          <WeatherIcon icon={current.weather_icons[0]} size="12rem" />
          <WeatherTemp temperature={current.temperature} description={current.weather_descriptions[0]} />
        </MediaContent>
        <Weather>
          <WeatherTile value={`${current.wind_speed} km/h`} description="Wind Speed" />
          <WeatherTile value={`${current.wind_dir}`} description="Wind Direction" />
          <WeatherTile value={`${current.pressure} mb`} description="Pressure" />
          <WeatherTile value={`${current.humidity} %`} description="Humidity" />
          <WeatherTile value={`${current.cloudcover} %`} description="Cloud Cover" />
          <WeatherTile value={`${current.feelslike} ${'\u00b0'}C`} description="Feels like" />
        </Weather>
      </Media>
    </Container>
  );
}

export default CityInfo;
