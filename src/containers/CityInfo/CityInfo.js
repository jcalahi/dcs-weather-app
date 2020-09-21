import React, { useContext } from 'react';
import { faStar as solid, faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Media from '../../components/Media';
import { default as Weather } from '../../components/Weather';
// etc
import { getWeatherDescription } from '../../utils';


const { MediaHeader, MediaHeaderIcon, MediaContent } = Media;
const { WeatherIcon, WeatherTemp } = Weather;

function CityInfo() {
  const { currentWeather } = useContext(WeatherContext.WeatherStateContext);
  console.log(currentWeather);
  const { current, location } = currentWeather;

  const getCityName = () => {
    return `${location.name}, ${location.country}`;
  };

  const getCurrentDate = () => {
    return new Date(location.localtime_epoch * 1000).toDateString();
  };

  if (Object.keys(currentWeather).length === 0) return null;

  return (
    <Media>
      <MediaHeader
        primaryText={getCityName()}
        secondaryText={getCurrentDate()}
        extra={<MediaHeaderIcon icon={regular} onIconClick={() => console.log('click')} />}
      />
      <MediaContent style={{ justifyContent: 'space-evenly' }}>
        <WeatherIcon weatherCode={current.weather_code} size="14rem" />
        <WeatherTemp temperature={current.temperature} description={current.weather_descriptions[0]} />
      </MediaContent>
      <MediaContent>
        Other Details
      </MediaContent>
    </Media>
  );
}

CityInfo.whyDidYouRender = true;

export default CityInfo;
