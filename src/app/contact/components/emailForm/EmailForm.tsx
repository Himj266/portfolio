"use client";
import { FormEvent, useCallback, useState } from "react";

//comps
import { FormBody } from "./FormBody";
import { Typography } from "@/core/components/atomic/Typography";
import { Snackbar } from "@/core/components/Snackbar";

//hooks
import { useForm } from "@/core/hooks/useForm";

//types
import { EmailFormValues } from "@/emailForm/types";

export const EmailForm = (): JSX.Element => {
  const { values, onAction } = useForm<EmailFormValues>();
  const [snackbarText, setSnackbarText] = useState<string | undefined>();

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const res = await fetch("/sendEmail", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 200) {
          setSnackbarText("Email Sent Sucessfully. Thanks for contacting!!");
        } else {
          setSnackbarText("Failed to Send the Email. Please try again!!");
        }
      } catch (e) {
        setSnackbarText("Failed to Send the Email. Please try again!!");
      }
    },
    [values]
  );

  return (
    <div className="w-full">
      <Typography $as="h2" variant="subHeading">
        Send me an email
      </Typography>
      <div className="flex flex-col gap-10 pt-14">
        <FormBody values={values} onAction={onAction} />
        <div className="flex justify-end self-end">
          <button
            onClick={onSubmit}
            className="bg-gray-800 border border-gray-300 text-gray-300 text-2xl rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Send Email
          </button>
        </div>
      </div>
      {snackbarText ? (
        <Snackbar message={snackbarText} setSnackbarText={setSnackbarText} />
      ) : null}
    </div>
  );
};
