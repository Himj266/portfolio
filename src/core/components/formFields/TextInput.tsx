//components
import { FormControl, Props as FormControlProps } from "./FormControl";

interface Props extends Omit<FormControlProps, "children"> {
  value: string | undefined;
  onChange: (value: string) => void;
}

export const TextInput = ({ label, id, value }: Props): JSX.Element => {
  return (
    <FormControl label={label} id={id}>
      <input type="text" id={id} />
    </FormControl>
  );
};
