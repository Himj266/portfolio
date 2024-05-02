//components
import { DescriptionCard } from "@/core/components/heroSection/DescriptionCard";
import { HeroSectionLayout } from "@/core/components/heroSection/HeroSectionLayout";
import { ImageCard } from "@/core/components/heroSection/ImageCard";

const About = (): JSX.Element => {
  const descriptionJSX = (
    <div className="text-2xl text-gray-500">
      I&apos;ve alwasy enjoyed how people can turn machines do amazing stuff and
      love trying to do so. When I&apos;m not with laptop, you can find me
      playing badminton or on a bike ride
    </div>
  );

  return (
    <HeroSectionLayout>
      <div className="w-full flex justify-between pt-16">
        <DescriptionCard
          title="about."
          subTitle="I'm a frontend developer based in incredible India"
          description={descriptionJSX}
        />
        <ImageCard src="./developer.svg" altText="About Me" />
      </div>
    </HeroSectionLayout>
  );
};

export default About;
