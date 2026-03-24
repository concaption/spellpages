"use client";

import Link from "next/link";
import { SearchBar } from "./search-bar";
import { FadeIn, FloatingBook, motion } from "./motion";
import { BlueprintGrid, ConstructionMarks, DimensionLine, AnnotationArrow } from "./sketch-elements";
import { ParallaxLayer } from "./parallax";

const terminalLines = [
  { command: "/validate-idea", response: "You are a business advisor channeling The Minimalist Entrepreneur. Let's validate your idea by selling first, not building..." },
  { command: "/atomic-habits", response: "Let's build your identity-based habit system. The goal isn't to read a book — the goal is to become a reader, a runner, a musician..." },
  { command: "/deep-work-schedule", response: "Let's design your ideal deep work routine. First, which philosophy fits your life?" },
];

export function HeroClient({ bookCount, skillCount }: { bookCount: number; skillCount: number }) {
  return (
    <div className="relative">
      <BlueprintGrid />
      <ConstructionMarks />

      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div>
          <FadeIn>
            <div className="inline-flex items-center gap-2 sketch-border bg-card px-3 py-1.5 text-xs font-mono text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {bookCount} books &middot; {skillCount} skills
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08]">
              Books you can
              <br />
              <span className="sketch-underline text-accent">run in your terminal</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <AnnotationArrow text="slash commands from real books" className="mt-3" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Every great book has frameworks worth reusing. We extract them into
              Claude Code slash commands so you get expert guidance when you need it.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/books"
                className="inline-flex items-center justify-center sketch-border bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Browse Books
              </Link>
              <Link
                href="/contribute"
                className="inline-flex items-center justify-center sketch-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
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

          <FadeIn delay={0.45}>
            <DimensionLine label="search + browse + install" className="mt-6 max-w-xs opacity-60" />
          </FadeIn>
        </div>

        {/* Right: Terminal demo with parallax */}
        <FadeIn delay={0.3} className="hidden lg:block">
          <div className="relative">
            {/* Floating book illustration with parallax */}
            <ParallaxLayer speed={0.15} className="absolute -top-12 -right-4 z-10">
              <FloatingBook />
            </ParallaxLayer>

            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              style={{ perspective: 1000 }}
              className="sketch-border bg-card overflow-hidden"
            >
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full border border-border" />
                  <div className="w-2.5 h-2.5 rounded-full border border-border" />
                  <div className="w-2.5 h-2.5 rounded-full border border-border" />
                </div>
                <span className="text-[10px] text-muted-foreground font-mono ml-2">~ claude</span>
              </div>
              {/* Terminal content */}
              <div className="p-5 font-mono text-sm space-y-4">
                <div>
                  <div className="text-muted-foreground text-xs">
                    <span className="text-accent">$</span> Type a slash command to get started
                  </div>
                </div>
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={line.command}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.3 }}
                  >
                    <div className="text-foreground font-semibold text-xs">
                      <span className="text-accent">&gt;</span> {line.command}
                    </div>
                    <div className="mt-1.5 text-muted-foreground text-[11px] leading-relaxed pl-3 border-l border-accent/30">
                      {line.response}
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="flex items-center gap-1"
                >
                  <span className="text-accent text-xs">&gt;</span>
                  <motion.span
                    className="w-1.5 h-3.5 bg-accent/70"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
