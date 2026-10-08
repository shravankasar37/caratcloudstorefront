import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { Gem, CheckCircle2, ArrowDown } from "lucide-react";
import { MaskLine, Eyebrow } from "../site/Motion";
import { DemoButton, GhostButton } from "../site/Buttons";
import { scrollToId } from "@/lib/site";

const UNIT_COLORS = ["#10B981", "#10B981", "#F59E0B", "#EF4444", "#10B981", "#94A3B8", "#EF4444", "#10B981", "#10B981", "#EF4444", "#F59E0B", "#10B981"];

const HeroStage = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 90]);
  const cardY = useTransform(scrollY, [0, 700], [0, -60]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="relative mx-auto w-full max-w-[520px] [perspective:1400px]" data-testid="hero-3d-stage">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative aspect-[4/5]">
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0% round 999px 999px 32px 32px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 999px 999px 32px 32px)" }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 overflow-hidden bg-navy"
        >
          <motion.img style={{ y: imgY, scale: 1.18 }} src="/img/necklace.jpg" alt="Gold necklace and earrings, representing a jewellery shop" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,transparent,rgba(11,21,40,0.55))]" />
          <span className="placeholder-tag left-4 bottom-4">Representative photo</span>
        </motion.div>

        <motion.div
          style={{ y: cardY, translateZ: 80 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="absolute left-2 sm:-left-12 top-[10%] w-[180px] sm:w-[240px] rounded-2xl border border-line bg-white/95 p-4 shadow-[0_30px_60px_-25px_rgba(11,21,40,0.45)] backdrop-blur"
          data-testid="hero-bill-mockup"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">Tax invoice · mockup</span>
            <Gem className="h-4 w-4 text-gold" />
          </div>
          <p className="mt-3 font-display text-lg font-bold text-navy">22K Gold Ring</p>
          <div className="mt-2 space-y-1.5 text-[12px] text-ink-2">
            <div className="flex justify-between"><span>HUID</span><span className="font-mono">AB12CD</span></div>
            <div className="flex justify-between"><span>Old gold</span><span className="font-mono">adjusted</span></div>
            <div className="flex justify-between"><span>Payment</span><span className="font-mono">UPI + cash</span></div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#ECFDF5] px-3 py-2 text-[12px] font-semibold text-[#047857]">
            <CheckCircle2 className="h-4 w-4" /> Sent on WhatsApp · 52 sec
          </div>
        </motion.div>

        <motion.div
          style={{ translateZ: 120 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45 }}
          className="absolute right-2 sm:-right-10 bottom-[14%] w-[160px] sm:w-[220px] rounded-2xl border border-line bg-white/95 p-4 shadow-[0_30px_60px_-25px_rgba(11,21,40,0.45)] backdrop-blur"
          data-testid="hero-units-mockup"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">Tower A · Floor 7</span>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {UNIT_COLORS.map((c, i) => (
              <motion.span key={i} className="h-6 rounded-md" style={{ background: c }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 + i * 0.04 }} />
            ))}
          </div>
          <p className="mt-3 text-[12px] font-semibold text-navy">Live flat availability</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Hero = () => (
  <section id="top" className="relative overflow-hidden grain" data-testid="hero-section">
    <div className="absolute inset-0 hairline-grid [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)]" />
    <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 pt-32 pb-20 sm:pt-40 lg:grid-cols-[1.3fr_1fr] lg:pb-28">
      <div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Eyebrow>Software + marketing · Navi Mumbai</Eyebrow>
        </motion.div>
        <h1 className="mt-7 font-display font-extrabold tracking-[-0.035em] text-navy leading-[0.95] text-[2.75rem] sm:text-6xl lg:text-[4.1rem] xl:text-[4.75rem]" data-testid="hero-headline">
          <MaskLine delay={0.15}>Run your business</MaskLine>
          <MaskLine delay={0.28}>on <em className="font-serif-i font-normal gold-text pr-2">software.</em></MaskLine>
          <MaskLine delay={0.41}>Grow it with</MaskLine>
          <MaskLine delay={0.54}><em className="font-serif-i font-normal gold-text pr-2">content.</em></MaskLine>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-ink-2"
          data-testid="hero-subtext"
        >
          Ready-to-use software and social media marketing for jewellers and real estate builders, from one local team. Run your shop or project smoothly, and grow online without juggling five vendors.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mt-9 flex flex-wrap gap-3">
          <DemoButton testid="hero-book-demo-button" />
          <GhostButton testid="hero-see-pricing-button" onClick={() => scrollToId("pricing")}>
            See Pricing <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </GhostButton>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-10 flex items-center gap-3" data-testid="hero-trust-line">
          <span className="flex -space-x-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className="grid h-8 w-8 place-items-center rounded-full border-2 border-paper bg-navy text-[#F4E3B0]">
                <Gem className="h-3.5 w-3.5" />
              </span>
            ))}
          </span>
          <p className="text-sm font-medium text-ink-2">
            Trusted by <span className="font-semibold text-navy">5 jewellery shops</span> on annual contracts
          </p>
        </motion.div>
      </div>
      <HeroStage />
    </div>
  </section>
);
