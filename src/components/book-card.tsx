"use client";

import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/lib/types";
import { TiltCard } from "./tilt-card";

export function BookCard({ book }: { book: Book }) {
  return (
    <TiltCard>
      <Link
        href={`/books/${book.slug}`}
        className="group block relative sketch-border bg-card overflow-hidden transition-all hover:shadow-md"
      >
        <div className="relative aspect-[2/3] w-full bg-muted overflow-hidden">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-1">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{book.author}</p>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {book.description}
          </p>
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <span className="inline-flex items-center gap-1 sketch-border bg-accent/10 px-2 py-0.5 text-[11px] font-mono text-accent">
              {book.skillCount} skills
            </span>
            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="sketch-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </TiltCard>
  );
}
