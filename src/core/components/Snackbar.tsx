import { useEffect } from "react";
import { Typography } from "./atomic/Typography";

interface Props {
  message: string;
  setSnackbarText: (message?: string) => void;
}

export const Snackbar = ({ message, setSnackbarText }: Props) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => setSnackbarText(), 3 * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [setSnackbarText]);

  return (
    <div
      className="fixed p-4 bottom-2 bg-slate-950 rounded-lg left-1/2"
      style={{ transform: "translate(-50%,0)" }}
    >
      <Typography variant="normalBody" className="!text-gray-100">
        {message}
      </Typography>
    </div>
  );
};
