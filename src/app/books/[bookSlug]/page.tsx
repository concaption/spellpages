import { getBook, getAllBookSlugs } from "@/lib/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InstallInstructions } from "@/components/install-instructions";

interface Props {
  params: Promise<{ bookSlug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBookSlugs();
  return slugs.map((bookSlug) => ({ bookSlug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bookSlug } = await params;
  const book = await getBook(bookSlug);
  if (!book) return {};
  return {
    title: `${book.title} by ${book.author}`,
    description: book.description,
    openGraph: {
      title: `${book.title} — ${book.skillCount} Claude Code Skills`,
      description: book.description,
    },
  };
}

export default async function BookPage({ params }: Props) {
  const { bookSlug } = await params;
  const book = await getBook(bookSlug);
  if (!book) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/books" className="hover:text-foreground transition-colors">Books</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{book.title}</span>
      </nav>

      {/* Book Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-64 shrink-0">
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-border">
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
              priority
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold">{book.title}</h1>
          <p className="text-lg text-muted-foreground mt-1">by {book.author}</p>

          <div className="flex gap-2 mt-4 flex-wrap">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {book.skillCount} skills
            </span>
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            {book.longDescription || book.description}
          </p>

          <div className="mt-6">
            <a
              href={book.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Skills List */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Skills ({book.skillCount})</h2>
        <div className="grid gap-2">
          {book.skills.map((skill, index) => (
            <Link
              key={skill.slug}
              href={`/books/${book.slug}/${skill.slug}`}
              className="flex items-center gap-4 rounded-lg border border-border p-4 hover:bg-muted/50 hover:border-foreground/20 transition-colors group"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <code className="text-sm font-mono font-semibold text-accent group-hover:underline">
                    /{skill.name}
                  </code>
                  <span className="hidden sm:inline rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {skill.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5 truncate">
                  {skill.description}
                </p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground shrink-0">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Install Instructions */}
      <InstallInstructions
        repoUrl={book.repoUrl}
        installCommand={book.installCommand}
        bookSlug={book.slug}
        firstSkillName={book.skills[0]?.name}
      />
    </div>
  );
}
