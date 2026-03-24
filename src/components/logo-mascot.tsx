"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LogoMascot({ size = 28 }: { size?: number }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <motion.div
      className="relative shrink-0 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ width: size, height: size }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        animate={clicked ? { rotate: [0, -10, 10, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Left page — breathes on hover */}
        <motion.path
          d="M4 7C4 5.895 4.895 5 6 5H14C15.105 5 16 5.895 16 7V26C16 26 14 24 10 24C6 24 4 26 4 26V7Z"
          fill="currentColor"
          animate={hovered ? { opacity: [0.9, 0.75, 0.9], x: [-0.5, 0, -0.5] } : { opacity: 0.9 }}
          transition={{ duration: 1.2, repeat: hovered ? Infinity : 0, ease: "easeInOut" }}
        />
        {/* Right page — breathes opposite */}
        <motion.path
          d="M28 7C28 5.895 27.105 5 26 5H18C16.895 5 16 5.895 16 7V26C16 26 18 24 22 24C26 24 28 26 28 26V7Z"
          fill="currentColor"
          animate={hovered ? { opacity: [0.7, 0.55, 0.7], x: [0.5, 0, 0.5] } : { opacity: 0.7 }}
          transition={{ duration: 1.2, repeat: hovered ? Infinity : 0, ease: "easeInOut" }}
        />
        {/* Spine */}
        <line x1="16" y1="5" x2="16" y2="26" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />

        {/* Text lines on pages — fade in on hover */}
        <motion.g animate={hovered ? { opacity: 0.2 } : { opacity: 0.08 }} transition={{ duration: 0.3 }}>
          <line x1="6.5" y1="12" x2="13.5" y2="12" stroke="currentColor" strokeWidth="0.8" />
          <line x1="6.5" y1="15" x2="11" y2="15" stroke="currentColor" strokeWidth="0.8" />
          <line x1="6.5" y1="18" x2="13" y2="18" stroke="currentColor" strokeWidth="0.8" />
          <line x1="18.5" y1="13" x2="25.5" y2="13" stroke="currentColor" strokeWidth="0.8" />
          <line x1="18.5" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="0.8" />
          <line x1="18.5" y1="19" x2="25" y2="19" stroke="currentColor" strokeWidth="0.8" />
        </motion.g>

        {/* Sparkle 1 — always animated, faster on hover */}
        <motion.circle
          cx="10" cy="9" r="1"
          fill="#c23d2e"
          animate={{
            opacity: hovered ? [0.5, 1, 0.5] : [0.3, 0.7, 0.3],
            scale: hovered ? [1, 1.4, 1] : [1, 1.1, 1],
          }}
          transition={{ duration: hovered ? 0.8 : 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Sparkle 2 */}
        <motion.circle
          cx="22" cy="11" r="0.8"
          fill="#c23d2e"
          animate={{
            opacity: hovered ? [0.4, 1, 0.4] : [0.2, 0.5, 0.2],
            scale: hovered ? [1, 1.5, 1] : [1, 1.1, 1],
          }}
          transition={{ duration: hovered ? 1 : 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        {/* Sparkle 3 — only visible on hover */}
        <motion.circle
          cx="14" cy="7" r="0.6"
          fill="#c23d2e"
          animate={{ opacity: hovered ? [0, 0.8, 0] : 0, scale: hovered ? [0.5, 1.3, 0.5] : 0.5 }}
          transition={{ duration: 1.2, repeat: hovered ? Infinity : 0, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Rising spell arrow — lifts on hover */}
        <motion.path
          d="M20 8L23 3L26 8"
          stroke="#c23d2e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={hovered ? { y: [-1, -3, -1], opacity: [0.7, 1, 0.7] } : { y: 0, opacity: 0.6 }}
          transition={{ duration: 1.5, repeat: hovered ? Infinity : 0, ease: "easeInOut" }}
        />
        {/* Second smaller arrow — only on hover */}
        <motion.path
          d="M21.5 6L23 2L24.5 6"
          stroke="#c23d2e"
          strokeWidth="0.8"
          strokeLinecap="round"
          fill="none"
          animate={hovered ? { y: [-2, -5, -2], opacity: [0, 0.5, 0] } : { opacity: 0 }}
          transition={{ duration: 1.8, repeat: hovered ? Infinity : 0, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.svg>

      {/* Click burst particles */}
      <AnimatePresence>
        {clicked && (
          <>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.div
                key={angle}
                className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-accent"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * 18,
                  y: Math.sin((angle * Math.PI) / 180) * 18,
                  opacity: 0,
                  scale: 0,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
