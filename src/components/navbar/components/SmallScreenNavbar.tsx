//components
import { NavbarLayoutWithLogo } from "./NavbarLayoutWithLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import { Typography } from "@/core/components/atomic/Typography";
import Link from "next/link";

//hooks
import { useToggle } from "@/core/hooks/useToggle";

//constants
import { NAV_ITEMS } from "../constants/navItems";

const NavMenuItem = ({ title, src }: { title: string; src: string }) => (
  <div className="w-full flex items-center justify-center p-3">
    <Typography variant="text-3" className="text-gray-100 cursor-pointer">
      <Link href={src}>{title}</Link>
    </Typography>
  </div>
);

export const SmallScreenNavbar = () => {
  const [showMenu, toggleSetShowMenu] = useToggle(false);

  return (
    <div className="relative">
      <NavbarLayoutWithLogo>
        <div
          className="py-4 cursor-pointer"
          onClick={() => toggleSetShowMenu()}
        >
          <GiHamburgerMenu size={30} color="white" />
        </div>
      </NavbarLayoutWithLogo>
      {showMenu ? (
        <div className="flex flex-col bg-slate-950 absolute w-full border border-gray-500">
          {NAV_ITEMS.map(({ title, src }, index) => (
            <div key={src} className="w-full">
              <NavMenuItem title={title} src={src} />
              {index === NAV_ITEMS.length - 1 ? null : (
                <div className="w-full border-t border-gray-400" />
              )}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
