"use client";

import type { Book } from "@/lib/types";
import { BookCard } from "./book-card";
import { FadeInStagger, FadeInItem } from "./motion";

interface BookGridProps {
  books: Book[];
  emptyMessage?: string;
}

export function BookGrid({ books, emptyMessage = "No books found." }: BookGridProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <FadeInItem key={book.slug}>
          <BookCard book={book} />
        </FadeInItem>
      ))}
    </FadeInStagger>
  );
}
