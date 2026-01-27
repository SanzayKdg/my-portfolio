import { Icons } from "./icons/icons";
import { Button } from "./ui/button";

const Footer = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="font-inter border-t border-primary/20 px-6 lg:px-8 py-3 transition-all ease-in-out duration-300 flex gap-4 flex-col md:flex-row items-center justify-between">
      <p className="text-sm text-muted-foreground">
        &copy; {year} Sanjay Khadgi | All rights reserved.
      </p>

      <div className="flex flex-col md:flex-row sm:justify-between items-center gap-4 transition-all ease-in-out duration-300">
        <div className="flex flex-col items-center sm:flex-row gap-4 transition-all ease-in-out duration-300">
          <a
            href="mailto:sanjaykhadgi9861@gmail.com"
            className="text-sm text-primary font-medium"
          >
            sanjaykhadgi9861@gmail.com
          </a>
          <a href="tel:+977 9861365442" className="text-sm text-primary/70">
            +977 9861365442
          </a>
        </div>
        <div className="hidden md:block w-px h-8 lg:h-10 bg-muted-foreground/70" />

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/sanjay-khadgi-243623242/">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer"
            >
              <span className="sr-only">Linkedin</span>
              <Icons.LinkedIn className="size-4.5" />
            </Button>
          </a>

          <a href="https://github.com/SanzayKdg">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer"
            >
              <span className="sr-only">Github</span>
              <Icons.Github className="size-4.5" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
