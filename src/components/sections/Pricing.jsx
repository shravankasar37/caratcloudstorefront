import { Check, Sparkles, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";
import { SOCIAL_PRICES } from "@/data/products";
import { wa } from "@/lib/site";

const Badge = () => (
  <span className="absolute -top-3 left-7 rounded-full bg-navy px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F4E3B0]" data-testid="most-popular-badge">Most Popular</span>
);

const Points = ({ items }) => (
  <ul className="mt-6 space-y-2.5">
    {items.map((t) => (
      <li key={t} className="flex gap-2.5 text-[15px] text-ink-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{t}</li>
    ))}
  </ul>
);

const Plan = ({ testid, name, price, unit, items, popular, children, delay = 0 }) => (
  <Reveal delay={delay} className="h-full">
    <div className={`card card-hover flex h-full flex-col p-7 ${popular ? "!border-[#C9971C] shadow-[0_24px_60px_-30px_rgba(184,134,11,0.6)]" : ""}`} data-testid={testid}>
      {popular && <Badge />}
      <h4 className="font-display text-xl font-bold text-navy">{name}</h4>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="font-display text-4xl font-extrabold tracking-tight text-navy" data-testid={`${testid}-price`}>{price}</span>
        <span className="text-sm text-ink-3">{unit}</span>
      </p>
      {items && <Points items={items} />}
      <div className="mt-auto pt-7">{children}</div>
    </div>
  </Reveal>
);

const GroupHead = ({ n, title, sub }) => (
  <div className="mb-8 mt-20 flex flex-col gap-2 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-navy"><span className="mr-3 font-mono text-sm text-gold-deep">{n}</span>{title}</h3>
    {sub && <p className="text-sm text-ink-2">{sub}</p>}
  </div>
);

export const Pricing = () => (
  <section id="pricing" className="section" data-testid="pricing-section">
    <SectionHead eyebrow="Pricing" title="Simple prices." accent="No hidden charges." sub="Pay once a year for software, once per project for builders, or monthly for marketing." />

    <GroupHead n="01" title="CaratCloud Jewellery ERP" />
    <Reveal>
      <div className="card overflow-hidden" data-testid="pricing-card-erp">
        <div className="grid lg:grid-cols-[1.3fr_1fr]">
          <div className="p-7 sm:p-10">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">Year 1 licence</span>
            <p className="mt-3 font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-navy" data-testid="pricing-erp-year1">₹20,000</p>
            <Points items={["Setup at your shop", "Stock import", "Staff training", "Bill design with your logo and GSTIN", "12 months of use and support"]} />
          </div>
          <div className="flex flex-col justify-between gap-8 border-t border-line bg-cream p-7 sm:p-10 lg:border-l lg:border-t-0">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold-deep">Year 2 onwards · AMC</span>
              <p className="mt-3 font-display text-4xl font-extrabold text-navy" data-testid="pricing-erp-amc">₹5,000<span className="text-base font-medium text-ink-3"> / year</span></p>
              <p className="mt-3 text-[15px] text-ink-2">Continued use, updates, support, and your data kept for life.</p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#C9971C]/40 bg-white px-3.5 py-1.5 text-sm font-semibold text-navy" data-testid="pricing-erp-ai-addon"><Sparkles className="h-4 w-4 text-gold" />AI Assistant add-on: coming soon</p>
            </div>
            <DemoButton testid="pricing-erp-demo-button" msg="Hi CaratCloud, I want to know more about the Jewellery ERP plan." />
          </div>
        </div>
      </div>
    </Reveal>

    <GroupHead n="02" title="CaratCloud Estate" sub="One-time, per project" />
    <div className="grid gap-5 lg:grid-cols-3">
      <Plan testid="pricing-card-estate-essential" name="Essential" price="₹50,000" unit="one-time" items={["Project website, English + Marathi", "Live unit explorer", "360° walkthroughs", "Lead CRM, site visits, cost sheets", "Booking form and receipt", "Live in about 4 weeks"]}>
        <DemoButton testid="pricing-essential-demo-button" className="w-full justify-center" label="Book a Free Demo" msg="Hi CaratCloud, I'm interested in Estate Essential." />
      </Plan>
      <Plan testid="pricing-card-estate-pro" popular delay={0.08} name="Pro" price="₹75,000" unit="one-time" items={["Everything in Essential", "Broker (channel partner) portal", "Demand letters, collections and TDS tracking", "Buyer portal", "Owner dashboard and reports", "Live in 5 to 6 weeks"]}>
        <DemoButton testid="pricing-pro-demo-button" className="w-full justify-center" label="Book a Free Demo" msg="Hi CaratCloud, I'm interested in Estate Pro." />
      </Plan>
      <Reveal delay={0.16} className="h-full">
        <div className="h-full rounded-[1.6rem] border border-dashed border-[#C9971C]/50 bg-[#FDF8EA] p-7" data-testid="pricing-estate-extras">
          <h4 className="font-display text-xl font-bold text-navy">Good to know</h4>
          <dl className="mt-5 space-y-4 text-[15px]">
            <div className="flex justify-between gap-4"><dt className="text-ink-2">Extra flat type 360° set</dt><dd className="font-semibold text-navy">₹4,000 each</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-ink-2">Optional yearly AMC for updates</dt><dd className="font-semibold text-navy">from ₹10,000</dd></div>
          </dl>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Payment terms</p>
          <div className="mt-3 flex overflow-hidden rounded-full text-center text-xs font-semibold">
            <span className="w-[40%] bg-navy py-2 text-[#F4E3B0]">40% signing</span>
            <span className="w-[40%] bg-[#C9971C] py-2 text-navy">40% staging</span>
            <span className="w-[20%] bg-white py-2 text-navy">20% live</span>
          </div>
          <p className="mt-6 flex gap-2 text-sm text-ink-2"><Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />Not included: domain, ad spend and portal listings, drone shoot.</p>
          <Link to="/estate#compare" className="mt-5 inline-block text-sm font-semibold text-navy underline decoration-gold underline-offset-4" data-testid="pricing-compare-link">Compare Essential vs Pro →</Link>
        </div>
      </Reveal>
    </div>

    <GroupHead n="03" title="Social Media Marketing" sub="Per month · 5 reels per week included" />
    <div className="grid gap-5 md:grid-cols-3">
      {[["starter", "Starter"], ["growth", "Growth"], ["premium", "Premium"]].map(([k, n], i) => (
        <Plan key={k} testid={`pricing-card-social-${k}`} name={n} price={`₹${SOCIAL_PRICES[k]}`} unit="/ month" popular={k === "growth"} delay={i * 0.08}
          items={["5 reels posted every week", "Profile setup and management", "Shoots at your shop"]}>
          <DemoButton testid={`pricing-social-${k}-button`} className="w-full justify-center" label="Talk to us" msg={`Hi CaratCloud, I'm interested in the ${n} social media plan.`} />
        </Plan>
      ))}
    </div>

    <GroupHead n="04" title="Custom websites & 3D walkthroughs" />
    <Reveal>
      <div className="card flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-10" data-testid="pricing-card-custom">
        <p className="max-w-xl text-base md:text-lg text-ink-2">Clinic booking apps, shop websites, 3D floor-plan walkthroughs. Tell us what you need and we'll send a clear quote.</p>
        <a href={wa("Hi CaratCloud, I would like a quote for a custom website / 3D walkthrough.")} target="_blank" rel="noopener noreferrer" className="btn-ghost shrink-0" data-testid="pricing-cta-quote">Get a Quote</a>
      </div>
    </Reveal>
  </section>
);
