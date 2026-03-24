"use client";

import Link from "next/link";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "./scroll-reveal";
import { SearchIllustration, InstallIllustration, SparkleIllustration } from "./illustrations";
import { BlueprintGrid, DimensionLine, ConstructionMarks, CornerBracket } from "./sketch-elements";
import { ParallaxLayer } from "./parallax";

export function HomePageSections() {
  return (
    <>
      {/* How it Works */}
      <section className="relative border-t border-border overflow-hidden">
        <BlueprintGrid />
        <ConstructionMarks />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <ScrollReveal>
            <DimensionLine label="process" className="max-w-xs mx-auto mb-8 opacity-50" />
            <h2 className="text-2xl font-bold text-center">How It Works</h2>
            <p className="mt-3 text-muted-foreground text-center max-w-lg mx-auto">
              Three steps to turn any book into an interactive AI advisor.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <ScrollRevealItem>
              <div className="relative">
                {/* Connecting dashed line to next step */}
                <div className="hidden sm:block absolute top-10 left-full w-full border-t border-dashed border-border/40 -translate-y-1/2" />

                <SearchIllustration className="mb-5" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center sketch-border text-xs font-mono font-bold">
                    01
                  </span>
                  <h3 className="font-semibold">Find a Book</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Search the directory for a book. Each one has been broken down into
                  actionable slash commands based on its core frameworks.
                </p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="relative">
                <div className="hidden sm:block absolute top-10 left-full w-full border-t border-dashed border-border/40 -translate-y-1/2" />

                <InstallIllustration className="mb-5" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center sketch-border text-xs font-mono font-bold">
                    02
                  </span>
                  <h3 className="font-semibold">Install the Plugin</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  One command to clone and install. The skills become available as
                  slash commands in your Claude Code session.
                </p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div>
                <SparkleIllustration className="mb-5" />
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center sketch-border text-xs font-mono font-bold">
                    03
                  </span>
                  <h3 className="font-semibold">Get Expert Guidance</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Type a command like <code className="sketch-border bg-muted px-1.5 py-0.5 text-xs font-mono text-accent">/validate-idea</code> and
                  Claude becomes a coach channeling the book&apos;s methodology.
                </p>
              </div>
            </ScrollRevealItem>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <ScrollReveal>
            <div className="relative sketch-border bg-card p-8 sm:p-12 text-center overflow-hidden">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3"><CornerBracket position="top-left" /></div>
              <div className="absolute top-3 right-3"><CornerBracket position="top-right" /></div>
              <div className="absolute bottom-3 left-3"><CornerBracket position="bottom-left" /></div>
              <div className="absolute bottom-3 right-3"><CornerBracket position="bottom-right" /></div>

              <ParallaxLayer speed={0.08}>
                <h2 className="text-2xl font-bold">Have a book worth sharing?</h2>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Convert its best frameworks into Claude Code skills and add it to the directory.
                  It&apos;s open source — anyone can contribute.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Link
                    href="/contribute"
                    className="inline-flex items-center justify-center sketch-border bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    Contribute a Book
                  </Link>
                  <a
                    href="https://github.com/concaption/spellpages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center sketch-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
                <DimensionLine label="open source" className="max-w-[200px] mx-auto mt-8 opacity-40" />
              </ParallaxLayer>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
