import { ImageResponse } from "next/og";

export const alt = "SpellPages — Books as Claude Code Skills";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#fafaf8",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#c23d2e",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          {/* Book icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M4 7C4 5.895 4.895 5 6 5H14C15.105 5 16 5.895 16 7V26C16 26 14 24 10 24C6 24 4 26 4 26V7Z"
              fill="#1a1a1a"
              opacity="0.9"
            />
            <path
              d="M28 7C28 5.895 27.105 5 26 5H18C16.895 5 16 5.895 16 7V26C16 26 18 24 22 24C26 24 28 26 28 26V7Z"
              fill="#1a1a1a"
              opacity="0.7"
            />
            <circle cx="10" cy="10" r="1" fill="#c23d2e" />
            <circle cx="22" cy="12" r="0.8" fill="#c23d2e" opacity="0.7" />
            <path
              d="M20 8L23 3L26 8"
              stroke="#c23d2e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            SpellPages
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#6b6b6b",
              textAlign: "center",
              maxWidth: 600,
            }}
          >
            Books you can run in your terminal
          </div>

          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 12,
              fontSize: 16,
              color: "#6b6b6b",
            }}
          >
            <span
              style={{
                border: "1.5px solid #d4d0c8",
                borderRadius: 3,
                padding: "6px 14px",
                fontFamily: "monospace",
              }}
            >
              21 books
            </span>
            <span
              style={{
                border: "1.5px solid #d4d0c8",
                borderRadius: 3,
                padding: "6px 14px",
                fontFamily: "monospace",
              }}
            >
              95+ skills
            </span>
            <span
              style={{
                border: "1.5px solid #d4d0c8",
                borderRadius: 3,
                padding: "6px 14px",
                fontFamily: "monospace",
              }}
            >
              open source
            </span>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 14,
            color: "#6b6b6b",
            fontFamily: "monospace",
          }}
        >
          spellpages.com
        </div>
      </div>
    ),
    { ...size }
  );
}
