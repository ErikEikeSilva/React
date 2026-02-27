import { useState, useEffect } from 'react';
import { loadFromStorage, saveToStorage } from '../utils/storage';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = loadFromStorage(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    saveToStorage(key, value);
  }, [key, value]);

  return [value, setValue];
};