import { Link } from "react-router-dom";
import { ProductHero, CtaBand } from "@/components/product/ProductHero";
import { FeatureBento } from "@/components/product/FeatureBento";
import { UnitExplorer } from "@/components/product/UnitExplorer";
import { CompareTable } from "@/components/product/CompareTable";
import { SectionHead, Reveal } from "@/components/site/Motion";
import { DemoButton, GhostButton } from "@/components/site/Buttons";
import { ESTATE_FEATURES } from "@/data/products";

const MSG = "Hi CaratCloud, I would like to see the Estate demo project.";

export default function EstatePage() {
  return (
    <main data-testid="estate-page">
      <ProductHero
        testid="estate-hero"
        eyebrow="CaratCloud Estate · for builders"
        lines={["Sell every flat", "from one screen."]}
        sub="A ready-made sales platform for one real estate project: a 3D project website with live flat availability, a lead CRM, cost sheets and booking."
        img="/img/towers.jpg"
        imgAlt="Residential towers under construction"
        cta="See Demo Project"
        msg={MSG}
      >
        <GhostButton testid="estate-hero-compare-button" href="#compare">Essential vs Pro</GhostButton>
      </ProductHero>

      <section className="section" data-testid="estate-explorer-section">
        <SectionHead eyebrow="Live unit explorer" title="Tower, floor, flat." accent="Always up to date." sub="Try it: pick a tower, filter by BHK, facing or budget, and tap a flat. Green is available, amber on hold, red booked, grey not yet released." />
        <Reveal className="mt-12"><UnitExplorer /></Reveal>
      </section>

      <section id="features" className="section !pt-0">
        <SectionHead eyebrow="Features" title="Your project's full" accent="sales office, online." />
        <div className="mt-12"><FeatureBento features={ESTATE_FEATURES} testid="estate-feature-bento" /></div>
      </section>

      <section id="compare" className="section !pt-0" data-testid="estate-compare-section">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead eyebrow="Essential vs Pro" title="Pick what your" accent="project needs." sub="One-time price per project. Extra flat type 360° set: ₹4,000 each." />
          <Link to="/#pricing" className="text-sm font-semibold text-navy underline decoration-gold underline-offset-4" data-testid="estate-full-pricing-link">See full pricing →</Link>
        </div>
        <Reveal className="mt-10"><CompareTable /></Reveal>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <DemoButton testid="estate-compare-demo-button" label="See Demo Project" msg={MSG} />
          <GhostButton testid="estate-compare-call-button" href="tel:+917208124194">Call us</GhostButton>
        </Reveal>
      </section>

      <CtaBand testid="estate-cta" title="Walk through a live demo project," accent="on your phone." cta="See Demo Project" msg={MSG} />
    </main>
  );
}
