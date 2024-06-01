//components
import { FormControl, Props as FormControlProps } from "./FormControl";

//constants
import { INPUT_CLASSNAMES } from "./constants/inputClassNames";

//types
import { UseFormOnAction } from "@/core/hooks/useForm/types";

interface Props extends Omit<FormControlProps, "children"> {
  value: string | undefined;
  onAction: UseFormOnAction;
  className?: string;
}

export const TextInput = ({
  label,
  id,
  value,
  className,
  onAction,
}: Props): JSX.Element => {
  return (
    <FormControl label={label} id={id}>
      <input
        type="text"
        id={id}
        value={value}
        className={`${INPUT_CLASSNAMES} ${className ?? ""}`}
        onChange={(e) =>
          onAction({
            type: "FORM_INPUT_CHANGE",
            payload: { fieldId: id, value: e.target.value },
          })
        }
      />
    </FormControl>
  );
};
