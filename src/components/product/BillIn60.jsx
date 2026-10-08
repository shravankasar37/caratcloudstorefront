import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScanBarcode, Calculator, CheckCheck } from "lucide-react";
import { BILL_STEPS } from "@/data/products";
import { WhatsAppIcon } from "../site/Buttons";

const ICONS = [ScanBarcode, Calculator, CheckCheck];

const Row = ({ l, r, bold }) => (
  <div className={`flex justify-between py-1.5 text-[13px] ${bold ? "border-t border-dashed border-line pt-2.5 font-bold text-navy" : "text-ink-2"}`}><span>{l}</span><span className="font-mono">{r}</span></div>
);

const Screens = [
  () => (
    <div className="grid h-full place-items-center">
      <div className="relative h-36 w-56 rounded-xl border-2 border-navy bg-white p-4">
        <div className="flex h-full items-end gap-[3px]">
          {Array.from({ length: 34 }).map((_, i) => <span key={i} className="bg-navy" style={{ width: i % 3 ? 2 : 4, height: `${70 + ((i * 7) % 30)}%` }} />)}
        </div>
        <motion.span className="absolute inset-x-2 h-0.5 bg-[#EF4444] shadow-[0_0_12px_#EF4444]" animate={{ top: ["12%", "88%", "12%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <p className="mt-4 font-mono text-xs text-ink-2">TAG · CC-22K-0418 · HUID filled</p>
    </div>
  ),
  () => (
    <div className="mx-auto w-full max-w-xs rounded-xl border border-line bg-white p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">Sample calculation</p>
      <Row l="Gold value (today's rate)" r="₹ ●●,●●●" />
      <Row l="Making charges" r="₹ ●,●●●" />
      <Row l="GST" r="₹ ●,●●●" />
      <Row l="Old gold exchange" r="– ₹ ●,●●●" />
      <Row l="Total · UPI + Cash" r="₹ ●●,●●●" bold />
    </div>
  ),
  () => (
    <div className="mx-auto w-full max-w-xs rounded-2xl bg-[#E9F7EE] p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-[#0F7A3A]"><WhatsAppIcon className="h-4 w-4" />Customer chat</div>
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }} className="ml-auto mt-4 w-[85%] rounded-xl rounded-tr-sm bg-[#D3F5DC] p-3 text-[13px] text-navy shadow-sm">
        <p className="font-semibold">Tax Invoice.pdf</p>
        <p className="mt-1 text-ink-2">Thank you for shopping with us! · धन्यवाद!</p>
        <p className="mt-1 text-right font-mono text-[10px] text-ink-3">✓✓ sent</p>
      </motion.div>
    </div>
  ),
];

export const BillIn60 = () => {
  const [step, setStep] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return undefined;
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 3200);
    return () => clearInterval(t);
  }, [auto]);
  const Screen = Screens[step];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center" data-testid="bill-in-60">
      <ol className="grid gap-3">
        {BILL_STEPS.map((s, i) => {
          const I = ICONS[i];
          const on = step === i;
          return (
            <li key={s.n}>
              <button onClick={() => { setAuto(false); setStep(i); }} data-testid={`bill-step-${i + 1}`}
                className={`relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-[background-color,border-color] duration-300 ${on ? "border-navy bg-navy" : "border-line bg-white hover:border-[#C9971C]"}`}>
                <div className="flex gap-4">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${on ? "bg-[#F4E3B0] text-navy" : "bg-cream text-navy"}`}><I className="h-5 w-5" /></span>
                  <div>
                    <p className={`font-mono text-xs ${on ? "text-[#F4E3B0]" : "text-gold-deep"}`}>Step {s.n}</p>
                    <p className={`font-display text-xl font-bold ${on ? "text-white" : "text-navy"}`}>{s.title}</p>
                    <p className={`mt-1 text-[15px] leading-relaxed ${on ? "text-[#D5DBE6]" : "text-ink-2"}`}>{s.text}</p>
                  </div>
                </div>
                {on && auto && <motion.span key={`p${i}`} className="absolute bottom-0 left-0 h-[3px] bg-[#D4AF37]" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3.2, ease: "linear" }} />}
              </button>
            </li>
          );
        })}
      </ol>
      <div className="relative rounded-[2rem] border border-line bg-cream p-6 sm:p-10" data-testid="bill-interactive-preview">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-3">Mockup · step {step + 1} of 3</span>
          <span className="rounded-full bg-white px-3 py-1 font-mono text-xs font-semibold text-navy">≈ {[15, 40, 58][step]} sec</span>
        </div>
        <div className="min-h-[220px]">
          <motion.div key={step} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="h-full">
            <Screen />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
