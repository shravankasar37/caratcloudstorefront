import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { LogoFull } from "./Logo";
import { useGo } from "./Navbar";
import { SOCIALS, PHONE_DISPLAY, CALL_LINK, MAIL_LINK, EMAIL, ADDRESS, wa, MSG } from "@/lib/site";

const ICONS = { instagram: Instagram, facebook: Facebook, youtube: Youtube, linkedin: Linkedin };

const Col = ({ title, children }) => (
  <div>
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">{title}</p>
    <ul className="mt-5 space-y-3 text-[15px] text-ink-2">{children}</ul>
  </div>
);

const Btn = ({ hash, children }) => {
  const go = useGo();
  return <li><button type="button" onClick={() => go(hash)} className="text-left hover:text-navy">{children}</button></li>;
};

export const Footer = () => (
  <footer className="relative mt-10 border-t border-line bg-cream pb-32 sm:pb-24" data-testid="site-footer">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <LogoFull className="h-20 w-auto" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink-2">
            A software company from Navi Mumbai. Simple software for small Indian businesses, in their own language: jewellery shops today, restaurants from January 2027.
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.filter((s) => s.href !== "#").map((s) => {
              const I = ICONS[s.key];
              return (
                <a key={s.key} href={s.href} aria-label={s.label} data-testid={`footer-social-${s.key}`} className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-navy transition-colors hover:bg-navy hover:text-[#F4E3B0]">
                  <I className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <Col title="Products">
          <li><Link to="/jewellery" data-testid="footer-link-jewellery" className="hover:text-navy">CaratCloud Jewellery</Link></li>
          <li><Link to="/restaurant-software" data-testid="footer-link-dine" className="hover:text-navy">CaratCloud Dine <span className="ml-1 rounded-full bg-navy px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[#F4E3B0]">Jan 2027</span></Link></li>
        </Col>
        <Col title="Services">
          <Btn hash="pricing">Software plans</Btn>
          <Btn hash="pricing">Social media for jewellers</Btn>
          <Btn hash="pricing">Social + software combo</Btn>
          <li><Link to="/custom-software" data-testid="footer-link-custom" className="hover:text-navy">Custom software</Link></li>
        </Col>
        <Col title="Company">
          <Btn hash="founder">Meet the founder</Btn>
          <Btn hash="how-it-works">How it works</Btn>
          <Btn hash="faq">FAQ</Btn>
          <Btn hash="book">Book a free demo</Btn>
        </Col>
        <Col title="Say hello">
          <li className="flex gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /><a href={CALL_LINK} data-testid="footer-phone" className="hover:text-navy">{PHONE_DISPLAY}</a></li>
          <li className="flex gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /><a href={MAIL_LINK} data-testid="footer-email" className="hover:text-navy">{EMAIL}</a></li>
          <li className="flex gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /><span>{ADDRESS}</span></li>
        </Col>
      </div>
      <div className="mt-14 overflow-hidden">
        <p className="font-display font-extrabold tracking-tighter text-navy/[0.07] leading-none text-[22vw] lg:text-[15rem] select-none" aria-hidden="true">CaratCloud</p>
      </div>
      <div className="flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-2 sm:flex-row sm:justify-between">
        <p data-testid="footer-copyright">© {new Date().getFullYear()} CaratCloud. All rights reserved.</p>
        <p>Made in Panvel, Navi Mumbai</p>
      </div>
    </div>
  </footer>
);
