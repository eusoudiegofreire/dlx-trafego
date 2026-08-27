"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Mode = "dark" | "light" | "orange";

const MODE_CLASS: Record<Mode, string> = {
  dark: "section-dark",
  light: "section-light",
  orange: "section-orange",
};

export default function StackSection({
  children,
  mode,
  seam = true,
  id,
  className = "",
  minHeight = true,
}: {
  children: ReactNode;
  mode: Mode;
  seam?: boolean;
  id?: string;
  className?: string;
  minHeight?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden scroll-mt-[100px] ${MODE_CLASS[mode]} ${
        minHeight ? "min-h-screen flex flex-col justify-center" : ""
      } ${className}`}
    >
      {seam && (
        <motion.div
          aria-hidden
          className="seam-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      {children}
    </section>
  );
}
