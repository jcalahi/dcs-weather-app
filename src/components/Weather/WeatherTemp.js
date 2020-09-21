import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

const TempH3 = styled.h3`
  font-size: 8rem;
  margin: 0;
`;

const DescH4 = styled.h4`
  font-size: 4rem;
  margin: 0;
`;

function WeatherTemp(props) {
  return (
    <div>
      <TempH3>{props.temperature} &#8451;</TempH3>
      <DescH4>{props.description}</DescH4>
    </div>
  );
}

WeatherTemp.propTypes = {
  description: string,
  temperature: number
};

export default WeatherTemp;
