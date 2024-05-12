//types
import type { ReactNode } from "react";

export const SectionCard = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element => (
  <div
    className={className ? `w-full ${className}` : "w-full"}
    style={{ width: "91.2rem" }}
  >
    {children}
  </div>
);
