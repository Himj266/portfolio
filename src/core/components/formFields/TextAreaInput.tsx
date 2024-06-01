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

export const TextAreaInput = ({
  label,
  id,
  value,
  onAction,
  className,
}: Props): JSX.Element => {
  return (
    <FormControl label={label} id={id}>
      <textarea
        id={id}
        className={`${INPUT_CLASSNAMES} ${className ?? ""}`}
        value={value}
        onChange={(e) =>
          onAction({
            type: "FORM_INPUT_CHANGE",
            payload: {
              fieldId: id,
              value: e.target.value,
            },
          })
        }
      />
    </FormControl>
  );
};
