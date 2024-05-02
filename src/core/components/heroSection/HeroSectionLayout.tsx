//types
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const HeroSectionLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="w-full flex justify-center pt-8 pb-24 px-20 gap-5 shadow border-solid">
      <div className="w-full" style={{ maxWidth: "1024px" }}>
        {children}
      </div>
    </div>
  );
};
