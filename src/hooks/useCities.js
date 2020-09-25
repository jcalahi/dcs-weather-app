import { useState, useContext } from 'react';
import axios from 'axios';

import WeatherContext from '../context/WeatherContext';

import { WEATHER_BASE_URL, ACTION_TYPES } from '../constants';

export default function useCities() {
  const [{ cities }, dispatch] = useContext(WeatherContext.WeatherStateContext);

  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [errorCitiesMsg, setErrorCitiesMsg] = useState();

  const fetchData = async () => {
    const { data: topCities } = await axios.get('cities.json');
    const query = topCities
      .reduce((prev, curr) => [...prev, curr.Name], [])
      .join(';');

    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query
    };

    try {
      setIsLoadingCities(true);
      const { data } = await axios.get(`${WEATHER_BASE_URL}/current`, {
        params
      });
      const sortedCities = data.sort((a, b) =>
        a.location.name.localeCompare(b.location.name)
      );
      dispatch({ type: ACTION_TYPES.ADD_CITIES, cities: sortedCities });
    } catch (error) {
      setErrorCitiesMsg(error);
    } finally {
      setIsLoadingCities(false);
    }
  };

  useState(() => {
    if (cities.length === 0) {
      // fetchData();
    }
  }, []);

  return {
    isLoadingCities,
    errorCitiesMsg
  };
}
