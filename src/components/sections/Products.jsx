import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";

const PRODUCTS = [
  {
    key: "erp", to: "/jewellery-erp", img: "/img/earrings.jpg", tag: "For jewellery shops",
    name: "CaratCloud", accent: "Jewellery ERP",
    text: "Replaces paper registers, calculators and scheme notebooks. One web app on laptop, tablet and phone, installed from the browser with no Play Store needed.",
    points: ["Bill in under 60 seconds, GST + HUID", "Works offline, syncs later", "Saving schemes & credit ledger", "Your data backed up to your own Google Drive"],
    cta: "Request Demo", msg: "Hi CaratCloud, I would like a demo of the Jewellery ERP.",
  },
  {
    key: "estate", to: "/estate", img: "/img/tower.jpg", tag: "For real estate builders",
    name: "CaratCloud", accent: "Estate",
    text: "A ready-made sales platform for one project: a 3D project website with live flat availability, a lead CRM, cost sheets and booking.",
    points: ["Live tower → floor → flat explorer", "Photoreal 360° walkthroughs", "Every lead in one CRM", "No monthly software fees after handover"],
    cta: "See Demo Project", msg: "Hi CaratCloud, I would like to see the Estate demo project.",
  },
];

const ProductCard = ({ p, flip }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <div ref={ref} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16" data-testid={`product-card-${p.key}`}>
      <Reveal className={flip ? "lg:order-2" : ""}>
        <Link to={p.to} className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy" data-testid={`product-image-link-${p.key}`}>
          <motion.img style={{ y, scale: 1.2 }} src={p.img} alt={`${p.name} ${p.accent}`} className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.25]" />
          <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_45%,transparent,rgba(11,21,40,0.6))]" />
          <span className="placeholder-tag left-4 top-4">Representative photo</span>
          <span className="absolute bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-[#F4E3B0] text-navy transition-transform duration-500 group-hover:rotate-[-45deg]">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </Reveal>
      <div>
        <Reveal><span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">{p.tag}</span></Reveal>
        <Reveal delay={0.06}>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
            {p.name} <em className="font-serif-i font-normal text-gold-deep">{p.accent}</em>
          </h3>
        </Reveal>
        <Reveal delay={0.12}><p className="mt-5 text-base md:text-lg leading-relaxed text-ink-2">{p.text}</p></Reveal>
        <Reveal delay={0.18}>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {p.points.map((t) => (
              <li key={t} className="flex gap-2.5 text-[15px] text-navy">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FDF8EA] text-gold-deep"><Check className="h-3 w-3" /></span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
          <DemoButton testid={`product-${p.key}-demo-button`} label={p.cta} msg={p.msg} />
          <Link to={p.to} className="btn-ghost group" data-testid={`product-${p.key}-explore-link`}>
            Explore all features <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export const Products = () => (
  <section id="products" className="section" data-testid="products-section">
    <SectionHead eyebrow="Products" title="Two products." accent="Built for how you really work." sub="Made for Indian shop owners and builders. Simple to use, quick to set up, and your data always stays yours." />
    <div className="mt-16 space-y-24 sm:space-y-32">
      {PRODUCTS.map((p, i) => <ProductCard key={p.key} p={p} flip={i % 2 === 1} />)}
    </div>
  </section>
);
