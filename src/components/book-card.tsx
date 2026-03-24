"use client";

import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/lib/types";
import { TiltCard } from "./tilt-card";
import { CornerBracket } from "./sketch-elements";

export function BookCard({ book }: { book: Book }) {
  return (
    <TiltCard>
      <Link
        href={`/books/${book.slug}`}
        className="group block relative bg-card overflow-hidden transition-all hover:shadow-md rounded-sm"
      >
        {/* Corner brackets */}
        <div className="absolute top-1 left-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <CornerBracket position="top-left" />
        </div>
        <div className="absolute top-1 right-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <CornerBracket position="top-right" />
        </div>
        <div className="absolute bottom-1 left-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <CornerBracket position="bottom-left" />
        </div>
        <div className="absolute bottom-1 right-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <CornerBracket position="bottom-right" />
        </div>

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
            <span className="inline-flex items-center gap-1 rounded-sm bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent font-mono">
              {book.skillCount} skills
            </span>
            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-muted px-2 py-0.5 text-xs text-muted-foreground"
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
