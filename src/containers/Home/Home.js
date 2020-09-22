import React from 'react';
// components
import SearchBox from '../SearchBox';
import CityInfo from '../CityInfo';
import Favorites from '../Favorites';
import TopCities from '../TopCities';
// hoooks
import { useGeoLocation } from '../../hooks/useGeoLocation';

function Home() {
  const {position, getPosition} = useGeoLocation();
  return (
    <div style={{ padding: '100px 150px' }}>
      <div style={{ margin: '0 auto', width: '600px' }}>
        <SearchBox placeholder="Enter a city name" />
        {/* <p>
          <button onClick={() => getPosition()}>Click</button>
        </p> */}
      </div>
      <section>
        <CityInfo />
      </section>
      <section>
        <Favorites />
      </section>
      <section>
        <TopCities />
      </section>
    </div>
  );
}

export default Home;
