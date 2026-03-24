import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Book, BookMeta, SkillFrontmatter, Skill } from "./types";

const contentDir = path.join(process.cwd(), "content", "books");

function parseSkillFile(filePath: string): { frontmatter: SkillFrontmatter; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as SkillFrontmatter,
    content: content.trim(),
  };
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).process(content);
  return result.toString();
}

function loadBook(slug: string): Book | null {
  const bookDir = path.join(contentDir, slug);
  const metaPath = path.join(bookDir, "book.json");

  if (!fs.existsSync(metaPath)) return null;

  const meta: BookMeta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  const skillsDir = path.join(bookDir, "skills");

  const skills: Skill[] = meta.skills.map((sm) => {
    const skillPath = path.join(skillsDir, `${sm.slug}.md`);
    if (!fs.existsSync(skillPath)) {
      return {
        slug: sm.slug,
        name: sm.slug,
        description: "",
        category: sm.category,
        content: "",
      };
    }
    const { frontmatter, content } = parseSkillFile(skillPath);
    return {
      slug: sm.slug,
      name: frontmatter.name || sm.slug,
      description: frontmatter.description || "",
      category: sm.category,
      content,
    };
  });

  return {
    slug,
    title: meta.title,
    author: meta.author,
    description: meta.description,
    longDescription: meta.longDescription,
    coverImage: meta.coverImage,
    repoUrl: meta.repoUrl,
    installCommand: meta.installCommand,
    tags: meta.tags,
    skillCount: skills.length,
    featured: meta.featured,
    dateAdded: meta.dateAdded,
    skills,
  };
}

export async function getAllBooks(): Promise<Book[]> {
  if (!fs.existsSync(contentDir)) return [];

  const slugs = fs.readdirSync(contentDir).filter((name) => {
    return fs.statSync(path.join(contentDir, name)).isDirectory();
  });

  const books: Book[] = [];
  for (const slug of slugs) {
    const book = loadBook(slug);
    if (book) books.push(book);
  }

  return books.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));
}

export async function getBook(bookSlug: string): Promise<Book | null> {
  return loadBook(bookSlug);
}

export async function getSkill(
  bookSlug: string,
  skillSlug: string
): Promise<{ book: Book; skill: Skill } | null> {
  const book = loadBook(bookSlug);
  if (!book) return null;

  const skill = book.skills.find((s) => s.slug === skillSlug);
  if (!skill) return null;

  return { book, skill };
}

export async function getAllBookSlugs(): Promise<string[]> {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter((name) =>
    fs.statSync(path.join(contentDir, name)).isDirectory()
  );
}

export async function getAllSkillPaths(): Promise<{ bookSlug: string; skillSlug: string }[]> {
  const books = await getAllBooks();
  const paths: { bookSlug: string; skillSlug: string }[] = [];
  for (const book of books) {
    for (const skill of book.skills) {
      paths.push({ bookSlug: book.slug, skillSlug: skill.slug });
    }
  }
  return paths;
}

export async function getFeaturedBooks(): Promise<Book[]> {
  const books = await getAllBooks();
  return books.filter((b) => b.featured);
}
