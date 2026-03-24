import { Suspense } from "react";
import { getAllBooks } from "@/lib/content";
import type { Metadata } from "next";
import { BooksPageClient } from "./books-page-client";

export const metadata: Metadata = {
  title: "Browse Books",
  description: "Browse all books converted into Claude Code skills.",
};

export default async function BooksPage() {
  const books = await getAllBooks();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Browse Books</h1>
        <p className="mt-2 text-muted-foreground">
          Discover books converted into interactive Claude Code skills.
        </p>
      </div>
      <Suspense>
        <BooksPageClient books={books} />
      </Suspense>
    </div>
  );
}
