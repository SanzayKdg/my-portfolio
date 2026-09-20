import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import projects from "@/constants/projects";
import { Link2 } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="projects" className="font-inter flex flex-col gap-5 lg:gap-10">
      <div className="grid gap-4">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] tracking-[-2%] font-montserrat font-semibold">
          Portfolio
        </h2>
        <div className="w-full flex flex-wrap justify-between items-center gap-4">
          {projects.map((project) => (
            // <a
            //   key={project.name}
            //   href={project.link}
            //   target="_blank"
            //   className="basis-96 grow"
            // >
            <Card
              key={project.name}
              className="relative w-full h-60 overflow-hidden p-0 gap-0 group basis-96 grow"
            >
              <a href={project.link} target="_blank">
                <CardHeader className="size-full p-0 transition-all ease-in-out duration-300">
                  <img
                    src={project.image}
                    className="object-top-left object-cover w-full h-60"
                  />
                </CardHeader>
              </a>

              <CardFooter className="w-full absolute bottom-0 z-10 py-3 bg-muted-foreground/80 text-muted transition-all ease-in-out duration-300 group-hover:translate-y-0 translate-y-30 font-medium items-center justify-center gap-1.5">
                <div className="flex flex-col items-center justify-center w-full gap-1">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    {project.name} <Link2 className="size-4 mt-0.5" />
                  </a>

                  {project?.credentials && (
                    <p className="flex flex-col font-normal gap-1 text-muted text-xs w-full items-center">
                      <span className="italic">-Test Credentials:-</span>{" "}
                      <span>email: {project.credentials.email}</span>
                      <span> password: {project.credentials.password}</span>
                    </p>
                  )}
                </div>
              </CardFooter>
            </Card>
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
