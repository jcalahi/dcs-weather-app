import React from 'react';
import styled from 'styled-components';
// components
import Container from '../../components/Container';
import Search from '../Search';
import SearchResult from '../SearchResult';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

const SegmentWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

function Home() {
  return (
    <Container>
      <SegmentWrapper>
        <header>
          <Search />
        </header>
      </SegmentWrapper>
      <main>
        <SegmentWrapper>
          <SearchResult />
        </SegmentWrapper>
        <SegmentWrapper>
          <Favorites />
        </SegmentWrapper>
        <SegmentWrapper>
          <TopCities />
        </SegmentWrapper>
      </main>
    </Container>
  );
}

export default Home;
