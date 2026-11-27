import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin } from "lucide-react";
import type { Service } from "@/content/servicos";
import { site } from "@/config/site";

export default function ServiceLocal({ service }: { service: Service }) {
  const { local } = service;
  return (
    <div className="section">
      <div className="container-wide grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
        <div>
          <AnimatedSection>
            <p className="eyebrow mb-4 flex items-center gap-2">
              <MapPin size={14} className="text-[var(--orange-500)]" /> {local.eyebrow}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05]">{local.title}</h2>
          </AnimatedSection>
        </div>
        <div className="flex flex-col gap-6">
          {local.paragraphs.map((p, i) => (
            <AnimatedSection key={p} delay={0.08 + i * 0.06}>
              <p className="text-[17px] leading-[1.7] text-muted">{p}</p>
            </AnimatedSection>
          ))}
          <AnimatedSection delay={0.2}>
            <p className="text-[14px] text-faint">
              DLX Digital · {site.city}, {site.region} · Atendemos {site.cities.slice(1).join(", ")} e todo o estado de {site.regionName}.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
