"use client";

import { motion } from "framer-motion";

export default function DrawPath({ d, className = "" }: { d: string; className?: string }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="var(--orange-500)"
      strokeOpacity={0.35}
      strokeWidth={0.6}
      strokeLinecap="round"
      className={className}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
