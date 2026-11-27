import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import TiltCard from "@/components/ui/TiltCard";
import { getService } from "@/content/servicos";

// Links internos entre serviços (hub-and-spoke): cada página aponta para
// 3 vizinhas com texto-âncora descritivo, e todas voltam para /servicos.
export default function RelatedServices({ slugs, title = "Serviços que andam junto" }: { slugs: string[]; title?: string }) {
  const items = slugs.map(getService).filter((s): s is NonNullable<typeof s> => Boolean(s));
  return (
    <div className="section">
      <div className="container-wide">
        <AnimatedSection>
          <p className="eyebrow mb-4">Continue lendo</p>
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] mb-12">{title}</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <AnimatedSection key={s.slug} delay={0.08 * i}>
              <TiltCard className="h-full rounded-[24px]">
                <Link href={`/${s.slug}`} className="card border-subtle h-full flex flex-col justify-between gap-10 group/link">
                  <div>
                    <p className="eyebrow mb-3">{s.eyebrow}</p>
                    <h3 className="text-[22px] leading-snug">{s.name}</h3>
                    <p className="text-muted text-[15px] mt-3 leading-relaxed line-clamp-3">{s.metaDescription}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--orange-500)]">
                    Saiba mais
                    <ArrowUpRight size={16} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </span>
                </Link>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2} className="mt-10">
          <Link href="/servicos" className="btn-ghost">Ver todos os serviços da DLX</Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
