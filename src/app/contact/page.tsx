//components
import { Image } from "./components/Image";
import { ContactCard } from "./components/ContactCard";

export default function Contact() {
  return (
    <div className="flex w-full justify-around pt-32 px-20 gap-10 shadow border-solid">
      <div className="pb-10">
        <ContactCard />
      </div>
      <Image />
    </div>
  );
}
