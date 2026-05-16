import Link from "next/link";
import { Container } from "@/components/site/container";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link
            className="text-muted-foreground hover:text-foreground transition-colors"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="text-muted-foreground hover:text-foreground transition-colors"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="text-muted-foreground hover:text-foreground transition-colors"
            href={`mailto:${siteConfig.email}`}
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}

