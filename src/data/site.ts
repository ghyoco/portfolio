/**
 * All personal content for the site lives in this file (and in `projects.ts`).
 * Replace every value below with your own details, then swap `/public/cv.pdf`
 * for your real CV. Nothing else needs to change.
 *
 * Note: `site.ts` and `projects.ts` are your personal content — edit those
 * freely. Everything else (components, pages, styles) is the site's design.
 */
export const site = {
  name: "Giovanni August",
  // Terminal-style handle shown in the nav: "~/alexrivera".
  handle: "giovanniaugust",
  // Used for metadata / Open Graph URLs. Point this at your deployed domain.
  url: "https://alexrivera.dev",
  role: "Computer Science student at Bina Nusantara University",
  focus: "AI, Machine Learning, Computer vision",
  location: "Tangerang, Indonesia",
  status: "Open to internships",
  email: "giovanniaugustw@gmail.com",
  github: "https://github.com/ghyoco",
  linkedin: "https://www.linkedin.com/in/alexrivera",
  instagram: "https://www.instagram.com/augustgiovanni/",
  // Shown in the hero banner. Swap /public/avatar.svg for a real photo
  // (e.g. /avatar.jpg) and point this at it.
  avatar: "/avatar.png",
  avatarAlt: "Giovanni August",
  resume: {
    href: "/cv.pdf",
    downloadName: "Giovanni-August-CV.pdf",
  },
} as const;

/** Two to four sentences. What you study, what you build, what you want next. */
export const about: string[] = [
  "I'm in my third year of a B.Sc. in Computer Science at Delft University of Technology, where I keep ending up on the unglamorous half of software: data pipelines, query plans, and the tooling that keeps a team's feedback loop short.",
  "Most of what I know came from shipping things other people had to rely on — a course-registration notifier that a few hundred students ran during registration week, a Raft implementation that had to survive a network simulator, and two years of TA-ing the second-year algorithms course.",
  "Right now I'm looking for a Summer 2027 internship on a backend or infrastructure team, ideally somewhere code review is taken seriously and I can see how people run systems in production.",
];

export const quickFacts: { label: string; value: string }[] = [
  { label: "Now", value: "TA, Algorithms & Data Structures" },
  { label: "Based in", value: site.location },
  { label: "Interested in", value: "backend, distributed systems, developer tooling" },
];

export const education = {
  school: "Delft University of Technology",
  degree: "B.Sc. Computer Science",
  period: "2023 – expected 2027",
  coursework:
    "Algorithms & Data Structures, Computer Networks, Databases, Operating Systems, Distributed Systems, Compiler Construction, Machine Learning",
};

export const experience: {
  role: string;
  org: string;
  period: string;
  points: string[];
}[] = [
  {
    role: "Teaching Assistant, Algorithms & Data Structures",
    org: "Delft University of Technology",
    period: "Feb 2025 – present",
    points: [
      "Run weekly labs for 40 students and grade 200+ assignments a semester.",
      "Rewrote the graph-algorithms lab from scratch after three cohorts in a row hit the same edge case in Dijkstra's.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Fathom Labs (student startup, 12 people)",
    period: "Jul – Sep 2025",
    points: [
      "Moved the reporting service off a nightly cron job onto an incremental pipeline, cutting the morning job from 22 minutes to under 4.",
      "Added integration tests around the parts of the ingestion path that had broken twice that summer.",
    ],
  },
];

/** Grouped plain lists. No skill bars, no percentages — recruiters don't trust them. */
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "Python", "Go", "SQL", "Rust", "C"],
  },
  {
    group: "Frameworks & libraries",
    items: ["Next.js", "React", "Node.js", "FastAPI", "gRPC", "D3"],
  },
  {
    group: "Data & infrastructure",
    items: ["PostgreSQL", "Redis", "SQLite", "Docker", "GitHub Actions", "Linux"],
  },
  {
    group: "Practices",
    items: ["Git & code review", "Unit and integration testing", "CI pipelines", "Technical writing"],
  },
];

/* ------------------------------------------------------------------ */
/* Study background (/study)                                           */
/* ------------------------------------------------------------------ */

export const study = {
  intro:
    "A B.Sc. in Computer Science at Delft University of Technology, a gymnasium diploma before it, and a habit of picking the courses that end with something built. The one-page version of all this is on the CV.",

  university: {
    badge: "TU",
    school: "Delft University of Technology",
    degree: "B.Sc. Computer Science",
    period: "Sep 2023 – expected Jul 2027",
    location: "Delft, Netherlands",
    short:
      "Three-year Dutch B.Sc., 132 of 180 ECTS done. Free electives went to systems and compilers, which is where the two hardest projects on this site came from.",
    summary: [
      "A standard three-year Dutch B.Sc. (180 ECTS). I finished 132 ECTS by the end of my third year and pointed every free elective at the systems and compilers side, which is where the interesting debugging turned out to be.",
      "Two of the projects on this site came straight out of coursework: raft-kv out of the Distributed Systems labs and pg-lens out of Databases. I've been a TA for Algorithms & Data Structures since my second year.",
    ],
    stats: [
      { label: "ECTS completed", value: "132 / 180" },
      { label: "Average grade", value: "8.2 / 10 (Dutch scale)" },
      { label: "Specialisation", value: "Minor in Systems & Networking" },
      { label: "Teaching", value: "TA, Algorithms & Data Structures (4 semesters)" },
    ],
    courses: [
      { code: "CS1010", name: "Reasoning & Logic", term: "Y1 Q1", grade: "8.0" },
      { code: "CS1060", name: "Algorithms & Data Structures", term: "Y1 Q3", grade: "8.5" },
      { code: "CS1120", name: "Object-Oriented Programming", term: "Y1 Q2", grade: "8.0" },
      { code: "CS2030", name: "Computer Networks", term: "Y2 Q1", grade: "8.5" },
      { code: "CS2110", name: "Databases", term: "Y2 Q3", grade: "9.0" },
      { code: "CS2320", name: "Operating Systems", term: "Y2 Q2", grade: "7.5" },
      { code: "CS3210", name: "Distributed Systems", term: "Y3 Q1", grade: "9.0" },
      { code: "CS3260", name: "Compiler Construction", term: "Y3 Q2", grade: "8.5" },
      { code: "CS3510", name: "Machine Learning", term: "Y2 Q4", grade: "8.0" },
    ],
    activities: [
      "Student mentor for first-year Computer Science students (2024 – present).",
      "Ran a four-session Git and code-review workshop for the study association, twice.",
      "Member of the faculty's teaching-quality committee, one year.",
    ],
  },

  highSchool: {
    badge: "EC",
    school: "Emmauscollege, Rotterdam",
    programme: "VWO Gymnasium — Nature & Technology profile, plus Computer Science (Informatica)",
    period: "2017 – 2023",
    short:
      "Gymnasium with maths D, physics, chemistry and informatica every year. Final project: a Bluetooth-controlled robot arm, where the firmware taught me more than the mechanics did.",
    summary: [
      "Six years of gymnasium with the Nature & Technology profile: maths D, physics, chemistry, and informatica as an extra subject every year from year three.",
      "My final project was a Bluetooth-controlled robot arm for the school's open day. The mechanics were embarrassing, but writing the firmware taught me more about state machines than anything I did in the two years that followed.",
    ],
    subjects: [
      "Mathematics D",
      "Physics",
      "Chemistry",
      "Computer Science (Informatica)",
      "English",
      "Dutch",
      "Latin",
    ],
    highlights: [
      { label: "Final project", value: "Bluetooth-controlled robot arm — firmware plus a small control app" },
      { label: "Olympiad", value: "Netherlands Informatics Olympiad, national round (2022)" },
      { label: "Extracurricular", value: "Ran the after-school programming club for first-year pupils (2021 – 2023)" },
    ],
  },
};
