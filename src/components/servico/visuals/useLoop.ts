"use client";

import { useEffect, type RefObject } from "react";
import { useGsap } from "@/lib/gsap";


// Monta uma timeline em loop que só roda enquanto o visual está na tela
// (economiza CPU/bateria no celular) e respeita prefers-reduced-motion:
// nesse caso pula direto pro último quadro, que já mostra a ideia completa.
export function useLoop(
  rootRef: RefObject<HTMLElement | null>,
  build: (tl: ReturnType<ReturnType<typeof useGsap>["gsap"]["timeline"]>, q: (sel: string) => Element[]) => void
) {
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root) as unknown as (sel: string) => Element[];
      const tl = gsap.timeline({ paused: true, repeat: reduce ? 0 : -1, repeatDelay: 1.2 });
      build(tl, q);

      if (reduce) {
        tl.progress(1);
        return;
      }

      ScrollTrigger.create({
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
      });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gsap, ScrollTrigger]);
}
