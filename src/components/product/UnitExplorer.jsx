import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Maximize2, Layers } from "lucide-react";

const STATUS = {
  available: { label: "Available", c: "#10B981" },
  hold: { label: "On hold", c: "#F59E0B" },
  booked: { label: "Booked", c: "#EF4444" },
  unreleased: { label: "Not released", c: "#94A3B8" },
};
const ORDER = ["available", "available", "booked", "hold", "available", "booked", "unreleased", "available", "booked"];
const LAYOUT = [
  { bhk: 1, facing: "East", area: 420, base: 45 },
  { bhk: 2, facing: "East", area: 640, base: 68 },
  { bhk: 2, facing: "West", area: 655, base: 66 },
  { bhk: 3, facing: "North", area: 910, base: 95 },
];
const FLOORS = 10;

const build = (tower) =>
  Array.from({ length: FLOORS }, (_, f) =>
    LAYOUT.map((l, u) => {
      const floor = FLOORS - f;
      const status = floor > 8 && tower === "B" ? "unreleased" : ORDER[(floor * 7 + u * 11 + floor * u * 3 + (tower === "B" ? 4 : 0)) % ORDER.length];
      return { ...l, id: `${tower}-${floor}0${u + 1}`, floor, status, price: Math.round((l.base + floor * 0.6) * 10) / 10 };
    })
  );

const Pill = ({ on, onClick, children, testid }) => (
  <button onClick={onClick} data-testid={testid} className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${on ? "border-navy bg-navy text-[#F4E3B0]" : "border-line bg-white text-navy hover:border-[#C9971C]"}`}>{children}</button>
);

export const UnitExplorer = () => {
  const [tower, setTower] = useState("A");
  const [bhk, setBhk] = useState(0);
  const [facing, setFacing] = useState("All");
  const [budget, setBudget] = useState(0);
  const floors = useMemo(() => build(tower), [tower]);
  const [sel, setSel] = useState(null);
  const unit = sel ? floors.flat().find((u) => u.id === sel) : null;
  const match = (u) => (!bhk || u.bhk === bhk) && (facing === "All" || u.facing === facing) && (!budget || u.price <= budget);

  return (
    <div className="card overflow-hidden" data-testid="unit-explorer">
      <div className="flex flex-col gap-4 border-b border-line bg-cream p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2" data-testid="unit-explorer-towers">
          <span className="mr-1 text-sm font-semibold text-ink-2">Tower</span>
          {["A", "B"].map((t) => <Pill key={t} on={tower === t} onClick={() => { setTower(t); setSel(null); }} testid={`unit-tower-${t}`}>Tower {t}</Pill>)}
        </div>
        <div className="flex flex-wrap items-center gap-2" data-testid="unit-explorer-filter">
          {[0, 1, 2, 3].map((b) => <Pill key={b} on={bhk === b} onClick={() => setBhk(b)} testid={`unit-filter-bhk-${b}`}>{b ? `${b} BHK` : "All"}</Pill>)}
          <select value={facing} onChange={(e) => setFacing(e.target.value)} data-testid="unit-filter-facing" className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-navy">
            {["All", "East", "West", "North"].map((x) => <option key={x} value={x}>{x === "All" ? "Any facing" : `${x} facing`}</option>)}
          </select>
          <select value={budget} onChange={(e) => setBudget(Number(e.target.value))} data-testid="unit-filter-budget" className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-navy">
            {[[0, "Any budget"], [60, "Up to ₹60 L"], [75, "Up to ₹75 L"], [100, "Up to ₹1 Cr"]].map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1fr]">
        <div className="p-5 sm:p-8">
          <div className="mx-auto max-w-md rounded-t-[1.6rem] border-x-4 border-t-4 border-navy bg-white p-3">
            {floors.map((row) => (
              <div key={row[0].floor} className="flex items-center gap-2 py-[3px]">
                <span className="w-7 font-mono text-[11px] text-ink-3">{String(row[0].floor).padStart(2, "0")}</span>
                <div className="grid flex-1 grid-cols-4 gap-1.5">
                  {row.map((u) => (
                    <motion.button
                      key={u.id}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSel(u.id)}
                      data-testid={`unit-cell-${u.id}`}
                      aria-label={`Flat ${u.id}, ${STATUS[u.status].label}`}
                      className={`h-7 rounded-md transition-opacity ${match(u) ? "opacity-100" : "opacity-20"} ${sel === u.id ? "ring-2 ring-navy ring-offset-2" : ""}`}
                      style={{ background: STATUS[u.status].c }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto h-3 max-w-md rounded-b-md bg-navy" />
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2" data-testid="unit-status-legend">
            {Object.values(STATUS).map((s) => (
              <span key={s.label} className="inline-flex items-center gap-2 text-sm text-ink-2"><span className="h-3 w-3 rounded" style={{ background: s.c }} />{s.label}</span>
            ))}
          </div>
        </div>

        <div className="border-t border-line bg-paper p-6 sm:p-8 lg:border-l lg:border-t-0" data-testid="unit-detail-panel">
          {unit ? (
            <motion.div key={unit.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: STATUS[unit.status].c }}>{STATUS[unit.status].label}</span>
              <h4 className="mt-4 font-display text-4xl font-extrabold text-navy" data-testid="unit-detail-id">Flat {unit.id}</h4>
              <p className="mt-1 text-ink-2">Tower {tower} · Floor {unit.floor}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {[[Layers, "Type", `${unit.bhk} BHK`], [Maximize2, "Carpet", `${unit.area} sq ft`], [Compass, "Facing", unit.facing], [null, "Price from", `₹${unit.price} L`]].map(([I, l, v]) => (
                  <div key={l} className="rounded-xl border border-line bg-white p-3.5">
                    <dt className="flex items-center gap-1.5 text-xs text-ink-3">{I && <I className="h-3.5 w-3.5" />}{l}</dt>
                    <dd className="mt-1 font-display text-lg font-bold text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-ink-2">On a live site, buyers can open the 360° walkthrough, get a cost sheet on WhatsApp or book a site visit from here.</p>
            </motion.div>
          ) : (
            <div className="grid h-full min-h-[260px] place-items-center text-center">
              <div>
                <p className="font-display text-2xl font-bold text-navy">Tap any flat</p>
                <p className="mt-2 text-[15px] text-ink-2">Pick a tower, then tap a flat on any floor to see its details.</p>
              </div>
            </div>
          )}
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-3">Demo project · sample data</p>
        </div>
      </div>
    </div>
  );
};
