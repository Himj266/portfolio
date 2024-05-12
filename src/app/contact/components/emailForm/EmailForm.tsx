import { FormBody } from "./FormBody";
import { Typography } from "@/core/components/atomic/Typography";

export const EmailForm = (): JSX.Element => {
  return (
    <div className="w-full">
      <Typography $as="h2" variant="subHeading">
        Send me an email
      </Typography>
      <div className="flex flex-col gap-10 pt-14">
        <FormBody />
        <div className="flex justify-end self-end">
          <button className="bg-gray-800 border border-gray-300 text-gray-300 text-2xl rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};
