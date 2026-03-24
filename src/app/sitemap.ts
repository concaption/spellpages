import type { MetadataRoute } from "next";
import { getAllBooks, getAllSkillPaths } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_URL || "https://spellpages.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const books = await getAllBooks();
  const skillPaths = await getAllSkillPaths();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/books`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contribute`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}`,
    lastModified: new Date(book.dateAdded),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const skillPages: MetadataRoute.Sitemap = skillPaths.map(({ bookSlug, skillSlug }) => ({
    url: `${BASE_URL}/books/${bookSlug}/${skillSlug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...bookPages, ...skillPages];
}
