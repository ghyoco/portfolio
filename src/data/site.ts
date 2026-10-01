export const site = {
  name: "Giovanni August Immanuel Wijaya",
  handle: "giovanniaugust",
  url: "https://portfolio-giovanni-august.vercel.app/",
  role: "Computer science undergraduate at Bina Nusantara University",
  focus: "AI, machine learning, and computer vision",
  tagline: "I build computer vision pipelines and predictive ML models. Looking for an AI/ML Engineer internship.",
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
  "I'm a fifth-semester computer science undergraduate at Bina Nusantara University. Most of my work so far has been practical machine learning: a real-time lane detection pipeline with a deployed app and a building energy forecasting model.",
  "Along the way I've picked up the practical parts too: feature engineering, cross-validation that respects time order, Docker deployments, and serving models through FastAPI.",
  "I'm looking for an AI/ML Engineering internship where I can help take models from notebook to production.",
];

export const quickFacts: { label: string; value: string }[] = [
  { label: "Now", value: "Computer Science, Bina Nusantara University" },
  { label: "Based in", value: site.location },
  { label: "Interested in", value: "AI internships, computer vision, machine learning" },
];

export const education = {
  school: "Bina Nusantara University",
  degree: "Computer Science",
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

export const study = {
  university: {
    badge: "BN",
    school: "Bina Nusantara University",
    degree: "Computer Science",
    period: "09/2024 – present",
    short:
      "Fifth-semester undergraduate with a 3.81 GPA, focused on AI and machine learning. Created a lot of projects here such as a lane detection pipeline and an energy forecasting model.",
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
