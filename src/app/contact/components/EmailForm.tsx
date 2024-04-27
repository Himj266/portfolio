import { TextInput } from "@/core/components/formFields/TextInput";

export const EmailForm = (): JSX.Element => {
  return (
    <div>
      <h2 className="text-5xl font-light text-gray-700">Send me an email</h2>
      <div className="pt-20">
        <form>
          <div className="flex">
            <div className="flex flex-col gap-10">
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
            <TextInput
              label="Message"
              id="message"
              value={undefined}
              onChange={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
