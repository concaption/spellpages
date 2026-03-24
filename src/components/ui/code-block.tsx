"use client";

import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={cn("relative group rounded-lg bg-muted overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        {language && (
          <span className="text-xs text-muted-foreground font-mono">{language}</span>
        )}
        <CopyButton text={code} className="ml-auto" />
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
