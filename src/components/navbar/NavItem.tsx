import Link from "next/link";

export const NavItem = ({
  title,
  src,
}: {
  title: string;
  src: string;
}): JSX.Element => (
  <li className="text-white text-2xl">
    <Link href={src}>{title}</Link>
  </li>
);
