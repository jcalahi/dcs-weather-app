import styled from 'styled-components';

// import WeatherCard from './WeatherCard';
// import WeatherIcon from './WeatherIcon';
// import WeatherTemp from './WeatherTemp';
// import WeatherTile from './WeatherTile';

const Weather = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 769px) {
    flex-basis: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }
`;

// Weather.WeatherIcon = WeatherIcon;
// Weather.WeatherTemp = WeatherTemp;
// Weather.WeatherTile = WeatherTile;
// Weather.WeatherCard = WeatherCard;

export default Weather;
