import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex w-full items-center justify-between">
      <ul className="flex items-center gap-4">
        <li>
          <Link to="#about" className="text-sm hover:underline">
            About Me
          </Link>
        </li>
        <li>
          <Link to="#projects" className="text-sm hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="#contact" className="text-sm hover:underline">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <a
          href="mailto:sanjaykhadgi9861@gmail.com"
          className="text-sm text-primary font-medium"
        >
          sanjaykhadgi9861@gmail.com
        </a>
        <a href="tel:+977 9861365442" className="text-sm text-primary/70">
          +977 9861365442
        </a>

        <div className="w-px h-8 lg:h-10 bg-muted-foreground/70" />
      </div>
    </div>
  );
};

export default DesktopNav;
