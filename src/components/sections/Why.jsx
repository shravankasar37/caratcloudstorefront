import { Check, Minus } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { WHY_ROWS } from "@/data/caratcloud";

export const Why = () => (
  <section id="why" className="section" data-testid="why-section">
    <SectionHead eyebrow="Why CaratCloud" title="Made for your counter," accent="not for a big office." sub="Here is how CaratCloud compares with typical jewellery billing software." />
    <Reveal className="mt-12">
      <div className="card overflow-hidden" data-testid="comparison-table-why">
        <div className="grid grid-cols-[1.25fr_1fr] sm:grid-cols-[1.4fr_1fr] border-b border-line bg-cream text-sm font-semibold">
          <div className="flex items-center gap-2 p-4 sm:p-5 text-navy">CaratCloud</div>
          <div className="p-4 sm:p-5 text-ink-2">Typical billing software</div>
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
  </section>
);
