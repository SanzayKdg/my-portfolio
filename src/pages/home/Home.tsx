import useScroll from "@/hooks/useScroll";
import AboutSection from "./components/about";
import ContactSection from "./components/contact";
import HeroSection from "./components/hero";
import ProjectSection from "./components/projects";

const Home = () => {
  useScroll();
  return (
    <div className="w-full flex flex-col gap-10">
      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <ContactSection />
    </div>
  );
};

export default Home;
