import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiReact } from "react-icons/di";
import { SiExpress, SiMysql, SiTypescript } from "react-icons/si";
import { useEffect, useRef } from "react";
const projects = [
  {
    name: "Royal Villa Resorts",
    imgSrc: "/projects/rvr.png",
    description:
      "Royal Villa Resort is a landing page of a resort situated in Heart of Kathmandu. A hangout place and perfect gateway to escape from the hustle bustle of Kathmandu. You just need to sit back relax the nature view from the peak of our Royal Villa. A true experience of your stay from your home.",
    tools: ["mysql", "express", "react", "node", "ts"],

    demo__link: "https://royalvillaresorts.com/",
    code__link: "",
  },
  {
    name: "Nepals Hospitality",
    imgSrc: "/projects/hospitality.png",
    description:
      "Nepals Hospitality is a landing page of a resort situated in Heart of Kathmandu. A leading hospitality and tourism organization in Nepal. Promotes Nepal as a premier destination for hospitality and tourism, while also providing training and resource to enhance the skills of our human resources.",
    tools: ["mysql", "express", "react", "node", "ts"],
    demo__link: "https://nepalshospitality.com/",
    code__link: "",
  },
  {
    name: "Business Directory",
    imgSrc: "/projects/bhub.jpg",
    description:
      "A business directory website for businesses to showcase what they offer & for customers to easily find what they need. Businesses, big or small, can list their services. A simple solution to connect businesses with customers. Browse list of business select the business and visit business or add your own business.",
    tools: ["mongo", "react", "express", "node", "ts"],

    demo__link: "",
    code__link: "https://github.com/SanzayKdg/Business-Directory",
  },
];

const Portfolio = () => {
  const projectRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
          entry.target.classList.remove("animate-slideDown");
        } else {
          entry.target.classList.remove("animate-slideUp");
          entry.target.classList.add("animate-slideDown");
        }
      });
    });

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => observer.disconnect();
  }, [projectRef]);
  return (
    <section
      ref={projectRef}
      id="projects"
      className="sm:mt-[4rem] xl:mt-[8rem] sm:px-[2rem] md:px[4rem] xl:px-[8rem] scroll-smooth"
    >
      <Typography variant="h1" className="text-3xl text-[#147EFB]">
        Portfolio
      </Typography>

      <div className="flex gap-4 sm:flex-col items-center xl:flex-row lg:flex-wrap xxxl:flex-nowrap xl:justify-evenly">
        {projects &&
          projects.map((project) => (
            <Card
              key={project.name}
              className="mt-8 sm:w-full xl:w-[25rem] xxl:w-[31rem] xxxl:w-full shadow-lg overflow-hidden"
            >
              <CardHeader
                floated={false}
                color="blue-gray"
                className="sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[15rem] shadow-md relative overflow-hidden group"
              >
                <img
                  src={project.imgSrc}
                  className="w-full h-screen transform transition-transform duration-[10s] ease-in-out group-hover:-translate-y-full"
                  alt="Project Image"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-bold"
                  >
                    {project.name}
                  </Typography>
                </div>
                <Typography color="gray" className="text-justify">
                  {project.description}
                </Typography>
                <div className="group sm:mt-4 md:mt-6 lg:mt-8 inline-flex flex-wrap items-center sm:gap-2 md:gap-3">
                  <Tooltip
                    content={`${
                      project.tools.includes("mongo") ? "MongoDB" : "MYSQL"
                    }`}
                  >
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      {project.tools.includes("mongo") ? (
                        <DiMongodb size={25} />
                      ) : (
                        <SiMysql size={25} />
                      )}
                    </span>
                  </Tooltip>
                  <Tooltip
                    content={project.tools.includes("express") && "Express.js"}
                  >
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      {project.tools.includes("express") && (
                        <SiExpress size={25} />
                      )}
                    </span>
                  </Tooltip>
                  <Tooltip
                    content={project.tools.includes("react") && "React.js"}
                  >
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      {project.tools.includes("react") && <DiReact size={25} />}
                    </span>
                  </Tooltip>
                  <Tooltip
                    content={project.tools.includes("node") && "Node.js"}
                  >
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      {project.tools.includes("node") && <FaNodeJs size={25} />}
                    </span>
                  </Tooltip>
                  <Tooltip
                    content={project.tools.includes("ts") && "TypeScript"}
                  >
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      {project.tools.includes("ts") && (
                        <SiTypescript size={25} />
                      )}
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="sm:pt-1 md:pt-2 lg:pt-3 flex sm:flex-wrap md:flex-nowrap sm:justify-center md:justify-start gap-4">
                {project.demo__link.length > 0 && (
                  <a className="sm:w-full md:w-fit" href={project.demo__link}>
                    <Button
                      size="lg"
                      className="capitalize flex justify-center gap-2 items-center sm:w-full md:w-fit"
                    >
                      View Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </Button>
                  </a>
                )}
                {project.code__link.length > 0 && (
                  <a href={project.code__link} className="sm:w-full md:w-fit">
                    <Button
                      size="lg"
                      className="bg-[#261f221a] text-[#147EFB] capitalize flex justify-center gap-2 items-center sm:w-full md:w-fit"
                    >
                      View Code
                      <FaGithub size={25} />
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
