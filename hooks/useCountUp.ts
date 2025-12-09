import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
}

export function useCountUp({ end, duration = 2000, delay = 0 }: UseCountUpOptions) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();

      if (now < startTime) {
        return;
      }

      if (now >= endTime) {
        setCount(end);
        clearInterval(timer);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, delay]);

  return count;
}
