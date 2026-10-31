import { useState } from "react";
import { Check, Plus, Equal, Gift } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";
import { PLANS, SOCIAL, COMBO, REFERRAL } from "@/data/caratcloud";
import { MSG, wa } from "@/lib/site";

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

const Points = ({ items, includes }) => (
  <div className="mt-6">
    {includes && <p className="mb-2 text-sm font-semibold text-gold-deep">{includes}:</p>}
    <ul className="space-y-2.5">
      {items.map((t) => <li key={t} className="flex gap-2.5 text-[15px] text-ink-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{t}</li>)}
    </ul>
  </div>
);

const Badge = ({ children = "Most popular" }) => (
  <span className="absolute -top-3 left-7 rounded-full bg-navy px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F4E3B0]">{children}</span>
);

const Card = ({ popular, children, testid }) => (
  <div className={`card card-hover flex h-full flex-col p-7 ${popular ? "!border-[#C9971C] shadow-[0_24px_60px_-30px_rgba(184,134,11,0.6)]" : ""}`} data-testid={testid}>
    {popular && <Badge />}
    {children}
  </div>
);

const GroupHead = ({ n, title, sub, children }) => (
  <div className="mb-8 mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-navy"><span className="mr-3 font-mono text-sm text-gold-deep">{n}</span>{title}</h3>
      {sub && <p className="mt-1 text-sm text-ink-2">{sub}</p>}
    </div>
    {children}
  </div>
);

const Toggle = ({ yearly, setYearly }) => (
  <div className="inline-flex rounded-full border border-line bg-white p-1 text-sm font-semibold" data-testid="pricing-toggle">
    {[["Monthly", false], ["Yearly", true]].map(([t, v]) => (
      <button key={t} type="button" onClick={() => setYearly(v)}
        className={`rounded-full px-4 py-2 transition-colors ${yearly === v ? "bg-navy text-[#F4E3B0]" : "text-navy"}`}>
        {t}{v && <span className="ml-1.5 text-xs text-[#10B981]">up to 2 months free</span>}
      </button>
    ))}
  </div>
);

export const SoftwarePlans = ({ compact = false }) => {
  const [yearly, setYearly] = useState(false);
  return (
    <>
      <GroupHead n="01" title="CaratCloud Jewellery" sub="Software plans · taxes extra · move up any time"><Toggle yearly={yearly} setYearly={setYearly} /></GroupHead>
      <div className="grid gap-5 lg:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="h-full">
            <Card popular={p.popular} testid={`pricing-card-${p.name.toLowerCase()}`}>
              <div className="flex items-baseline justify-between">
                <h4 className="font-display text-xl font-bold text-navy">{p.name}</h4>
                <span className="text-sm font-medium text-ink-3">{p.logins}</span>
              </div>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight text-navy">{inr(yearly ? p.yearly : p.price)}</span>
                <span className="text-sm text-ink-3">/ {yearly ? "year" : "month"}</span>
              </p>
              <p className="mt-2 h-5 text-sm font-semibold text-[#047857]">
                {yearly ? (p.free ? `${p.free} · save ${inr(p.price * 12 - p.yearly)}` : "Billed yearly") : p.free ? `Pay yearly: ${p.free}` : ""}
              </p>
              {!compact && <Points items={p.items} includes={p.includes} />}
              <div className="mt-auto pt-7">
                <DemoButton className="w-full justify-center" label="Book a Free Demo" msg={MSG.plan(p.name)} testid={`pricing-${p.name.toLowerCase()}-button`} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <Referral />
    </>
  );
};

export const Referral = () => (
  <Reveal className="mt-5">
    <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-[1.6rem] border border-[#C9971C]/40 bg-[#FDF8EA] p-7 sm:flex-row sm:items-center sm:justify-between" data-testid="referral-offer">
      <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
      <div className="relative flex gap-4">
        <span className="icon-chip shrink-0"><Gift className="h-5 w-5" /></span>
        <div>
          <p className="font-display text-xl sm:text-2xl font-extrabold text-navy">{REFERRAL.title}</p>
          <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-ink-2">{REFERRAL.text}</p>
        </div>
      </div>
      <a href={wa(MSG.referral)} target="_blank" rel="noopener noreferrer" className="btn-ghost relative shrink-0">Refer a shop</a>
    </div>
  </Reveal>
);

export const SocialPlans = () => (
  <>
    <GroupHead n="02" title="Social media for jewellers" sub="Instagram + Facebook · we shoot at your shop" />
    <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1.15fr]">
      {SOCIAL.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.08} className="h-full">
          <Card popular={p.popular} testid={`pricing-card-${p.name.replace(" ", "-").toLowerCase()}`}>
            <h4 className="font-display text-xl font-bold text-navy">{p.name}</h4>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-5xl font-extrabold tracking-tight text-navy">{inr(p.price)}</span>
              <span className="text-sm text-ink-3">/ month</span>
            </p>
            <Points items={p.items} includes={p.includes} />
            <div className="mt-auto pt-7">
              <DemoButton className="w-full justify-center" label="Ask about this" msg={MSG.social(p.name)} />
            </div>
          </Card>
        </Reveal>
      ))}
      <Reveal delay={0.16} className="h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-navy p-7 text-white" data-testid="pricing-card-combo">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
          <p className="relative font-serif-i text-4xl text-[#F4E3B0]">Combo</p>
          <p className="relative mt-2 text-[15px] text-[#D5DBE6]">Take social media and the software together, and pay less for the software.</p>
          <div className="relative mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center">
            <span className="rounded-xl border border-[#F4E3B0]/30 bg-white/5 px-2 py-3"><b className="block text-sm">{COMBO.a}</b><span className="text-sm text-[#D5DBE6]">{inr(COMBO.ap)}</span></span>
            <Plus className="h-5 w-5 text-[#F4E3B0]" />
            <span className="rounded-xl border border-[#F4E3B0]/30 bg-white/5 px-2 py-3"><b className="block text-sm">{COMBO.b}</b><span className="text-sm text-[#D5DBE6]">{inr(COMBO.bp)}</span></span>
          </div>
          <div className="relative mt-5 flex items-center gap-3">
            <Equal className="h-5 w-5 text-[#F4E3B0]" />
            <s className="font-display text-xl text-[#9AA4B8]">{inr(COMBO.ap + COMBO.bp)}</s>
            <span className="font-display text-5xl font-extrabold text-[#F4E3B0]">{inr(COMBO.total)}</span>
            <span className="text-sm text-[#D5DBE6]">/ month</span>
          </div>
          <p className="relative mt-3 inline-block self-start rounded-full bg-[#10B981]/20 px-3 py-1 text-sm font-semibold text-[#6EE7B7]">
            Save {inr((COMBO.ap + COMBO.bp - COMBO.total) * 12)} a year
          </p>
          <div className="relative mt-auto pt-7">
            <DemoButton className="w-full justify-center" label="Ask about the combo" msg={MSG.combo} />
          </div>
        </div>
      </Reveal>
    </div>
  </>
);

export const PricingSection = () => (
  <section id="pricing" className="section" data-testid="pricing-section">
    <SectionHead eyebrow="Pricing" title="Simple monthly prices." accent="No big upfront cost." sub="Start with the software, add social media when you are ready. All prices are per month, taxes extra." />
    <SoftwarePlans />
    <SocialPlans />
  </section>
);
