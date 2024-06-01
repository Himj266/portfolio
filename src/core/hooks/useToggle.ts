import { useState, useCallback } from "react";

export const useToggle = (
  intialValue = false
): [boolean, (nextValue?: boolean) => void] => {
  const [toggleValue, setToggleValue] = useState(false);

  const toggle = useCallback((nextValue?: boolean) => {
    if (typeof nextValue === "boolean") setToggleValue(nextValue);
    else {
      setToggleValue((prevValue) => !prevValue);
    }
  }, []);

  return [toggleValue, toggle];
};
