import React, { useContext } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import Media from '../../components/Media';

const { MediaHeader, MediaBody } = Media;

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
      <MediaHeader primary={getCityName()} tertiary={getCurrentDate()} />
    </Media>
  );
}

CityInfo.whyDidYouRender = true;

export default CityInfo;
