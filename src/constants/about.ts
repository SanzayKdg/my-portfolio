import type { EducationsType, WorkExperiencesType } from "@/types/about";

const education: EducationsType = [
  {
    title: "Padhmashree College",
    from: "2019",
    to: "2024",
    degree: "Bachelor of Computer Application",
  },

  // {
  //   title: "Mega Secondary School",
  //   from: "2014",
  //   to: "2016",
  //   degree: "Management",
  // },
];

const workExperience: WorkExperiencesType = [
  {
    company: "World Tech Pvt. Ltd",
    from: "2024 May",
    to: "2026 Mar",
    designation: "Full Stack Developer",
    address: "Suryabinayak, Bhaktapur",
    // link: "https://wrldtec.com/",
  },

  {
    company: "Lanceme Up",
    from: "2023 Jun",
    to: "2023 Sep",
    designation: "Backend Intern",
    address: "Dhobighat, Lalitpur",
    // link: "https://lancemeup.com/",
  },

  {
    company: "Just in Nepal",
    from: "2023 Mar",
    to: "2023 Jun",
    designation: "Full Stack Developer",
    address: "Sukedhara, Kathmandu",
  },
];

const techStacks = [
  {
    title: "MySQL",
    image: "/logo/mysql.svg",
    link: "https://dev.mysql.com/doc/",
  },

  {
    title: "Express.js",
    image: "/logo/express.svg",
    link: "https://expressjs.com/",
  },

  { title: "React.js", image: "/logo/react.svg", link: "https://react.dev/" },

  {
    title: "Node.js",
    image: "/logo/node.svg",
    link: "https://nodejs.org/docs/latest/api/",
  },

  {
    title: "Nest.js",
    image: "/logo/nest.svg",
    link: "https://docs.nestjs.com/",
  },

  {
    title: "PostgreSQL",
    image: "/logo/postgres.svg",
    link: "https://www.postgresql.org/",
  },
];

export { education, workExperience, techStacks };
