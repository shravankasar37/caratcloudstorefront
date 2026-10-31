import { Quote, Target, Compass, Linkedin, Globe, Check } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { FOUNDER, ROADMAP } from "@/data/caratcloud";
import { asset } from "@/lib/site";

// Meet the founder: photo, about, vision, mission and what is live / coming next
export const Founder = () => (
  <section id="founder" className="relative overflow-hidden border-y border-line bg-cream" data-testid="founder-section">
    <div className="section">
      <SectionHead eyebrow="Meet the founder" title="Built by someone who" accent="sat at the counter." />

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-start">
        <Reveal>
          <figure className="relative">
            <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-navy shadow-[0_40px_80px_-40px_rgba(11,21,40,0.5)]">
              <img src={asset(FOUNDER.photo)} alt={`${FOUNDER.name}, ${FOUNDER.role}`} className="aspect-[4/5] w-full object-cover object-top" loading="lazy" data-testid="founder-photo" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent p-6 pt-20">
                <p className="font-display text-2xl font-extrabold text-white">{FOUNDER.name}</p>
                <p className="text-sm font-medium text-[#F4E3B0]">{FOUNDER.role}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#D5DBE6]">{FOUNDER.since}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5 !text-sm" data-testid="founder-linkedin"><Linkedin className="h-4 w-4" />LinkedIn</a>
              <a href={FOUNDER.portfolio} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5 !text-sm" data-testid="founder-portfolio"><Globe className="h-4 w-4" />Portfolio</a>
            </div>
          </figure>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-ink-2" data-testid="founder-about">
              {FOUNDER.about.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Reveal delay={0.12} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[1.6rem] bg-navy p-7 text-white" data-testid="founder-vision">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
                <p className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#F4E3B0]"><Compass className="h-4 w-4" />Our vision</p>
                <Quote className="relative mt-4 h-6 w-6 text-[#F4E3B0]/60" />
                <p className="relative mt-2 font-display text-2xl font-bold leading-snug">{FOUNDER.vision}</p>
              </div>
            </Reveal>
            <Reveal delay={0.18} className="h-full">
              <div className="h-full rounded-[1.6rem] border border-line bg-white p-7" data-testid="founder-mission">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep"><Target className="h-4 w-4" />Our mission</p>
                <ul className="mt-5 space-y-3">
                  {FOUNDER.mission.map((m) => <li key={m} className="flex gap-2.5 text-[15px] font-medium text-navy"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{m}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="mt-5 rounded-[1.6rem] border border-line bg-white p-7" data-testid="roadmap">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Where CaratCloud is going</p>
              <ol className="mt-5 grid gap-5 sm:grid-cols-2">
                {ROADMAP.map((r) => (
                  <li key={r.title} className="flex gap-4">
                    <span className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full ring-4 ${r.live ? "bg-[#10B981] ring-[#ECFDF5]" : "bg-gold-glow ring-[#FDF8EA]"}`} />
                    <div>
                      <p className={`font-mono text-[11px] uppercase tracking-[0.18em] ${r.live ? "text-[#047857]" : "text-gold-deep"}`}>{r.when}</p>
                      <p className="font-display text-lg font-bold text-navy">{r.title}</p>
                      <p className="text-[15px] text-ink-2">{r.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
