import { useCallback, useState } from "react";

//types
import { UseFormAction } from "./types";

export const useForm = <T>(): {
  values: T;
  onAction: (action: UseFormAction) => void;
} => {
  const [values, setValues] = useState<T>({} as T);

  const onAction = useCallback((action: UseFormAction) => {
    switch (action.type) {
      case "FORM_INPUT_CHANGE":
        {
          const { fieldId, value } = action.payload;

          setValues((prevValues) => ({ ...prevValues, [fieldId]: value }));
        }
        break;
      default:
        break;
    }
  }, []);

  return { onAction, values };
};
