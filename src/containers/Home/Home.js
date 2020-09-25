import React from 'react';
// components
import Container from '../../components/Container';
import Search from '../Search';
import SearchResult from '../SearchResult';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

function Home() {
  return (
    <Container>
      <Container.Panel>
        <header>
          <Search />
        </header>
      </Container.Panel>
      <main>
        <Container.Panel>
          <SearchResult />
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

export default Home;
