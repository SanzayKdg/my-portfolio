import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Contact, Info, LayoutGrid, Mail, Menu, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center gap-4 lg:hidden">
      <div className="w-px h-8 lg:h-10 bg-muted-foreground/70" />
      <Sheet open={open} onOpenChange={handleOpen}>
        <SheetTrigger className="cursor-pointer rounded-full border size-9 flex items-center justify-center dark:border-input">
          <Menu className="size-4.5" />
        </SheetTrigger>
        <SheetContent side="left" className="font-inter">
          <SheetHeader className="gap-1.5 flex-row items-center">
            <Link to="#">
              <Avatar className="size-12 lg:size-14 transition-all ease-in-out duration-300">
                <AvatarImage
                  src="/logo/528logo.png"
                  alt="Sanjay Khadgi profile image"
                />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
            </Link>
            <div className="grid-gap-4">
              <SheetTitle className="text-base tracking-[-1%] font-montserrat font-medium">
                Sanjay Khadgi
              </SheetTitle>
              <SheetDescription>
                See all the projects I have worked on.
              </SheetDescription>
            </div>
          </SheetHeader>
          <div className="grid flex-1 auto-rows-min gap-6 px-4 font-medium text-sm">
            <Link
              onClick={handleOpen}
              to="#about"
              className="flex items-center gap-1.5"
            >
              <Info className="size-4" /> About Me
            </Link>
            <Link
              onClick={handleOpen}
              to="#projects"
              className="flex items-center gap-1.5"
            >
              <LayoutGrid className="size-4" /> Projects
            </Link>
            <Link
              onClick={handleOpen}
              to="#contact"
              className="flex items-center gap-1.5"
            >
              <Contact className="size-4" /> Contact
            </Link>
          </div>
          <SheetFooter className="gap-4 text-sm text-primary font-medium ">
            <a
              href="mailto:sanjaykhadgi9861@gmail.com"
              className="flex items-center gap-1.5"
              onClick={handleOpen}
            >
              <Mail className="size-4" /> sanjaykhadgi9861@gmail.com
            </a>
            <a
              onClick={handleOpen}
              href="tel:+977 9861365442"
              className="flex items-center gap-1.5"
            >
              <Phone className="size-4" /> +977 9861365442
            </a>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// const MobileNav = () => {
//   return (
//     <TooltipProvider>
//       <div className="w-full sticky bottom-0 left-0 right-0 z-20! h-20 bg-primary-foreground border border-red-500 flex lg:hidden justify-between ">
//         {/* left - (Home, About) Icons */}
//         <div className="flex-[0.6] flex justify-evenly w-full">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="/" className="flex items-center">
//                 <Button variant="ghost" size="icon">
//                   <House className="size-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Home</p>
//             </TooltipContent>
//           </Tooltip>

//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="#about" className="flex items-center">
//                 <Button variant="ghost" size="icon">
//                   <Info className="size-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>About</p>
//             </TooltipContent>
//           </Tooltip>
//         </div>

//         {/* mid - (Resume) Icon */}
//         <div className="flex-[0.2] flex w-full items-center">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="#projects" className="flex items-center">
//                 <Button
//                   size="icon-lg"
//                   className="cursor-pointer size-15 rounded-full"
//                 >
//                   <FileText className="size-8 stroke-1" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Download Resume</p>
//             </TooltipContent>
//           </Tooltip>
//         </div>

//         {/* right - (Project, Contact) Icons */}
//         <div className="flex-[0.6] justify-evenly flex w-full">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="#projects" className="flex items-center">
//                 <Button variant="ghost" size="icon">
//                   <LayoutGrid className="size-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Project</p>
//             </TooltipContent>
//           </Tooltip>

//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Link to="#contact" className="flex items-center">
//                 <Button variant="ghost" size="icon">
//                   <Contact className="size-6" />
//                 </Button>
//               </Link>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Contact</p>
//             </TooltipContent>
//           </Tooltip>
//         </div>
//       </div>
//     </TooltipProvider>
//   );
// };

export default MobileNav;
