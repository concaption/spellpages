"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";
import { LogoMascot } from "../logo-mascot";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-semibold text-sm">
            <LogoMascot size={28} />
            <span>SpellPages</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/books" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              Browse
            </Link>
            <Link href="/contribute" className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
              Contribute
            </Link>
            <a
              href="https://github.com/concaption/spellpages"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              GitHub
            </a>
            <div className="ml-1 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-md p-1.5 hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <Link href="/books" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                Browse
              </Link>
              <Link href="/contribute" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                Contribute
              </Link>
              <a href="https://github.com/concaption/spellpages" target="_blank" rel="noopener noreferrer" className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                GitHub
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
