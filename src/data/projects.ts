export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  /** Featured projects are shown on the homepage (keep it to 3). */
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project Name One",
    description:
      "One or two sentences: what it does and the specific problem it solves.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    featured: true,
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one-demo.vercel.app",
    // Add a screenshot in /public/projects/ then set: image: "/projects/project-1.png",
  },
  {
    slug: "project-two",
    title: "Project Name Two",
    description:
      "One or two sentences: what it does and the specific problem it solves.",
    stack: ["React", "Node.js", "Express"],
    featured: true,
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two-demo.vercel.app",
  },
  {
    slug: "project-three",
    title: "Project Name Three",
    description:
      "One or two sentences: what it does and the specific problem it solves.",
    stack: ["Python", "Flask", "SQLite"],
    featured: true,
    githubUrl: "https://github.com/yourusername/project-three",
  },
  // --- Additional projects (shown on /projects only) -------------------
  {
    slug: "project-four",
    title: "Project Name Four",
    description:
      "One or two sentences: what it does and the specific problem it solves.",
    stack: ["Java", "JavaFX"],
    githubUrl: "https://github.com/yourusername/project-four",
  },
  {
    slug: "project-five",
    title: "Project Name Five",
    description:
      "One or two sentences: what it does and the specific problem it solves.",
    stack: ["C++"],
    githubUrl: "https://github.com/yourusername/project-five",
  },
];
