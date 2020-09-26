import React from 'react';
// components
import Container from '../../components/Container';
import Search from '../../containers/Search';
import CityWeather from '../../containers/CityWeather';
import Favorites from '../../containers/Favorites';
import TopCities from '../../containers/TopCities';

function HomePage() {
  return (
    <Container>
      <Container.Panel>
        <header>
          <Search />
        </header>
      </Container.Panel>
      <main>
        <Container.Panel>
          <CityWeather source="search" />
        </Container.Panel>
        <Container.Panel>
          <Favorites />
        </Container.Panel>
        <Container.Panel>
          <TopCities />
        </Container.Panel>
      </main>
    </Container>
  );
}

export default HomePage;
