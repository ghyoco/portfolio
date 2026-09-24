/**
 * Project content lives here as data, not in JSX: adding a project is one
 * object, not a layout change.
 *
 * Guidelines this file follows:
 * - 3-5 solid projects beat 10 half-finished ones.
 * - Every project answers: what it does, what it was built with, what was hard.
 * - `featured: true` projects (keep to 3) appear on the homepage.
 */
export type Project = {
  slug: string;
  title: string;
  /** One or two sentences: what it does and the specific problem it solves. */
  description: string;
  /** The interesting part. Recruiters read this line more than any other. */
  hard: string;
  stack: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  /**
   * Optional preview in /public/projects/ — a real screenshot (PNG/JPG) or one
   * of the generated SVG mock screens that ship with this site.
   */
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "coursegraph",
    title: "CourseGraph",
    description:
      "An interactive prerequisite map for every course in the CS catalogue. It ingests 1,200+ course entries and renders them as a navigable graph, so you can see what a course actually unlocks before you commit a semester to it.",
    hard: "Prerequisite notes are written by eight different faculties in eight different formats, so the interesting problem was parsing them into one model and validating it - a topological sort over the result surfaced 14 circular prerequisite chains that had been sitting in the catalogue unnoticed.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "D3", "Playwright"],
    year: "2026",
    image: "/projects/coursegraph.svg",
    githubUrl: "https://github.com/alexrivera/coursegraph",
    liveUrl: "https://coursegraph-demo.vercel.app",
    featured: true,
  },
  {
    slug: "seatwatch",
    title: "Seatwatch",
    description:
      "A CLI and Discord bot that watches course registration and notifies you the moment a seat opens in a full course. Around 400 students ran it during the last registration week.",
    hard: "The registration endpoint rate-limits aggressively and returns duplicates under load. Staying inside the limit meant a token-bucket queue with jittered backoff, and the notifier had to be idempotent so nobody got pinged twice for the same seat.",
    stack: ["Python", "httpx", "SQLite", "Docker", "GitHub Actions"],
    year: "2025",
    image: "/projects/seatwatch.svg",
    githubUrl: "https://github.com/alexrivera/seatwatch",
    featured: true,
  },
  {
    slug: "raft-kv",
    title: "raft-kv",
    description:
      "A fault-tolerant key-value store built on Raft for the Distributed Systems course: leader election, log replication and snapshotting, tested against a simulator that drops, delays and partitions messages.",
    hard: "Elections kept flapping under packet loss until I understood that the timer has to be randomized per node and reset only on an accepted AppendEntries. The failing-test traces ended up as the most useful part of the write-up.",
    stack: ["Go", "gRPC", "Protocol Buffers", "Docker Compose"],
    year: "2025",
    image: "/projects/raft-kv.svg",
    githubUrl: "https://github.com/alexrivera/raft-kv",
    featured: true,
  },
  {
    slug: "pg-lens",
    title: "pg-lens",
    description:
      "A terminal-first visualiser for PostgreSQL query plans. Paste an EXPLAIN (FORMAT JSON) output and get a collapsible cost tree with the nodes where the time actually goes called out.",
    hard: "EXPLAIN reports per-node estimates that deliberately don't add up across a plan, so the real work was deriving self-relative cost and row-count error per node instead of showing the raw totals.",
    stack: ["Rust", "ratatui", "PostgreSQL"],
    year: "2026",
    image: "/projects/pg-lens.svg",
    githubUrl: "https://github.com/alexrivera/pg-lens",
  },
  {
    slug: "wasm-forth",
    title: "wasm-forth",
    description:
      "A Forth interpreter compiled to WebAssembly, with a browser playground that renders the data and return stacks as you step through a program word by word.",
    hard: "Indirect threaded code plus a hand-written dictionary means every word has to agree on its stack effect. I added a debugger mode that dumps both stacks after each step, which is the only reason the first working RECURSE definition was possible.",
    stack: ["Rust", "WebAssembly", "wasm-bindgen", "Vite"],
    year: "2025",
    image: "/projects/wasm-forth.svg",
    githubUrl: "https://github.com/alexrivera/wasm-forth",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
