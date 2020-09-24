import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { WEATHER_BASE_URL } from '../constants';

export default function useForecast(query) {
  const [forecast, setForecast] = useState([]);
  const [isFetchingForecast, setIsFetchingForecast] = useState(false);
  const [errorForecastMsg, setErrorForecastMsg] = useState('');

  const fetchData = useCallback(async () => {
    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      forecast_days: 7,
      query
    };

    try {
      setIsFetchingForecast(true);
      const { data } = await axios.get(`${WEATHER_BASE_URL}/forecast`, { params });
      console.log(data);
    } catch (error) {
      setErrorForecastMsg(error);
    } finally {
      setIsFetchingForecast(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData(query);
  }, [fetchData, query]);

  return {
    forecast,
    isFetchingForecast
  };
}
