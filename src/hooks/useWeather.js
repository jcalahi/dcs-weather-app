import { useState, useCallback, useContext } from 'react';
import axios from 'axios';

import WeatherContext from '../context/WeatherContext';

import { WEATHER_BASE_URL, ACTION_TYPES } from '../constants';

export default function useWeather() {
  const [, dispatch] = useContext(WeatherContext.WeatherStateContext);
  const [errorMessage, setErrorMessage] = useState({});

  const fetchWeather = useCallback(
    async (query, actionType) => {
      const params = {
        access_key: process.env.REACT_APP_WEATHER_API_KEY,
        query
      };

      try {
        dispatch({ type: ACTION_TYPES.LOADING_WEATHER, loading: true });
        const { data } = await axios.get(`${WEATHER_BASE_URL}/current`, {
          params
        });

        dispatch({ type: ACTION_TYPES.LOADING_WEATHER, loading: false });
        if (data.error) {
          setErrorMessage(data.error.info);
        } else {
          // store for offline reference
          ACTION_TYPES[actionType] === 'SEARCH_RESULT'
            ? window.localStorage.setItem('storedSearch', JSON.stringify(data))
            : window.localStorage.setItem(
                'storedWeather',
                JSON.stringify(data)
              );
          dispatch({ type: ACTION_TYPES[actionType], weather: data });
        }
      } catch (error) {
        const store = window.localStorage.getItem('storedWeather');

        dispatch({ type: ACTION_TYPES.LOADING_WEATHER, loading: false });
        dispatch({
          type: ACTION_TYPES[actionType],
          weather: JSON.parse(store)
        });
        setErrorMessage(error);
      }
    },
    [dispatch]
  );

  const resetWeather = useCallback(() => {
    dispatch({ type: ACTION_TYPES.RESET_WEATHER });
  }, [dispatch]);

  return {
    fetchWeather,
    resetWeather,
    errorMessage
  };
}
