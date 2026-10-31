import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";
import { STEPS } from "@/data/caratcloud";

// Vertical step timeline: demo → setup → training → support
export const HowItWorks = () => (
  <section id="how-it-works" className="section" data-testid="how-it-works-section">
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead eyebrow="How it works" title="From notebook to app" accent="in one visit." sub="Most shops make their first bill on CaratCloud on the same day. We do the setup with you, at your counter." />
        <Reveal delay={0.2} className="mt-8"><DemoButton testid="how-demo-button" /></Reveal>
      </div>
      <ol className="relative grid gap-4">
        <span className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-gold-glow via-line to-transparent" aria-hidden="true" />
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} as="li">
            <div className="relative flex gap-5 rounded-2xl border border-line bg-white p-5 sm:p-6" data-testid={`how-step-${i + 1}`}>
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy text-[#F4E3B0]"><s.icon className="h-6 w-6" /></span>
              <div>
                <p className="font-mono text-xs text-gold-deep">Step 0{i + 1}</p>
                <p className="font-display text-xl font-bold text-navy">{s.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
