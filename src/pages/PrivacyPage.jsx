import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { PRIVACY } from "@/data/privacy";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-32 sm:px-8 sm:pt-40" data-testid="privacy-page">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 hover:text-navy"><ArrowLeft className="h-4 w-4" />Home</Link>
      <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep"><ShieldCheck className="h-4 w-4" />Privacy policy</p>
      <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">Your data, <em className="font-serif-i font-normal text-gold-deep">kept simple.</em></h1>
      <p className="mt-3 text-sm text-ink-3">Last updated: {PRIVACY.updated}</p>
      <p className="mt-8 text-base leading-relaxed text-ink-2 sm:text-lg">{PRIVACY.intro}</p>
      <div className="mt-10 space-y-9">
        {PRIVACY.sections.map(([title, points], i) => (
          <section key={title}>
            <h2 className="font-display text-xl font-bold text-navy sm:text-2xl"><span className="mr-2 font-mono text-sm text-gold-deep">{String(i + 1).padStart(2, "0")}</span>{title}</h2>
            <ul className="mt-3 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="relative pl-5 text-[15px] leading-relaxed text-ink-2 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
