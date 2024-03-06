import {
  Avatar,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-10 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal xs:border-b-[1px] border-[#261f2280] lg:border-none"
      >
        <a href="#about" className="flex items-center">
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal xs:border-b-[1px] border-[#261f2280] lg:border-none"
      >
        <a href="#projects" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal xs:border-b-[1px] border-[#261f2280] lg:border-none"
      >
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <nav className="fixed top-0 z-10 -m-6 mt-0 max-h-[768px] w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none sm:px-[2rem] md:px-[4rem] xl:px-[8rem] p-2 ">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <div className="flex items-center gap-[2rem]">
            <Avatar src="/logo/528logo.png" size="lg" />
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[1rem]">
              <div className="flex items-center gap-x-4">
                <Typography
                  as="p"
                  variant="small"
                  className="sm:hidden xl:flex p-1 text-[#147EFB] font-normal"
                >
                  sanjaykhadgi9861@gmail.com
                </Typography>
                <Typography
                  as="p"
                  variant="small"
                  color="blue-gray"
                  className="sm:hidden xl:flex p-1 font-normal"
                >
                  +977 9861365442
                </Typography>
              </div>
              <div className="sm:hidden xl:flex w-[2px] h-8 bg-[#261f2240]"></div>

              <div className="sm:hidden lg:flex items-center gap-[1rem]">
                <Typography
                  as="a"
                  variant="small"
                  href="https://www.linkedin.com/in/sanjay-khadgi-243623242/"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <FaLinkedin size={25} className="hover:text-[#261f22bf]" />
                </Typography>
                <Typography
                  as="a"
                  variant="small"
                  href="https://github.com/SanzayKdg"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <FaGithub size={25} className="hover:text-[#261f22bf]" />
                </Typography>
              </div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="xs:flex xs:flex-col justify-center items-center gap-[1rem]">
            <div className="xs:flex xs:flex-col justify-center items-center gap-x-4">
              <Typography
                as="p"
                variant="small"
                className="p-1 text-[#147EFB] font-normal"
              >
                sanjaykhadgi9861@gmail.com
              </Typography>
              <Typography
                as="p"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                +977 9861365442
              </Typography>
            </div>

            <div className="flex items-center gap-[1rem]">
              <Typography
                as="a"
                variant="small"
                href="https://www.linkedin.com/in/sanjay-khadgi-243623242/"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <FaLinkedin size={25} className="hover:text-[#261f22bf]" />
              </Typography>
              <Typography
                as="a"
                variant="small"
                href="https://github.com/SanzayKdg"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <FaGithub size={25} className="hover:text-[#261f22bf]" />
              </Typography>
            </div>
          </div>
        </MobileNav>
      </Navbar>
    </nav>
  );
}
