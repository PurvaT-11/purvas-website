export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "University of Illinois Chicago",
    role: "Graduate Assistant – Research Computing Engineer",
    start: "Aug 2025",
    end: "Present",
    highlights: [
      "Scaled backend microservices supporting 10K+ users; reduced production failures by 20% via better retries and error handling.",
      "Designed ETL pipelines processing 100K+ records/day; improved debugging turnaround time by 33%.",
      "Built monitoring dashboards for latency/error/throughput; cut incident detection from hours to minutes.",
      "Improved REST API response time under concurrency by 22% after load testing (Locust) and bottleneck fixes.",
    ],
  },
  {
    company: "Office of Vice Chancellor for Research, University of Illinois System",
    role: "Software Development Engineer Intern",
    start: "May 2025",
    end: "Aug 2025",
    highlights: [
      "Built dashboards used by 5K+ users; reduced data retrieval latency by 37% via query optimization and caching.",
      "Refactored backend modules; reduced code duplication by 29% and sped up iteration.",
      "Implemented monitoring and alerting; reduced incident detection time by 47% post-deploy.",
      "Designed async processing for concurrent workloads; improved stability under high traffic.",
    ],
  },
  {
    company: "Astraea Solutions Private Limited",
    role: "Software Development Engineer Intern",
    location: "Delhi, India",
    start: "Jan 2024",
    end: "May 2024",
    highlights: [
      "Built/optimized backend data pipelines (Python + SQL) serving 30K+ users.",
      "Shipped REST APIs with robust failure handling; reduced production error rates by 20%.",
      "Optimized SQL queries and indexing; reduced query latency by 27% on large datasets.",
      "Built observability pipelines (Prometheus + Grafana) to improve visibility and debugging speed.",
    ],
  },
  {
    company: "IEEE PCE",
    role: "Technical Content Writer",
    start: "Jan 2022",
    end: "May 2024",
    highlights: [
      "Wrote and edited technical content to improve clarity, consistency, and reader outcomes.",
      "Collaborated with teams to translate complex ideas into structured, publishable content.",
    ],
  },
  {
    company: "Aagri Shikshan Sanstha's Primary School",
    role: "Tech Solutions Specialist (Part-time)",
    location: "Navi Mumbai, Maharashtra, India (On-site)",
    start: "Jan 2022",
    end: "May 2023",
    highlights: [
      "Built a facial-recognition attendance system (Python + OpenCV) for 5,000+ students; reduced manual effort by ~70%.",
      "Developed an in-house desktop app (Python + CSS) to streamline teachers' workflows; improved admin efficiency by 40%+.",
      "Integrated Excel with Python scripts to manage 25,000+ Aadhaar enrollment records with high accuracy.",
      "Improved data organization and reporting for faster retrieval and lower admin overhead.",
    ],
  },
];
