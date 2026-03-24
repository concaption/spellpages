"use client";

import { CodeBlock } from "./ui/code-block";

interface InstallInstructionsProps {
  repoUrl: string;
  installCommand: string;
  bookSlug: string;
  firstSkillName?: string;
}

export function InstallInstructions({ repoUrl, installCommand, bookSlug, firstSkillName }: InstallInstructionsProps) {
  const isMainRepo = repoUrl.includes("concaption/spellpages");

  const cloneCommand = isMainRepo
    ? `git clone ${repoUrl}.git ~/.claude/spellpages`
    : `git clone ${repoUrl}.git ~/.claude/plugins/${repoUrl.split("/").pop()}`;

  const pluginInstall = isMainRepo
    ? `claude plugin install ~/.claude/spellpages/content/books/${bookSlug}`
    : `claude plugin install ~/.claude/plugins/${repoUrl.split("/").pop()}`;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Installation</h2>
      <div className="rounded-xl border border-border p-6 bg-card">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
                1
              </span>
              Clone the repository
            </h3>
            <CodeBlock code={cloneCommand} language="bash" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
                2
              </span>
              Install the plugin in Claude Code
            </h3>
            <CodeBlock code={pluginInstall} language="bash" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
                3
              </span>
              Start using skills
            </h3>
            <p className="text-sm text-muted-foreground ml-8">
              Type a skill command (e.g. <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono text-accent">/{firstSkillName || "skill-name"}</code>) in Claude Code to get started.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Or install with a single command:
          </p>
          <div className="mt-2">
            <CodeBlock code={installCommand} language="bash" />
          </div>
        </div>
      </div>
    </section>
  );
}
