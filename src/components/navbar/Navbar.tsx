import Link from "next/link";

import { SOCIAL_PROFILES } from "@/core/constants/socialProfiles";
import { SocialIcon } from "react-social-icons";

const NAV_ITEMS = [
  { title: "Home", src: "/home" },
  { title: "About", src: "/about" },
  { title: "Contact", src: "/contact" },
];

export const Navbar = () => {
  return (
    <header className="bg-slate-950 px-20">
      <div className="flex">
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
      </div>
    </header>
  );
};
