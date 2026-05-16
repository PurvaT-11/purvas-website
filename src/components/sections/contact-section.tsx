import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/content/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Contact
          </h2>
          <p className="mt-2 text-muted-foreground">
            Email only. Fastest way to reach me.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-base">Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{siteConfig.email}</p>
              <div className="flex flex-wrap gap-2">
                <a
                  className={buttonVariants({ variant: "default" })}
                  href={`mailto:${siteConfig.email}`}
                >
                  Email
                </a>
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-base">Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub →
              </Link>
              <a
                href={siteConfig.links.resume}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Resume →
              </a>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
