/**
 * All personal content for the site lives in this file (and in `projects.ts`).
 * Data follows Giovanni's FlowCV resume (October 2026).
 */
export const site = {
  name: "Giovanni August Immanuel Wijaya",
  // Terminal-style handle shown in the nav: "~/giovanniaugust".
  handle: "giovanniaugust",
  // Used for metadata / Open Graph URLs. Point this at your deployed domain.
  url: "https://giovanniaugust.dev",
  role: "Computer science undergraduate at Bina Nusantara University",
  focus: "AI, machine learning, and computer vision",
  tagline: "I build computer vision pipelines and predictive ML models. Looking for an AI internship or a software engineering role.",
  location: "Tangerang, Indonesia",
  status: "Open to AI / software engineering internships",
  email: "giovanniaugustw@gmail.com",
  phone: "089680029862",
  github: "https://github.com/ghyoco",
  instagram: "https://www.instagram.com/augustgiovanni/",
  linkedin: "https://www.linkedin.com/in/giovanni-august",
  avatar: "/avatar.png",
  avatarAlt: "Giovanni August",
  resume: {
    href: "/cv.pdf",
    downloadName: "Giovanni-August-Immanuel-Wijaya-CV.pdf",
  },
} as const;

export const about: string[] = [
  "I'm a fifth-year computer science undergraduate at Bina Nusantara University. Most of my work so far has been hands-on machine learning: a real-time lane detection pipeline and a building energy forecasting model, both built end to end from data to deployed app.",
  "Along the way I've picked up the unglamorous parts too: feature engineering, cross-validation that respects time order, Docker deployments, and enough FastAPI to put a model behind an API.",
  "Right now I'm looking for an AI internship or a software engineering role where I can apply that to real problems.",
];

export const quickFacts: { label: string; value: string }[] = [
  { label: "Now", value: "B.Sc. Computer Science, Bina Nusantara University" },
  { label: "Based in", value: site.location },
  { label: "Interested in", value: "AI internships, computer vision, machine learning" },
];

export const education = {
  school: "Bina Nusantara University",
  degree: "B.Sc. Computer Science",
  period: "09/2024 – present",
  coursework: "GPA: 3.81",
};

export const experience: {
  role: string;
  org: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "Volunteer Tutor",
    org: "Bimbingan belajar Sitanala, Tangerang",
    period: "02/2026 – 04/2026",
    points: [
      "Taught basic math and English to elementary students at Dutasia Sitanala.",
    ],
  },
];

export const certificates = [
  {
    name: "Microsoft AI-900T00: Azure AI Fundamentals",
    issuer: "Pelatihan Belajar AI dari Dasar",
  },
];

/** Grouped plain lists, following the resume's technical skills. */
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript"],
  },
  {
    group: "AI & data",
    items: ["TensorFlow", "scikit-learn", "OpenCV", "pandas", "NumPy", "Matplotlib"],
  },
  {
    group: "Backend & tools",
    items: ["FastAPI", "Docker", "MySQL", "Vercel", "Git / GitHub"],
  },
  {
    group: "Spoken languages",
    items: ["Indonesian (native)", "English (proficient)"],
  },
];

/* ------------------------------------------------------------------ */
/* Education summaries (homepage cards)                                */
/* ------------------------------------------------------------------ */

export const study = {
  university: {
    badge: "BN",
    school: "Bina Nusantara University",
    degree: "B.Sc. Computer Science",
    period: "09/2024 – present",
    short:
      "Fifth-year undergraduate with a 3.81 GPA, focused on AI and machine learning. Both projects on this site came out of that work: a lane detection pipeline and an energy forecasting model.",
  },

  highSchool: {
    badge: "SM",
    school: "SMAK Penabur Gading Serpong",
    programme: "High school",
    period: "07/2021 – 05/2024",
    short:
      "Finished in 2024, then started computer science at Bina Nusantara University the same year.",
  },
};
