//components
import { SocialIcon, social_icons, networkFor } from "react-social-icons";
import Link from "next/link";
import { DescriptionCard } from "@/core/components/heroSection/DescriptionCard";

//constants
import { SOCIAL_PROFILES } from "@/core/constants/socialProfiles";

export const ContactCard = (): JSX.Element => {
  const profilesJSX = (
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
  );

  return (
    <DescriptionCard
      title="contact."
      subTitle=" Get in touch with me via social media or email."
      description={profilesJSX}
    />
  );
};
