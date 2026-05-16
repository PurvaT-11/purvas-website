"use client";

import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/content/site";

export function AboutSection() {
  return (
    <Section id="about" className="pt-0">
      <Container className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            About
          </h2>
          <p className="text-muted-foreground leading-7">
            I’m {siteConfig.name} — backend-first engineer with strong interest
            in agentic AI. I focus on building systems that stay stable under
            load, make performance improvements that are measurable, and ship
            reliably.
          </p>
          <p className="text-muted-foreground leading-7">
            Blunt truth: the UI here is intentionally clean and “claude”-coded
            (wink wink). The digital twin chatbot is under progress — that’s the
            part that will make the site feel alive.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/headshot-placeholder.svg"
                alt="Headshot"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-medium leading-6">{siteConfig.title}</p>
              <p className="text-sm text-muted-foreground truncate">
                {siteConfig.email}
              </p>
            </div>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            Add your photo as <code>/public/headshot.jpg</code> to replace this
            placeholder.
          </div>
        </div>
      </Container>
    </Section>
  );
}
