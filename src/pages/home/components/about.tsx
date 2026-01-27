import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { education, techStacks, workExperience } from "@/constants/about";
import { AvatarImage } from "@radix-ui/react-avatar";
const AboutSection = () => {
  return (
    <section id="about" className="font-inter flex flex-col gap-5 lg:gap-10">
      <div className="grid gap-4 md:max-w-[50%]">
        <h2 className="text-[clamp(1.5rem,4vw,2rem)] tracking-[-2%] font-montserrat font-semibold">
          About Me
        </h2>

        <p className="text-[clamp(14px,2vw,1rem)]">
          I&apos;m a Full Stack Developer with experience in tech stack like
          MongoDB, Express.js, React.js, and Node.js, MySQL, and Nest.js. I
          specialize in making websites visually appealing with React and
          handling data effectively with Node.js.
        </p>
      </div>

      <WorkTimeline />

      <EducationTimeline />

      <TechStack />
    </section>
  );
};

export default AboutSection;

const EducationTimeline = () => {
  return (
    <section className="bg-background">
      <h3 className="mb-2 text-[clamp(1.25rem,3vw,1.5rem)] font-semibold tracking-[-1%] text-foreground">
        Education
      </h3>
      <div className="relative mx-auto">
        <Separator
          orientation="vertical"
          className="absolute top-4 left-2 bg-muted w-0.5!"
        />
        {education.map(({ degree, title, from, to }) => (
          <div key={degree} className="relative mb-4 pl-8">
            <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-primary-foreground border-2 border-foreground" />
            <h4 className="rounded-xl py-2 text-primary/90 md:text-xl font-medium tracking-tight">
              {title}
            </h4>

            <div className="bg-muted px-2 py-1 w-fit rounded-md">
              <p className="text-sm rounded-xl tracking-tight text-muted-foreground">
                {from} - {to}
              </p>
            </div>

            <p className="mt-4 text-primary/80 text-sm italic">{degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const WorkTimeline = () => {
  return (
    <section className="bg-background">
      <h3 className="mb-2 text-[clamp(1.25rem,3vw,1.5rem)] font-semibold tracking-[-1%] text-foreground">
        Professional Experience
      </h3>
      <div className="relative mx-auto">
        <Separator
          orientation="vertical"
          className="absolute top-4 left-2 bg-muted w-0.5!"
        />
        {workExperience.map(
          ({ address, company, designation, link, from, to }) => (
            <div key={company} className="relative mb-4 pl-8">
              <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-primary-foreground border-2 border-foreground" />
              <div className="flex items-center gap-2 5">
                <h4 className="rounded-xl text-primary/90 py-2 md:text-xl font-medium tracking-tight">
                  {company}
                </h4>
                <span className="text-primary/90">-</span>
                <p className="text-muted-foreground ">{designation}</p>
              </div>

              <div className="bg-muted px-2 py-1 w-fit rounded-md">
                <p className="text-sm rounded-xl tracking-tight text-muted-foreground">
                  {from} - {to}
                </p>
              </div>

              <div className="grid gap-2 mt-4">
                <p className="text-primary/80 text-sm italic">{address}</p>
                {link && (
                  <a
                    href={link}
                    className="text-blue-500 hover:underline italic text-sm"
                  >
                    {link}
                  </a>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <div className="flex items-center flex-col gap-4 lg:gap-8">
      <div className="flex items-center justify-center rounded-full w-full max-w-sm h-12 bg-muted-foreground/20 text-muted-foreground/80 font-semibold">
        Tech Stack
      </div>

      <div className="grid place-items-center place-content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 transition-all ease-in-out duration-300">
        {techStacks.map(({ image, link, title }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            className="rounded-md flex md:flex-col items-center gap-2 justify-center px-4 py-3 w-full max-w-40 md:size-26 lg:size-40 border border-input shadow-sm  transition-all ease-in-out duration-300 dark:bg-muted-foreground/80"
          >
            <Avatar className="rounded-none size-5 sm:size-8 lg:size-12  transition-all ease-in-out duration-300">
              <AvatarImage src={image} alt={title} className="" />
              <AvatarFallback>{title}</AvatarFallback>
            </Avatar>

            <h6 className="font-semibold text-[clamp(14px,2vw,1rem)]">
              {title}
            </h6>
          </a>
        ))}
      </div>
    </div>
  );
};
