export type Project = {
  title: string;
  summary: string;
  tech: string[];
  links: { label: "Live" | "GitHub" | "Writeup"; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ML Fraud Detection Inference Service",
    summary:
      "Real-time FastAPI service with strict validation, versioned model loading, and production-style failure semantics.",
    tech: ["Python", "FastAPI", "Pydantic", "Docker"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/braydenadcox/ml-inference-system",
      },
    ],
    featured: true,
  },
  {
    title: "Python Discord Bot",
    summary:
      "Python-based Discord bot with modular command handling and event-driven logic using the Discord API.",
    tech: ["Python", "Discord API"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/braydenadcox/python-discord-bot",
      },
    ],
  },
];
