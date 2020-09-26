import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// context
import WeatherContext from './context/WeatherContext';
// components
import HomePage from './containers/HomePage';
import CityPage from './containers/CityPage';
// @todo add 404 catch all route
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <WeatherContext.WeatherStateProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/details" component={CityPage} />
        </Switch>
      </WeatherContext.WeatherStateProvider>
    </Router>
  );
}

export default App;
