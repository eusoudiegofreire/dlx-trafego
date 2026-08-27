"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useGsap, EASE } from "@/lib/gsap";
import diegoRetrato from "../../../public/images/diego-retrato.webp";

export default function Founder() {
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const photoImgRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !photoImgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoImgRef.current,
        { y: -30 },
        {
          y: 30,
          ease: EASE.scroll,
          scrollTrigger: {
            trigger: photoWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, photoWrapRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div className="section">
      <div className="container-wide">
        {/* founder — text left, portrait right */}
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center">
          <div>
            <AnimatedSection>
              <p className="eyebrow mb-4">Quem está por trás</p>
            </AnimatedSection>
            <AnimatedSection delay={0.06}>
              <blockquote className="[font-family:var(--font-general-sans)] font-medium text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] max-w-[520px]">
                &ldquo;Não trabalho pra você ter curtida. Trabalho pra levar o
                cliente certo até onde a venda acontece — no canal que faz
                sentido pro seu negócio.&rdquo;
              </blockquote>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <p className="mt-5 text-[14px] text-muted">
                Diego Freire · Fundador da DLX Digital
              </p>
            </AnimatedSection>
          </div>

          <div
            ref={photoWrapRef}
            className="relative aspect-[4/5] rounded-[28px] overflow-hidden border-subtle border"
          >
            <div ref={photoImgRef} className="absolute inset-[-8%]">
              <Image
                src={diegoRetrato}
                alt="Diego Freire, fundador da DLX Digital"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
