import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/content/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" className="pt-0">
      <Container className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Experience
          </h2>
          <p className="mt-2 text-muted-foreground">
            Timeline with measurable outcomes where possible.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-6" />
          <div className="space-y-4">
            {experience.map((item) => (
              <div key={`${item.company}-${item.role}`} className="relative pl-12 md:pl-16">
                <div className="absolute left-3 top-6 h-3 w-3 rounded-full bg-gradient-to-r from-fuchsia-400/70 via-indigo-400/60 to-sky-300/60 ring-4 ring-background md:left-5" />
                <Card className="bg-white/5 border-white/10">
                  <CardHeader>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base">{item.role}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {item.company}
                          {item.location ? ` • ${item.location}` : ""}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.start} — {item.end}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {item.company === "IEEE PCE" ? (
                      <div className="mb-4 flex items-center gap-3">
                        <img
                          src="/ieee-pce.svg"
                          alt="IEEE PCE"
                          className="h-10 w-auto opacity-90"
                        />
                      </div>
                    ) : null}
                    <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                      {item.highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
