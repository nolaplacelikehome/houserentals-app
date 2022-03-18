import React, { useEffect, useRef } from "react";

interface RefTarget {
  offsetWidth: number,
  offsetHeight: number,
}

export function useDimensions(ref: React.MutableRefObject<HTMLElement>) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);
  
  return dimensions.current;
};