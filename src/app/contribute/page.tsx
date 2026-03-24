import type { Metadata } from "next";
import { CodeBlock } from "@/components/ui/code-block";

export const metadata: Metadata = {
  title: "Contribute a Book",
  description: "Learn how to convert a book into Claude Code skills and add it to the SpellPages directory.",
};

export default function ContributePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Add Your Book</h1>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
        Convert any non-fiction book into Claude Code skills and share them with the community.
        Here&apos;s how to contribute.
      </p>

      <div className="mt-12 space-y-12">
        {/* Step 1 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center sketch-border text-[11px] font-mono font-bold">
              1
            </span>
            Create a Skills Repository
          </h2>
          <p className="mt-3 text-muted-foreground ml-11">
            Create a new GitHub repository for your book&apos;s skills. Use this structure:
          </p>
          <div className="mt-4 ml-11">
            <CodeBlock
              language="text"
              code={`your-book-skills/
  .claude-plugin/
    plugin.json
  skills/
    skill-one/
      SKILL.md
    skill-two/
      SKILL.md
  README.md`}
            />
          </div>
        </section>

        {/* Step 2 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center sketch-border text-[11px] font-mono font-bold">
              2
            </span>
            Write the Plugin Manifest
          </h2>
          <p className="mt-3 text-muted-foreground ml-11">
            Create <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">.claude-plugin/plugin.json</code>:
          </p>
          <div className="mt-4 ml-11">
            <CodeBlock
              language="json"
              code={`{
  "name": "your-book-name",
  "description": "Skills based on [Book Title] by [Author]",
  "version": "1.0.0",
  "author": { "name": "Your Name" },
  "repository": "https://github.com/you/your-book-skills",
  "license": "MIT"
}`}
            />
          </div>
        </section>

        {/* Step 3 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center sketch-border text-[11px] font-mono font-bold">
              3
            </span>
            Write Your Skills
          </h2>
          <p className="mt-3 text-muted-foreground ml-11">
            Each skill is a <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">SKILL.md</code> file
            with frontmatter. A good skill includes:
          </p>
          <div className="mt-4 ml-11">
            <CodeBlock
              language="markdown"
              code={`---
name: skill-name
description: When to use this skill.
---

You are an advisor channeling the philosophy of [Book].

## Core Principle
The key insight from this chapter.

## Framework
Step-by-step methodology with questions to ask.

## Anti-Patterns
What NOT to do.

## Output
What the skill should produce for the user.`}
            />
          </div>
          <div className="mt-4 ml-11 sketch-border bg-muted/30 p-4">
            <h4 className="font-semibold text-sm mb-2">Tips for great skills:</h4>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>- Each skill should map to a chapter or core concept</li>
              <li>- Include actionable frameworks, not just summaries</li>
              <li>- Add anti-patterns to prevent common mistakes</li>
              <li>- Define clear outputs so the user knows what to expect</li>
              <li>- Write as if you&apos;re a coach, not a textbook</li>
            </ul>
          </div>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-xl font-bold flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center sketch-border text-[11px] font-mono font-bold">
              4
            </span>
            Submit to the Directory
          </h2>
          <p className="mt-3 text-muted-foreground ml-11">
            Open a pull request to{" "}
            <a
              href="https://github.com/concaption/spellpages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              concaption/spellpages
            </a>{" "}
            adding your book to the <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">content/books/</code> directory.
            Include:
          </p>
          <ul className="mt-3 ml-11 text-sm text-muted-foreground space-y-1.5">
            <li>- <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">content/books/your-book-slug/book.json</code> — Book metadata</li>
            <li>- <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">content/books/your-book-slug/skills/*.md</code> — Skill files with frontmatter</li>
            <li>- <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">public/covers/your-book-slug.svg</code> — Book cover image</li>
          </ul>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-16 sketch-border bg-muted/30 p-8 text-center">
        <h3 className="text-xl font-bold">Ready to contribute?</h3>
        <p className="mt-2 text-muted-foreground">
          Check out existing books for inspiration, then create your own.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://github.com/concaption/spellpages"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Open a PR
          </a>
          <a
            href="https://github.com/slavingia/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
          >
            View Example
          </a>
        </div>
      </div>
    </div>
  );
}
