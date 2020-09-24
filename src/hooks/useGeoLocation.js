import { useState, useCallback } from 'react';

export function useGeoLocation(options = {}) {
  const [position, setPosition] = useState();
  const [error, setError] = useState();

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setPosition(`${latitude},${longitude}`);
  };

  const onError = (error) => {
    setError(error);
  };

  const getPosition = useCallback(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(onSuccess, onError, options);
  }, [options]);

  return {
    position,
    getPosition,
    error,
  };
}
