import React from 'react';
// components
import Container from '../../components/Container';
import Search from '../../containers/Search';
import CityWeather from '../../containers/CityWeather';
import Favorites from '../../containers/Favorites';
import TopCities from '../../containers/TopCities';
import Text from '../../components/Text';

function HomePage() {
  return (
    <Container>
      <Container.Panel>
        <header>
          <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Text size="3.5rem" primary>
              Weather App
            </Text>
          </h1>
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
