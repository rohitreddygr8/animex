import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    return () => {
      window.onresize = null;
    };
  }, []);

  return [height, width];
};
