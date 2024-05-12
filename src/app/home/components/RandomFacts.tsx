import { Typography } from "@/core/components/atomic/Typography";
import Image from "next/image";
import { SectionCard } from "@/core/SectionCard";

const FACTS = [
  "I love to play badminton",
  " I watch a lot of content (anime/movies/series/tuotrials)",
  "I want to travel every country",
  "I like to explore/learn every new thing there is.",
];

export const RandomFacts = () => {
  return (
    <div className="w-full px-20 flex items-center justify-center ga-5 border-b border-gray-800 py-24">
      <SectionCard className="w-full flex justify-between items-center">
        <Image
          src="./randomFacts.svg"
          alt="random Facts Image"
          height={300}
          width={300}
        />
        <div className="flex flex-col gap-7">
          <Typography variant="subHeading" $as="h2">
            Random Facts
          </Typography>
          <ul className="flex flex-col gap-3">
            {FACTS.map((fact, index) => (
              <li key={index}>
                <Typography variant="normalBody">{fact}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </SectionCard>
    </div>
  );
};
