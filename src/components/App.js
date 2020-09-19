import Axios from 'axios';
import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import history from '../history';
import useWeather from '../hooks/useWeather';

function App() {
  const [weather, isFetchingCurrent, fetchCurrent, errorMessage] = useWeather();

  useEffect(() => {
    async function getData() {
      const response = await axios.get('./data.json');
    }
    getData();
  }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={} />
        <Route exact path="/details" component={} />
      </Switch>
    </Router>
  );
}

export default App;
