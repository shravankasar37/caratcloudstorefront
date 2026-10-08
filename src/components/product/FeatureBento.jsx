import { Sparkles } from "lucide-react";
import { Reveal } from "../site/Motion";

const Card = ({ f }) => (
  <div className={`card card-hover group h-full overflow-hidden p-6 sm:p-7 ${f.pro ? "!bg-navy !border-navy" : ""} ${f.soon ? "!bg-[#FDF8EA] !border-[#C9971C]/40" : ""}`}>
    {f.big && !f.pro && <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_65%)]" />}
    <div className="relative flex items-start justify-between gap-4">
      <span className={`icon-chip transition-transform duration-500 group-hover:rotate-[-8deg] ${f.pro ? "!bg-[#F4E3B0] !text-navy" : ""}`}><f.icon className="h-5 w-5" /></span>
      {f.soon && <span className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F4E3B0]" data-testid="coming-soon-badge"><Sparkles className="h-3 w-3" />Coming Soon</span>}
      {f.pro && <span className="rounded-full bg-[#F4E3B0] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-navy">Pro plan</span>}
    </div>
    <h3 className={`relative mt-6 font-display font-bold tracking-tight ${f.big ? "text-2xl sm:text-3xl" : "text-xl"} ${f.pro ? "text-white" : "text-navy"}`}>{f.title}</h3>
    {f.text && <p className="relative mt-3 text-[15px] leading-relaxed text-ink-2">{f.text}</p>}
    {f.list && (
      <ul className="relative mt-5 grid gap-3 sm:grid-cols-2">
        {f.list.map((t) => <li key={t} className="border-l-2 border-[#D4AF37] pl-3 text-[15px] leading-relaxed text-[#E7EBF2]">{t}</li>)}
      </ul>
    )}
    {f.chips && (
      <div className="relative mt-5 flex flex-wrap gap-2">
        {f.chips.map((c) => <span key={c} className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-navy">{c}</span>)}
      </div>
    )}
  </div>
);

export const FeatureBento = ({ features, testid }) => (
  <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6" data-testid={testid}>
    {features.map((f, i) => (
      <Reveal key={f.title} delay={(i % 3) * 0.06} className={f.span} >
        <div className="h-full" data-testid={`feature-card-${i}`}><Card f={f} /></div>
      </Reveal>
    ))}
  </div>
);
