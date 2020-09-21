import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWeatherDescription } from '../../utils';

const IconContainer = styled.div`
  align-self: center;

  & > svg {
    ${(props) => (props.size) && `font-size: ${props.size}`}
  }
`;

function WeatherIcon(props) {
  return (
    <IconContainer size={props.size}>
      <FontAwesomeIcon icon={getWeatherDescription(props.weatherCode)} />
    </IconContainer>
  );
}

WeatherIcon.propTypes = {
  weatherCode: number,
  size: string
};

WeatherIcon.defaultProps = {
  size: '2x'
};

export default WeatherIcon;
