import { useEffect } from 'react';

export const useCarouselTimer = (isPlaying: boolean, update: () => void, intervalInMillis: number) => {
  useEffect(() => {
    let interval: number | undefined = undefined;

    if (isPlaying) interval = setInterval(update, intervalInMillis);
    else clearInterval(interval);

    return () => clearInterval(interval);
  });
};
