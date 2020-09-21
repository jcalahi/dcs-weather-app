import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

export const getWeatherDescription = (weatherCode) => {
  const list = {
    113: 'Clear',
    116: 'Partly cloudy',
    119: 'Cloudy',
    122: 'Overcast',
    143: 'Mist',
    176: 'Patchy rain possible',
    179: 'Patchy snow possible',
    182: 'Patchy sleet possible',
    185: 'Patchy freezing drizzle possible',
    200: 'Thundery outbreaks possible',
    227: 'Blowing snow',
    230: 'Blizzard',
    248: 'Fog',
    260: 'Freezing fog',
    263: 'Patchy light drizzle',
    266: 'Light drizzle',
    281: 'Freezing drizzle',
    284: 'Heavy freezing drizzle',
    293: 'Patchy light rain',
    296: faCloudRain,
    299: 'Moderate rain at times',
    302: faCloudRain,
    305: 'Heavy rain at times',
    308: 'Heavy rain',
    311: 'Light freezing rain',
  };
  // return a default value if weatherCode is not in the list
  return list[weatherCode] || list[113];
};
