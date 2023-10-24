//components
import { SocialIcon } from 'react-social-icons';

export const Sidebar = (): JSX.Element => (
  <div className="h-screen border-r-2 border-gray-400 p-2 pt-4">
    <div className="flex flex-col gap-2">
      <SocialIcon url="https://x.com/DeMonk26" bgColor="transparent" />
      <SocialIcon
        url="https://www.instagram.com/himj26/"
        bgColor="transparent"
      />
    </div>
  </div>
);
