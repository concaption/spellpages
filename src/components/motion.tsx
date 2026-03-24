"use client";

import { motion } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleOnHover({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingBook({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
        rotateY: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
      style={{ perspective: 800 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
        {/* Book shadow */}
        <ellipse cx="60" cy="108" rx="40" ry="6" fill="currentColor" opacity="0.06" />
        {/* Book body - 3D look */}
        <g transform="translate(20, 15)">
          {/* Spine */}
          <rect x="0" y="5" width="8" height="75" rx="2" fill="currentColor" opacity="0.2" />
          {/* Back cover */}
          <rect x="6" y="2" width="58" height="80" rx="3" fill="currentColor" opacity="0.08" />
          {/* Pages */}
          <rect x="10" y="6" width="52" height="72" rx="1" fill="currentColor" opacity="0.04" />
          <rect x="9" y="5" width="52" height="72" rx="1" fill="currentColor" opacity="0.06" />
          <rect x="8" y="4" width="52" height="72" rx="1" fill="currentColor" opacity="0.08" />
          {/* Front cover */}
          <rect x="7" y="0" width="58" height="80" rx="3" fill="currentColor" opacity="0.12" />
          {/* Cover decoration */}
          <line x1="20" y1="25" x2="52" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
          <line x1="20" y1="32" x2="45" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.08" />
          <line x1="20" y1="38" x2="48" y2="38" stroke="currentColor" strokeWidth="1" opacity="0.08" />
        </g>
        {/* Sparkles */}
        <motion.circle
          cx="85" cy="20"
          r="3"
          fill="#e11d48"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.circle
          cx="95" cy="35"
          r="2"
          fill="#e11d48"
          opacity={0.6}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="78" cy="10"
          r="1.5"
          fill="#e11d48"
          opacity={0.4}
          animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        {/* Rising spell lines */}
        <motion.path
          d="M82 28 L88 15 L94 28"
          stroke="#e11d48"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ opacity: [0.4, 0.9, 0.4], y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </motion.div>
  );
}

export { motion };
