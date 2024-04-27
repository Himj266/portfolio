//components
import { SocialIcon, social_icons, networkFor } from "react-social-icons";
import Link from "next/link";

//constants
import { SOCIAL_PROFILES } from "@/core/constants/socialProfiles";

export const ContactCard = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-9xl font-extrabold text-gray-700">contact.</h1>
      <p className="text-4xl font-light text-gray-400">
        Get in touch with me via social media or email.
      </p>
      <div className="pt-10">
        <ul className="grid grid-cols-2 gap-10">
          {SOCIAL_PROFILES.map(({ url, label }) => (
            <li key={url}>
              <Link
                className="flex items-center gap-8"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon as="div" url={url} />
                <span
                  style={{ color: social_icons.get(networkFor(url))?.color }}
                  className="text-2xl font-medium"
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
