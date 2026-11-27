import Link from "next/link";
import SignatureFlow from "@/components/ui/SignatureFlow";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { site } from "@/config/site";
import { SERVICES } from "@/content/servicos";


export default function Footer() {
  return (
    <footer className="section-dark relative border-t border-subtle">
      <AnimatedSection>
        <div className="container-wide py-16 grid md:grid-cols-[1fr_auto] gap-14 items-start">
          <div>
            <p className="[font-family:var(--font-general-sans)] font-semibold text-[17px] mb-3">
              DLX <span className="text-[var(--orange-500)]">Digital</span>
            </p>
            <p className="text-faint text-[14px] max-w-[340px] mb-8">
              Tráfego que vira cliente.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost h-11! px-5! text-[14px]"
              >
                WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost h-11! px-5! text-[14px]"
              >
                {site.instagramHandle}
              </a>
            </div>

            <address className="not-italic text-faint text-[13px] leading-relaxed">
              {site.name} · {site.city}, {site.regionName}
              <br />
              <a href={site.phoneHref} className="hover:text-[var(--text-dark-1)] transition-colors">
                {site.phoneDisplay}
              </a>
              {" · "}Atendimento em todo {site.regionName} e Amazonas
            </address>
          </div>

          <nav aria-label="Serviços">
            <p className="eyebrow mb-4">
              <Link href="/servicos" className="hover:text-[var(--text-dark-1)] transition-colors">Serviços</Link>
            </p>
            <ul className="flex flex-col gap-2">
              {[
                ...SERVICES.map((s) => ({ href: `/${s.slug}`, name: s.name })),
                { href: "/trafego", name: "Tráfego pago para negócios locais" },
                { href: "/delivery", name: "Tráfego pago para delivery" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-faint text-[14px] hover:text-[var(--text-dark-1)] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-t border-subtle py-10 flex justify-center opacity-[0.15]">
          <SignatureFlow size="small" />
        </div>

        <div className="container-wide pb-10 flex flex-col sm:flex-row justify-between gap-3 text-[13px] text-faint">
          <p>© {new Date().getFullYear()} DLX Digital. Todos os direitos reservados.</p>
          <Link href="/" className="hover:text-[var(--text-dark-1)] transition-colors">
            dlxdigital.com.br
          </Link>
        </div>
      </AnimatedSection>
    </footer>
  );
}
