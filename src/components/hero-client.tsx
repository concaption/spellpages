"use client";

import Link from "next/link";
import { SearchBar } from "./search-bar";
import { FadeIn, FloatingBook, motion } from "./motion";

const terminalLines = [
  { command: "/validate-idea", response: "You are a business advisor channeling The Minimalist Entrepreneur. Let's validate your idea by selling first, not building..." },
  { command: "/atomic-habits", response: "Let's build your identity-based habit system. The goal isn't to read a book — the goal is to become a reader, a runner, a musician..." },
  { command: "/deep-work-schedule", response: "Let's design your ideal deep work routine. First, which philosophy fits your life?" },
];

export function HeroClient({ bookCount, skillCount }: { bookCount: number; skillCount: number }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Copy */}
      <div>
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {bookCount} books &middot; {skillCount} skills available
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Books you can
            <br />
            <span className="text-accent">run in your terminal</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
            Every great book has frameworks worth reusing. We extract them into
            Claude Code slash commands so you get expert guidance when you need it.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/books"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Browse Books
            </Link>
            <Link
              href="/contribute"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Add Your Book
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <SearchBar />
          </div>
        </FadeIn>
      </div>

      {/* Right: Terminal demo with animation */}
      <FadeIn delay={0.3} className="hidden lg:block">
        <div className="relative">
          {/* Floating book illustration */}
          <div className="absolute -top-8 -right-4 z-10">
            <FloatingBook />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="rounded-xl border border-border bg-card overflow-hidden shadow-sm"
          >
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">claude</span>
            </div>
            {/* Terminal content */}
            <div className="p-5 font-mono text-sm space-y-4">
              <div>
                <div className="text-muted-foreground">
                  <span className="text-accent">$</span> Type a slash command to get started
                </div>
              </div>
              {terminalLines.map((line, i) => (
                <motion.div
                  key={line.command}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.3 }}
                >
                  <div className="text-foreground font-semibold">
                    <span className="text-accent">&gt;</span> {line.command}
                  </div>
                  <div className="mt-2 text-muted-foreground text-xs leading-relaxed pl-4 border-l-2 border-accent/30">
                    {line.response}
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="flex items-center gap-1"
              >
                <span className="text-accent">&gt;</span>
                <span className="w-2 h-4 bg-accent/70 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </FadeIn>
    </div>
  );
}
