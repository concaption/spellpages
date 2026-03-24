"use client";

import { motion } from "framer-motion";

/** Blueprint-style grid background overlay */
export function BlueprintGrid({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-sm" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
          </pattern>
          <pattern id="grid-lg" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="url(#grid-sm)" />
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.06" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-lg)" />
      </svg>
    </div>
  );
}

/** Architectural dimension line with label */
export function DimensionLine({
  label,
  className,
  direction = "horizontal",
}: {
  label?: string;
  className?: string;
  direction?: "horizontal" | "vertical";
}) {
  if (direction === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-1 ${className}`}>
        <div className="annotation-dot" />
        <div className="w-px h-full bg-border opacity-40" style={{ minHeight: 40 }} />
        {label && (
          <span className="text-[9px] font-mono text-muted-foreground/50 -rotate-90 whitespace-nowrap">
            {label}
          </span>
        )}
        <div className="w-px h-full bg-border opacity-40" style={{ minHeight: 40 }} />
        <div className="annotation-dot" />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="annotation-dot" />
      <div className="h-px flex-1 bg-border opacity-40" />
      {label && (
        <span className="text-[9px] font-mono text-muted-foreground/50 px-1">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-border opacity-40" />
      <div className="annotation-dot" />
    </div>
  );
}

/** Hand-drawn corner bracket */
export function CornerBracket({
  position,
  className,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      style={{ transform: transforms[position] }}
    >
      <path
        d="M2 18 L2 3 Q2 2 3 2 L18 2"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.15"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/** Animated sketch annotation arrow */
export function AnnotationArrow({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`flex items-center gap-2 ${className}`}
    >
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
        <path
          d="M2 10 Q10 8 20 10 T38 10"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M34 6 L38 10 L34 14" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none" strokeLinecap="round" />
      </svg>
      <span className="text-[10px] font-mono text-muted-foreground/60 italic">{text}</span>
    </motion.div>
  );
}

/** Floating construction marks that drift with parallax */
export function ConstructionMarks({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Cross marks */}
      <motion.svg
        className="absolute top-[15%] left-[8%] text-foreground"
        width="12" height="12" viewBox="0 0 12 12" fill="none"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
      </motion.svg>

      <svg className="absolute top-[40%] right-[5%] text-foreground" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
        <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
      </svg>

      <svg className="absolute bottom-[20%] left-[15%] text-foreground" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
        <circle cx="4" cy="4" r="0.5" fill="currentColor" opacity="0.1" />
      </svg>

      <svg className="absolute top-[60%] right-[12%] text-foreground" width="8" height="8" viewBox="0 0 8 8" fill="none">
        <circle cx="4" cy="4" r="3" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
        <circle cx="4" cy="4" r="0.5" fill="currentColor" opacity="0.1" />
      </svg>
    </div>
  );
}
