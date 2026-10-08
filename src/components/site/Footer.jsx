import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { useGo } from "./Navbar";
import { NAV, SOCIALS, PHONE_DISPLAY, CALL_LINK, EMAIL, ADDRESS } from "@/lib/site";

const ICONS = { instagram: Instagram, facebook: Facebook, youtube: Youtube, linkedin: Linkedin };

const Col = ({ title, children }) => (
  <div>
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">{title}</p>
    <ul className="mt-5 space-y-3 text-[15px] text-ink-2">{children}</ul>
  </div>
);

export const Footer = () => {
  const go = useGo();
  return (
    <footer className="relative mt-10 border-t border-line bg-cream pb-28 sm:pb-10" data-testid="site-footer">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo testid="footer-logo" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-2">
              Software and social media marketing for jewellers and builders, from one local team in Navi Mumbai.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => {
                const I = ICONS[s.key];
                return (
                  <a key={s.key} href={s.href} aria-label={s.label} data-testid={`footer-social-${s.key}`} className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy transition-colors hover:bg-navy hover:text-[#F4E3B0]">
                    <I className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <Col title="Quick links">
            {NAV.slice(0, 6).map((n) => (
              <li key={n.hash}><button onClick={() => go(n.hash)} data-testid={`footer-link-${n.hash}`} className="hover:text-navy">{n.label}</button></li>
            ))}
          </Col>
          <Col title="Products">
            <li><Link to="/jewellery-erp" data-testid="footer-link-erp" className="hover:text-navy">Jewellery ERP</Link></li>
            <li><Link to="/estate" data-testid="footer-link-estate" className="hover:text-navy">CaratCloud Estate</Link></li>
          </Col>
          <Col title="Services">
            <li><button onClick={() => go("services")} data-testid="footer-service-social" className="text-left hover:text-navy">Social Media Marketing</button></li>
            <li><button onClick={() => go("services")} data-testid="footer-service-custom" className="text-left hover:text-navy">Custom Software & Websites</button></li>
            <li><button onClick={() => go("services")} data-testid="footer-service-3d" className="text-left hover:text-navy">Real Estate 3D Marketing</button></li>
          </Col>
          <Col title="Contact">
            <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /><a href={CALL_LINK} data-testid="footer-phone" className="hover:text-navy">{PHONE_DISPLAY}</a></li>
            <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /><span data-testid="footer-email">{EMAIL}</span></li>
            <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /><span>{ADDRESS}</span></li>
          </Col>
        </div>
        <div className="mt-14 overflow-hidden">
          <p className="font-display font-extrabold tracking-tighter text-navy/[0.07] leading-none text-[22vw] lg:text-[15rem] select-none" aria-hidden="true">CaratCloud</p>
        </div>
        <div className="flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-2 sm:flex-row sm:justify-between">
          <p data-testid="footer-copyright">© {new Date().getFullYear()} CaratCloud. All rights reserved.</p>
          <p>Made in Kamothe, Navi Mumbai</p>
        </div>
      </div>
    </footer>
  );
};
