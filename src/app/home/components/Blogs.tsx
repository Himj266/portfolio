import { SectionCard } from "@/core/SectionCard";
import { Typography } from "@/core/components/atomic/Typography";
import Image from "next/image";

const BLOGS_LIST = [
  {
    id: "copy_move_forgery_detection",
    name: "Copy and Move Forgery Detection",
    url: "https://medium.com/analytics-vidhya/copy-move-forgery-detection-using-sift-and-dbscan-clustering-4a179c36293e",
    description:
      "This post is to provide you a fundamental idea about the detection of one of the very common forgery techniques, Copy Move Forgery using clustering.",
  },
  {
    id: "threefiber",
    name: "3D with react three fiber",
    description:
      "Coming Soon! This post series will be to get you familar with 3D with react three fiber.",
  },
];

export const Blogs = () => {
  return (
    <div className="w-full px-20 flex items-center justify-center ga-5 py-24 shadow border-b border-gray-800 border-solid">
      <SectionCard>
        <Image src="./blogPost.svg" alt="BlogPost" height={300} width={300} />
        <div className="flex flex-col gap-7 max-w-[360px]">
          <Typography variant="text-7">Blogs</Typography>
          <ul className="flex flex-col gap-3">
            {BLOGS_LIST.map((blog) => (
              <li key={blog.id}>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="border border-gray-500 rounded-lg p-10">
                    <div className="flex flex-col gap-3">
                      <Typography
                        variant="text-3"
                        className="text-gray-500 font-bold"
                      >
                        {blog.name}
                      </Typography>
                      <Typography variant="normalBody">
                        {blog.description}
                      </Typography>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SectionCard>
    </div>
  );
};
