import type { ReactNode } from "react";

// Moldura comum dos visuais: cartão escuro com brilho laranja atrás.
export default function Panel({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div aria-hidden className={`relative ${className}`}>
      <div
        className="absolute -inset-10 -z-10 rounded-[48px] blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,90,31,.22), transparent 65%)" }}
      />
      <div className="rounded-[28px] border border-white/10 bg-[var(--surface-dark)] shadow-[var(--shadow-card-dark)] overflow-hidden">
        <div className="flex items-center gap-2 px-5 h-11 border-b border-white/10">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-[var(--orange-500)]" />
          <span className="ml-3 text-[11px] tracking-[0.08em] uppercase text-[var(--text-dark-3)] [font-family:var(--font-jetbrains)]">
            {label}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
