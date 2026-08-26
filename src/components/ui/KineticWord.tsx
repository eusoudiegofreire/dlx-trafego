"use client";

import { useEffect, useRef } from "react";
import { useGsap, EASE } from "@/lib/gsap";

export default function KineticWord({ word }: { word: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLParagraphElement>(null);
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !wordRef.current) return;

    const ctx = gsap.context(() => {
      // dramatic in scale, slow in speed — the word drifts like a physical
      // object as you scroll, cropped by the viewport on both sides
      gsap.fromTo(
        wordRef.current,
        { x: "-8vw" },
        {
          x: "8vw",
          ease: EASE.scroll,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div
      ref={sectionRef}
      className="section-dark relative overflow-hidden h-[38vh] flex items-center justify-center"
    >
      <p
        ref={wordRef}
        aria-hidden
        className="whitespace-nowrap [font-family:var(--font-general-sans)] font-semibold uppercase leading-none select-none"
        style={{
          fontSize: "clamp(3.5rem, 12vw, 8.75rem)",
          color: "rgba(244,241,234,0.07)",
          WebkitTextStroke: "1px rgba(244,241,234,0.18)",
        }}
      >
        {word}
      </p>
    </div>
  );
}
