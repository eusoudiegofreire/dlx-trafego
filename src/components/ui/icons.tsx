// lucide-react (this project's version) doesn't ship brand icons
// (Instagram, WhatsApp, etc. were removed) — hand-rolled outline SVGs
// here, matching lucide's stroke-based visual language and prop shape
// (size/strokeWidth) so they drop in next to real lucide icons.

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export function WhatsAppIcon({ size = 24, strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 21l1.5-4.5A8 8 0 1 1 8.5 19.5L3 21z" />
      <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .8 0 1-.8 1-1.4 0-.3-.1-.5-.3-.6l-1.7-1a.6.6 0 0 0-.7.1l-.5.6a4.7 4.7 0 0 1-2.5-2.5l.6-.5a.6.6 0 0 0 .1-.7l-1-1.7a.6.6 0 0 0-.6-.3c-.6 0-1.4.2-1.4 1z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, strokeWidth = 1.5, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
