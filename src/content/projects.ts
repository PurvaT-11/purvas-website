export type Project = {
  slug: string;
  title: string;
  timeframe: string;
  description: string;
  tags: string[];
  links?: { github?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "ai-research-agent",
    title: "AI Research Agent",
    timeframe: "Jan 2026 – Present",
    description:
      "LLM-powered research workflow with RAG pipelines, guardrails, and modular retrieval/ranking/validation stages for reliable, evidence-based outputs.",
    tags: ["Python", "RAG", "LLM", "Vector DB", "Multi-agent"],
    links: { github: "https://github.com/PurvaT-11" },
  },
  {
    slug: "edge-audio-pipeline",
    title: "Edge-Based Audio Processing Pipeline",
    timeframe: "Jan 2026 – Present",
    description:
      "Edge-first streaming pipeline processing 3-second audio segments with feature extraction and MQTT messaging, reducing cloud-bound data and enabling near real-time inference.",
    tags: ["MQTT", "Streaming", "Signal Processing", "SQLite", "Python"],
    links: { github: "https://github.com/PurvaT-11" },
  },
  {
    slug: "fair-pedestrian-detection",
    title: "Fair Pedestrian Detection",
    timeframe: "Jan 2025 – May 2025",
    description:
      "Fairness-focused evaluation of YOLOv8 pedestrian detection with bias analysis across bounding box sizes; improved mAP@0.5 via reweighting-based training.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "Fairness", "ML"],
    links: { github: "https://github.com/PurvaT-11" },
  },
  {
    slug: "alttext-checker",
    title: "Alt Text Checker",
    timeframe: "2026",
    description:
      "Accessibility-focused checker to validate missing/weak image alt text and improve UI accessibility hygiene.",
    tags: ["Accessibility", "TypeScript", "Web"],
    links: { github: "https://github.com/PurvaT-11/alttext-checker" },
  },
  {
    slug: "bias-eval-sre",
    title: "Bias Eval (SRE)",
    timeframe: "2026",
    description:
      "Evaluation utilities and experiments for bias/fairness and reliability-style checks in AI systems.",
    tags: ["AI Evals", "Reliability", "Python"],
    links: { github: "https://github.com/PurvaT-11/bais-eval-sre" },
  },
];
