"use client";

import { ScrollReveal, ScrollRevealStagger, ScrollRevealItem } from "./scroll-reveal";

interface Stat {
  label: string;
  value: string | number;
}

export function HomePageClient({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollRevealStagger className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
          {stats.map((stat) => (
            <ScrollRevealItem key={stat.label}>
              <div className="py-8 px-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
