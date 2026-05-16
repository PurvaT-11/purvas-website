import { Hero } from "@/components/site/hero";
import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ChatbotSection } from "@/components/sections/chatbot-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Section className="pt-10 sm:pt-14">
        <Container className="space-y-10">
          <Hero />
        </Container>
      </Section>

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ChatbotSection />
      <ContactSection />
    </main>
  );
}
