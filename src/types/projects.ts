export type ProjectType = {
  name: string;
  image: string;
  link: string;
  credentials?: ProjectCredentials;
};

export type ProjectCredentials = {
  email: string;
  password: string;
};

export type ProjectsType = ProjectType[];
