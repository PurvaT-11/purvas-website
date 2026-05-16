"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

type Sparkle = { top: string; left: string; delay: string; size: number };

export function SiteBackground({ className }: { className?: string }) {
  const sparkles = useMemo<Sparkle[]>(() => {
    // deterministic-ish without needing random on server
    return [
      { top: "18%", left: "12%", delay: "0s", size: 10 },
      { top: "22%", left: "78%", delay: "0.6s", size: 8 },
      { top: "46%", left: "10%", delay: "1.2s", size: 7 },
      { top: "54%", left: "88%", delay: "0.9s", size: 9 },
      { top: "76%", left: "18%", delay: "1.6s", size: 8 },
      { top: "82%", left: "72%", delay: "1.9s", size: 7 },
    ];
  }, []);

  return (
    <div className={cn("pointer-events-none fixed inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(217,70,239,0.20),transparent_55%),radial-gradient(900px_circle_at_80%_15%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(1000px_circle_at_30%_80%,rgba(244,114,182,0.14),transparent_55%),radial-gradient(900px_circle_at_85%_85%,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light bg-[url('/noise.svg')] bg-repeat" />

      {sparkles.map((s, idx) => (
        <span
          key={idx}
          className="absolute block animate-sparkle rounded-full bg-gradient-to-b from-white/80 to-white/10 blur-[0.2px] shadow-[0_0_18px_rgba(244,114,182,0.25)]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
