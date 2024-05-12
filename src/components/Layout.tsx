//components
import { Navbar } from "@/components/navbar";

//types
import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0">
        <Navbar />
      </div>
      {children}
    </div>
  );
};
