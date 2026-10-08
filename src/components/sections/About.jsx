import { MapPin, Target, Eye, Gem, Building2, Stethoscope } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";

const CARDS = [
  { icon: Target, title: "Mission", text: "Give every local business simple software and real marketing, at a price a small shop can afford, with a team they can actually meet." },
  { icon: Eye, title: "Vision", text: "A Navi Mumbai where the neighbourhood jeweller, builder and clinic run as smoothly online as any big brand." },
];

export const About = () => (
  <section id="about" className="section" data-testid="about-section">
    <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <SectionHead eyebrow="About" title="A local team," accent="built for local business." />
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-ink-2" data-testid="about-story">
            <p>CaratCloud started with a simple observation: the businesses that keep our neighbourhoods running, like jewellers, builders and clinics, were still working from paper registers, calculators and notebooks, while their customers had moved online.</p>
            <p>So we built ready-to-use software for them, and then started running their social media too, so one team takes care of both running the business and growing it online. We are based in Kamothe, Navi Mumbai, and we come to your shop to set things up.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={0.1 * i}>
              <div className="card card-hover h-full p-6" data-testid={`about-${c.title.toLowerCase()}`}>
                <span className="icon-chip"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={0.15}>
        <div className="card relative overflow-hidden p-8 sm:p-10" data-testid="about-founder-card">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.3),transparent_65%)]" />
          <div className="relative grid h-28 w-28 place-items-center rounded-[2rem] bg-navy font-display text-4xl font-extrabold text-[#F4E3B0]" aria-label="Founder photo placeholder">SK</div>
          <p className="relative mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">Photo coming soon</p>
          <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">Founder</p>
          <h3 className="relative mt-2 font-display text-3xl font-extrabold text-navy" data-testid="about-founder-name">Shravan Kasar</h3>
          <p className="relative mt-4 text-[15px] leading-relaxed text-ink-2">Shravan leads CaratCloud from Kamothe, working directly with shop owners and builders, from the first demo to everyday support.</p>
          <div className="relative mt-8 flex items-center gap-2 text-sm font-semibold text-navy"><MapPin className="h-4 w-4 text-gold" />Kamothe, Navi Mumbai, Maharashtra</div>
          <div className="relative mt-6 border-t border-line pt-6">
            <p className="text-sm text-ink-3">Who we work with</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[[Gem, "Jewellers"], [Building2, "Builders"], [Stethoscope, "Clinics"]].map(([I, t]) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-sm font-medium text-navy"><I className="h-4 w-4 text-gold" />{t}</span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
