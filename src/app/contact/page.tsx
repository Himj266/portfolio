//components
import { ImageCard } from "../../core/components/heroSection/ImageCard";
import { ContactCard } from "./components/ContactCard";
import { EmailForm } from "./components/emailForm";
import { HeroSectionLayout } from "@/core/components/heroSection/HeroSectionLayout";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <HeroSectionLayout>
        <div className="w-full flex items-center justify-between">
          <ContactCard />
          <div className="pt-16">
            <ImageCard src="./contact.svg" altText="contact image" />
          </div>
        </div>
      </HeroSectionLayout>
      <div className="w-full flex justify-center px-20 py-24">
        <div className="w-full" style={{ maxWidth: "1024px" }}>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
