export interface Skill {
  slug: string;
  name: string;
  description: string;
  category: string;
  content: string;
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  repoUrl: string;
  installCommand: string;
  tags: string[];
  skillCount: number;
  featured: boolean;
  dateAdded: string;
  skills: Skill[];
}

export interface BookMeta {
  title: string;
  author: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  repoUrl: string;
  installCommand: string;
  tags: string[];
  featured: boolean;
  dateAdded: string;
  skills: SkillMeta[];
}

export interface SkillMeta {
  slug: string;
  category: string;
}

export interface SkillFrontmatter {
  name: string;
  description: string;
}
