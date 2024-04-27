import { TextInput } from "@/core/components/formFields/TextInput";
import { TextAreaInput } from "@/core/components/formFields/TextAreaInput";

export const FormBody = (): JSX.Element => {
  return (
    <form>
      <div className="w-full flex gap-10">
        <div className="w-full flex flex-col gap-10">
          <TextInput
            label="Name"
            id="name"
            value={undefined}
            onChange={() => {}}
          />
          <TextInput
            label="Email"
            id="email"
            value={undefined}
            onChange={() => {}}
          />
        </div>
        <div className="w-full">
          <TextAreaInput
            label="Message"
            id="message"
            value={undefined}
            onChange={() => {}}
            className="!h-full"
          />
        </div>
      </div>
    </form>
  );
};
