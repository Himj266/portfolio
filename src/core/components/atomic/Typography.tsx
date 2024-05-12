import { createElement } from "react";

interface Props {
  className?: string;
  variant: "normalBody";
  children: string;
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
