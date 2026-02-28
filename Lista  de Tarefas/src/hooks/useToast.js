import { useState, useCallback } from 'react';

export function useToast(duration = 3000) {
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  const showToast = useCallback((message, type = 'info') => {
    setToast({ show: true, message, type });
    
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'info' });
    }, duration);
  }, [duration]);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: '', type: 'info' });
  }, []);

  return { toast, showToast, hideToast };
}