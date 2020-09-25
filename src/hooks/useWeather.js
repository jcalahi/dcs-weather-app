import { useState, useCallback, useContext } from 'react';
import axios from 'axios';

import WeatherContext from '../context/WeatherContext';

import { WEATHER_BASE_URL, ACTION_TYPES } from '../constants';

export default function useWeather() {
  const [, dispatch] = useContext(WeatherContext.WeatherStateContext);

  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const fetchWeather = useCallback(async (query, actionType) => {
    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query
    };

    try {
      setIsLoadingWeather(true);
      const { data } = await axios.get(`${WEATHER_BASE_URL}/current`, {
        params
      });
      if (data.error) {
        setErrorMessage(data.error.info);
      } else {
        dispatch({ type: ACTION_TYPES[actionType], weather: data });
      }
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setIsLoadingWeather(false);
    }
  }, [dispatch]);

  return {
    fetchWeather,
    isLoadingWeather,
    errorMessage
  };
}
