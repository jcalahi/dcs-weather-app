import React, { useContext } from 'react';
// context
import WeatherContext from '../../context/WeatherContext';
// components
import { default as TextHeader } from '../../components/TextHeader';

const { H2 } = TextHeader;

function Favorites() {
  const [{ favorites }, dispatch] = useContext(WeatherContext.WeatherStateContext);
  if (favorites.length === 0) return null;
  return (
    <div>
      <H2>Favorites {" "}{`(${favorites.length})`}</H2>
    </div>
  );
}

export default Favorites;
