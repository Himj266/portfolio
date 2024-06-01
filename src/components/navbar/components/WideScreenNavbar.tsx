import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { NavbarLayoutWithLogo } from "./NavbarLayoutWithLogo";

import { SOCIAL_PROFILES } from "@/core/constants/socialProfiles";
import { NAV_ITEMS } from "../constants/navItems";

export const WideScreenNavbar = () => {
  return (
    <NavbarLayoutWithLogo>
      <nav>
        <ul className="flex gap-10 items-center">
          {NAV_ITEMS.map(({ src, title }) => (
            <li className="text-white text-2xl" key={src}>
              <Link href={src}>{title}</Link>
            </li>
          ))}
          <li className="pl-5">
            <nav>
              <ul>
                {SOCIAL_PROFILES.map(({ url }) => (
                  <SocialIcon url={url} key={url} bgColor="transparent" />
                ))}
              </ul>
            </nav>
          </li>
        </ul>
      </nav>
    </NavbarLayoutWithLogo>
  );
};
