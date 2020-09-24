import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const IconContainer = styled.span`
  align-self: center;

  & > img {
    border-radius: 10rem;
    ${(props) => props.size && `height: ${props.size}; width: ${props.size};`};
  }
`;

function WeatherIcon(props) {
  return (
    <IconContainer size={props.size}>
      <img alt="weather icon" src={props.icon} />
    </IconContainer>
  );
}

WeatherIcon.propTypes = {
  icon: string,
  size: string,
};

export default WeatherIcon;
