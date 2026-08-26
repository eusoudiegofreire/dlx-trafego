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
  const photoBandRef = useRef<HTMLDivElement>(null);
  const photoImgRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !photoImgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoImgRef.current,
        { y: -40 },
        {
          y: 40,
          ease: EASE.scroll,
          scrollTrigger: {
            trigger: photoBandRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, photoBandRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div className="section">
      <div className="container-wide">
        {/* editorial band — portrait with the quote overlapping it */}
        <div
          ref={photoBandRef}
          className="relative h-[480px] sm:h-[560px] rounded-[28px] overflow-hidden mb-16"
        >
          <div ref={photoImgRef} className="absolute inset-[-10%]">
            <Image
              src={diegoRetrato}
              alt="Diego, fundador da DLX Digital"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(8,8,8,.88) 0%, rgba(8,8,8,.55) 38%, transparent 68%)",
            }}
          />
          <div className="relative h-full flex flex-col justify-end p-8 sm:p-14 max-w-[640px]">
            <AnimatedSection>
              <p className="eyebrow mb-4 text-[var(--text-dark-2)]!">Resultado</p>
            </AnimatedSection>
            <AnimatedSection delay={0.06}>
              <blockquote className="[font-family:var(--font-general-sans)] font-medium text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.2] text-[var(--text-dark-1)]">
                &ldquo;Antes eu só via curtida. Depois que a DLX assumiu, o
                WhatsApp não para — e a agenda também não.&rdquo;
              </blockquote>
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <p className="mt-5 text-[14px] text-[var(--text-dark-2)]">
                Diego · Fundador, DLX Digital
              </p>
            </AnimatedSection>
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
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[2.25rem] leading-none text-[var(--orange-500)]">
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
