import { SectionCard } from "@/core/SectionCard";
import { Typography } from "@/core/components/atomic/Typography";
import Image from "next/image";

const PROJECTS_LIST = [
  {
    id: "algo_visualiser",
    name: "Algo Visualiser",
    url: "https://algo-visualiser-ten.vercel.app/",
    imageSrc: "/selectionSort.jpg",
    className: "text-white",
  },
  {
    id: "3d_stuff",
    name: "Beginner 3D Pojects",
    url: "https://3d-projects-seven.vercel.app/?vercelToolbarCode=4QcrNIiEzuvMJpa",
    imageSrc: "/solarSystem.png",
    className: "text-white",
  },
];

export const Projects = () => {
  return (
    <div className="w-full px-20 flex items-center justify-center ga-5 border-gray-800 py-24 shadow border-solid">
      <SectionCard>
        <div className="flex flex-col gap-7">
          <Typography variant="text-7">projects</Typography>
          <ul className="grid grid-cols-2 gap-10">
            {PROJECTS_LIST.map((project) => (
              <li key={project.id}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <figure className="relative flex justify-center items-center">
                    <Image
                      src={project.imageSrc}
                      alt={project.name}
                      height="200"
                      width="200"
                      className="rounded-2xl h-[200px] w-[200px] object-cover"
                    />
                    <figcaption className="absolute opacity-0 group-hover:opacity-100">
                      <Typography
                        variant="normalBody"
                        className={project.className}
                      >
                        {project.name}
                      </Typography>
                    </figcaption>
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="./project.svg"
          alt="Project Image"
          height={300}
          width={300}
        />
      </SectionCard>
    </div>
  );
};
