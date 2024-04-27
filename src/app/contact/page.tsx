//components
import { ImageCard } from "./components/ImageCard";
import { ContactCard } from "./components/ContactCard";
import { EmailForm } from "./components/EmailForm";

export default function Contact() {
  return (
    <div>
      <div className="flex w-full justify-around py-16 px-20 gap-5 shadow border-solid">
        <ContactCard />
        <ImageCard />
      </div>
      <div className="px-20 py-16">
        <EmailForm />
      </div>
    </div>
  );
}
