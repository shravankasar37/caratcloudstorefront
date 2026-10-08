import { Check, Minus, Quote } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { WHY_ROWS } from "@/data/content";

const Testimonials = () => (
  <div className="mt-20" data-testid="testimonials-placeholder">
    <Reveal><p className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">In their words</p></Reveal>
    <div className="mt-6 grid gap-5 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Reveal key={i} delay={i * 0.06}>
          <figure className="h-full rounded-[1.6rem] border border-dashed border-line bg-white/60 p-7" data-testid={`testimonial-placeholder-${i}`}>
            <Quote className="h-6 w-6 text-gold" />
            <blockquote className="mt-4 text-[15px] italic leading-relaxed text-ink-2">[Client testimonial to be added: a few lines in the client's own words.]</blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-navy">[Client name], <span className="font-normal text-ink-3">[Business, City]</span></figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  </div>
);

export const Why = () => (
  <section id="why" className="section" data-testid="why-section">
    <SectionHead eyebrow="Why CaratCloud" title="One team that owns" accent="the whole job." sub="Here is how we compare with a typical software vendor or agency." />
    <Reveal className="mt-12">
      <div className="card overflow-hidden" data-testid="comparison-table-why">
        <div className="grid grid-cols-[1.25fr_1fr] sm:grid-cols-[1.4fr_1fr] border-b border-line bg-cream text-sm font-semibold">
          <div className="flex items-center gap-2 p-4 sm:p-5 text-navy">CaratCloud</div>
          <div className="p-4 sm:p-5 text-ink-2">Typical vendors / agencies</div>
        </div>
        {WHY_ROWS.map(([us, them], i) => (
          <div key={i} className="grid grid-cols-[1.25fr_1fr] sm:grid-cols-[1.4fr_1fr] border-b border-line last:border-0 transition-colors hover:bg-[#FDF8EA]/60" data-testid={`why-row-${i}`}>
            <div className="flex gap-3 p-4 sm:p-5 text-[14px] sm:text-[15px] font-medium text-navy">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy text-[#F4E3B0]"><Check className="h-3 w-3" /></span>{us}
            </div>
            <div className="flex gap-3 p-4 sm:p-5 text-[14px] sm:text-[15px] text-ink-2">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-line"><Minus className="h-3 w-3" /></span>{them}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
    <Testimonials />
  </section>
);
