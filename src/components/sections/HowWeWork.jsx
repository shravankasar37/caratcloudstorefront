import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHead } from "../site/Motion";
import { TIMELINES } from "@/data/content";

export const HowWeWork = () => {
  const [tab, setTab] = useState("jewellers");
  const t = TIMELINES[tab];
  return (
    <section id="how-we-work" className="relative bg-cream border-y border-line" data-testid="how-we-work-section">
      <div className="section">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead eyebrow="How we work" title="Clear steps." accent="No surprises." sub="Whether you run a shop, build a project or want to grow online, here is exactly what happens." />
          <div className="inline-flex self-start rounded-full border border-line bg-white p-1.5" role="tablist">
            {Object.entries(TIMELINES).map(([k, v]) => (
              <button
                key={k}
                role="tab"
                aria-selected={tab === k}
                onClick={() => setTab(k)}
                data-testid={`how-we-work-tab-${k}`}
                className={`relative rounded-full px-4 sm:px-5 py-2.5 text-sm font-semibold transition-colors ${tab === k ? "text-[#F4E3B0]" : "text-ink-2 hover:text-navy"}`}
              >
                {tab === k && <motion.span layoutId="hww-pill" className="absolute inset-0 rounded-full bg-navy" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative">{v.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-16" data-testid={`how-we-work-timeline-${tab}`}>
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-line lg:left-0 lg:right-0 lg:top-[22px] lg:bottom-auto lg:h-px lg:w-auto" />
          <motion.div
            key={`line-${tab}`}
            initial={{ scaleX: 0, scaleY: 0 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[22px] top-0 bottom-0 w-px origin-top bg-gold lg:left-0 lg:right-0 lg:top-[22px] lg:bottom-auto lg:h-px lg:w-auto lg:origin-left"
          />
          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {t.steps.map((s, i) => (
              <motion.li
                key={`${tab}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 * i }}
                className="flex gap-5 lg:flex-col"
                data-testid={`how-we-work-step-${tab}-${i + 1}`}
              >
                <span className="icon-chip relative z-10 shrink-0 ring-8 ring-[#F5F0E6]"><s.icon className="h-5 w-5" /></span>
                <div>
                  <span className="font-mono text-xs text-gold-deep">Step 0{i + 1}</span>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
          <p className="mt-12 inline-flex rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy" data-testid="how-we-work-note">{t.note}</p>
        </div>
      </div>
    </section>
  );
};
