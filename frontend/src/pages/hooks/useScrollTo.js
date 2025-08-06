import { useCallback } from 'react';

export const useScrollTo = () => {
  const scrollTo = useCallback((ref, options) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView(options);
    }
  }, []);

  return scrollTo;
};