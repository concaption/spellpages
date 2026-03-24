"use client";

import { motion } from "framer-motion";

export function SearchIllustration({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className={className}>
      {/* Books on shelf */}
      <rect x="10" y="20" width="8" height="30" rx="1.5" fill="currentColor" opacity="0.08" />
      <rect x="20" y="16" width="8" height="34" rx="1.5" fill="currentColor" opacity="0.1" />
      <rect x="30" y="22" width="8" height="28" rx="1.5" fill="currentColor" opacity="0.08" />
      <rect x="40" y="18" width="8" height="32" rx="1.5" fill="currentColor" opacity="0.12" />
      {/* Shelf */}
      <line x1="6" y1="52" x2="54" y2="52" stroke="currentColor" strokeWidth="2" opacity="0.1" />
      {/* Magnifying glass */}
      <motion.g
        animate={{ x: [0, 4, 0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="46" cy="28" r="10" stroke="#e11d48" strokeWidth="2" fill="none" opacity="0.8" />
        <line x1="53" y1="35" x2="58" y2="40" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      </motion.g>
    </svg>
  );
}

export function InstallIllustration({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className={className}>
      {/* Terminal window */}
      <rect x="8" y="12" width="48" height="40" rx="4" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
      <rect x="8" y="12" width="48" height="10" rx="4" fill="currentColor" opacity="0.04" />
      {/* Dots */}
      <circle cx="16" cy="17" r="2" fill="currentColor" opacity="0.1" />
      <circle cx="22" cy="17" r="2" fill="currentColor" opacity="0.1" />
      <circle cx="28" cy="17" r="2" fill="currentColor" opacity="0.1" />
      {/* Command text lines */}
      <line x1="14" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.08" />
      <line x1="14" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="1.5" opacity="0.06" />
      <line x1="14" y1="42" x2="34" y2="42" stroke="currentColor" strokeWidth="1.5" opacity="0.06" />
      {/* Download arrow */}
      <motion.g
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M44 28 L44 40 M38 35 L44 41 L50 35" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      </motion.g>
    </svg>
  );
}

export function SparkleIllustration({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none" className={className}>
      {/* Chat bubble */}
      <path d="M12 16 H48 A4 4 0 0 1 52 20 V40 A4 4 0 0 1 48 44 H20 L12 52 V44 H12 A4 4 0 0 1 8 40 V20 A4 4 0 0 1 12 16Z" fill="currentColor" opacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
      {/* Text lines */}
      <line x1="16" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="1.5" opacity="0.08" />
      <line x1="16" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.06" />
      <line x1="16" y1="38" x2="30" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.06" />
      {/* Sparkles */}
      <motion.g
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <path d="M46 14 L48 10 L50 14 L54 16 L50 18 L48 22 L46 18 L42 16 Z" fill="#e11d48" opacity="0.7" />
      </motion.g>
      <motion.g
        animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
      >
        <path d="M54 24 L55 22 L56 24 L58 25 L56 26 L55 28 L54 26 L52 25 Z" fill="#e11d48" opacity="0.5" />
      </motion.g>
    </svg>
  );
}
