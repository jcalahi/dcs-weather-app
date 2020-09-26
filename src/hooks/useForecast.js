import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { WEATHER_BASE_URL } from '../constants';

export default function useForecast(query) {
  const [forecast, setForecast] = useState({});
  const [isLoadingForecoast, setIsLoadingForecast] = useState(false);
  const [errorForecastMsg, setErrorForecastMsg] = useState('');

  const fetchData = useCallback(async () => {
    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      forecast_days: 7,
      query
    };

    try {
      setIsLoadingForecast(true);
      const { data } = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
        params
      });
      // store for offline reference
      window.localStorage.setItem(
        'storedForecast',
        JSON.stringify(data.forecast)
      );
      setIsLoadingForecast(false);
      setForecast(data.forecast);
    } catch (error) {
      const store = window.localStorage.getItem('storedForecast');

      setIsLoadingForecast(false);
      setForecast(JSON.parse(store));
      setErrorForecastMsg(error);
    }
  }, [query]);

  useEffect(() => {
    fetchData(query);
  }, [fetchData, query]);

  return {
    fetchData,
    forecast,
    isLoadingForecoast,
    errorForecastMsg
  };
}
