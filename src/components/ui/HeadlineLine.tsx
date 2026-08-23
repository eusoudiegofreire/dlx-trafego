"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function HeadlineLine({
  children,
  index,
  opacity,
}: {
  children: ReactNode;
  index: number;
  opacity: number;
}) {
  return (
    <motion.span
      className="block"
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.span>
  );
}
