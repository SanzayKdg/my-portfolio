import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowDownToLine, FileText, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import TypeWriter from "typewriter-effect";

const HeroSection = () => {
  const handleDownloadResume = () => {
    const resumeUrl = "/file/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rsesume-Sanjay Khadgi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="#"
      className="font-inter flex flex-col items-center gap-5 lg:gap-10"
    >
      <div className="flex flex-col gap-4 lg:gap-8 items-center">
        <h1 className="text-center bg-linear-to-r from-primary via-primary/70 to-primary/50 text-transparent bg-clip-text font-montserrat text-[clamp(1.5rem,5vw,3rem)]     font-bold tracking-[-2%]">
          Namaste, I&apos;m Sanjay Khadgi
        </h1>

        <h2 className="text-[clamp(1rem,4vw,2rem)] ">
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["Full Stack Developer", "MERN Stack Developer"],
            }}
          />
        </h2>

        <p className="sm:max-w-2/4 lg:max-w-[40%] text-center text-[clamp(14px,2vw,1rem)]">
          I make web apps awesome using the MERN stack. If you have an
          innovative project, let&apos;s chat and make your online presence
          stand out.
        </p>
      </div>

      <div className="w-full justify-center flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <Button
          className="flex-1 w-full px-4 py-3 h-12 max-w-sm rounded-full bg-primary border-primary border flex items-center gap-2 justify-center hover:bg-primary/80 text-primary-foreground cursor-pointer font-semibold"
          onClick={handleDownloadResume}
        >
          <FileText className="size-4 md:size-5" /> Download Resume{" "}
          <ArrowDownToLine className="size-4 md:size-5" />
        </Button>

        <Link
          to="#projects"
          className="flex-1 w-full px-4 py-3 h-12 max-w-sm rounded-full bg-primary-foreground border-primary border flex items-center gap-2 text-primary justify-center hover:bg-primary-foreground/80"
        >
          <LayoutGrid className="size-4 md:size-5" /> See My Projects{" "}
          <ArrowDown className="size-4 md:size-5" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
