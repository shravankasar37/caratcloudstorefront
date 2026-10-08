import { Check, Minus } from "lucide-react";
import { ESTATE_COMPARE } from "@/data/products";

const Cell = ({ v }) =>
  typeof v === "boolean" ? (
    v ? <span className="mx-auto grid h-6 w-6 place-items-center rounded-full bg-navy text-[#F4E3B0]"><Check className="h-3.5 w-3.5" /></span>
      : <span className="mx-auto grid h-6 w-6 place-items-center rounded-full border border-line text-ink-3"><Minus className="h-3.5 w-3.5" /></span>
  ) : <span className="font-semibold text-navy">{v}</span>;

export const CompareTable = () => (
  <div className="card overflow-hidden" data-testid="comparison-table-estate">
    <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-line bg-cream text-sm font-semibold sm:text-base">
      <div className="p-4 sm:p-5 text-ink-2">Feature</div>
      <div className="p-4 sm:p-5 text-center font-display text-navy">Essential</div>
      <div className="relative p-4 sm:p-5 text-center font-display text-navy">Pro<span className="absolute inset-x-3 top-0 h-[3px] rounded-b bg-[#C9971C]" /></div>
    </div>
    {ESTATE_COMPARE.map(([f, e, p], i) => (
      <div key={f} className={`grid grid-cols-[1.6fr_1fr_1fr] items-center border-b border-line text-[14px] last:border-0 sm:text-[15px] ${i >= ESTATE_COMPARE.length - 2 ? "bg-[#FDF8EA]/70" : ""}`} data-testid={`compare-row-${i}`}>
        <div className="p-4 sm:p-5 text-navy">{f}</div>
        <div className="p-3 sm:p-5 text-center"><Cell v={e} /></div>
        <div className="p-3 sm:p-5 text-center bg-[#FDF8EA]/40"><Cell v={p} /></div>
      </div>
    ))}
  </div>
);
