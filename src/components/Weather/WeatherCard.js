import React from 'react';
import styled from 'styled-components';
import { faStar as regular } from '@fortawesome/free-regular-svg-icons';
import { faStar as solid } from '@fortawesome/free-solid-svg-icons';
// components
import Header from '../Header';
import WeatherIcon from './WeatherIcon';
import FavoriteIcon from '../FavoriteIcon';

const { HeaderTitle, HeaderIcon } = Header;

const Weather = styled.div`
  border: 1px solid;
  border-radius: 1rem;
  max-width: 20rem;
  padding: 1rem;
`;

const WeatherDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;

  & .details__temp {
    font-family: Raleway;
    font-size: 3rem;
  }
`;

function WeatherCard({ name, icon, temp, isFavorite, onCardClick }) {
  return (
    <Weather>
      <Header>
        <HeaderTitle title={name} />
        <HeaderIcon onIconClick={onCardClick}>
          <FavoriteIcon icon={isFavorite ? solid : regular} size="2x" />
        </HeaderIcon>
      </Header>
      <WeatherDetails icon={icon}>
        <WeatherIcon icon={icon} size="4rem" />
        <span className="details__temp">{temp} &deg;</span>
      </WeatherDetails>
    </Weather>
  );
}

export default WeatherCard;
