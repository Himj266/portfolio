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
    id: "threefiberBasics",
    name: "Delving into the World of 3D Web: From WebGL to ThreeJs and React Three Fiber",
    url: "https://dev.to/himj266/delving-into-the-world-of-3d-web-from-webgl-to-threejs-and-react-three-fiber-23kh",
    description:
      "This post is to get you started with 3d in web and three js and its basic concepts.",
  },
  {
    id: "threefiberHelloWorld",
    name: "React Three Fiber - Hello World",
    url: "https://dev.to/himj266/react-three-fiber-hello-world-5415",
    description:
      "This post is to provide you idea about react three fiber which helps us to use three js with react seamlessly.",
  },
  {
    id: "threefiberRotatingCube",
    name: "React Fiber - Rotating A Cube",
    url: "https://dev.to/himj266/react-fiber-rotating-a-cube-4mm3",
    description:
      "This post contains a basic example of how to get started with the react three fiber.",
  },
  {
    id: "Auth2Way",
    name: "Authentication Vs Authorization",
    url: "https://dev.to/himj266/authentication-vs-authorization-37eb",
    description:
      "This post differentiates between the authentication and authorization flow in an application.",
  },
];

export const Blogs = () => {
  return (
    <div className="w-full px-20 flex items-center justify-center ga-5 py-24 shadow border-b border-gray-800 border-solid">
      <SectionCard>
        <Image src="./blogPost.svg" alt="BlogPost" height={300} width={300} />
        <div className="flex flex-col gap-7 max-w-[360px]">
          <Typography variant="text-7">blogs</Typography>
          <ul className="grid grid-cols-2 gap-3">
            {BLOGS_LIST.map((blog) => (
              <li key={blog.id} className="h-full">
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="border border-gray-500 rounded-lg p-10 h-full">
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
