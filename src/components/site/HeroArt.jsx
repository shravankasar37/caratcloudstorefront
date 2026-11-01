import { motion } from "framer-motion";
import { ChefHat, Check, Code2, CalendarCheck, TrendingUp, Wifi } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];
const In = ({ delay = 0, x = 0, y = 40, className = "", children }) => (
  <motion.div initial={{ opacity: 0, x, y }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1, delay, ease }} className={className}>
    {children}
  </motion.div>
);

// Drawn phone frame (same look as <Phone>) around screen content made in code
const Frame = ({ children, className = "" }) => (
  <div className={`relative rounded-[2.2rem] border border-navy/80 bg-navy p-[7px] shadow-[0_40px_80px_-30px_rgba(11,21,40,0.55)] ${className}`}>
    <div className="absolute left-1/2 top-[11px] z-10 h-[14px] w-[30%] -translate-x-1/2 rounded-full bg-navy" />
    <div className="overflow-hidden rounded-[1.75rem] bg-white px-4 pb-5 pt-9 text-navy">{children}</div>
  </div>
);

const Float = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(11,21,40,0.35)] backdrop-blur ${className}`}>{children}</div>
);

const ITEMS = [["Paneer Tikka", 2, 480], ["Butter Naan", 4, 160], ["Dal Makhani", 1, 260], ["Masala Chai", 3, 90]];

// Restaurant page: a table bill and a kitchen order ticket (a preview of CaratCloud Dine)
export const DineArt = () => {
  const sub = ITEMS.reduce((s, [, , p]) => s + p, 0);
  const gst = Math.round(sub * 0.05);
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[460px] sm:h-[560px]" aria-hidden="true">
      <In delay={0.25} className="absolute left-0 top-0 w-[58%] sm:left-[8%]">
        <Frame>
          <div className="flex items-center justify-between">
            <p className="font-display text-lg font-extrabold">Table 4</p>
            <span className="rounded-full bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold text-[#047857]">Dine-in</span>
          </div>
          <p className="mt-0.5 text-[11px] text-ink-3">4 guests · Waiter: Rahul</p>
          <ul className="mt-4 space-y-2.5 text-[12px]">
            {ITEMS.map(([n, q, p]) => (
              <li key={n} className="flex justify-between gap-2"><span>{n} <span className="text-ink-3">×{q}</span></span><span className="font-semibold">₹{p}</span></li>
            ))}
          </ul>
          <div className="mt-4 space-y-1 border-t border-dashed border-line pt-3 text-[11px] text-ink-2">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{sub}</span></div>
            <div className="flex justify-between"><span>GST 5%</span><span>₹{gst}</span></div>
            <div className="flex justify-between pt-1 font-display text-base font-extrabold text-navy"><span>Total</span><span>₹{sub + gst}</span></div>
          </div>
          <div className="mt-4 rounded-full bg-gradient-to-r from-gold-glow to-gold py-2 text-center text-[12px] font-bold text-navy">Print · WhatsApp bill</div>
        </Frame>
      </In>
      <In delay={0.55} x={40} y={0} className="absolute right-0 top-[4%] w-[40%] sm:top-[18%] sm:w-[48%]">
        <Float className="!bg-navy !text-white">
          <div className="flex items-center gap-2 text-[#F4E3B0]"><ChefHat className="h-4 w-4" /><span className="font-mono text-[10px] uppercase tracking-[0.18em]">Kitchen · KOT #128</span></div>
          <ul className="mt-2 space-y-1 text-[12px]">
            <li>2 × Paneer Tikka</li><li>4 × Butter Naan</li><li>1 × Dal Makhani</li>
          </ul>
          <p className="mt-2 text-[10px] text-[#D5DBE6]">Table 4 · sent 1 min ago</p>
        </Float>
      </In>
      <In delay={0.75} className="absolute bottom-[6%] right-[4%] w-[44%]">
        <Float>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-3">Today's sales</p>
          <p className="font-display text-xl font-extrabold">₹18,420</p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#047857]"><TrendingUp className="h-3.5 w-3.5" />Cash ₹7,200 · UPI ₹11,220</p>
        </Float>
      </In>
      <In delay={0.9} className="absolute bottom-0 left-0">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold"><Wifi className="h-3.5 w-3.5 text-gold" />Works offline</span>
      </In>
    </div>
  );
};

const BARS = [42, 64, 50, 78, 60, 92, 70];

// Custom software page: a web dashboard and a booking app, built "for your business"
export const CustomArt = () => (
  <div className="relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[540px]" aria-hidden="true">
    <In delay={0.25} className="absolute left-0 top-4 w-[88%]">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_80px_-30px_rgba(11,21,40,0.45)]">
        <div className="flex items-center gap-1.5 border-b border-line bg-cream px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" /><span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" /><span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[10px] text-ink-3">yourbusiness.in/dashboard</span>
        </div>
        <div className="grid grid-cols-[30%_1fr]">
          <div className="space-y-2 bg-navy p-4">
            <div className="h-2.5 w-3/4 rounded bg-gold-glow" />
            {[70, 55, 80, 60].map((w, i) => <div key={i} className="h-2 rounded bg-white/25" style={{ width: `${w}%` }} />)}
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2">
              {[["Orders", "128"], ["Customers", "1,042"], ["Revenue", "₹2.4L"]].map(([l, v]) => (
                <div key={l} className="rounded-lg border border-line p-2"><p className="text-[9px] text-ink-3">{l}</p><p className="font-display text-sm font-extrabold text-navy">{v}</p></div>
              ))}
            </div>
            <div className="mt-3 flex h-24 items-end gap-1.5 rounded-lg bg-cream p-2">
              {BARS.map((h, i) => <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold to-gold-glow" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
      </div>
    </In>
    <In delay={0.5} className="absolute bottom-0 right-0 w-[40%]">
      <Frame>
        <p className="font-display text-sm font-extrabold">Bookings</p>
        <ul className="mt-3 space-y-2">
          {[["10:00", "Mehta family"], ["12:30", "Site visit"], ["4:00", "Demo call"]].map(([t, n]) => (
            <li key={t} className="flex items-center gap-2 rounded-lg border border-line p-2 text-[10px]"><CalendarCheck className="h-3.5 w-3.5 shrink-0 text-gold" /><span className="font-semibold">{t}</span><span className="truncate text-ink-3">{n}</span></li>
          ))}
        </ul>
        <div className="mt-3 rounded-full bg-navy py-1.5 text-center text-[10px] font-bold text-[#F4E3B0]">+ New booking</div>
      </Frame>
    </In>
    <In delay={0.75} x={-30} y={0} className="absolute bottom-[10%] left-[2%]">
      <Float className="!bg-navy font-mono text-[11px] !text-[#F4E3B0]">
        <div className="flex items-center gap-2"><Code2 className="h-4 w-4" />built for you</div>
        <p className="mt-1 text-white">your workflow → <span className="text-gold-glow">your app</span></p>
      </Float>
    </In>
    <In delay={0.9} className="absolute right-[6%] top-0">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold text-navy"><Check className="h-3.5 w-3.5 text-[#047857]" />Quote before we start</span>
    </In>
  </div>
);
