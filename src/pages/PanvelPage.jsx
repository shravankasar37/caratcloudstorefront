import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { TopicPage } from "./TopicPage";
import { Reveal, SectionHead } from "@/components/site/Motion";
import { SoftwarePlans } from "@/components/sections/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PANVEL } from "@/data/caratcloud";
import { asset, MSG } from "@/lib/site";

const Art = () => (
  <Reveal delay={0.3}>
    <figure className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-[0_40px_80px_-40px_rgba(11,21,40,0.45)]">
      <img src={asset("img/app/dashboard_mr.webp")} alt="CaratCloud jewellery software dashboard in Marathi" className="w-full rounded-[1.4rem]" />
      <figcaption className="px-2 pb-1 pt-3 text-center text-sm text-ink-2">CaratCloud dashboard in Marathi</figcaption>
    </figure>
  </Reveal>
);

// Local landing page for "jewellery software in Panvel" searches
export default function PanvelPage() {
  return (
    <TopicPage
      testid="panvel-page"
      art={<Art />}
      badge="Jewellery software · Panvel, Navi Mumbai"
      title="Jewellery software"
      accent="made in Panvel."
      intro="CaratCloud is jewellery billing software from Panvel for jewellers in Panvel, Kamothe, Kharghar, Kalamboli, Taloja and across Navi Mumbai. GST + HUID bills in under a minute, stock, saving schemes, dues and girvi, in Marathi, Hindi or English. We give the demo at your shop and support you locally, from ₹499 a month."
      msg={MSG.demo}
      cta="Book a free demo at your shop"
      cardsTitle="Why Panvel jewellers"
      cardsAccent="choose CaratCloud."
      cards={PANVEL.reasons}
      steps={PANVEL.steps}
      faqs={PANVEL.faqs}
    >
      <Testimonials />
      <section className="section">
        <SoftwarePlans first />
      </section>
      <section className="section pt-0">
        <SectionHead title="Areas we" accent="visit." />
        <ul className="mt-8 flex flex-wrap gap-2.5" data-testid="panvel-areas">
          {PANVEL.areas.map((a) => (
            <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[15px] font-medium text-navy"><MapPin className="h-4 w-4 text-gold-deep" />{a}</li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-2">
          Outside these areas? We also work with jewellers anywhere in India online. See the full <Link to="/jewellery" className="font-semibold text-navy underline underline-offset-4">CaratCloud Jewellery features</Link> or our <Link to="/website-designs" className="font-semibold text-navy underline underline-offset-4">website designs for jewellers</Link>.
        </p>
      </section>
    </TopicPage>
  );
}
