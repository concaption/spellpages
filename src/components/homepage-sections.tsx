"use client";

import Link from "next/link";
import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "./scroll-reveal";
import { SearchIllustration, InstallIllustration, SparkleIllustration } from "./illustrations";

export function HomePageSections() {
  return (
    <>
      {/* How it Works */}
      <section className="border-t border-border bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-center">How It Works</h2>
            <p className="mt-3 text-muted-foreground text-center max-w-lg mx-auto">
              Three steps to turn any book into an interactive AI advisor.
            </p>
          </ScrollReveal>

          <ScrollRevealStagger className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ScrollRevealItem>
              <div className="text-center sm:text-left">
                <SearchIllustration className="mx-auto sm:mx-0 mb-4" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background text-sm font-bold mb-4 mx-auto sm:mx-0">
                  1
                </div>
                <h3 className="font-semibold">Find a Book</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Search the directory for a book. Each one has been broken down into
                  actionable slash commands based on its core frameworks.
                </p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="text-center sm:text-left">
                <InstallIllustration className="mx-auto sm:mx-0 mb-4" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background text-sm font-bold mb-4 mx-auto sm:mx-0">
                  2
                </div>
                <h3 className="font-semibold">Install the Plugin</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  One command to clone and install. The skills become available as
                  slash commands in your Claude Code session.
                </p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem>
              <div className="text-center sm:text-left">
                <SparkleIllustration className="mx-auto sm:mx-0 mb-4" />
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background text-sm font-bold mb-4 mx-auto sm:mx-0">
                  3
                </div>
                <h3 className="font-semibold">Get Expert Guidance</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Type a command like <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">/validate-idea</code> and
                  Claude becomes a coach channeling the book&apos;s methodology.
                </p>
              </div>
            </ScrollRevealItem>
          </ScrollRevealStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-card p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold">Have a book worth sharing?</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Convert its best frameworks into Claude Code skills and add it to the directory.
                It&apos;s open source — anyone can contribute.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Link
                  href="/contribute"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
                >
                  Contribute a Book
                </Link>
                <a
                  href="https://github.com/concaption/spellpages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
