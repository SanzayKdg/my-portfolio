import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import TypeWriter from "typewriter-effect";

const Hero = () => {
  const heroText = useRef(null);
  const heroBtn = useRef(null);
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

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideDown");
          entry.target.classList.remove("animate-slideUp");
        } else {
          entry.target.classList.remove("animate-slideDown");
          entry.target.classList.add("animate-slideUp");
        }
      });
    });

    if (heroText.current) {
      observer.observe(heroText.current);
    }
    if (heroBtn.current) {
      observer2.observe(heroBtn.current);
    }

    return () => observer.disconnect();
  }, [heroText, heroBtn]);
  return (
    <section className="sm:mt-[6rem] xl:mt-[8rem] py-[4rem] sm:px-[2rem] md:px-[4rem] xl:px-[8rem] flex flex-col items-center text-center">
      <div ref={heroText} className="flex flex-col items-center">
        <Typography
          variant="h1"
          className="bg-gradient-to-r from-[#147efb] via-[#147efb] to-[#261f22] text-transparent bg-clip-text sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          Namaste, I&apos;m Sanjay Khadgi
        </Typography>
        <Typography
          variant="h1"
          className="sm:mt-[2rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[400]"
        >
          <TypeWriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "Web Designer",
              ],
            }}
          />
        </Typography>
        <Typography
          variant="lead"
          className="mt-[2rem] sm:w-full lg:w-2/4 font-[400]"
        >
          I make websites awesome using the MERN stack. If you want a developer
          who gets things done, let&apos;s chat and make your online presence
          stand out.
        </Typography>
      </div>

      <div ref={heroBtn}>
        <a
          href="#projects"
          className="xl:transition-transform duration-300 ease-in-out xl:hover:scale-110 scroll-smooth"
        >
          <Button
            ripple={true}
            className="mt-[2rem] rounded-full flex items-center gap-3
          sm:px-[2rem] lg:px-[4rem] py-[1rem] text-[1rem]"
          >
            See My Works
            <span>
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
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
