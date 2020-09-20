import React, { useContext } from 'react';
import { faStar as solid } from '@fortawesome/free-solid-svg-icons';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Media from '../../components/Media';

const { MediaHeader, MediaHeaderIcon, MediaBody } = Media;

function CityInfo() {
  const { currentWeather } = useContext(WeatherContext.WeatherStateContext);
  console.log(currentWeather);

  const getCityName = () => {
    const city = currentWeather.location;
    return `${city.name}, ${city.country}`;
  };

  const getCurrentDate = () => {
    const date = new Date(currentWeather.location.localtime_epoch * 1000);
    return date.toDateString();
  };

  if (Object.keys(currentWeather).length === 0) return null;

  return (
    <Media>
      <MediaHeader
        primaryText={getCityName()}
        secondaryText={getCurrentDate()}
        extra={<MediaHeaderIcon icon={regular} onIconClick={() => console.log('click')} />}
      />
    </Media>
  );
}

CityInfo.whyDidYouRender = true;

export default CityInfo;
