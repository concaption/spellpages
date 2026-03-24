import { getSkill, getAllSkillPaths, renderMarkdown } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SkillActions } from "@/components/skill-actions";

interface Props {
  params: Promise<{ bookSlug: string; skillSlug: string }>;
}

export async function generateStaticParams() {
  const paths = await getAllSkillPaths();
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bookSlug, skillSlug } = await params;
  const result = await getSkill(bookSlug, skillSlug);
  if (!result) return {};
  return {
    title: `/${result.skill.name} — ${result.book.title}`,
    description: result.skill.description,
  };
}

export default async function SkillPage({ params }: Props) {
  const { bookSlug, skillSlug } = await params;
  const result = await getSkill(bookSlug, skillSlug);
  if (!result) notFound();

  const { book, skill } = result;
  const htmlContent = await renderMarkdown(skill.content);

  const skillIndex = book.skills.findIndex((s) => s.slug === skill.slug);
  const prevSkill = skillIndex > 0 ? book.skills[skillIndex - 1] : null;
  const nextSkill = skillIndex < book.skills.length - 1 ? book.skills[skillIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/books" className="hover:text-foreground">Books</Link>
        <span className="mx-2">/</span>
        <Link href={`/books/${book.slug}`} className="hover:text-foreground">{book.title}</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">/{skill.name}</span>
      </nav>

      {/* Skill Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
            {skill.category}
          </span>
          <span className="text-muted-foreground text-xs">
            Skill {skillIndex + 1} of {book.skills.length}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-accent">
          /{skill.name}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{skill.description}</p>

        <SkillActions
          skillContent={skill.content}
          repoUrl={book.repoUrl}
          bookSlug={book.slug}
          skillSlug={skill.slug}
        />
      </div>

      {/* Skill Content */}
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>

      {/* Previous / Next Navigation */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {prevSkill ? (
          <Link
            href={`/books/${book.slug}/${prevSkill.slug}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>
              <span className="block text-xs text-muted-foreground">Previous</span>
              <span className="font-mono text-accent">/{prevSkill.name}</span>
            </span>
          </Link>
        ) : (
          <div />
        )}
        {nextSkill ? (
          <Link
            href={`/books/${book.slug}/${nextSkill.slug}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
          >
            <span>
              <span className="block text-xs text-muted-foreground">Next</span>
              <span className="font-mono text-accent">/{nextSkill.name}</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Back to book */}
      <div className="mt-8 text-center">
        <Link
          href={`/books/${book.slug}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to {book.title}
        </Link>
      </div>
    </div>
  );
}
