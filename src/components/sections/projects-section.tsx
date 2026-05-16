"use client";

import Link from "next/link";
import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/content/projects";

function openChat(prompt: string) {
  window.dispatchEvent(new CustomEvent("chatbot:open", { detail: { prompt } }));
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Container className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h2>
          <p className="text-muted-foreground">
            Ask for a walkthrough, architecture, or tradeoffs — the digital twin will explain it.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Card
              key={p.slug}
              className="bg-white/5 border-white/10 hover:border-white/20 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-base">{p.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{p.timeframe}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {p.links?.github ? (
                    <Link
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      GitHub →
                    </Link>
                  ) : null}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() =>
                      openChat(
                        `Explain the project "${p.title}" like I'm a hiring manager. Include architecture, tradeoffs, and impact.`
                      )
                    }
                  >
                    Ask AI about this
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
