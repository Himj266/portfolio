//components
import { FormControl, Props as FormControlProps } from "./FormControl";

//constants
import { INPUT_CLASSNAMES } from "./constants/inputClassNames";

interface Props extends Omit<FormControlProps, "children"> {
  value: string | undefined;
  onChange: (value: string) => void;
  className?: string;
}

export const TextInput = ({
  label,
  id,
  value,
  className,
}: Props): JSX.Element => {
  return (
    <FormControl label={label} id={id}>
      <input
        type="text"
        id={id}
        className={`${INPUT_CLASSNAMES} ${className ?? ""}`}
      />
    </FormControl>
  );
};
