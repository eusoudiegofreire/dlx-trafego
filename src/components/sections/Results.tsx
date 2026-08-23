"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import WhatsAppMockup from "@/components/ui/WhatsAppMockup";
import diegoRetrato from "../../../public/images/diego-retrato.webp";

const STATS = [
  { value: 4.1, decimals: 1, suffix: "×", label: "agendamentos" },
  { value: 62, decimals: 0, suffix: "", label: "dias até o resultado" },
  { value: -31, decimals: 0, suffix: "%", label: "custo por contato" },
];

export default function Results() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div className="section">
      <div className="container-wide">
        {/* editorial band — portrait with the quote overlapping it */}
        <div
          ref={photoRef}
          className="relative h-[480px] sm:h-[560px] rounded-[28px] overflow-hidden mb-16"
        >
          <motion.div style={{ y: photoY }} className="absolute inset-[-10%]">
            <Image
              src={diegoRetrato}
              alt="Diego, fundador da DLX Digital"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
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
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="[font-family:var(--font-general-sans)] font-semibold text-[2.25rem] leading-none">
                  <CountUp value={s.value} decimals={s.decimals} suffix={s.suffix} />
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
