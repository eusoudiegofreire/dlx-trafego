import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--border)] bg-[var(--bg-950)]/70 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between h-[76px]">
        <Link
          href="/"
          className="[font-family:var(--font-general-sans)] font-semibold text-[17px] tracking-tight text-[var(--text-100)]"
        >
          DLX <span className="text-[var(--orange-500)]">Digital</span>
        </Link>
        <Link
          href="#cta"
          className="inline-flex items-center h-11 px-5 rounded-xl bg-[var(--orange-500)] text-[#0a0a0a] font-medium text-[14px] transition-colors hover:bg-[var(--orange-400)]"
        >
          Falar no WhatsApp
        </Link>
      </div>
    </header>
  );
}
