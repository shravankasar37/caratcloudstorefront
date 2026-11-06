import { Quote, MapPin, Instagram, Check } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";
import { TESTIMONIALS } from "@/data/testimonials";
import { asset } from "@/lib/site";

const Logo = ({ t }) =>
  t.logo ? (
    <img src={asset(t.logo)} alt={`${t.shop} logo`} width="64" height="64" loading="lazy"
      className="h-16 w-16 shrink-0 rounded-2xl border border-[#C9971C]/40 bg-[#1b1b1b] object-cover" />
  ) : (
    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[#C9971C]/40 bg-navy font-display text-xl font-extrabold text-[#F4E3B0]" aria-hidden="true">{t.initials}</span>
  );

export const Testimonials = () => (
  <section id="clients" className="relative border-y border-line bg-cream" data-testid="testimonials-section">
    <div className="section">
      <SectionHead eyebrow="What our clients say" title="Jewellers who run their shop" accent="on CaratCloud." sub="Real shop owners who use CaratCloud at their counter every day." />
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.shop} delay={i * 0.08} className="h-full">
            <figure className="card relative flex h-full flex-col overflow-hidden p-7 sm:p-9" data-testid={`testimonial-${i}`}>
              <Quote className="absolute right-6 top-6 h-14 w-14 text-[#C9971C]/15" aria-hidden="true" />
              <div className="flex items-center gap-4">
                <Logo t={t} />
                <div className="min-w-0">
                  <p className="font-display text-xl font-bold leading-tight text-navy">{t.shop}</p>
                  {t.sub && <p className="text-sm font-medium text-gold-deep">{t.sub}</p>}
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-ink-3"><MapPin className="h-3.5 w-3.5" />{t.place}</p>
                </div>
              </div>
              <blockquote className="mt-6 flex-1 font-serif-i text-[1.35rem] leading-snug text-navy sm:text-2xl">“{t.quote}”</blockquote>
              <ul className="mt-6 flex flex-wrap gap-2">
                {t.tags.map((g) => (
                  <li key={g} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[13px] font-semibold text-navy"><Check className="h-3.5 w-3.5 text-gold" />{g}</li>
                ))}
              </ul>
              <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-5">
                <p><span className="font-semibold text-navy">{t.person}</span><span className="text-ink-3"> · {t.role}, {t.shop}</span></p>
                {t.instagram && (
                  <a href={t.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${t.shop} on Instagram`} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white text-navy transition-colors hover:bg-navy hover:text-[#F4E3B0]">
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8 flex flex-wrap items-center gap-4">
        <DemoButton testid="testimonials-demo" />
        <p className="text-sm text-ink-3">See the app working at your own counter. Free, no commitment.</p>
      </Reveal>
    </div>
  </section>
);
