"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative p-8 sm:p-12">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-muted-foreground"
        >
          {siteConfig.title}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
        >
          {siteConfig.oneLiner}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "default" }),
              "transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Contact Me
          </Link>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "justify-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            Resume
          </a>
        </motion.div>

        {/* Chat entry-point lives in the floating button (bottom-right). */}
      </div>
    </div>
  );
}
