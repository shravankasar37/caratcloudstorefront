export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <rect width="40" height="40" rx="11" fill="#0B1528" />
    <path d="M13 13.5a5 5 0 0 1 9.6-1.6A4 4 0 0 1 28.5 15H11.6a3 3 0 0 1 1.4-1.5Z" fill="#F4E3B0" opacity=".9" />
    <path d="M9 18h22l-11 13.5Z" fill="#D4AF37" />
    <path d="M9 18l5.5-3.4h11L31 18" fill="none" stroke="#D4AF37" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 18h22M15.5 18 20 31.5 24.5 18" fill="none" stroke="#0B1528" strokeWidth="1.1" strokeLinejoin="round" />
  </svg>
);

export const Logo = ({ testid = "brand-logo" }) => (
  <span className="flex items-center gap-2.5" data-testid={testid}>
    <LogoMark />
    <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-navy">
      Carat<span className="text-gold">Cloud</span>
    </span>
  </span>
);
