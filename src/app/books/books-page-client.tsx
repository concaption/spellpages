"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/search-bar";
import { BookGrid } from "@/components/book-grid";
import type { Book } from "@/lib/types";

export function BooksPageClient({ books }: { books: Book[] }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const filtered = books.filter((book) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      book.title.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.description.toLowerCase().includes(q) ||
      book.tags.some((t) => t.toLowerCase().includes(q)) ||
      book.skills.some(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    );
  });

  const allTags = [...new Set(books.flatMap((b) => b.tags))];
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const finalBooks = activeTag
    ? filtered.filter((b) => b.tags.includes(activeTag))
    : filtered;

  return (
    <>
      <div className="mb-6">
        <SearchBar
          defaultValue={initialQuery}
          onSearch={setQuery}
          placeholder="Search by title, author, tag, or skill..."
        />
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        <button
          onClick={() => setActiveTag(null)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            !activeTag
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              activeTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-border"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <BookGrid
        books={finalBooks}
        emptyMessage="No books match your search. Try different keywords."
      />
    </>
  );
}
