import { asset } from "@/lib/site";

// The real CaratCloud mark (cloud + diamond), cut out of the brand logo
export const LogoMark = ({ className = "h-9 w-auto" }) => (
  <img src={asset("img/brand/logo-mark.png")} alt="" aria-hidden="true" className={className} />
);

export const Logo = ({ testid = "brand-logo", className = "" }) => (
  <span className={`flex items-center gap-2.5 ${className}`} data-testid={testid}>
    <LogoMark className="h-8 w-auto sm:h-9" />
    <span className="font-display text-[1.35rem] font-extrabold tracking-tight text-navy">
      Carat<span className="text-gold">Cloud</span>
    </span>
  </span>
);

// Full stacked logo (mark + wordmark), as in the brand artwork
export const LogoFull = ({ className = "h-24 w-auto" }) => (
  <img src={asset("img/brand/logo-full.png")} alt="CaratCloud" className={className} />
);
