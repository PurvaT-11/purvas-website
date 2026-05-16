export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Agentic AI",
    items: [
      "RAG systems",
      "Tool calling",
      "Multi-agent workflows",
      "Prompting & guardrails",
      "Vector DBs (concepts)",
      "AI evals",
    ],
  },
  {
    title: "Core",
    items: [
      "Python",
      "APIs (REST)",
      "Distributed Systems",
      "ETL Pipelines",
      "Performance Optimization",
      "Observability (metrics/logs/tracing)",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Spark",
      "Hadoop",
      "Snowflake",
      "IBM SPSS",
    ],
  },
  {
    title: "Cloud & Infra",
    items: [
      "AWS (EC2, S3, ELB, DynamoDB)",
      "Azure (AKS, ACR, Azure DevOps)",
      "CI/CD",
      "Load Testing (Locust)",
    ],
  },
  {
    title: "Frontend (when needed)",
    items: ["TypeScript", "React", "Node.js", "Angular", "Vue.js"],
  },
];
