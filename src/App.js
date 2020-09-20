import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import WeatherHome from './containers/WeatherHome';
import WeatherDetail from './containers/WeatherDetail';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/" component={WeatherHome} />
        <Route exact path="/details" component={WeatherDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
