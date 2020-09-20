import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
// components
import WeatherHome from './containers/WeatherHome';
import WeatherDetail from './containers/WeatherDetail';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={WeatherHome} />
        <Route exact path="/details" component={WeatherDetail} />
      </Switch>
    </Router>
  );
}

export default App;
