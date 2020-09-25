import { useState, useCallback } from 'react';

export default function useLocalStorage() {
  const [item, setItem] = useState('');

  const getItem = useCallback(() => {}, []);

  return {
    item,
    getItem,
    setItem
  };
}
