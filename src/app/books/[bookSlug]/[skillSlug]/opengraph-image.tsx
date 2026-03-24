import { ImageResponse } from "next/og";
import { getSkill, getAllSkillPaths } from "@/lib/content";

export const alt = "SpellPages Skill";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return await getAllSkillPaths();
}

export default async function Image({
  params,
}: {
  params: Promise<{ bookSlug: string; skillSlug: string }>;
}) {
  const { bookSlug, skillSlug } = await params;
  const result = await getSkill(bookSlug, skillSlug);

  const skillName = result?.skill.name || skillSlug;
  const skillDesc = result?.skill.description || "";
  const bookTitle = result?.book.title || bookSlug;
  const category = result?.skill.category || "";

  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", background: "#fafaf8", fontFamily: "system-ui, sans-serif", padding: "60px 80px" }}>
        <div style={{ display: "flex", fontSize: 14, fontFamily: "monospace", color: "#6b6b6b", marginBottom: 24 }}>
          {`SpellPages / ${category || bookSlug}`}
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, fontFamily: "monospace", color: "#c23d2e", lineHeight: 1 }}>
          {`/${skillName}`}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6b6b6b", marginTop: 20, lineHeight: 1.4 }}>
          {skillDesc.length > 120 ? skillDesc.substring(0, 120) + "..." : skillDesc}
        </div>
        <div style={{ display: "flex", marginTop: "auto", paddingTop: 30, borderTop: "1.5px solid #d4d0c8", fontSize: 18, color: "#1a1a1a" }}>
          {bookTitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
