import {
  Typography,
  Button,
  Card,
  CardBody,
  Avatar,
  Tooltip,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { useEffect, useRef } from "react";
const techStacks = [
  {
    src: "/logo/mongo.svg",
    name: "MongoDB",
    link: "https://www.mongodb.com/docs/",
  },
  {
    src: "/logo/express.svg",
    name: "Express.js",
    link: "https://expressjs.com/",
  },
  { src: "/logo/react.svg", name: "React.js", link: "https://react.dev/" },
  {
    src: "/logo/node.svg",
    name: "Node.js",
    link: "https://nodejs.org/docs/latest/api/",
  },
  { src: "/logo/nest.svg", name: "Nest.js", link: "https://docs.nestjs.com/" },
  { src: "/logo/next.svg", name: "Next.js", link: "https://nextjs.org/docs" },
];
const About = () => {
  const educationeRef = useRef(null);
  const experienceRef = useRef(null);
  const techRef = useRef(null);
  const aboutRef = useRef(null);
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (educationeRef.current) {
      observer.observe(educationeRef.current);
    }
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => observer.disconnect();
  }, [educationeRef, experienceRef]);

  return (
    <section ref={aboutRef} id="about" className="sm:mt-[4rem] xl:mt-[8rem]">
      <div className="sm:px-[2rem] md:px-[4rem] xl:px-[8rem]">
        <Typography variant="h1" className="text-3xl text-[#147EFB]">
          About Me
        </Typography>
        <div>
          <Typography
            variant="lead"
            className="mt-[2rem] font-[400] sm:text-[1rem] lg:text-[18px]"
          >
            I&apos;m a Full Stack Developer with experience in tech stack like
            MongoDB, Express.js, React.js, and Node.js, Next.js and Nest.js. I
            specialize in making websites visually appealing with React and
            handling data effectively with MongoDB.
          </Typography>
          <Typography
            variant="lead"
            className="mt-[1rem] font-[400] sm:text-[1rem] lg:text-[18px]"
          >
            I love working with teams, and I&apos;m all about turning creative
            ideas into user-friendly web applications. Let&apos;s team up to
            bring your vision to life and create web solutions that people will
            love using.
          </Typography>
        </div>
      </div>
      <div
        ref={educationeRef}
        className="sm:px-[2rem] md:px-[4rem] xl:px-[8rem] mt-8 w-full"
      >
        <Typography
          variant="h4"
          className="text-2xl text-[#147EFB] sm:mb-6 xl:mb-4"
        >
          Education
        </Typography>
        <Timeline>
          <TimelineItem>
            <TimelineConnector className="-mt-1" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="p-2 border-[#CFD8DCCC] border-2 bg-white" />
              <Typography
                variant="h6"
                className="leading-none text-[18px] font-bold"
              >
                Padmashree International College
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-6">
              <Typography
                variant="small"
                className="text-[#261f22] mt-4 bg-[#e4edf9] w-fit py-[5px] text-[15px] px-[15px] font-bold"
              >
                2019 - Current
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-4 text-[1rem]"
              >
                Bachelor of Computer Application
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector className="-mt-1" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="p-2 border-[#CFD8DCCC] border-2 bg-white" />
              <Typography
                variant="h6"
                className="leading-none text-[18px] font-bold"
              >
                Mega Secondary School
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-2">
              <Typography
                variant="small"
                className="text-[#261f22] mt-4 bg-[#e4edf9] py-[5px] px-[15px] text-[15px] font-bold"
              >
                2014 - 2016
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-4 text-[1rem]"
              >
                Management
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      <div
        ref={experienceRef}
        className="sm:px-[2rem] md:px-[4rem] xl:px-[8rem] mt-4 w-full"
      >
        <Typography
          variant="h4"
          className="text-2xl text-[#147EFB] sm:mb-6 xl:mb-4"
        >
          Professional Experience
        </Typography>
        <Timeline>
          <TimelineItem>
            <TimelineConnector className="-mt-1" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="p-2 border-[#CFD8DCCC] border-2 bg-white" />
              <Typography
                variant="h6"
                className="leading-none text-[18px] font-bold"
              >
                Lanceme Up{" "}
                <span className="font-light">
                  <i>- Intern</i>
                </span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-6">
              <Typography
                variant="small"
                className="text-[#261f22] mt-4 bg-[#e4edf9] w-fit py-[5px] text-[15px] px-[15px] font-bold"
              >
                2023 Jun - 2023 Sep
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-4 text-[1rem]"
              >
                Dhobighat, Lalitpur
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-4 text-[1rem]"
              >
                <a
                  href="https://lancemeup.com/"
                  className="text-[#147EFB] italic"
                  target="_blank"
                >
                  https://lancemeup.com/
                </a>
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector className="-mt-1" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="p-2 border-[#CFD8DCCC] border-2 bg-white" />
              <Typography
                variant="h6"
                className="leading-none text-[18px] font-bold"
              >
                Just In Nepal{" "}
                <span className="font-light">
                  <i>- Full Stack Developer</i>
                </span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-6">
              <Typography
                variant="small"
                className="text-[#261f22] mt-4 bg-[#e4edf9] py-[5px] px-[15px] text-[15px] font-bold"
              >
                2023 Mar - 2023 May
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-4 text-[1rem]"
              >
                Sukedhara, Kathmandu
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector className="-mt-1" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="p-2 border-[#CFD8DCCC] border-2 bg-white" />
              <Typography
                variant="h6"
                className="leading-none text-[18px] font-bold"
              >
                Samsung Nepal{" "}
                <span className="font-light">
                  <i>- Samsung Experienced Consultant</i>
                </span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-2">
              <Typography
                variant="small"
                className="text-[#261f22] mt-4 bg-[#e4edf9] py-[5px] px-[15px] text-[15px] font-bold"
              >
                2017 Nov - 2023 Jan
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-4 text-[1rem]"
              >
                Kathmandu, Nepal
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
      <div
        ref={techRef}
        className="sm:px-[2rem] md:px-[4rem] xl:px-[8rem] mt-16 flex flex-col items-center gap-8"
      >
        <Button
          disabled
          className="mt-[2rem] rounded-full flex items-center gap-3
          sm:px-[2rem] md:px-[4rem] lg:px-[6rem] py-[1rem] text-[1rem] capitalize bg-[#261f221a] text-[#261f22bf] cursor-default"
        >
          Tech Stack
        </Button>

        <div className="mt-8 grid place-items-center place-content-center sm:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6 sm:gap-4 xl:gap-6 xxxl:gap-8 w-full">
          {techStacks &&
            techStacks.map((tech) => (
              <a
                key={tech.name}
                href={tech.link}
                className="xl:hover:-translate-y-6 xl:transition-transform duration-300 ease-in-out xl:hover:scale-105"
                target="_blank"
              >
                <Card className="bg-[#261f220d] flex justify-center items-center sm:h-[5rem] sm:w-[5rem] md:h-16 md:w-40 xl:h-[8rem] xl:w-[10rem] xxxl:h-[10rem] xxxl:w-[12rem]">
                  <CardBody className="sm:hidden md:flex md:gap-1 xl:flex-col justify-center items-center">
                    <Avatar
                      src={tech.src}
                      alt={tech.name}
                      variant="rounded"
                      className="sm:w-8 sm:h-8 sm:hidden md:block xl:w-12 xl:h-12 xxl:w-[58px] xxl:h-[58px]"
                    />
                    <Typography className="sm:hidden md:flex">
                      {tech.name}
                    </Typography>
                  </CardBody>

                  <Tooltip className="sm:block md:hidden" content={tech.name}>
                    <CardBody className="sm:flex justify-center items-center md:hidden ">
                      <Avatar
                        src={tech.src}
                        alt="avatar"
                        variant="rounded"
                        className="sm:w-8 sm:h-8"
                      />
                    </CardBody>
                  </Tooltip>
                </Card>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
