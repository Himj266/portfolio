import { ReactNode, createElement } from "react";

interface Props {
  className?: string;
  variant: "normalBody" | "subHeading" | "text-3" | "text-7";
  children: string | ReactNode;
  $as?: string;
}

export const Typography = ({
  $as = "span",
  children,
  variant,
  className,
  ...restProps
}: Props) => {
  let variantClassNames = "";

  switch (variant) {
    case "normalBody":
      variantClassNames = "text-2xl text-gray-500";
      break;
    case "text-3":
      variantClassNames = "text-3xl";
      break;
    case "subHeading":
      variantClassNames = "text-5xl font-light text-gray-700";
      break;
    case "text-7":
      variantClassNames = "font-extrabold text-7xl text-gray-700";
      break;
    default:
      break;
  }

  return createElement(
    $as,
    {
      ...restProps,
      className: className
        ? `${variantClassNames} ${className}`
        : `${variantClassNames}`,
    },
    children
  );
};
