import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((elementRef, options = {}) => {
    if (elementRef?.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        ...options
      });
    }
  }, []);

  return scrollTo;
};