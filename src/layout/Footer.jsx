import { Typography } from "@material-tailwind/react";
const currentYear = new Date(Date.now()).getFullYear();
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TopButton from "./TopButton";

const Footer = () => {
  return (
    <footer className="relative w-full sm:mt-[4rem] xl:mt-[8rem]">
      <TopButton />
      <div className="mx-auto w-full">
        <div className="sm:px-[2rem] md:px-[4rem] xl:px-[8rem] flex w-full sm:flex-col  border-t border-blue-gray-50 py-4 xl:flex-row md:justify-between items-center">
          <Typography
            variant="small"
            className="text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} Copyright Sanjay Khadgi. All Rights Reserved.
          </Typography>

          <div className="flex justify-center items-center sm:flex-col xl:flex-row sm:mt-2 xl:mt-0 lg:gap-8 text-blue-gray-900">
            <div className="flex items-center sm:flex-col xl:flex-row gap-x-4">
              <Typography
                as="p"
                variant="small"
                className="xl:flex p-1 text-[#147EFB] font-normal"
              >
                sanjaykhadgi9861@gmail.com
              </Typography>
              <Typography
                as="p"
                variant="small"
                color="blue-gray"
                className="xl:flex p-1 font-normal"
              >
                +977 9861365442
              </Typography>
            </div>

            <div className="sm:mt-2 xl:mt-0 flex gap-4">
              <a
                href="https://www.linkedin.com/in/sanjay-khadgi-243623242/"
                className="hover:text-[#261f22bf]"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://github.com/SanzayKdg"
                className="hover:text-[#261f22bf]"
              >
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
