import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { MaskLine, Eyebrow, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";

export const ProductHero = ({ eyebrow, lines, sub, img, imgAlt, cta, msg, testid, children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 80]);
  return (
    <section className="relative overflow-hidden grain" data-testid={testid}>
      <div className="absolute inset-0 hairline-grid [mask-image:radial-gradient(70%_60%_at_25%_35%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1.1fr_1fr] lg:pb-24">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 hover:text-navy" data-testid="product-back-home"><ArrowLeft className="h-4 w-4" />Home</Link>
          <div className="mt-6"><Eyebrow>{eyebrow}</Eyebrow></div>
          <h1 className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[4.6rem] font-extrabold leading-[0.97] tracking-[-0.03em] text-navy">
            {lines.map((l, i) => <MaskLine key={i} delay={0.12 + i * 0.12}>{l}</MaskLine>)}
          </h1>
          <Reveal delay={0.5}><p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-ink-2">{sub}</p></Reveal>
          <Reveal delay={0.6} className="mt-9 flex flex-wrap gap-3">
            <DemoButton testid={`${testid}-demo-button`} label={cta} msg={msg} />
            {children}
          </Reveal>
        </div>
        <motion.div
          initial={{ clipPath: "inset(0% 0% 100% 0% round 32px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 32px)" }}
          transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-navy sm:aspect-[5/5]"
        >
          <motion.img style={{ y, scale: 1.18 }} src={img} alt={imgAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_40%,transparent,rgba(11,21,40,0.5))]" />
          <span className="placeholder-tag left-4 top-4">Representative photo</span>
        </motion.div>
      </div>
    </section>
  );
};

export const CtaBand = ({ title, accent, cta, msg, testid }) => (
  <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16" data-testid={testid}>
    <Reveal>
      <div className="relative overflow-hidden rounded-[2rem] border border-[#C9971C]/40 bg-[#FDF8EA] p-8 sm:p-14">
        <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
        <h2 className="relative max-w-2xl font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-navy">{title} <em className="font-serif-i font-normal text-gold-deep">{accent}</em></h2>
        <DemoButton testid={`${testid}-button`} label={cta} msg={msg} className="relative mt-8" />
      </div>
    </Reveal>
  </section>
);
