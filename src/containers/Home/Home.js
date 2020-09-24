import React from 'react';
import styled from 'styled-components';
// components
import SearchBox from '../SearchBox';
import CityInfo from '../CityInfo';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

const HomeWrapper = styled.div`
  padding: 10rem 15rem;
`;

const SegmentWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <SegmentWrapper>
        <header>
          <SearchBox />
        </header>
      </SegmentWrapper>
      <main>
        <SegmentWrapper>
          <CityInfo />
        </SegmentWrapper>
        <SegmentWrapper>
          <Favorites />
        </SegmentWrapper>
        <SegmentWrapper>
          <TopCities />
        </SegmentWrapper>
      </main>
    </HomeWrapper>
  );
}

export default Home;
