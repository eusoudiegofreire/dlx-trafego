"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function HeadlineLine({
  children,
  index,
  opacity,
  delayStep = 0.08,
}: {
  children: ReactNode;
  index: number;
  opacity: number;
  delayStep?: number;
}) {
  return (
    <motion.span
      className="block"
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: index * delayStep,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.span>
  );
}
