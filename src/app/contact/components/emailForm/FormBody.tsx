import { TextInput } from "@/core/components/formFields/TextInput";
import { TextAreaInput } from "@/core/components/formFields/TextAreaInput";

//constants
import { FORM_FIELDS } from "../../../../emailForm/FormFields";

//types
import { UseFormOnAction } from "@/core/hooks/useForm/types";
import { EmailFormValues } from "@/emailForm/types";

interface Props {
  values: EmailFormValues;
  onAction: UseFormOnAction;
}

export const FormBody = ({ values, onAction }: Props): JSX.Element => {
  return (
    <form>
      <div className="w-full flex gap-10">
        <div className="w-full flex flex-col gap-10">
          <TextInput
            label="Name"
            id={FORM_FIELDS.name}
            value={values[FORM_FIELDS.name]}
            onAction={onAction}
          />
          <TextInput
            label="Email"
            id={FORM_FIELDS.email}
            value={values[FORM_FIELDS.email]}
            onAction={onAction}
          />
        </div>
        <div className="w-full">
          <TextAreaInput
            label="Message"
            id="message"
            value={values[FORM_FIELDS.message]}
            onAction={onAction}
            className="!h-full"
          />
        </div>
      </div>
    </form>
  );
};
