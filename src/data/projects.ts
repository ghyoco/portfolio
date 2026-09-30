/**
 * Project content lives here as data, not in JSX: adding a project is one
 * object, not a layout change.
 *
 * The two projects match the FlowCV resume. Both are featured and appear on
 * the homepage.
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
  /**
   * Slideshow images for the project gallery popup, in /public/projects/.
   * Add file paths here and a "photos" button appears on the card; leave it
   * empty (or omit it) and the button stays hidden.
   */
  gallery?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pathfinder",
    title: "PathFinder — Real-Time Lane Detection",
    description:
      "A computer vision pipeline that detects lane boundaries and calculates vehicle lane drift in real time, working across day and night lighting.",
    hard: "Bird's-eye view inverse perspective mapping, sliding-window clustering, and 2nd-degree polynomial curve fitting (x = ay² + by + c), with a FastAPI backend deployed as a live web app on Hugging Face Spaces.",
    stack: ["Python", "OpenCV", "FastAPI", "Docker"],
    year: "2026",
    image: "/projects/pathfinder.svg",
    gallery: [],
    liveUrl: "https://huggingface.co/spaces",
    featured: true,
  },
  {
    slug: "energy-forecast",
    title: "Smart Building Energy Forecasting",
    description:
      "Forecasting 30-minute building power loads on the CU-BEMS dataset, benchmarking LSTM networks against XGBoost on multi-floor energy and air quality sensor data.",
    hard: "Lag, rolling-window, and cyclical time features fed into chronological TimeSeriesSplit cross-validation. XGBoost won with R² 0.9818, SMAPE 6.95%, and a 68.1% RMSE reduction over baseline, confirmed by Diebold-Mariano testing.",
    stack: ["Python", "scikit-learn", "TensorFlow", "XGBoost", "pandas"],
    year: "2026",
    image: "/projects/energy-forecast.svg",
    gallery: [],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
