import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MaskLine, Reveal, SectionHead } from "@/components/site/Motion";
import { DemoButton } from "@/components/site/Buttons";
import { Faq } from "@/components/sections/Faq";

// Shared layout for the restaurant and custom software pages: hero, cards, steps and FAQ
export function TopicPage({ testid, badge, title, accent, intro, msg, cta, cards, cardsTitle, cardsAccent, steps, faqs }) {
  return (
    <main data-testid={testid}>
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 hairline-grid [mask-image:radial-gradient(70%_60%_at_25%_35%,black,transparent)]" />
        <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-16 sm:pt-40 lg:pb-24">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 hover:text-navy"><ArrowLeft className="h-4 w-4" />Home</Link>
          {badge && <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">{badge}</p>}
          <h1 className="mt-4 max-w-4xl font-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] font-extrabold leading-[0.97] tracking-[-0.03em] text-navy">
            <MaskLine delay={0.12}>{title}</MaskLine>
            <MaskLine delay={0.24}><em className="font-serif-i font-normal gold-text pr-2">{accent}</em></MaskLine>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-7 max-w-2xl text-base md:text-lg leading-relaxed text-ink-2">{intro}</p>
          </Reveal>
          <Reveal delay={0.5} className="mt-9"><DemoButton msg={msg} label={cta} testid={`${testid}-cta`} /></Reveal>
        </div>
      </section>

      <section className="section">
        <SectionHead title={cardsTitle} accent={cardsAccent} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="card flex h-full flex-col p-7">
                <span className="icon-chip"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-navy">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {steps && (
        <section className="section pt-0">
          <SectionHead title="How we" accent="work with you." />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} as="li" delay={i * 0.08} className="card p-7">
                <span className="font-mono text-xs text-gold-deep">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </section>
      )}

      <Faq items={faqs} msg={msg} />
    </main>
  );
}
