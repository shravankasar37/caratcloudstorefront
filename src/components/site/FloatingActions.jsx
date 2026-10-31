import { useEffect, useState } from "react";
import { Phone, X, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "./Buttons";
import { wa, CALL_LINK } from "@/lib/site";

// "Have a look around" bar: shows after the visitor scrolls a little, can be closed
const LookAround = () => {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && !closed && (
        <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-line bg-white/95 p-3 pl-4 shadow-[0_20px_50px_-20px_rgba(11,21,40,0.45)] backdrop-blur-md sm:bottom-5"
          data-testid="look-around-bar">
          <p className="flex-1 text-sm leading-snug text-ink-2"><span className="font-semibold text-navy">Have a look around.</span> When you're ready, book a free demo.</p>
          <a href={CALL_LINK} aria-label="Call CaratCloud" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-navy sm:hidden"><Phone className="h-4 w-4" /></a>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0 !px-4 !py-2.5 !text-sm" data-testid="look-around-book">
            <CalendarDays className="h-4 w-4" />Book
          </a>
          <button type="button" onClick={() => setClosed(true)} aria-label="Close" className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink-3 hover:bg-cream"><X className="h-4 w-4" /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const FloatingActions = () => (
  <>
    <div className="fixed right-4 bottom-24 z-40 hidden flex-col gap-3 sm:flex" data-testid="floating-actions">
      <motion.a href={CALL_LINK} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} data-testid="floating-call-btn" aria-label="Call CaratCloud"
        className="grid h-12 w-12 place-items-center rounded-full bg-navy text-[#F4E3B0] shadow-[0_10px_30px_-8px_rgba(11,21,40,0.6)]">
        <Phone className="h-5 w-5" />
      </motion.a>
      <motion.a href={wa()} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} data-testid="floating-whatsapp-btn" aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#1FAF54] text-white shadow-[0_12px_30px_-8px_rgba(31,175,84,0.7)]">
        <span className="absolute inset-0 rounded-full bg-[#1FAF54] animate-ping-slow" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </motion.a>
    </div>
    <LookAround />
  </>
);
