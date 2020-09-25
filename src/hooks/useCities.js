import { useState, useCallback, useContext } from 'react';
import axios from 'axios';

import WeatherContext from '../context/WeatherContext';

import { WEATHER_BASE_URL, ACTION_TYPES } from '../constants';

export default function useCities() {
  const [, dispatch] = useContext(WeatherContext.WeatherStateContext);
  const [errorCitiesMsg, setErrorCitiesMsg] = useState();

  const fetchCities = useCallback(async () => {
    const { data: topCities } = await axios.get('cities.json');
    const query = topCities
      .reduce((prev, curr) => [...prev, curr.Name], [])
      .join(';');

    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query
    };

    try {
      dispatch({ type: ACTION_TYPES.LOADING_CITIES, loading: true });
      const { data } = await axios.get(`${WEATHER_BASE_URL}/current`, {
        params
      });
      const sortedCities = data.sort((a, b) =>
        a.location.name.localeCompare(b.location.name)
      );
      // window.localStorage.setItem('storedCities', JSON.stringify(sortedCities));
      // const data = window.localStorage.getItem('storedCities');
      // dispatch({ type: ACTION_TYPES.ADD_CITIES, cities: JSON.parse(data) });
      dispatch({ type: ACTION_TYPES.ADD_CITIES, cities: sortedCities });
    } catch (error) {
      setErrorCitiesMsg(error);
    } finally {
      dispatch({ type: ACTION_TYPES.LOADING_CITIES, loading: false });
    }
  }, [dispatch]);

  return {
    fetchCities,
    errorCitiesMsg
  };
}
