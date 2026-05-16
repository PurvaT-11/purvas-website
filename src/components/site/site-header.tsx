import Link from "next/link";
import { Container } from "@/components/site/container";
import { SiteNav } from "@/components/site/site-nav";
import { MobileNav } from "@/components/site/site-mobile-nav";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40">
      <Container className="h-16 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-semibold tracking-tight">{siteConfig.name}</span>
          <span className="hidden sm:inline text-sm text-muted-foreground">
            {siteConfig.title}
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <SiteNav />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <MobileNav />
        </div>
      </Container>
      <div className="h-px w-full bg-gradient-to-r from-fuchsia-400/25 via-indigo-400/20 to-sky-300/20" />
    </header>
  );
}
