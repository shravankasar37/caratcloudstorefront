import { useMemo, useState } from "react";
import { CalendarDays, Clock, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { WhatsAppIcon } from "../site/Buttons";
import { wa, MSG, CALL_LINK, MAIL_LINK, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/lib/site";

const TIMES = ["11:00 am", "12:30 pm", "3:00 pm", "4:30 pm", "6:00 pm", "7:30 pm"];
const inputCls = "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-navy placeholder:text-ink-3 outline-none transition-[border-color,box-shadow] focus:border-[#C9971C] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]";

const nextDays = () => {
  const out = [];
  const d = new Date();
  for (let i = 1; out.length < 6; i++) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i);
    out.push(x);
  }
  return out;
};

// Pick a day and time, then open WhatsApp with the request already written
export const BookDemo = ({ title = "See CaratCloud", accent = "on your own counter." }) => {
  const days = useMemo(nextDays, []);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(null);
  const [shop, setShop] = useState("");
  const [area, setArea] = useState("");

  const dayLabel = days[day].toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" });
  const msg = [
    MSG.demo,
    shop && `Shop: ${shop}`,
    area && `Area: ${area}`,
    `Preferred time: ${dayLabel}${time ? `, ${time}` : ""}`,
  ].filter(Boolean).join("\n");

  return (
    <section id="book" className="section" data-testid="book-demo-section">
      <SectionHead eyebrow="Free demo" title={title} accent={accent} sub="Pick a day and time. We'll confirm on WhatsApp and come to your shop, or show you on a video call." />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <div className="card p-6 sm:p-9" data-testid="book-demo-form">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep"><CalendarDays className="h-4 w-4" />Pick a day</p>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {days.map((d, i) => (
                <button key={i} type="button" onClick={() => setDay(i)} data-testid={`book-day-${i}`}
                  className={`rounded-2xl border px-2 py-3 text-center transition-colors ${day === i ? "border-navy bg-navy text-[#F4E3B0]" : "border-line bg-paper text-navy hover:border-[#C9971C]"}`}>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider opacity-80">{d.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                  <span className="block font-display text-2xl font-extrabold">{d.getDate()}</span>
                  <span className="block text-[11px] opacity-80">{d.toLocaleDateString("en-IN", { month: "short" })}</span>
                </button>
              ))}
            </div>
            <p className="mt-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep"><Clock className="h-4 w-4" />Pick a time</p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {TIMES.map((t) => (
                <button key={t} type="button" onClick={() => setTime(t)} data-testid={`book-time-${t.replace(/[^0-9a-z]/gi, "")}`}
                  className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${time === t ? "border-navy bg-navy text-[#F4E3B0]" : "border-line bg-paper text-navy hover:border-[#C9971C]"}`}>
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-navy">Shop name <span className="font-normal text-ink-3">(optional)</span>
                <input value={shop} onChange={(e) => setShop(e.target.value)} placeholder="e.g. Shree Jewellers" className={inputCls} data-testid="book-shop" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy">Area <span className="font-normal text-ink-3">(optional)</span>
                <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. Kamothe" className={inputCls} data-testid="book-area" />
              </label>
            </div>
            <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7 w-full justify-center" data-testid="book-demo-submit">
              <WhatsAppIcon className="h-[18px] w-[18px]" /> Book on WhatsApp
            </a>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm text-ink-3"><CheckCircle2 className="h-4 w-4 text-[#10B981]" />Free · no commitment · we reply the same day</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-5">
            <div className="card space-y-6 p-6 sm:p-8" data-testid="contact-card">
              {[[Phone, "Call or WhatsApp", <a key="p" href={CALL_LINK}>{PHONE_DISPLAY}</a>], [Mail, "Email", <a key="m" href={MAIL_LINK}>{EMAIL}</a>], [MapPin, "We visit shops in", ADDRESS]].map(([I, l, v]) => (
                <div key={l} className="flex gap-4">
                  <span className="icon-chip shrink-0"><I className="h-5 w-5" /></span>
                  <div><p className="text-sm text-ink-3">{l}</p><div className="font-semibold text-navy">{v}</div></div>
                </div>
              ))}
            </div>
            <div className="relative flex-1 overflow-hidden rounded-[1.6rem] bg-navy p-7 text-white">
              <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
              <p className="relative font-display text-2xl font-extrabold">What happens in the demo?</p>
              <ul className="relative mt-4 space-y-2.5 text-[15px] text-[#D5DBE6]">
                <li>• We make a real bill with your kind of jewellery</li>
                <li>• We show schemes, dues and stock in your language</li>
                <li>• You get a clear price for your shop, no pressure</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
