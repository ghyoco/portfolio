export type Project = {
  slug: string;
  title: string;
  description: string;
  hard: string;
  stack: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  gallery?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pathfinder",
    title: "PathFinder — Real-Time Lane Detection",
    description:
      "A computer vision pipeline that detects lane boundaries and calculates vehicle lane drift in real time, working across day and night lighting.",
    hard: "Finding the correct ROI size, adjusting the correct equation to make the algorithm see the contrast in the lane for both day and night seperately, solving how to make the algorithm follow a curve lane properly and creating a drift alert.",
    stack: ["Python", "OpenCV", "FastAPI", "Docker"],
    year: "2026",
    image: "/projects/pathfinder/pathfinder.png",
    gallery: [
      "/projects/pathfinder/pathfinder.png",
      "/projects/pathfinder/demo.png",
      "/projects/pathfinder/curve.png",
      "/projects/pathfinder/light.png",
      "/projects/pathfinder/dark.png",
    ],
    liveUrl: "https://lane-detection-cv.vercel.app",
    featured: true,
  },
  {
    slug: "energy-forecast",
    title: "Smart Building Energy Forecasting",
    description:
      "Forecasting 30-minute building power loads on the CU-BEMS dataset, benchmarking LSTM networks against XGBoost on multi-floor energy and air quality sensor data.",
    hard: "Fixing a huge missing sensor data from the dataset and Creating new useful features such as Lag, rolling-window, and cyclical time features to be fed to the models.",
    stack: ["Python", "scikit-learn", "TensorFlow", "XGBoost", "pandas"],
    year: "2026",
    image: "/projects/energy-forecast/building_load_1month.png",
    gallery: [
      "/projects/energy-forecast/building_load_1month.png",
      "/projects/energy-forecast/forecasting_comparison.png",
      "/projects/energy-forecast/residual_analysis.png",
      "/projects/energy-forecast/cv_metrics_barchart.png",
      "/projects/energy-forecast/feature_importance.png",
      "/projects/energy-forecast/iaq_overview.png",
      "/projects/energy-forecast/final_metrics_barchart.png"
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
