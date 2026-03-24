import Link from "next/link";
import { SearchBar } from "./search-bar";
import { getAllBooks } from "@/lib/content";
import { HeroClient } from "./hero-client";

export async function HeroSection() {
  const books = await getAllBooks();
  const totalSkills = books.reduce((sum, b) => sum + b.skillCount, 0);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <HeroClient bookCount={books.length} skillCount={totalSkills} />
      </div>
    </section>
  );
}
