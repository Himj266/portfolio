//components
import { Navbar } from "@/components/navbar";

//types
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};
