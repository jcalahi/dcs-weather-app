import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// context
import WeatherContext from './context/WeatherContext';
// components
import Home from './containers/Home';
import CityInfo from './containers/CityInfo';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <WeatherContext.WeatherStateProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={CityInfo} />
        </Switch>
      </WeatherContext.WeatherStateProvider>
    </BrowserRouter>
  );
}

export default App;
