import React from 'react';
import useWeather from '../hooks/useWeather';

function App() {
  const [weather, isFetchingCurrent, fetchCurrent, errorMessage] = useWeather();
  return (
    <div>
      <button onClick={() => fetchCurrent('Muntinlupa')}>Fetch</button>
      <p>Is loading: {isFetchingCurrent}</p>
    </div>
  );
}

export default App;
