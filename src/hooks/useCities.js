import { useState, useContext } from 'react';
import axios from 'axios';

import WeatherContext from '../context/WeatherContext';

import { WEATHER_BASE_URL, ACTION_TYPES } from '../constants';

export default function useCities() {
  const [{ cities }, dispatch] = useContext(WeatherContext.WeatherStateContext);

  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [errorCitiesMsg, setErrorCitiesMsg] = useState();

  // const fetchStoredData = () => {
  //   const store = window.localStorage.getItem('storedCities');
  //   dispatch({ type: ACTION_TYPES.ADD_CITIES, cities: JSON.parse(store)});
  // };

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
      // setIsLoadingCities(true);
      // const { data } = await axios.get(`${WEATHER_BASE_URL}/current`, {
      //   params
      // });
      // const sortedCities = data.sort((a, b) =>
      //   a.location.name.localeCompare(b.location.name)
      // );
      // window.localStorage.setItem('storedCities', JSON.stringify(sortedCities));
      const data = window.localStorage.getItem('storedCities');
      dispatch({ type: ACTION_TYPES.ADD_CITIES, cities: JSON.parse(data) });
    } catch (error) {
      setErrorCitiesMsg(error);
    } finally {
      setIsLoadingCities(false);
    }
  };

  useState(() => {
    if (cities.length === 0) {
      // fetchStoredData();
      fetchData();
    }
  }, []);

  return {
    isLoadingCities,
    errorCitiesMsg
  };
}
