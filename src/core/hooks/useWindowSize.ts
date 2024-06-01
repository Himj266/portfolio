import { useState, useEffect } from "react";

//utils
import { isBrowser } from "@/core/utils/isBrowser";

export const useWindowSize = (): {
  width: number | undefined;
  height: number | undefined;
} => {
  const [{ width, height }, setWindowSize] = useState({
    width: isBrowser ? window.innerWidth : undefined,
    height: isBrowser ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (isBrowser) {
      const handler = () =>
        setWindowSize(() => ({
          width: window.innerWidth,
          height: window.innerHeight,
        }));

      window.addEventListener("resize", handler);
      return () => window.removeEventListener("resize", handler);
    }
  }, []);

  return { width, height };
};
