import { HeroSection } from "@/components/hero-section";
import { BookGrid } from "@/components/book-grid";
import { getAllBooks } from "@/lib/content";
import Link from "next/link";
import { HomePageClient } from "@/components/homepage-client";

export default async function HomePage() {
  const allBooks = await getAllBooks();
  const featuredBooks = allBooks.filter((b) => b.featured);
  const totalSkills = allBooks.reduce((sum, b) => sum + b.skillCount, 0);
  const totalAuthors = new Set(allBooks.map((b) => b.author)).size;

  return (
    <>
      <HeroSection />

      <HomePageClient
        stats={[
          { label: "Books", value: allBooks.length },
          { label: "Skills", value: totalSkills },
          { label: "Authors", value: totalAuthors },
          { label: "Free & Open", value: "100%" },
        ]}
      />

      {/* Featured Books */}
      {featuredBooks.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured</h2>
            <Link
              href="/books"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all &rarr;
            </Link>
          </div>
          <BookGrid books={featuredBooks} />
        </section>
      )}

      {/* All Books */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">All Books</h2>
          <span className="text-sm text-muted-foreground">{allBooks.length} books</span>
        </div>
        <BookGrid books={allBooks.slice(0, 9)} />
        {allBooks.length > 9 && (
          <div className="mt-8 text-center">
            <Link
              href="/books"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              View all {allBooks.length} books
            </Link>
          </div>
        )}
      </section>

      {/* How it Works + CTA — client component for animations */}
      <HomePageSections />
    </>
  );
}

// Separate client import to keep the page mostly server-rendered
import { HomePageSections } from "@/components/homepage-sections";
