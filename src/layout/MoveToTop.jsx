import { Button, Tooltip } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

const MoveToTop = () => {
  console.log(window.screenTop + " " + window.screenLeft);
  const btnRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-bounceOnce");
        } else {
          entry.target.classList.remove("animate-bounceOnce");
        }
      });
    });

    if (btnRef.current) {
      observer.observe(btnRef.current);
    }
  }, [btnRef]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-end fixed bottom-2 right-0 px-8 ${
        scrollY > 500 ? "block" : "hidden"
      }`}
    >
      <Button
        ripple
        ref={btnRef}
        color="blue"
        className="rounded-full text-white p-2 hover:bg-blue-600"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Tooltip content="Go to top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </Tooltip>
      </Button>
    </div>
  );
};

export default MoveToTop;
