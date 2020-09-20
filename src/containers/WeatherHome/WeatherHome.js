import React from 'react';
import SearchBox from '../SearchBox';

function WeatherHome() {
  return (
    <div style={{ padding: '100px' }}>
      <h1>DCS Weather App</h1>
      <div style={{ width: '400px' }}>
        <SearchBox placeholder="Enter a city name" />
      </div>
    </div>
  );
}

export default WeatherHome;
