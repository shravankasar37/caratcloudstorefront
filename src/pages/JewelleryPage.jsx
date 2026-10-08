import { Laptop, Tablet, Smartphone } from "lucide-react";
import { ProductHero, CtaBand } from "@/components/product/ProductHero";
import { FeatureBento } from "@/components/product/FeatureBento";
import { BillIn60 } from "@/components/product/BillIn60";
import { SectionHead, Reveal } from "@/components/site/Motion";
import { GhostButton } from "@/components/site/Buttons";
import { ERP_FEATURES } from "@/data/products";

const MSG = "Hi CaratCloud, I would like a demo of the Jewellery ERP for my shop.";

export default function JewelleryPage() {
  return (
    <main data-testid="jewellery-erp-page">
      <ProductHero
        testid="erp-hero"
        eyebrow="CaratCloud Jewellery ERP"
        lines={["Your whole shop,", "in one app."]}
        sub="Made for small Indian jewellery shops. Replace paper registers, calculators and scheme notebooks with one simple app that runs on your laptop, tablet and phone."
        img="/img/jewellery-set.jpg"
        imgAlt="Gold jewellery set displayed in a shop"
        cta="Request Demo"
        msg={MSG}
      >
        <GhostButton testid="erp-hero-features-button" href="#features">See features</GhostButton>
      </ProductHero>

      <section className="border-y border-line bg-cream" data-testid="erp-devices-strip">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-display text-xl sm:text-2xl font-bold text-navy">One web app. Install it from the browser, <em className="font-serif-i font-normal text-gold-deep">no Play Store needed.</em></p>
          <div className="flex gap-3">
            {[[Laptop, "Laptop"], [Tablet, "Tablet"], [Smartphone, "Phone"]].map(([I, t]) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy"><I className="h-4 w-4 text-gold" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <SectionHead eyebrow="Features" title="Everything your counter needs." accent="Nothing it doesn't." />
        <div className="mt-12"><FeatureBento features={ERP_FEATURES} testid="jewellery-feature-bento" /></div>
      </section>

      <section className="section !pt-0" data-testid="erp-bill-section">
        <SectionHead eyebrow="Bill in 60 seconds" title="Three taps from" accent="tag to WhatsApp." sub="Tap a step to see how a bill comes together at the counter." />
        <Reveal className="mt-12"><BillIn60 /></Reveal>
      </section>

      <CtaBand testid="erp-cta" title="See it on your own counter." accent="Free demo." cta="Request Demo" msg={MSG} />
    </main>
  );
}
