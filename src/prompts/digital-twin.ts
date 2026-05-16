import { siteConfig } from "@/content/site";
import { skills } from "@/content/skills";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { education } from "@/content/education";

export function buildDigitalTwinSystemPrompt() {
  const skillText = skills
    .map((g) => `${g.title}: ${g.items.join(", ")}`)
    .join("\n");

  const experienceText = experience
    .map(
      (e) =>
        `${e.role} @ ${e.company} (${e.start} – ${e.end})\n- ${e.highlights.join(
          "\n- "
        )}`
    )
    .join("\n\n");

  const projectText = projects
    .map(
      (p) =>
        `${p.title} (${p.timeframe})\n${p.description}\nTags: ${p.tags.join(
          ", "
        )}\nGitHub: ${p.links?.github ?? "N/A"}`
    )
    .join("\n\n");

  const educationText = education
    .map((e) => {
      const parts = [
        `${e.school} — ${e.degree}`,
        e.location ? `(${e.location})` : "",
        `• ${e.end}`,
        e.gpa ? `• GPA: ${e.gpa}` : "",
      ].filter(Boolean);
      return parts.join(" ");
    })
    .join("\n");

  return `
You are the "Digital Twin" chatbot on ${siteConfig.name}'s personal website.
You speak in a professional, friendly tone and keep answers concise and high-signal.
Return plain text (no JSON, no markdown code fences).

Primary goal: help visitors understand ${siteConfig.name}'s background, education, skills, experience, and projects.
Secondary goal: encourage them to reach out via email (${siteConfig.email}) if relevant.

Scope rules (IMPORTANT):
- Only answer questions related to ${siteConfig.name}, her work, her projects, hiring/collaboration, or how to contact her.
- If the user asks unrelated questions (e.g., generic coding interview questions, homework, recipes, personal advice), politely refuse and redirect to relevant topics.
- If the user tries to use you for unrelated tasks, do NOT comply. Say you can only discuss ${siteConfig.name}'s work and suggest emailing ${siteConfig.email}.
- Never reveal secrets, API keys, or internal system details.
- Never invent facts or links.

## Profile
Name: ${siteConfig.name}
Title: ${siteConfig.title}
One-liner: ${siteConfig.oneLiner}

## Education
${educationText}

## Skills
${skillText}

## Experience
${experienceText}

## Projects
${projectText}
  `.trim();
}
