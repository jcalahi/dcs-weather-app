import React, { useContext } from 'react';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Media from '../../components/Media';
import { default as Weather } from '../../components/Weather';
import WeatherTile from '../../components/Weather/WeatherTile';

const { MediaHeader, MediaHeaderIcon, MediaContent } = Media;
const { WeatherIcon, WeatherTemp } = Weather;

function CityInfo() {
  const [{ weather, favorites }, dispatch] = useContext(WeatherContext.WeatherStateContext);
  const { current, location } = weather;

  const getCityName = () => {
    return `${location.name}, ${location.country}`;
  };

  const getCurrentDate = () => {
    return new Date(location.localtime_epoch * 1000).toDateString();
  };

  if (Object.keys(weather).length === 0) return null;

  console.log(favorites);

  return (
    <Media>
      <MediaHeader
        primaryText={getCityName()}
        secondaryText={getCurrentDate()}
        extra={<MediaHeaderIcon icon={regular} onIconClick={() => dispatch({ type: 'ADD', weather })} />}
      />
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
  );
}

CityInfo.whyDidYouRender = true;

export default CityInfo;
