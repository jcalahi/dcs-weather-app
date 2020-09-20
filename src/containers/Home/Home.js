import React from 'react';
import CityInfo from '../CityInfo';
import SearchBox from '../SearchBox';

function Home() {
  return (
    <div style={{ padding: '100px' }}>
      <div style={{ margin: '0 auto', width: '600px' }}>
        <SearchBox placeholder="Enter a city name" />
      </div>
      <div>
        <CityInfo />
      </div>
    </div>
  );
}

export default Home;
