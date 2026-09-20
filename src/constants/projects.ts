import type { ProjectsType } from "../types/projects";

const projects: ProjectsType = [
  {
    name: "World Tech Pvt. Ltd.",
    image: "/projects/worldtech.png",
    link: "https://wrldtec.com/",
  },

  {
    name: "Swift Remit",
    image: "/projects/eagle.png",
    link: "https://swiftremitglobal.com/",
  },

  {
    name: "Swift Remit - User",
    image: "/projects/user-swift.png",
    link: "https://testuser.swiftremitglobal.com/",
    credentials: {
      email: "bakole2867@3dboxer.com",
      password: "Admin@123",
    },
  },

  {
    name: "Swift Remit - Admin",
    image: "/projects/admin-swift.png",
    link: "https://testadmin.swiftremitglobal.com/",
    credentials: {
      email: "bakole2867@3dboxer.com",
      password: "Admin@123",
    },
  },

  {
    name: "Yaarinaag Ghelung",
    image: "/projects/yrgcp.png",
    link: "https://ygpcc.org.np/",
  },

  {
    name: "Shaili Fashion Store",
    image: "/projects/shaili.png",
    link: "https://shailistore.wrldtec.com/",
  },

  {
    name: "Coffee Square & Pizza",
    image: "/projects/coffee.png",
    link: "https://coffeesquarenpizza.com.au.wrldtec.com/",
  },

  {
    name: "The BlueScope Company Pvt Ltd.",
    image: "/projects/bluescope.png",
    link: "https://thebluescope.wrldtec.com/",
  },

  {
    name: "Himalayan Spice Hub",
    image: "/projects/restaurant.png",
    link: "https://himalayanspicehub.wrldtec.com/",
  },
];

export default projects;
