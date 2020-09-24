import { useState } from 'react';
import axios from 'axios';
import { WEATHER_BASE_URL } from '../constants';

export default function useCities() {
  const [cities, setCities] = useState([]);
  const [isFetchingCities, setIsFetchingCities] = useState(false);
  const [errorCitiesMsg, setErrorCitiesMsg] = useState();

  const fetchData = async () => {
    const { data: cities } = await axios.get('cities.json');
    const query = cities
      .reduce((prev, curr) => [...prev, curr.Name], [])
      .join(';');

    const params = {
      access_key: process.env.REACT_APP_WEATHER_API_KEY,
      query
    };

    try {
      setIsFetchingCities(true);
      const { data } = await axios.get(`${WEATHER_BASE_URL}/current`, { params });
      // const data = [];
      const sortedData = data.sort((a, b) =>
        a.location.name.localeCompare(b.location.name)
      );
      setCities(sortedData);
    } catch (error) {
      setErrorCitiesMsg(error);
    } finally {
      setIsFetchingCities(false);
    }
  };

  useState(() => {
    if (cities.length === 0) {
      fetchData();
    }
  }, []);

  return {
    cities,
    setCities,
    isFetchingCities,
    errorCitiesMsg
  };
}
