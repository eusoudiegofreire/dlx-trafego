"use client";

import { useEffect, useRef } from "react";
import { useGsap, EASE } from "@/lib/gsap";

type Segment = { text: string; className?: string };

export default function WordReveal({
  segments,
  className,
}: {
  segments: Segment[];
  className?: string;
}) {
  const rootRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { gsap, ScrollTrigger } = useGsap();

  const words = segments.flatMap((seg) =>
    seg.text.split(" ").map((word) => ({ word, className: seg.className }))
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = wordRefs.current.filter(Boolean) as HTMLSpanElement[];

    if (reduceMotion) {
      gsap.set(els, { opacity: 1, filter: "blur(0px)" });
      return;
    }

    const ctx = gsap.context(() => {
      // scrub-linked mask reveal — each word gets an equal slice of the
      // scroll range between the paragraph entering and nearing center
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 90%",
          end: "top 35%",
          scrub: 1,
        },
      });

      els.forEach((el, i) => {
        tl.fromTo(
          el,
          { opacity: 0.12, filter: "blur(4px)" },
          { opacity: 1, filter: "blur(0px)", duration: 1, ease: EASE.scroll },
          i
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <p ref={rootRef} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          ref={(el) => {
            wordRefs.current[i] = el;
          }}
          className={`inline-block mr-[0.28em] ${w.className ?? ""}`}
        >
          {w.word}
        </span>
      ))}
    </p>
  );
}
