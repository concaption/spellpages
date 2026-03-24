import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
      <h1 className="text-7xl font-bold font-mono text-accent">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">Page not found</p>
      <p className="mt-2 text-sm text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link
          href="/"
          className="sketch-border bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Go Home
        </Link>
        <Link
          href="/books"
          className="sketch-border px-6 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
        >
          Browse Books
        </Link>
      </div>
    </div>
  );
}
