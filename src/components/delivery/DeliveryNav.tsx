"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logoDlx from "../../../public/images/logo-dlx.webp";

export default function DeliveryNav() {
  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-[100] px-4 pt-4"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="container-wide flex items-center justify-between h-[64px] rounded-full px-6 border border-white/10"
        style={{ background: "var(--black)" }}
      >
        <Link href="/delivery" className="flex items-center gap-3 shrink-0">
          <Image src={logoDlx} alt="DLX Digital" priority className="h-7 sm:h-9 w-auto" />
          <span className="hidden sm:inline font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--text-dark-3)] border-l border-white/10 pl-3">
            Delivery
          </span>
        </Link>
        <a
          href="#pedido"
          className="inline-flex items-center h-11 px-5 rounded-xl bg-[var(--orange-500)] text-[var(--ink)] font-medium text-[14px] transition-colors hover:bg-[var(--orange-400)]"
        >
          Quero mais pedido
        </a>
      </div>
    </motion.header>
  );
}
