//types
import type { ReactNode } from "react";

const CLASSNAMES = 'w-full flex flex-col sm:flex-row items-center justify-between gap-5'

export const SectionCard = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element => (
  <div
    className={className ? `${CLASSNAMES} ${className}` : CLASSNAMES}
    style={{ maxWidth: "91.2rem" }}
  >
    {children}
  </div>
);
