import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Eye, Monitor, Smartphone, Check } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { WhatsAppIcon } from "../site/Buttons";
import { TEMPLATES, STOREFRONT } from "@/data/caratcloud";
import { wa, MSG, asset } from "@/lib/site";

const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

// Full-screen live preview in the same tab. The phone/browser Back button, the on-screen Back button and Esc all close it,
// and the page stays exactly where the visitor was scrolling.
const Preview = ({ index, setIndex, onClose }) => {
  const t = TEMPLATES[index];
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  const backRef = useRef(null);

  useEffect(() => { setLoading(true); }, [index]);
  useEffect(() => {
    backRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % TEMPLATES.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + TEMPLATES.length) % TEMPLATES.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, setIndex]);

  const step = (d) => setIndex((i) => (i + d + TEMPLATES.length) % TEMPLATES.length);
  const devBtn = (key, Icon, label) => (
    <button type="button" onClick={() => setDevice(key)} aria-label={label} aria-pressed={device === key}
      className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${device === key ? "bg-[#F4E3B0] text-navy" : "text-[#D5DBE6] hover:text-white"}`}>
      <Icon className="h-4 w-4" />
    </button>
  );

  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col bg-navy" role="dialog" aria-modal="true" aria-label={`Website design ${t.n}: ${t.name}`} data-testid="template-preview" data-lenis-prevent>
      <div className="flex shrink-0 items-center gap-2 border-b border-white/10 px-3 py-2.5 sm:gap-3 sm:px-5">
        <button ref={backRef} type="button" onClick={onClose} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white hover:bg-white/20" data-testid="template-preview-back">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <div className="min-w-0 flex-1 text-white">
          <p className="truncate font-display text-[15px] font-bold leading-tight sm:text-base">{t.n} · {t.name}</p>
          <p className="hidden truncate text-xs text-[#9AA4B8] sm:block">{t.style}</p>
        </div>
        <div className="hidden items-center rounded-full border border-white/15 p-0.5 md:flex">
          {devBtn("desktop", Monitor, "Desktop view")}{devBtn("mobile", Smartphone, "Mobile view")}
        </div>
        <div className="flex items-center">
          <button type="button" onClick={() => step(-1)} aria-label="Previous design" className="grid h-9 w-9 place-items-center rounded-full text-white hover:bg-white/10"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={() => step(1)} aria-label="Next design" className="grid h-9 w-9 place-items-center rounded-full text-white hover:bg-white/10"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <a href={wa(MSG.template(t.n, t.name))} target="_blank" rel="noopener noreferrer" className="btn-gold !px-4 !py-2 text-sm" data-testid="template-preview-want">
          <WhatsAppIcon className="h-4 w-4" /><span className="hidden sm:inline">I want this design</span><span className="sm:hidden">Ask</span>
        </a>
      </div>
      <div className="relative flex-1 overflow-hidden bg-[#0b1528]">
        {loading && <div className="absolute inset-0 grid place-items-center text-sm text-[#9AA4B8]">Loading design {t.n}…</div>}
        <div className={`mx-auto h-full transition-[max-width] duration-300 ${device === "mobile" ? "max-w-[400px] py-4" : "max-w-full"}`}>
          <iframe key={t.slug} src={t.url} title={`Website design ${t.n}: ${t.name}`} onLoad={() => setLoading(false)}
            className={`h-full w-full bg-white ${device === "mobile" ? "rounded-[1.4rem] border-4 border-[#24375e]" : ""}`} />
        </div>
      </div>
    </div>,
    document.body,
  );
};

export const TemplatesSection = () => {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const openAt = (i) => {
    window.history.pushState({ ...(window.history.state || {}), ccTemplate: true }, "");
    setIndex(i);
  };
  const close = useCallback(() => {
    if (window.history.state?.ccTemplate) window.history.back(); // popstate below clears it
    else setIndex(null);
  }, []);

  useEffect(() => {
    const onPop = () => { if (!window.history.state?.ccTemplate) setIndex(null); };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Freeze the page behind the preview so the visitor returns to the same spot
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.__lenis?.stop();
    return () => { document.body.style.overflow = prev; window.__lenis?.start(); };
  }, [open]);

  return (
    <section id="websites" className="section" data-testid="templates-section">
      <SectionHead eyebrow="Storefront websites" title="Your jewellery shop," accent="online in your own name." sub="We also build premium storefront websites for jewellers. Pick a design below, tap it to see the live website, and we make it with your shop's name, photos and designs." />

      <Reveal className="mt-10">
        <div className="flex flex-col gap-5 rounded-[1.6rem] border border-line bg-cream p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid gap-2 sm:grid-cols-2 sm:gap-x-8">
            {STOREFRONT.points.map((p) => <li key={p} className="flex gap-2.5 text-[15px] text-ink-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{p}</li>)}
          </ul>
          <div className="shrink-0 border-t border-line pt-4 lg:border-0 lg:pt-0 lg:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#047857]">Now only</p>
            <p className="font-display text-4xl font-extrabold text-navy">{inr(STOREFRONT.price)}<span className="ml-1 text-sm font-medium text-ink-3">/ month</span></p>
            <p className="text-xs text-ink-3">Free with the Mega Combo · taxes extra</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 3) * 0.06} className="h-full">
            <button type="button" onClick={() => openAt(i)} className="card card-hover group block w-full overflow-hidden text-left" data-testid={`template-card-${t.n}`} aria-label={`Preview website design ${t.n}: ${t.name}`}>
              <div className="flex items-center gap-1.5 border-b border-line bg-[#F7F2E6] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E5B4A8]" /><span className="h-2 w-2 rounded-full bg-[#EAD39A]" /><span className="h-2 w-2 rounded-full bg-[#B9D8B5]" />
                <span className="ml-2 truncate font-mono text-[10px] text-ink-3">yourshop.in</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                <img src={asset(`img/templates/${t.slug}.webp`)} alt={`Website design ${t.name}`} loading="lazy" width="720" height="450"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/45 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy"><Eye className="h-4 w-4" /> Live preview</span>
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="font-display text-lg font-bold text-navy"><span className="mr-2 font-mono text-xs text-gold-deep">{t.n}</span>{t.name}</p>
                  <p className="truncate text-sm text-ink-2">{t.style}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-gold-deep"><Eye className="h-4 w-4" /> View</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 flex flex-wrap items-center gap-4">
        <a href={wa(MSG.storefront)} target="_blank" rel="noopener noreferrer" className="btn-gold" data-testid="templates-enquire">
          <WhatsAppIcon className="h-[18px] w-[18px]" /> Get my shop's website
        </a>
        <p className="text-sm text-ink-3">Every design works on mobile. Your logo, photos, gold rate and WhatsApp are added for you.</p>
      </Reveal>

      {open && <Preview index={index} setIndex={setIndex} onClose={close} />}
    </section>
  );
};
