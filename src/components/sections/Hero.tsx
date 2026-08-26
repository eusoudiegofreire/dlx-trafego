"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SignatureFlow from "@/components/ui/SignatureFlow";
import { useGsap, EASE } from "@/lib/gsap";
import heroBg from "../../../public/images/hero-bg.webp";

const LINES = [
  { text: "Mais visibilidade.", opacity: 0.65 },
  { text: "Mais contatos.", opacity: 0.82 },
  { text: "Mais ", accent: "clientes.", opacity: 1 },
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const flowWrapRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const lines = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
      const targets = [bgRef.current, eyebrowRef.current, ctaRef.current];

      if (reduceMotion) {
        gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
        gsap.set(lines, { yPercent: 0, opacity: (i: number) => LINES[i].opacity });
        return;
      }

      // layered reveal — background breathes in slowest, UI text follows in sequence
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(bgRef.current, { scale: 1.12 }, { scale: 1, duration: 1.4, ease: EASE.entrance }, 0)
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: EASE.entrance },
          0.15
        )
        .fromTo(
          lines,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: (i: number) => LINES[i].opacity,
            duration: 0.9,
            ease: EASE.entrance,
            stagger: 0.1,
          },
          0.3
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: EASE.entrance },
          "-=0.5"
        );

      // signature element parallax — drifts slower than the page scrolls
      if (flowWrapRef.current) {
        gsap.fromTo(
          flowWrapRef.current,
          { y: 0 },
          {
            y: 120,
            ease: EASE.scroll,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16"
    >
      <div ref={bgRef} className="absolute inset-0 -z-20">
        <Image src={heroBg} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(90deg, rgba(8,8,8,.92), rgba(8,8,8,.4))",
        }}
      />

      <div className="container-wide relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <p ref={eyebrowRef} className="eyebrow mb-4 opacity-0">
            DLX Digital · Tráfego Pago
          </p>

          <h1 className="[font-family:var(--font-general-sans)] font-semibold uppercase text-[clamp(2.75rem,7.5vw,6.25rem)] leading-[0.94] tracking-tight">
            {LINES.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <span
                  ref={(el) => {
                    lineRefs.current[i] = el;
                  }}
                  className="block opacity-0"
                >
                  {line.text}
                  {line.accent && (
                    <span className="text-[var(--orange-500)]">{line.accent}</span>
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* CSS-only, not gated behind GSAP/JS — keeps this out of LCP's render-delay */}
          <p className="container-narrow mt-5 text-[18px] leading-[1.5] text-muted motion-safe:animate-[fade-in_0.4s_ease-out_0.1s_both]">
            Anúncios no Meta e Google que trazem gente certa pra dentro do seu
            negócio — não só curtida.
          </p>

          <div ref={ctaRef} className="mt-7 flex flex-wrap items-center gap-4 opacity-0">
            <a href="#cta" className="btn-primary">
              Quero meu orçamento
              <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a href="#metodo" className="btn-ghost">
              Ver como funciona
            </a>
          </div>
        </div>

        <div ref={flowWrapRef} className="hidden lg:block relative opacity-95">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[40px]"
            style={{
              background:
                "radial-gradient(60% 60% at 60% 30%, rgba(255,90,31,0.06), transparent 72%)",
            }}
          />
          <SignatureFlow size="large" />
        </div>
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
