"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import WhatsAppMockup from "@/components/ui/WhatsAppMockup";
import { useGsap, EASE } from "@/lib/gsap";
import diegoRetrato from "../../../public/images/diego-retrato.webp";

const STATS = [
  { value: 4.1, decimals: 1, suffix: "×", label: "agendamentos" },
  { value: 62, decimals: 0, suffix: "", label: "dias até o resultado" },
  { value: -31, decimals: 0, suffix: "%", label: "custo por contato" },
];

export default function Results() {
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
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-center mb-20">
          <div>
            <AnimatedSection>
              <p className="eyebrow mb-4">Resultado</p>
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

        {/* proof: mockup + stats sliding in from opposite sides */}
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsAppMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-6 max-w-[420px]"
          >
            {STATS.map((s, i) => (
              <div key={s.label}>
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(1.75rem,3.5vw,2.25rem)] leading-none text-[var(--orange-500)]">
                  <CountUp
                    value={s.value}
                    decimals={s.decimals}
                    suffix={s.suffix}
                    delay={i * 0.12}
                  />
                </p>
                <p className="mt-2 text-[13px] text-muted">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
