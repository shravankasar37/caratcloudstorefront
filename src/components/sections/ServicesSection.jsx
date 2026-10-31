import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { SERVICES, SOCIAL_STEPS } from "@/data/caratcloud";
import { wa, MSG, scrollToId, asset } from "@/lib/site";

const Cta = ({ s }) => {
  const cls = "mt-6 inline-flex items-center gap-2 font-semibold text-navy";
  const inner = <>{s.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>;
  if (s.to) return <Link to={s.to} className={cls}>{inner}</Link>;
  if (s.hash) return <button type="button" onClick={() => scrollToId(s.hash)} className={cls}>{inner}</button>;
  return <a href={wa(MSG[s.msg])} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
};

export const ServicesSection = () => (
  <section id="services" className="relative border-y border-line bg-cream" data-testid="services-section">
    <div className="section">
      <SectionHead eyebrow="What we do" title="Run the shop on software." accent="Grow it with content." sub="One local team for both: the app your counter uses every day, and the reels that bring new customers to it." />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="h-full">
            <div className="card card-hover group flex h-full flex-col p-7" data-testid={`service-card-${i}`}>
              <span className="icon-chip"><s.icon className="h-5 w-5" /></span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
              <div className="mt-auto"><Cta s={s} /></div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <div className="card grid overflow-hidden md:grid-cols-[1fr_1.3fr]" data-testid="social-explainer">
          <div className="relative min-h-[260px] bg-navy">
            <img src={asset("img/reel.jpg")} alt="Shooting a jewellery reel on a phone" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <span className="placeholder-tag left-4 top-4">Representative photo</span>
          </div>
          <div className="p-7 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Social media, done for you</p>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-navy">Customers check your Instagram <em className="font-serif-i font-normal text-gold-deep">before they visit.</em></h3>
            <ol className="mt-7 grid gap-5 sm:grid-cols-3">
              {SOCIAL_STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="font-mono text-xs text-gold-deep">0{i + 1}</span>
                  <p className="mt-1 flex items-center gap-2 font-display text-lg font-bold text-navy"><s.icon className="h-4 w-4 text-gold" />{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
