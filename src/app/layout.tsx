import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://spellpages.usama.cc"),
  title: {
    default: "SpellPages — Books as Claude Code Skills",
    template: "%s | SpellPages",
  },
  description:
    "Browse books converted into Claude Code slash commands. Install a book and get expert guidance directly in your terminal.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "SpellPages",
    description:
      "Browse books converted into Claude Code slash commands. Install a book and get expert guidance directly in your terminal.",
    type: "website",
    siteName: "SpellPages",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpellPages — Books as Claude Code Skills",
    description:
      "Browse books converted into Claude Code slash commands. Install a book and get expert guidance directly in your terminal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
