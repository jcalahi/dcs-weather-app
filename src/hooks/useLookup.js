import { useState, useCallback } from 'react';
import axios from 'axios';
import { WEATHER_BASE_URL } from '../constants';

export default function useLookup() {
  const [results, setResults] = useState([]);
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [errorLookupMsg, setErrorLookupMsg] = useState({});

  const lookup = useCallback(async (query) => {
    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query
    };

    try {
      setIsLookingUp(true);
      const { data } = await axios.get(`${WEATHER_BASE_URL}/autocomplete`, { params });
      if (data.error) {
        setErrorLookupMsg(data.error.info);
      } else {
        setResults(data.results);
      }
    } catch (error) {
      setErrorLookupMsg(error);
    } finally {
      setIsLookingUp(false);
    }
  }, []);

  return {
    results,
    setResults,
    isLookingUp,
    lookup,
    errorLookupMsg
  };
}
