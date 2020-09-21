import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const TileDiv = styled.div`
  display: inline-block;
  flex-basis: 33.33%;
  text-align: center;

  & > div {
    font-size: 4rem;
  }

  & > h5 {
    font-family: Raleway, sans-serif;
    font-size: 2.2rem;
    font-weight: 400;
    margin: 1rem 0;
    text-align: center;
  }
`;

function WeatherTile(props) {
  return (
    <TileDiv>
      <div>{props.value}</div>
      <h5>{props.description}</h5>
    </TileDiv>
  );
}

WeatherTile.propTypes = {
  value: string,
  description: string
};

export default WeatherTile;
