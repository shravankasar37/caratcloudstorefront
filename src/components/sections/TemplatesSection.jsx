import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValueEvent } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Eye, Monitor, Smartphone, Check } from "lucide-react";
import { Reveal } from "../site/Motion";
import { GroupHead } from "./PricingSection";
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

// Opens the full-screen preview with Back-button support; shared by the home scroller and the designs page
const usePreview = () => {
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

  return { openAt, preview: open ? <Preview index={index} setIndex={setIndex} onClose={close} /> : null };
};

const TemplateCard = ({ t, onOpen, className = "w-full" }) => (
  <button type="button" onClick={onOpen} className={`card card-hover group block overflow-hidden text-left ${className}`} data-testid={`template-card-${t.n}`} aria-label={`Preview website design ${t.n}: ${t.name}`}>
    <div className="flex items-center gap-1.5 border-b border-line bg-[#F7F2E6] px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-[#E5B4A8]" /><span className="h-2 w-2 rounded-full bg-[#EAD39A]" /><span className="h-2 w-2 rounded-full bg-[#B9D8B5]" />
      <span className="ml-2 truncate font-mono text-[10px] text-ink-3">yourshop.in</span>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden bg-cream">
      <img src={asset(`img/templates/${t.slug}.webp`)} alt={`Website design ${t.name}`} loading="lazy" width="720" height="450" draggable="false"
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
);

const PriceStrip = () => (
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
);

const Enquire = () => (
  <Reveal className="mt-8 flex flex-wrap items-center gap-4">
    <a href={wa(MSG.storefront)} target="_blank" rel="noopener noreferrer" className="btn-gold" data-testid="templates-enquire">
      <WhatsAppIcon className="h-[18px] w-[18px]" /> Get my shop's website
    </a>
    <p className="text-sm text-ink-3">Every design works on mobile. Your logo, photos, gold rate and WhatsApp are added for you.</p>
  </Reveal>
);

const SHOWN = 5; // designs in the home-page scroller; the 6th card opens the full page
export const DESIGNS_PATH = "/website-designs";

// 6th card: the designs faintly in the background, links to the full page
const ExploreCard = ({ className = "" }) => (
  <Link to={DESIGNS_PATH} className={`group relative block min-h-[320px] overflow-hidden rounded-[1.6rem] border border-navy/15 bg-navy ${className}`} data-testid="templates-explore">
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 gap-1.5 p-1.5 opacity-25 transition-opacity duration-500 group-hover:opacity-35" aria-hidden="true">
      {TEMPLATES.slice(SHOWN).concat(TEMPLATES.slice(0, 2)).map((t) => (
        <img key={t.slug} src={asset(`img/templates/${t.slug}.webp`)} alt="" loading="lazy" draggable="false" className="h-full w-full rounded-md object-cover object-top" />
      ))}
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" aria-hidden="true" />
    <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F4E3B0]">+{TEMPLATES.length - SHOWN} more designs</p>
      <p className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">Explore all <em className="font-serif-i font-normal text-[#E8C46A]">{TEMPLATES.length} designs</em></p>
      <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F4E3B0] px-5 py-2.5 text-sm font-semibold text-navy transition-transform duration-300 group-hover:translate-x-1">
        Explore more templates <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </Link>
);

// Home page: the section pins while you scroll down and the designs slide sideways
const HorizontalScroller = ({ openAt }) => {
  const outerRef = useRef(null);
  const viewRef = useRef(null);
  const trackRef = useRef(null);
  const [dist, setDist] = useState(0);
  const [step, setStep] = useState(1);
  const reduce = useReducedMotion();
  const total = SHOWN + 1;

  useLayoutEffect(() => {
    if (reduce) return undefined;
    const measure = () => {
      if (!trackRef.current || !viewRef.current) return;
      setDist(Math.max(0, trackRef.current.scrollWidth - viewRef.current.clientWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current); ro.observe(viewRef.current);
    return () => ro.disconnect();
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (p) => -p * dist);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  useMotionValueEvent(scrollYProgress, "change", (p) => setStep(Math.min(total, Math.floor(p * total) + 1)));

  const cardW = "w-[80vw] shrink-0 sm:w-[420px] lg:w-[480px]";
  const cards = (
    <>
      {TEMPLATES.slice(0, SHOWN).map((t, i) => (
        <TemplateCard key={t.slug} t={t} onOpen={() => openAt(i)} className={cardW} />
      ))}
      <ExploreCard className={cardW} />
    </>
  );

  if (reduce) {
    return <div className="-mx-5 mt-8 flex gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8" data-testid="templates-scroller">{cards}</div>;
  }

  return (
    <div ref={outerRef} className="relative" style={{ height: `calc(100vh + ${dist}px)` }} data-testid="templates-scroller">
      <div className="sticky top-0 flex h-screen flex-col justify-center pt-16">
        <div ref={viewRef} className="overflow-hidden py-3">
          <motion.div ref={trackRef} style={{ x }} className="flex w-max items-stretch gap-5">
            {cards}
          </motion.div>
        </div>
        <div className="mt-5 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-3">
          <span className="w-16 tabular-nums">{String(step).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <div className="relative h-[2px] flex-1 overflow-hidden rounded bg-line">
            <motion.span style={{ width: bar }} className="absolute inset-y-0 left-0 bg-gold" />
          </div>
          <span className="hidden sm:inline">{step === total ? "Explore all designs" : "Scroll to see designs"}</span>
        </div>
      </div>
    </div>
  );
};

export const TemplatesGroup = () => {
  const { openAt, preview } = usePreview();
  return (
    <div id="websites" className="scroll-mt-24" data-testid="templates-section">
      <GroupHead n="02" title="Premium storefront websites" sub={`${TEMPLATES.length} ready designs · tap a design to see it live`} />
      <Reveal><PriceStrip /></Reveal>
      <HorizontalScroller openAt={openAt} />
      <Enquire />
      {preview}
    </div>
  );
};

// Full page: every design in a grid
export const TemplatesGrid = () => {
  const { openAt, preview } = usePreview();
  return (
    <div data-testid="templates-grid">
      <Reveal><PriceStrip /></Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((t, i) => (
          <Reveal key={t.slug} delay={(i % 3) * 0.06} className="h-full">
            <TemplateCard t={t} onOpen={() => openAt(i)} />
          </Reveal>
        ))}
      </div>
      <Enquire />
      {preview}
    </div>
  );
};
