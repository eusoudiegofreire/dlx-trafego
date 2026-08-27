"use client";

import { useEffect, useRef } from "react";
import { Search, Rocket, SlidersHorizontal, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useGsap, EASE } from "@/lib/gsap";

// Two bookend cards (full width) frame two half-width cards in between —
// reads 01 → 02 → 03 → 04 top-to-bottom, left-to-right, with no card
// spanning multiple rows (that's what left 02 half-empty before).
const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico",
    text: "Antes de gastar R$1, a gente entende teu negócio, teu ticket e quem é teu cliente. Anúncio sem isso é aposta.",
    span: "lg:col-span-2",
    wide: true,
    delay: 0,
  },
  {
    icon: Rocket,
    step: "02",
    title: "Campanha",
    text: "Criativo e segmentação feitos pra vender, não pra viralizar. A mensagem certa pra pessoa certa.",
    span: "lg:col-span-1",
    delay: 0.14,
  },
  {
    icon: SlidersHorizontal,
    step: "03",
    title: "Otimização",
    text: "Ajuste constante: a gente corta o que traz curtida e reforça o que traz contato barato. Todo dia de olho.",
    span: "lg:col-span-1",
    delay: 0.22,
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Resultado",
    text: "Relatório claro: quanto entrou, quanto saiu, quantos contatos chegaram. Sem enrolação, sem métrica de vaidade.",
    span: "lg:col-span-2",
    wide: true,
    delay: 0.34,
  },
];

export default function Method() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const { gsap, ScrollTrigger } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const path = pathRef.current;
    const length = path?.getTotalLength() ?? 0;

    if (path) {
      path.style.strokeDasharray = `${length}`;
    }

    if (reduceMotion) {
      gsap.set(cards, { opacity: 1, y: 0 });
      if (path) gsap.set(path, { strokeDashoffset: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // one timeline: the connector draws itself while the cards stagger
      // in, top row first, then the middle pair, then the bottom row
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (path) {
        tl.fromTo(
          path,
          { strokeDashoffset: length },
          { strokeDashoffset: 0, duration: 1.3, ease: EASE.entrance },
          0
        );
      }

      STEPS.forEach((s, i) => {
        const card = cards[i];
        if (!card) return;
        tl.fromTo(
          card,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.7, ease: EASE.entrance },
          s.delay
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [gsap, ScrollTrigger]);

  return (
    <div id="metodo" className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">O método DLX</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] max-w-[640px]">
            Quatro etapas. Sem achismo.
          </h2>
        </AnimatedSection>

        <div ref={gridRef} className="relative mt-14">
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
          >
            <path
              ref={pathRef}
              d="M 20 10 L 20 34 L 80 34 L 80 60 L 50 60 L 50 90"
              fill="none"
              stroke="var(--orange-500)"
              strokeOpacity={0.35}
              strokeWidth={0.6}
              strokeLinecap="round"
            />
          </svg>

          <div className="relative grid lg:grid-cols-2 gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={s.span}
              >
                <div
                  className={`card border-subtle h-full min-h-[220px] flex ${
                    s.wide
                      ? "flex-col sm:flex-row sm:items-center gap-6"
                      : "flex-col justify-between"
                  }`}
                >
                  {s.wide ? (
                    <>
                      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-8">
                        <s.icon
                          size={30}
                          strokeWidth={1.5}
                          className="text-[var(--orange-500)] shrink-0"
                        />
                        <span className="[font-family:var(--font-mono)] text-[13px] text-faint">
                          {s.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[22px] mb-2">{s.title}</h3>
                        <p className="text-muted text-[15px] leading-relaxed max-w-[440px]">
                          {s.text}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start justify-between">
                        <s.icon size={26} strokeWidth={1.5} className="text-[var(--orange-500)]" />
                        <span className="[font-family:var(--font-mono)] text-[13px] text-faint">
                          {s.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[22px] mb-2">{s.title}</h3>
                        <p className="text-muted text-[15px] leading-relaxed">{s.text}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
