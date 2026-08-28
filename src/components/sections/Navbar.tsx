"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGsap, EASE } from "@/lib/gsap";
import logoDlx from "../../../public/images/logo-dlx.webp";

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const { gsap } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: EASE.entrance }
    );
  }, [gsap]);

  return (
    <header ref={ref} className="fixed top-0 inset-x-0 z-[100] px-4 pt-4 opacity-0">
      <div
        className="container-wide flex items-center justify-between h-[64px] rounded-full px-6 border border-white/10"
        style={{ background: "var(--black)" }}
      >
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logoDlx}
            alt="DLX Digital"
            priority
            className="h-7 sm:h-9 w-auto"
          />
        </Link>
        <Link
          href="#cta"
          className="inline-flex items-center h-11 px-5 rounded-xl bg-[var(--orange-500)] text-[var(--ink)] font-medium text-[14px] transition-colors hover:bg-[var(--orange-400)]"
        >
          Falar no WhatsApp
        </Link>
      </div>
    </header>
  );
}
