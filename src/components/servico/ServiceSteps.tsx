"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useGsap, EASE } from "@/lib/gsap";
import type { Service } from "@/content/servicos";

// Passo a passo com uma linha laranja que se desenha conforme o scroll
// e cada número acendendo quando a linha chega nele.
export default function ServiceSteps({ service }: { service: Service }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(".step-line", { scaleY: 1 });
        gsap.set(".step-num", { backgroundColor: "#ff5a1f", color: "#0a0a0a" });
        return;
      }
      gsap.fromTo(
        ".step-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: EASE.scroll,
          scrollTrigger: { trigger: ".steps-list", start: "top 70%", end: "bottom 60%", scrub: 1 },
        }
      );
      gsap.utils.toArray<HTMLElement>(".step").forEach((el) => {
        gsap.fromTo(
          el.querySelector(".step-num"),
          { backgroundColor: "rgba(10,10,10,0)", color: "#0a0a0a" },
          {
            backgroundColor: "#ff5a1f",
            duration: 0.3,
            scrollTrigger: { trigger: el, start: "top 62%", toggleActions: "play none none reverse" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div ref={rootRef} className="section">
      <div className="container-wide grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <div className="lg:sticky lg:top-32 self-start">
          <AnimatedSection>
            <p className="eyebrow mb-4">Como funciona</p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02]">Quatro passos, sem enrolação.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-5 text-muted text-[17px] max-w-[420px]">
              Do primeiro diagnóstico ao relatório: você sabe o que está sendo feito e por quê.
            </p>
          </AnimatedSection>
        </div>

        <ol className="steps-list relative flex flex-col gap-12 pl-16">
          <span aria-hidden className="absolute left-[22px] top-2 bottom-2 w-px bg-[var(--border-light)]" />
          <span aria-hidden className="step-line absolute left-[22px] top-2 bottom-2 w-[2px] -ml-px origin-top bg-[var(--orange-500)]" />
          {service.steps.map((s, i) => (
            <li key={s.title} className="step relative">
              <span className="step-num absolute -left-16 top-0 size-11 rounded-full border-2 border-[var(--orange-500)] flex items-center justify-center text-[14px] font-semibold [font-family:var(--font-jetbrains)] bg-[var(--cream)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <AnimatedSection>
                <h3 className="text-[clamp(1.4rem,2.6vw,1.85rem)] leading-tight mb-3">{s.title}</h3>
                <p className="text-muted text-[17px] leading-relaxed max-w-[560px]">{s.text}</p>
              </AnimatedSection>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
