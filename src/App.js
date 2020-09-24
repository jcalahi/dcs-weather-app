import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// context
import WeatherContext from './context/WeatherContext';
// components
import Home from './containers/Home';
import City from './containers/City';
// @todo add 404 catch all route
console.log(process.env.PUBLIC_URL);
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <WeatherContext.WeatherStateProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={City} />
        </Switch>
      </WeatherContext.WeatherStateProvider>
    </Router>
  );
}

export default App;
