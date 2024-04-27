//components
import { ImageCard } from "./components/ImageCard";
import { ContactCard } from "./components/ContactCard";
import { EmailForm } from "./components/emailForm";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center pt-8 pb-24 px-20 gap-5 shadow border-solid">
        <div
          className="flex w-full items-center justify-between"
          style={{ maxWidth: "1024px" }}
        >
          <ContactCard />
          <div className="pt-16">
            <ImageCard />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center px-20 py-24">
        <div className="w-full" style={{ maxWidth: "1024px" }}>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
