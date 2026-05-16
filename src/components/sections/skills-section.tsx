import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/content/skills";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Skills snapshot
          </h2>
          <p className="mt-2 text-muted-foreground">
            Backend + agentic AI + reliability — this is where I’m strongest.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((group) => (
            <Card key={group.title} className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-base">{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="rounded-full">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

