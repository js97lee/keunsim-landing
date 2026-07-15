import { useEffect, useState } from "react";

export function useAutoSlider(itemCount, interval = 3600) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (itemCount <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, itemCount]);

  return [activeIndex, setActiveIndex];
}
