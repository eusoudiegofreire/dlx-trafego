import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 pt-4">
      <div
        className="container-wide flex items-center justify-between h-[64px] rounded-full px-6 border border-white/10"
        style={{
          background: "rgba(8,8,8,0.6)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Link
          href="/"
          className="[font-family:var(--font-general-sans)] font-semibold text-[17px] tracking-tight text-white"
        >
          DLX Digital
        </Link>
        <Link
          href="#cta"
          className="inline-flex items-center h-11 px-5 rounded-xl bg-[var(--orange-500)] text-[var(--ink)] font-medium text-[14px] transition-colors hover:bg-[var(--orange-400)]"
        >
          Falar no WhatsApp
        </Link>
      </div>
    </header>
  );
}
