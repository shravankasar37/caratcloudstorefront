import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div" }) => {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </M>
  );
};

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden pb-[0.08em] ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "105%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

export const Eyebrow = ({ children, className = "" }) => (
  <span className={`eyebrow ${className}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
    {children}
  </span>
);

export const SectionHead = ({ eyebrow, title, accent, sub, align = "left", testid }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`} data-testid={testid}>
    <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-[1.05]">
        {title} {accent && <em className="font-serif-i font-normal text-gold-deep">{accent}</em>}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className="mt-5 text-base md:text-lg text-ink-2 leading-relaxed">{sub}</p>
      </Reveal>
    )}
  </div>
);
