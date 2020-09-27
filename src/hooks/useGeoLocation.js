import { useState, useCallback } from 'react';

export function useGeoLocation(options = {}) {
  const [position, setPosition] = useState();
  const [error, setError] = useState();
  const [isLoadingPosition, setIsLoadingPosition] = useState(false);

  const onSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setPosition(`${latitude},${longitude}`);
    setIsLoadingPosition(false);
  };

  const onError = (error) => {
    setError(error);
    setIsLoadingPosition(false);
  };

  const getPosition = useCallback(() => {
    const { geolocation } = navigator;
    setIsLoadingPosition(true);

    if (!geolocation) {
      setIsLoadingPosition(false);
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(onSuccess, onError, options);
  }, [options]);

  return {
    isLoadingPosition,
    position,
    getPosition,
    error
  };
}
