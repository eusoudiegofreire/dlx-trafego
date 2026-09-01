"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Star, ArrowRight } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/ui/icons";
import { useGsap, EASE } from "@/lib/gsap";
import { site } from "@/config/site";
import logoDlx from "../../../public/images/logo-dlx.webp";
import diegoRetrato from "../../../public/images/diego-retrato.webp";

const LINKS = [
  {
    key: "trafego",
    label: "Tráfego Pago",
    href: "/trafego",
    icon: Target,
    primary: true,
  },
  {
    key: "whatsapp",
    label: "Falar no WhatsApp",
    href: `${site.whatsapp}?text=${encodeURIComponent(
      "Olá! Vim pelo link da bio da DLX Digital e queria saber mais."
    )}`,
    icon: WhatsAppIcon,
    primary: false,
  },
  {
    key: "google",
    label: "Avaliar no Google",
    href: site.googleReviewUrl,
    icon: Star,
    primary: false,
  },
  {
    key: "instagram",
    label: site.instagramHandle,
    href: site.instagram,
    icon: InstagramIcon,
    primary: false,
  },
  {
    key: "instagram-diego",
    label: site.instagramDiegoHandle,
    href: site.instagramDiego,
    icon: InstagramIcon,
    primary: false,
  },
] as const;

export default function BioHero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { gsap } = useGsap();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const links = linkRefs.current.filter(Boolean) as HTMLDivElement[];
    const targets = [logoRef.current, photoRef.current, nameRef.current, taglineRef.current];

    if (reduceMotion) {
      gsap.set([...targets, ...links], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: EASE.entrance },
        0
      )
        .fromTo(
          photoRef.current,
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 0.6, ease: EASE.entrance },
          0.22
        )
        .fromTo(
          [nameRef.current, taglineRef.current],
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, ease: EASE.entrance, stagger: 0.08 },
          0.55
        )
        .fromTo(
          links,
          { opacity: 0, y: 20, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: EASE.entrance,
            stagger: 0.11,
          },
          0.85
        );
    });

    return () => ctx.revert();
  }, [gsap]);

  return (
    <div className="relative flex flex-col items-center justify-center px-6 pt-14 pb-6 sm:pt-20 sm:pb-10 overflow-hidden">
      {/* slow ambient orange haze — keeps the black from reading flat */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] max-w-[140vw] max-h-[140vw] rounded-full motion-safe:animate-[ambient-drift_28s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,90,31,0.16), transparent 70%)",
          }}
        />
      </div>

      <div ref={logoRef} className="mb-6 sm:mb-8 opacity-0">
        <Image src={logoDlx} alt="DLX Digital" priority className="h-8 w-auto sm:h-9" />
      </div>

      <div
        ref={photoRef}
        className="relative w-[112px] h-[112px] sm:w-[152px] sm:h-[152px] rounded-full overflow-hidden border-2 border-[rgba(255,90,31,0.5)] shadow-[0_0_0_6px_rgba(255,90,31,0.06)] opacity-0"
      >
        <Image
          src={diegoRetrato}
          alt="Diego Freire, fundador da DLX Digital"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "44% 20%" }}
          sizes="152px"
        />
      </div>

      <p
        ref={nameRef}
        className="mt-4 sm:mt-6 [font-family:var(--font-general-sans)] font-semibold uppercase text-[20px] sm:text-[22px] tracking-tight opacity-0"
      >
        Diego <span className="text-[var(--orange-500)]">Freire</span>
      </p>
      <p
        ref={taglineRef}
        className="mt-1 sm:mt-2 text-muted text-[14px] sm:text-[15px] text-center max-w-[300px] opacity-0"
      >
        {site.bio.tagline}
      </p>

      <div className="mt-7 sm:mt-10 w-full max-w-[380px] flex flex-col gap-2.5 sm:gap-3.5">
        {LINKS.map((link, i) => {
          const isInternal = link.href.startsWith("/");
          const content = (
            <>
              <span className="flex items-center gap-3">
                <link.icon size={20} strokeWidth={1.5} />
                {link.label}
              </span>
              <ArrowRight
                size={18}
                strokeWidth={1.75}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              />
            </>
          );
          const className = `group w-full h-12 sm:h-14 px-5 rounded-2xl flex items-center justify-between font-medium text-[15px] transition-all duration-300 ease-out hover:-translate-y-[3px] active:scale-[0.97] ${
            link.primary
              ? "bg-[var(--orange-500)] text-[var(--ink)] hover:bg-[var(--orange-400)] motion-safe:animate-[link-glow-pulse_3.4s_ease-in-out_infinite]"
              : "bg-[var(--surface-dark)] border border-[var(--border-dark)] text-[var(--text-dark-1)] hover:border-[var(--border-dark-hover)] hover:bg-[var(--surface-dark-hover)]"
          }`;

          return (
            <div
              key={link.key}
              ref={(el) => {
                linkRefs.current[i] = el;
              }}
              className="opacity-0"
            >
              {isInternal ? (
                <Link href={link.href} className={className}>
                  {content}
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
