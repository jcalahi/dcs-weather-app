import React from 'react';
import styled from 'styled-components';
// components
import Wrapper from '../../components/Wrapper';
import SearchBox from '../SearchBox';
import CityInfo from '../CityInfo';
import Favorites from '../Favorites';
import TopCities from '../TopCities';

const HomeWrapper = styled.div`
  padding: 10rem 15rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <Wrapper>
        <header>
          <SearchBox />
        </header>
      </Wrapper>
      <main>
        <Wrapper>
          <CityInfo />
        </Wrapper>
        <Wrapper>
          <Favorites />
        </Wrapper>
        <Wrapper>
          <TopCities />
        </Wrapper>
      </main>
    </HomeWrapper>
  );
}

export default Home;
