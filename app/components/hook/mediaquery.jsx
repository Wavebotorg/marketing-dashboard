
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
}

export function useIsMediumOrSmallScreen() {
  const isMedium = useMediaQuery('(max-width: 768px)');
  const isSmall = useMediaQuery('(max-width: 640px)');

  return isMedium || isSmall;
}
