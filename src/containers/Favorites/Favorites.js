import React, { useContext } from 'react';
import styled from 'styled-components';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import HeaderTitle from '../../components/Header/HeaderTitle';
import Weather from '../../components/Weather';
// etc
import { ACTION_TYPES } from '../../constants';

const { WeatherCard } = Weather;

const FavoritesContainer = styled.div`
  & > .header {
    .header__title {
      font-size: 3.5rem;
      margin: 1rem 0;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(auto, 10rem);
`;

function Favorites() {
  const [{ favorites }, dispatch] = useContext(WeatherContext.WeatherStateContext);

  const renderFavorites = () => {
    return favorites.map((favorite, idx) => {
      const { current, location } = favorite;
      return (
        <WeatherCard
          key={idx}
          name={location.name}
          region={location.region}
          icon={current.weather_icons[0]}
          temp={current.temperature}
          isFavorite
          onCardClick={() => dispatch({ type: ACTION_TYPES.TOGGLE_FAVORITES, weather: favorite })}
        />
      );
    });
  };

  if (favorites.length === 0) return null;

  return (
    <FavoritesContainer>
      <HeaderTitle title={`Favorites (${favorites.length})`} />
      <GridContainer>
        {renderFavorites()}
      </GridContainer>
    </FavoritesContainer>
  );
}

export default Favorites;
