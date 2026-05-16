"use client";

import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function openChat(prompt?: string) {
  window.dispatchEvent(
    new CustomEvent("chatbot:open", { detail: { prompt: prompt ?? "" } })
  );
}

export function ChatbotSection() {
  return (
    <Section id="chatbot">
      <Container className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Chatbot
          </h2>
          <p className="text-muted-foreground">
            Ask about my education, experience, skills, or projects.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-base">What it will do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Answer questions about my experience and projects</p>
              <p>• Give tailored project walkthroughs (hiring-manager style)</p>
              <p>• Capture “unknown questions” so I can improve the site</p>
              <p>• Later: tool calling + RAG + long-term memory</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-fuchsia-500/12 via-indigo-500/10 to-sky-400/10 border-white/10">
            <CardHeader>
              <CardTitle className="text-base">Try it</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button
                type="button"
                className="rounded-full"
                onClick={() =>
                  openChat(
                    "Give me a 30-second intro to Purva and her strongest projects."
                  )
                }
              >
                Open chat
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-full"
                onClick={() =>
                  openChat(
                    "Summarize your backend experience in 5 bullets with measurable impact."
                  )
                }
              >
                Ask a sample question
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
