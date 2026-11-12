import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, Compass, Github, Globe, Instagram, Linkedin, Quote, Target, Youtube } from "lucide-react";
import { Reveal } from "@/components/site/Motion";
import { FOUNDER, ROADMAP } from "@/data/caratcloud";
import { asset, wa, MSG } from "@/lib/site";

const LINKS = [
  { key: "portfolio", label: "Portfolio", icon: Globe },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
  { key: "github", label: "GitHub", icon: Github },
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "youtube", label: "YouTube", icon: Youtube },
].filter((l) => FOUNDER[l.key]);

const WORK = [
  { title: "CaratCloud Jewellery", text: "Billing, stock, saving schemes, dues and girvi software for jewellery shops, in Marathi, Hindi and English.", to: "/jewellery" },
  { title: "Websites for jewellers", text: "Premium storefront websites with live gold rate, designs, Google Maps and WhatsApp.", to: "/website-designs" },
  { title: "Custom software", text: "Apps and websites built around the way a business already works.", to: "/custom-software" },
  { title: "AI projects", text: "Agentic AI, voice deepfake detection and multilingual tools, shown on his portfolio.", href: FOUNDER.portfolio },
];

// /founder: who runs CaratCloud. Mirrors the Person schema in src/lib/seo.js.
export default function FounderPage() {
  return (
    <main className="section !pt-32 sm:!pt-40" data-testid="founder-page">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 hover:text-navy"><ArrowLeft className="h-4 w-4" />Home</Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <figure className="relative overflow-hidden rounded-[2rem] border border-line bg-navy shadow-[0_40px_80px_-40px_rgba(11,21,40,0.5)]">
            <img src={asset(FOUNDER.photo)} alt={`${FOUNDER.name}, founder of CaratCloud`} className="aspect-[4/5] w-full object-cover object-top" data-testid="founder-page-photo" />
          </figure>
        </Reveal>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Founder · CaratCloud</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            {FOUNDER.name}
          </h1>
          <p className="mt-3 font-serif-i text-xl text-gold-deep sm:text-2xl">{FOUNDER.headline}</p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-2 md:text-lg">
            {FOUNDER.about.map((a) => <p key={a}>{a}</p>)}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {LINKS.map(({ key, label, icon: I }) => (
              <a key={key} href={FOUNDER[key]} target="_blank" rel="noopener me" className="btn-ghost !px-4 !py-2.5 !text-sm" data-testid={`founder-page-${key}`}><I className="h-4 w-4" />{label}</a>
            ))}
          </div>
          <a href={wa(MSG.general)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-5 inline-flex" data-testid="founder-page-whatsapp">Talk to Shravan on WhatsApp<ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">What he builds</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {WORK.map((w) => {
            const body = (
              <>
                <p className="flex items-center justify-between font-display text-xl font-bold text-navy">{w.title}<ArrowUpRight className="h-5 w-5 text-gold-deep" /></p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{w.text}</p>
              </>
            );
            const cls = "block h-full rounded-[1.6rem] border border-line bg-white p-7 transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(11,21,40,0.45)]";
            return w.to
              ? <Link key={w.title} to={w.to} className={cls}>{body}</Link>
              : <a key={w.title} href={w.href} target="_blank" rel="noopener" className={cls}>{body}</a>;
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-[1.6rem] bg-navy p-7 text-white">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
          <h2 className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#F4E3B0]"><Compass className="h-4 w-4" />Vision</h2>
          <Quote className="relative mt-4 h-6 w-6 text-[#F4E3B0]/60" />
          <p className="relative mt-2 font-display text-2xl font-bold leading-snug">{FOUNDER.vision}</p>
        </div>
        <div className="rounded-[1.6rem] border border-line bg-white p-7">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep"><Target className="h-4 w-4" />Mission</h2>
          <ul className="mt-5 space-y-3">
            {FOUNDER.mission.map((m) => <li key={m} className="flex gap-2.5 text-[15px] font-medium text-navy"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{m}</li>)}
          </ul>
        </div>
      </section>

      <section className="mt-5 rounded-[1.6rem] border border-line bg-white p-7">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Where CaratCloud is going</h2>
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
      </section>
    </main>
  );
}
