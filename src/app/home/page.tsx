//components
import { DescriptionCard } from "@/core/components/heroSection/DescriptionCard";
import { HeroSectionLayout } from "@/core/components/heroSection/HeroSectionLayout";
import { ImageCard } from "@/core/components/heroSection/ImageCard";
import { RandomFacts } from "./components/RandomFacts";
import { Typography } from "@/core/components/atomic/Typography";

const Home = (): JSX.Element => {
  const descriptionJSX = (
    <Typography variant="normalBody" $as="p">
      I&apos;ve alwasy enjoyed how people can turn machines do amazing stuff and
      love trying to do so. When I&apos;m not with the laptop, you can find me
      playing badminton or cruising on a bike
    </Typography>
  );

  return (
    <div className="flex flex-col">
      <HeroSectionLayout>
        <DescriptionCard
          title="about."
          subTitle="I'm a frontend developer based in incredible India"
          description={descriptionJSX}
        />
        <ImageCard src="./developer.svg" altText="About Me" />
      </HeroSectionLayout>
      <RandomFacts />
    </div>
  );
};

export default Home;
