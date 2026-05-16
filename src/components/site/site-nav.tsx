import { cn } from "@/lib/utils";

const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#chatbot", label: "Chatbot" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav({ className }: { className?: string }) {
  return (
    <nav className={cn("flex items-center gap-6 text-sm", className)}>
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
