import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import ServiceVisual from "./visuals";
import type { Service } from "@/content/servicos";

// Entrada feita em CSS (não GSAP) de propósito: o H1 é o LCP da página e
// não pode esperar o JavaScript carregar para aparecer.
const rise = (i: number) => ({ animationDelay: `${0.15 + i * 0.08}s` });

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <div className="relative min-h-screen flex items-center pt-32 pb-20">
      <div
        aria-hidden
        className="absolute -z-10 top-[-10%] right-[-10%] size-[720px] rounded-full blur-3xl opacity-40 motion-safe:animate-[ambient-drift_18s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,.25), transparent 60%)" }}
      />
      <div className="container-wide grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <nav aria-label="Você está em" className="hero-in mb-6" style={rise(0)}>
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-faint">
              <li><Link href="/" className="hover:text-[var(--text-dark-1)]">Início</Link></li>
              <ChevronRight size={13} aria-hidden />
              <li><Link href="/servicos" className="hover:text-[var(--text-dark-1)]">Serviços</Link></li>
              <ChevronRight size={13} aria-hidden />
              <li aria-current="page" className="text-muted">{service.name}</li>
            </ol>
          </nav>

          <p className="hero-in eyebrow mb-5" style={rise(1)}>{service.eyebrow}</p>

          <h1 className="[font-family:var(--font-general-sans)] font-semibold text-[clamp(2.4rem,6.2vw,4.6rem)] leading-[0.98] tracking-tight">
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-line block" style={{ animationDelay: "0.1s" }}>{service.h1.text}</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="hero-line block text-[var(--orange-500)]" style={{ animationDelay: "0.22s" }}>{service.h1.accent}</span>
            </span>
          </h1>

          <p style={rise(3)} className="hero-in mt-6 max-w-[560px] text-[18px] leading-[1.55] text-muted">{service.lead}</p>

          <div style={rise(4)} className="hero-in mt-8 flex flex-wrap gap-4">
            <a href="#cta" className="btn-primary">
              Quero um orçamento <ArrowRight size={18} strokeWidth={1.75} />
            </a>
            <a href="#como-funciona" className="btn-ghost">Como funciona</a>
          </div>
        </div>

        <div className="hero-visual" style={{ animationDelay: "0.35s" }}>
          <ServiceVisual type={service.visual} />
        </div>
      </div>
    </div>
  );
}
