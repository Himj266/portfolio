//types
import type { ReactNode } from "react";

export interface Props {
  label: string;
  id: string;
  children: ReactNode;
}

export const FormControl = ({ label, id, children }: Props): JSX.Element => {
  return (
    <div className="flex flex-col h-full gap-2">
      <label htmlFor={id} className="text-3xl text-gray-500 font-light">
        {label}
      </label>
      {children}
    </div>
  );
};
