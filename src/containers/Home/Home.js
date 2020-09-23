import React from 'react';
// components
import SearchBox from '../SearchBox';
import CityInfo from '../CityInfo';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

function Home() {
  return (
    <div style={{ padding: '100px 150px' }}>
      <div style={{ margin: '0 auto', width: '600px' }}>
        <SearchBox placeholder="Enter a city name" />
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
