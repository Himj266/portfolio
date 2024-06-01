//types
import type { ReactNode } from "react";

export const NavbarLayoutWithLogo = ({ children }: { children: ReactNode }) => {
  return (
    <header className="bg-slate-950 px-20">
      <div className="flex justify-between">
        <div>Logo </div>
        {children}
      </div>
    </header>
  );
};
