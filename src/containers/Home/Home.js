import React from 'react';
// components
import Container from '../../components/Container';
import Panel from '../../components/Panel';
import Search from '../Search';
import SearchResult from '../SearchResult';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

function Home() {
  return (
    <Container>
      <Panel>
        <header>
          <Search />
        </header>
      </Panel>
      <main>
        <Panel>
          <SearchResult />
        </Panel>
        <Panel>
          <Favorites />
        </Panel>
        <Panel>
          <Panel.Title>Top 15 cities by population (A-Z)</Panel.Title>
          <TopCities />
        </Panel>
      </main>
    </Container>
  );
}

export default Home;
