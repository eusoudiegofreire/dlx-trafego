"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeadlineLine from "@/components/ui/HeadlineLine";
import SignatureFlow from "@/components/ui/SignatureFlow";
import heroBg from "../../../public/images/hero-bg.webp";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // signature element drifts slower than the page — classic parallax
  const flowY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div ref={ref} className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(90deg, rgba(8,8,8,.92), rgba(8,8,8,.4))",
        }}
      />

      <div className="container-wide relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">DLX Digital · Tráfego Pago</p>

          <h1 className="[font-family:var(--font-general-sans)] font-semibold uppercase text-[clamp(2.75rem,7.5vw,6.25rem)] leading-[0.94] tracking-tight">
            <HeadlineLine index={0} opacity={0.65} delayStep={0.1}>
              Mais visibilidade.
            </HeadlineLine>
            <HeadlineLine index={1} opacity={0.82} delayStep={0.1}>
              Mais contatos.
            </HeadlineLine>
            <HeadlineLine index={2} opacity={1} delayStep={0.1}>
              Mais <span className="text-[var(--orange-500)]">clientes.</span>
            </HeadlineLine>
          </h1>

          <p className="container-narrow mt-5 text-[18px] leading-[1.5] text-muted">
            Anúncios no Meta e Google que trazem gente certa pra dentro do seu
            negócio — não só curtida.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#cta" className="btn-primary">
              Quero meu orçamento
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a href="#metodo" className="btn-ghost">
              Ver como funciona
            </a>
          </div>
        </div>

        <motion.div
          style={{ y: flowY }}
          className="hidden lg:block relative opacity-95"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[40px]"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 30%, rgba(255,90,31,0.06), transparent 72%)",
            }}
          />
          <SignatureFlow size="large" />
        </motion.div>
      </div>

      <div className="lg:hidden container-wide mt-16 flex justify-center opacity-80">
        <SignatureFlow size="small" />
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-2 motion-safe:animate-[scroll-cue_1.8s_ease-in-out_infinite]">
        <span className="eyebrow text-[10px]!">scroll</span>
        <span className="block w-px h-8 bg-current opacity-40" />
      </div>
    </div>
  );
}
