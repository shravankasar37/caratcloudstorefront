import { Instagram, Facebook, MapPin, MessageCircle, Clapperboard, Images, Stethoscope, ShoppingBag, Boxes, Building2, Rotate3d, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";

const SOCIAL = [
  { icon: Instagram, t: "Full setup: Instagram, Facebook, Google Business Profile and WhatsApp Business" },
  { icon: Clapperboard, t: "Reel shoots at your shop" },
  { icon: Images, t: "Product display shoots: catalogue-style photos and videos for your customers" },
];

export const Services = () => (
  <section id="services" className="section" data-testid="services-section">
    <SectionHead eyebrow="Services" title="Beyond software," accent="we grow you online." sub="Marketing, custom software and 3D sales tools for local businesses, all from the same team that builds your software." />
    <div className="mt-14 grid gap-5 lg:grid-cols-12">
      <Reveal className="lg:col-span-7 lg:row-span-2">
        <div className="card card-hover h-full overflow-hidden p-7 sm:p-10" data-testid="service-social-media">
          <div className="grid h-full gap-8 sm:grid-cols-[1fr_200px]">
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">A · Social media marketing</span>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">Complete online presence <em className="font-serif-i font-normal text-gold-deep">for your shop</em></h3>
              <div className="mt-6 flex items-end gap-3">
                <span className="font-display text-7xl font-extrabold leading-none text-navy">5</span>
                <span className="pb-2 text-[15px] font-semibold leading-tight text-ink-2">reels posted<br />every week</span>
              </div>
              <ul className="mt-6 space-y-3">
                {SOCIAL.map(({ icon: I, t }) => (
                  <li key={t} className="flex gap-3 text-[15px] text-navy"><I className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{t}</li>
                ))}
              </ul>
              <div className="mt-auto pt-7">
                <p className="text-sm text-ink-2">Pairs perfectly with <Link to="/jewellery-erp" className="font-semibold text-navy underline decoration-gold underline-offset-4" data-testid="service-link-erp">CaratCloud ERP</Link> / <Link to="/estate" className="font-semibold text-navy underline decoration-gold underline-offset-4" data-testid="service-link-estate">Estate</Link></p>
                <DemoButton testid="service-social-demo-button" className="mt-5" msg="Hi CaratCloud, I'm interested in social media marketing for my shop." />
              </div>
            </div>
            <div className="relative mx-auto w-[200px]">
              <div className="relative aspect-[9/17] overflow-hidden rounded-[2rem] border-[6px] border-navy bg-navy shadow-[0_30px_60px_-30px_rgba(11,21,40,0.6)]">
                <img src="/img/reel.jpg" alt="Phone recording a reel" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
                  <p className="text-[11px] font-semibold">@yourshop</p>
                  <p className="text-[10px] opacity-90">Reel preview · placeholder</p>
                </div>
                <div className="absolute right-2 top-1/2 flex flex-col gap-3 text-white"><Facebook className="h-4 w-4" /><MessageCircle className="h-4 w-4" /><MapPin className="h-4 w-4" /></div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="lg:col-span-5" delay={0.08}>
        <div className="card card-hover h-full p-7 sm:p-9" data-testid="service-custom-software">
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">B · Custom software & websites</span>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-navy">Software made for your local business</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-2">Clinics with appointment booking, shops, and more. Simple tools your team will actually use.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[[Stethoscope, "Clinics"], [ShoppingBag, "Shops"], [Boxes, "And more"]].map(([I, t]) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-sm font-medium text-navy"><I className="h-4 w-4 text-gold" />{t}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="lg:col-span-5" delay={0.16}>
        <Link to="/estate" className="card card-hover group relative block h-full overflow-hidden p-7 sm:p-9" data-testid="service-3d-marketing">
          <img src="/img/apartment.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.12] transition-transform duration-700 group-hover:scale-105" />
          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">C · Real estate 3D marketing</span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-navy">Websites with 3D floor-plan walkthroughs</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">Let buyers walk through a flat on their phone before they visit the site.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy"><Building2 className="h-4 w-4 text-gold" /><Rotate3d className="h-4 w-4 text-gold" />See CaratCloud Estate <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
          </div>
        </Link>
      </Reveal>
    </div>
  </section>
);
