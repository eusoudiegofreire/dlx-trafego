"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useGsap } from "@/lib/gsap";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, [gsap, ScrollTrigger]);

  return <>{children}</>;
}
