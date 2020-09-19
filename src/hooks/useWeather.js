import { useState, useCallback } from 'react';
import axios from 'axios';
import { WEATHER_BASE_URL } from '../constants';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function useWeather() {
  const [weather, setWeather] = useState({});
  const [isFetchingCurrent, setIsFetchingCurrent] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const fetchCurrent = useCallback(async (query) => {
    const REQUEST_URL = `${WEATHER_BASE_URL}/current?access_key=${API_KEY}&query=${query}`;
    try {
      setIsFetchingCurrent(true);
      const { data } = await axios.get(REQUEST_URL);
      if (data.error) {
        setErrorMessage(data.error.info);
      } else {
        setWeather(data);
      }
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setIsFetchingCurrent(false);
    }
  }, []);

  return [
    weather,
    isFetchingCurrent,
    fetchCurrent,
    errorMessage
  ];
}