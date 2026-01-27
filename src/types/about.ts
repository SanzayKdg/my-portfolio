export type WorkExperienceType = {
  company: string;
  from: string;
  to: string;
  designation: string;
  address: string;
  link?: string;
};

export type EducationType = {
  title: string;
  from: string;
  to: string;
  degree: string;
};

export type EducationsType = EducationType[];

export type WorkExperiencesType = WorkExperienceType[];
