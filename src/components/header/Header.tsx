import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";
import DarkModeToggler from "./DarkModeToggler";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="border-b border-primary/20 shadow-sm px-6 lg:px-8 py-3 transition-all ease-in-out duration-300">
      <nav className="font-inter flex justify-between items-center">
        <div className="flex gap-4 items-center grow mr-4">
          <Link to="#">
            <Avatar className="size-12 lg:size-14 transition-all ease-in-out duration-300">
              <AvatarImage
                src="/logo/528logo.png"
                alt="Sanjay Khadgi profile image"
              />
              <AvatarFallback>SK</AvatarFallback>
            </Avatar>
          </Link>

          <DesktopNav />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <DarkModeToggler />

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

          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
