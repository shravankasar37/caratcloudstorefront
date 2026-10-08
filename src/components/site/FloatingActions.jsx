import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Buttons";
import { wa, CALL_LINK } from "@/lib/site";

export const FloatingActions = () => (
  <>
    <div className="fixed right-4 bottom-24 sm:bottom-6 z-40 flex flex-col gap-3" data-testid="floating-actions">
      <motion.a
        href={CALL_LINK}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        data-testid="floating-call-btn"
        aria-label="Call CaratCloud"
        className="grid h-12 w-12 place-items-center rounded-full bg-navy text-[#F4E3B0] shadow-[0_10px_30px_-8px_rgba(11,21,40,0.6)]"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
      <motion.a
        href={wa()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        data-testid="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#1FAF54] text-white shadow-[0_12px_30px_-8px_rgba(31,175,84,0.7)]"
      >
        <span className="absolute inset-0 rounded-full bg-[#1FAF54] animate-ping-slow" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </motion.a>
    </div>
    <div
      className="fixed inset-x-0 bottom-0 z-40 sm:hidden border-t border-line bg-paper/95 backdrop-blur-md px-4 py-3 flex items-center gap-3"
      data-testid="mobile-sticky-cta"
    >
      <a href={CALL_LINK} data-testid="mobile-sticky-call" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line bg-white text-navy">
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={wa()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobile-sticky-book-demo"
        className="btn-gold flex-1 justify-center"
      >
        <WhatsAppIcon className="h-[18px] w-[18px]" /> Book Demo
      </a>
    </div>
  </>
);
