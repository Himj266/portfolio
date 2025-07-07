import { Typography } from "@/core/components/atomic/Typography";
import Image from "next/image";
import { SectionCard } from "@/core/SectionCard";

const FACTS = [
  "I'm into calisthenics and love bodyweight workouts.",
  "I'm always keen to learn and try new rope jumping tricks.",
  "I enjoy playing badminton whenever I get the chance",
  "I love diving into philosophy, mythology, and history",
  "My favorite book is 'Sapiens' by Yuval Noah Harari",
  "I like exploring and learning something new every day.",
];

export const RandomFacts = () => {
  return (
    <div className="w-full px-20 flex items-center justify-center ga-5 py-24 shadow">
      <SectionCard>
        <Image
          src="./randomFacts.svg"
          alt="random Facts Image"
          height={300}
          width={300}
        />
        <div className="flex flex-col gap-7">
          <Typography variant="text-7" $as="h2">
            random Facts
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
