//components
import { ImageCard } from "../../core/components/heroSection/ImageCard";
import { ContactCard } from "./components/ContactCard";
import { EmailForm } from "./components/emailForm";
import { HeroSectionLayout } from "@/core/components/heroSection/HeroSectionLayout";
import { SectionCard } from "@/core/SectionCard";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <HeroSectionLayout>
          <ContactCard />
          <div className="pt-16">
            <ImageCard src="./contact.svg" altText="contact image" />
          </div>
      </HeroSectionLayout>
      <div className="w-full flex justify-center px-20 py-24">
        <SectionCard>
          <EmailForm />
        </SectionCard>
      </div>
    </div>
  );
}
