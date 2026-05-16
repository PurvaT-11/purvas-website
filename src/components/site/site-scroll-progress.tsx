"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const next = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(next);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300"
        style={{ width: `${Math.round(progress * 100)}%` }}
      />
    </div>
  );
}

