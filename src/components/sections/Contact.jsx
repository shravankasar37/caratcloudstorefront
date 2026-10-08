import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Loader2, Send } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { WhatsAppIcon } from "../site/Buttons";
import { wa, CALL_LINK, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/lib/site";

const TYPES = ["Jeweller", "Builder", "Clinic", "Other"];
const API = process.env.REACT_APP_BACKEND_URL;
const EMPTY = { name: "", phone: "", business_type: "Jeweller", message: "" };
const inputCls = "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-navy placeholder:text-ink-3 outline-none transition-[border-color,box-shadow] focus:border-[#C9971C] focus:shadow-[0_0_0_4px_rgba(212,175,55,0.18)]";

const ContactForm = () => {
  const [f, setF] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!/^[0-9+\s-]{10,15}$/.test(f.phone.trim())) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    if (!API) {
      window.open(wa(`Hi CaratCloud, I'm ${f.name} (${f.business_type}). ${f.message}`), "_blank");
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/api/contact`, f);
      toast.success("Thank you! We'll call you back shortly.");
      setF(EMPTY);
    } catch {
      toast.error("Could not send right now. Please message us on WhatsApp.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="card p-6 sm:p-9" data-testid="contact-form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">Name
          <input required value={f.name} onChange={set("name")} placeholder="Your name" className={inputCls} data-testid="contact-form-name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">Phone
          <input required type="tel" value={f.phone} onChange={set("phone")} placeholder="10-digit mobile" className={inputCls} data-testid="contact-form-phone" />
        </label>
      </div>
      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-navy">Business type</legend>
        <div className="mt-2 flex flex-wrap gap-2" data-testid="contact-form-business-type">
          {TYPES.map((t) => (
            <button type="button" key={t} onClick={() => setF({ ...f, business_type: t })} data-testid={`contact-type-${t.toLowerCase()}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${f.business_type === t ? "border-navy bg-navy text-[#F4E3B0]" : "border-line bg-paper text-navy hover:border-[#C9971C]"}`}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-navy">Message
        <textarea rows={4} value={f.message} onChange={set("message")} placeholder="Tell us a little about your business" className={inputCls} data-testid="contact-form-message" />
      </label>
      <button type="submit" disabled={busy} className="btn-gold mt-6 w-full justify-center disabled:opacity-70" data-testid="contact-form-submit">
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Send message
      </button>
    </form>
  );
};

const Info = ({ icon: I, label, children }) => (
  <div className="flex gap-4">
    <span className="icon-chip shrink-0"><I className="h-5 w-5" /></span>
    <div><p className="text-sm text-ink-3">{label}</p><div className="font-semibold text-navy">{children}</div></div>
  </div>
);

export const Contact = () => (
  <section id="contact" className="section" data-testid="contact-section">
    <SectionHead eyebrow="Contact" title="Let's talk about" accent="your business." sub="Leave your number and we'll call you back, or message us directly on WhatsApp." />
    <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_1fr]">
      <Reveal><ContactForm /></Reveal>
      <Reveal delay={0.1}>
        <div className="flex h-full flex-col gap-6">
          <div className="card space-y-6 p-6 sm:p-8">
            <Info icon={Phone} label="Phone"><a href={CALL_LINK} data-testid="contact-phone">{PHONE_DISPLAY}</a></Info>
            <Info icon={Mail} label="Email"><span data-testid="contact-email">{EMAIL}</span></Info>
            <Info icon={MapPin} label="Address"><span data-testid="contact-address">{ADDRESS}</span></Info>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1FAF54] px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5" data-testid="contact-whatsapp-button">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
          <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-[1.6rem] border border-line" data-testid="kamothe-map-embed">
            <iframe title="CaratCloud location, Kamothe, Navi Mumbai" src="https://www.google.com/maps?q=Kamothe,+Navi+Mumbai,+Maharashtra&output=embed" className="absolute inset-0 h-full w-full grayscale-[30%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
