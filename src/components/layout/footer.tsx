import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>SpellPages &mdash; Open source book-to-skills directory</span>
          <nav className="flex items-center gap-4">
            <Link href="/books" className="hover:text-foreground transition-colors">Browse</Link>
            <Link href="/contribute" className="hover:text-foreground transition-colors">Contribute</Link>
            <a href="https://github.com/concaption/spellpages" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
