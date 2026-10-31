import { Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { SectionHead, Reveal } from "../site/Motion";
import { WhatsAppIcon } from "../site/Buttons";
import { Phone } from "../site/Phone";
import { PRODUCTS } from "@/data/caratcloud";
import { wa, MSG } from "@/lib/site";

const Live = ({ p }) => (
  <Link to={p.to} className="card card-hover group grid h-full overflow-hidden lg:grid-cols-[1.2fr_1fr]" data-testid={`product-card-${p.key}`}>
    <div className="flex flex-col p-7 sm:p-10">
      <div className="flex items-center gap-3">
        <span className="icon-chip"><p.icon className="h-5 w-5" /></span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#047857]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />Live
        </span>
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">{p.tag}</p>
      <h3 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">{p.name} <em className="font-serif-i font-normal text-gold-deep">{p.accent}</em></h3>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{p.text}</p>
      <ul className="mt-6 grid gap-2.5">
        {p.points.map((t) => <li key={t} className="flex gap-2.5 text-[15px] font-medium text-navy"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{t}</li>)}
      </ul>
      <span className="mt-8 inline-flex items-center gap-2 font-semibold text-navy">
        Explore the app <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
    <div className="relative hidden overflow-hidden bg-cream lg:block">
      <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_65%)]" />
      <div className="absolute left-1/2 top-10 w-[62%] -translate-x-1/2 transition-transform duration-700 group-hover:-translate-y-3">
        <Phone shot="dashboard_en" alt="CaratCloud Jewellery app" />
      </div>
    </div>
  </Link>
);

const Soon = ({ p }) => (
  <div className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-navy bg-navy p-7 sm:p-10 text-white" data-testid={`product-card-${p.key}`}>
    <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.3),transparent_65%)]" />
    <div className="relative flex items-center gap-3">
      <span className="icon-chip !bg-[#F4E3B0] !text-navy"><p.icon className="h-5 w-5" /></span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F4E3B0]/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F4E3B0]">
        <Sparkles className="h-3 w-3" />Coming soon
      </span>
    </div>
    <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[#F4E3B0]/80">{p.tag}</p>
    <h3 className="relative mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">{p.name} <em className="font-serif-i font-normal text-[#F4E3B0]">{p.accent}</em></h3>
    <p className="relative mt-4 text-[15px] leading-relaxed text-[#D5DBE6]">{p.text}</p>
    <a href={wa(MSG.restaurant)} target="_blank" rel="noopener noreferrer" className="btn-gold relative mt-auto self-start !mt-8" data-testid="product-dine-waitlist">
      <WhatsAppIcon className="h-[18px] w-[18px]" /> Get early access
    </a>
  </div>
);

export const ProductsSection = () => (
  <section id="products" className="section" data-testid="products-section">
    <SectionHead eyebrow="Our products" title="Software for the shops" accent="that run India." sub="We build one product at a time, for one kind of business, and make it simple enough for the counter. Jewellery shops are first. Restaurants, hotels and cafés are next." />
    <div className="mt-12 grid gap-5 lg:grid-cols-[1.75fr_1fr]">
      <Reveal className="h-full"><Live p={PRODUCTS[0]} /></Reveal>
      <Reveal delay={0.1} className="h-full"><Soon p={PRODUCTS[1]} /></Reveal>
    </div>
  </section>
);
