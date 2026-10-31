import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { CheckCircle2, ArrowDown, WifiOff, Languages, ScanLine } from "lucide-react";
import { MaskLine } from "../site/Motion";
import { DemoButton, GhostButton } from "../site/Buttons";
import { Phone } from "../site/Phone";
import { scrollToId } from "@/lib/site";

const HeroStage = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const { scrollY } = useScroll();
  const backY = useTransform(scrollY, [0, 700], [0, 60]);
  const cardY = useTransform(scrollY, [0, 700], [0, -50]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="relative mx-auto w-full max-w-[500px] [perspective:1400px]" data-testid="hero-3d-stage">
      <div className="absolute inset-x-6 top-10 bottom-0 rounded-[3rem] bg-[radial-gradient(70%_60%_at_50%_40%,rgba(212,175,55,0.35),transparent_70%)]" />
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative h-[520px] sm:h-[600px]">
        <motion.div style={{ y: backY }} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-0 top-10 w-[46%]">
          <Phone shot="scheme_detail" alt="Saving scheme passbook in CaratCloud" tilt={6} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[14%] top-0 w-[52%]" style={{ translateZ: 40 }}>
          <Phone shot="dashboard_en" alt="CaratCloud home screen with today's collection and gold rates" />
        </motion.div>

        <motion.div style={{ y: cardY, translateZ: 90 }} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 1.1 }}
          className="absolute left-0 sm:-left-2 bottom-24 w-[190px] sm:w-[230px] rounded-2xl border border-line bg-white/95 p-4 shadow-[0_30px_60px_-25px_rgba(11,21,40,0.45)] backdrop-blur"
          data-testid="hero-bill-mockup">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">Bill · 22K gold ring</span>
          <div className="mt-2 space-y-1.5 text-[12px] text-ink-2">
            <div className="flex justify-between"><span>Scan tag</span><span className="font-mono">10.89 g</span></div>
            <div className="flex justify-between"><span>Old gold</span><span className="font-mono">adjusted</span></div>
            <div className="flex justify-between"><span>Paid</span><span className="font-mono">UPI + cash</span></div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#ECFDF5] px-3 py-2 text-[12px] font-semibold text-[#047857]">
            <CheckCircle2 className="h-4 w-4" /> Sent on WhatsApp · 52 sec
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CHIPS = [[ScanLine, "Scan & bill"], [WifiOff, "Works offline"], [Languages, "मराठी · हिंदी · English"]];

export const Hero = () => (
  <section id="top" className="relative overflow-hidden grain" data-testid="hero-section">
    <div className="absolute inset-0 hairline-grid [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)]" />
    <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1.2fr_1fr] lg:pb-24">
      <div>
        <h1 className="font-display font-extrabold tracking-[-0.035em] text-navy leading-[0.95] text-[2.75rem] sm:text-6xl lg:text-[4.1rem] xl:text-[4.6rem]" data-testid="hero-headline">
          <MaskLine delay={0.15}>Your shop runs</MaskLine>
          <MaskLine delay={0.28}>on <em className="font-serif-i font-normal gold-text pr-2">software,</em></MaskLine>
          <MaskLine delay={0.41}>not on <em className="font-serif-i font-normal gold-text pr-2">notebooks.</em></MaskLine>
        </h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-ink-2" data-testid="hero-subtext">
          CaratCloud builds simple software for small Indian businesses, starting with jewellery shops. Bills, stock, saving schemes and dues in one app, in your language, from <span className="font-semibold text-navy">₹499 a month</span>.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mt-9 flex flex-wrap gap-3">
          <DemoButton testid="hero-book-demo-button" />
          <GhostButton testid="hero-see-pricing-button" onClick={() => scrollToId("pricing")}>
            See Pricing <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </GhostButton>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-9 flex flex-wrap gap-2" data-testid="hero-chips">
          {CHIPS.map(([I, t]) => (
            <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-2 text-sm font-semibold text-navy">
              <I className="h-4 w-4 text-gold" />{t}
            </span>
          ))}
        </motion.div>
      </div>
      <HeroStage />
    </div>
  </section>
);
