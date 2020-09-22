import React from 'react';
import CityInfo from '../CityInfo';
import SearchBox from '../SearchBox';
import { useGeoLocation } from '../../hooks/useGeoLocation';

function Home() {
  const {position, getPosition} = useGeoLocation();
  return (
    <div style={{ padding: '100px' }}>
      <div style={{ margin: '0 auto', width: '600px' }}>
        <SearchBox placeholder="Enter a city name" />
        {/* <p>
          <button onClick={() => getPosition()}>Click</button>
        </p> */}
      </div>
      <div>
        <CityInfo />
      </div>
    </div>
  );
}

export default Home;
