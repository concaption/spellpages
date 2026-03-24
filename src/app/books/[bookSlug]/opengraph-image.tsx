import { ImageResponse } from "next/og";
import { getBook, getAllBookSlugs } from "@/lib/content";

export const alt = "SpellPages Book";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const slugs = await getAllBookSlugs();
  return slugs.map((bookSlug) => ({ bookSlug }));
}

export default async function Image({ params }: { params: Promise<{ bookSlug: string }> }) {
  const { bookSlug } = await params;
  const book = await getBook(bookSlug);

  const title = book?.title || bookSlug;
  const author = book?.author || "";
  const skillCount = book?.skillCount || 0;
  const tags = book?.tags.slice(0, 3).join("  ·  ") || "";

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#fafaf8", fontFamily: "system-ui, sans-serif" }}>
        {/* Left: Cover */}
        <div style={{ display: "flex", width: 320, alignItems: "center", justifyContent: "center", padding: 50 }}>
          <div style={{ display: "flex", flexDirection: "column", width: 220, height: 320, background: "#1a1a1a", borderRadius: 4, alignItems: "center", justifyContent: "center", padding: 24 }}>
            <div style={{ display: "flex", width: 160, height: 3, background: "#c23d2e", borderRadius: 2, marginBottom: 16 }} />
            <div style={{ display: "flex", fontSize: 22, color: "white", fontWeight: 700, textAlign: "center" as const }}>
              {title.length > 30 ? title.substring(0, 30) + "..." : title}
            </div>
            <div style={{ display: "flex", fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>
              {author}
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", padding: "40px 60px 40px 0" }}>
          <div style={{ display: "flex", fontSize: 14, fontFamily: "monospace", color: "#6b6b6b", marginBottom: 16 }}>
            SpellPages
          </div>
          <div style={{ display: "flex", fontSize: 48, fontWeight: 800, color: "#1a1a1a", lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#6b6b6b", marginTop: 8 }}>
            {`by ${author}`}
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 24, fontSize: 16, fontFamily: "monospace", color: "#6b6b6b" }}>
            {`${skillCount} skills  ·  ${tags}`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
