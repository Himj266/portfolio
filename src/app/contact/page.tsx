//components
import { ImageCard } from "./components/ImageCard";
import { ContactCard } from "./components/ContactCard";

export default function Contact() {
  return (
    <div className="flex w-full justify-around py-16 px-20 gap-5 shadow border-solid">
      <ContactCard />
      <ImageCard />
    </div>
  );
}
