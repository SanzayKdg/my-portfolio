import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import projects from "@/constants/projects";
import { Link2 } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="about" className="font-inter flex flex-col gap-5 lg:gap-10">
      <div className="grid gap-4">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] tracking-[-2%] font-montserrat font-semibold">
          Portfolio
        </h2>
        <div className="w-full flex flex-wrap justify-between items-center gap-4">
          {projects.map(({ link, name, image }) => (
            <a key={name} href={link} target="_blank" className="basis-96 grow">
              <Card className="relative w-full h-60 overflow-hidden p-0 gap-0 group">
                <CardHeader className="size-full p-0 transition-all ease-in-out duration-300">
                  <img
                    src={image}
                    className="object-top-left object-cover w-full h-60"
                  />
                </CardHeader>

                <CardFooter className="w-full absolute bottom-0 z-10 py-3 bg-muted-foreground/80 text-muted transition-all ease-in-out duration-300 group-hover:translate-y-0 translate-y-12 font-medium items-center justify-center gap-1.5">
                  {name} <Link2 className="size-4 mt-0.5" />
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
