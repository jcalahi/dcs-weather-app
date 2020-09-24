import React from 'react';
import styled from 'styled-components';
// components
import SearchBox from '../SearchBox';
import CityInfo from '../CityInfo';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

const WeatherWrapper = styled.div`
  padding: 10rem 15rem;

  .header {
    &__search {
      margin: 0 auto;
      width: 60rem;
    }
  }

  .wrapper {
    margin-bottom: 3rem;
  }
`;

function Home() {
  return (
    <WeatherWrapper>
      <header className="header">
        <div className="header__search">
          <SearchBox placeholder="Enter a city name" />
        </div>
      </header>
      <main>
        <div className="wrapper">
          <CityInfo />
        </div>
        <div className="wrapper">
          <Favorites />
        </div>
        <div className="wrapper">
          <TopCities />
        </div>
      </main>
    </WeatherWrapper>
  );
}

export default Home;
