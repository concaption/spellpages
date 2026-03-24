"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" as const },
  },
};

/** Hand-drawn book search illustration */
export function SearchIllustration({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Sketchy books */}
      <motion.rect x="10" y="28" width="10" height="32" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.15" variants={draw} fill="none" />
      <motion.rect x="22" y="22" width="10" height="38" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.15" variants={draw} fill="none" />
      <motion.rect x="34" y="30" width="10" height="30" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.15" variants={draw} fill="none" />
      <motion.rect x="46" y="25" width="10" height="35" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.15" variants={draw} fill="none" />
      {/* Shelf line */}
      <motion.path d="M6 62 Q40 63 74 62" stroke="currentColor" strokeWidth="1.5" opacity="0.12" variants={draw} fill="none" strokeLinecap="round" />
      {/* Magnifying glass with wobble */}
      <motion.circle cx="58" cy="30" r="12" stroke="#c23d2e" strokeWidth="1.5" fill="none" opacity="0.7" variants={draw} />
      <motion.line x1="67" y1="39" x2="74" y2="46" stroke="#c23d2e" strokeWidth="2" strokeLinecap="round" opacity="0.7" variants={draw} />
    </motion.svg>
  );
}

/** Hand-drawn terminal/install illustration */
export function InstallIllustration({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Sketchy terminal */}
      <motion.rect x="8" y="14" width="56" height="44" rx="3" stroke="currentColor" strokeWidth="1.2" opacity="0.15" variants={draw} fill="none" />
      {/* Title bar squiggle */}
      <motion.path d="M8 24 Q36 23 64 24" stroke="currentColor" strokeWidth="0.8" opacity="0.1" variants={draw} fill="none" />
      {/* Dots */}
      <circle cx="15" cy="19" r="1.5" fill="currentColor" opacity="0.1" />
      <circle cx="20" cy="19" r="1.5" fill="currentColor" opacity="0.1" />
      <circle cx="25" cy="19" r="1.5" fill="currentColor" opacity="0.1" />
      {/* Command lines — hand drawn */}
      <motion.path d="M14 32 Q22 31 30 32" stroke="currentColor" strokeWidth="1" opacity="0.08" variants={draw} fill="none" strokeLinecap="round" />
      <motion.path d="M14 38 Q28 37 44 38" stroke="currentColor" strokeWidth="1" opacity="0.06" variants={draw} fill="none" strokeLinecap="round" />
      <motion.path d="M14 44 Q24 43 36 44" stroke="currentColor" strokeWidth="1" opacity="0.06" variants={draw} fill="none" strokeLinecap="round" />
      {/* Download arrow */}
      <motion.path
        d="M52 30 L52 46 M46 40 L52 47 L58 40"
        stroke="#c23d2e"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        variants={draw}
        fill="none"
      />
    </motion.svg>
  );
}

/** Hand-drawn sparkle/magic illustration */
export function SparkleIllustration({ className }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Sketchy chat bubble */}
      <motion.path
        d="M14 20 Q14 16 18 16 L56 16 Q60 16 60 20 L60 48 Q60 52 56 52 L24 52 L16 60 L16 52 L18 52 Q14 52 14 48 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.15"
        variants={draw}
        fill="none"
        strokeLinejoin="round"
      />
      {/* Wobbly text lines */}
      <motion.path d="M22 28 Q32 27 42 28" stroke="currentColor" strokeWidth="1" opacity="0.08" variants={draw} fill="none" strokeLinecap="round" />
      <motion.path d="M22 34 Q35 33 50 34" stroke="currentColor" strokeWidth="1" opacity="0.06" variants={draw} fill="none" strokeLinecap="round" />
      <motion.path d="M22 40 Q30 39 36 40" stroke="currentColor" strokeWidth="1" opacity="0.06" variants={draw} fill="none" strokeLinecap="round" />
      {/* Sparkle stars */}
      <motion.path
        d="M56 12 L58 6 L60 12 L66 14 L60 16 L58 22 L56 16 L50 14 Z"
        stroke="#c23d2e"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
        variants={draw}
      />
      <motion.path
        d="M66 26 L67 23 L68 26 L71 27 L68 28 L67 31 L66 28 L63 27 Z"
        stroke="#c23d2e"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
        variants={draw}
      />
    </motion.svg>
  );
}
