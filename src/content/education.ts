export type EducationItem = {
  school: string;
  degree: string;
  location?: string;
  end: string;
  gpa?: string;
};

export const education: EducationItem[] = [
  {
    school: "University of Illinois Chicago",
    degree: "M.S. in Computer Science",
    location: "Chicago, IL, USA",
    end: "Expected May 2026",
    gpa: "3.8/4.0",
  },
  {
    school: "Pillai’s College of Engineering",
    degree: "B.Tech. in Electronics and Computer Sciences (Distinction)",
    location: "Navi Mumbai, India",
    end: "May 2024",
    gpa: "3.8/4.0",
  },
];

