import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, ScanLine, BadgeIndianRupee, WifiOff, Languages, PiggyBank, Send } from "lucide-react";
import { MaskLine, Reveal, SectionHead } from "@/components/site/Motion";
import { DemoButton, GhostButton } from "@/components/site/Buttons";
import { Phone } from "@/components/site/Phone";
import { SoftwarePlans } from "@/components/sections/PricingSection";
import { BookDemo } from "@/components/sections/BookDemo";
import { Faq } from "@/components/sections/Faq";
import { JOURNEY, FEATURES } from "@/data/caratcloud";
import { asset, scrollToId } from "@/lib/site";

const CHIPS = [[ScanLine, "QR tag scan"], [BadgeIndianRupee, "GST + HUID"], [Send, "WhatsApp bills"], [PiggyBank, "Saving schemes"], [WifiOff, "Works offline"], [Languages, "मराठी · हिंदी · English"]];

const ProductHero = () => (
  <section className="relative overflow-hidden grain" data-testid="jewellery-hero">
    <div className="absolute inset-0 hairline-grid [mask-image:radial-gradient(70%_60%_at_25%_35%,black,transparent)]" />
    <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.28),transparent_65%)]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1.15fr_1fr] lg:pb-24">
      <div>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 hover:text-navy" data-testid="product-back-home"><ArrowLeft className="h-4 w-4" />Home</Link>
        <h1 className="mt-6 font-display text-[2.6rem] sm:text-6xl lg:text-[4.4rem] font-extrabold leading-[0.97] tracking-[-0.03em] text-navy">
          <MaskLine delay={0.12}>Your whole shop,</MaskLine>
          <MaskLine delay={0.24}>on <em className="font-serif-i font-normal gold-text pr-2">one app.</em></MaskLine>
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-ink-2">Bills, stock, saving schemes, dues and girvi for jewellery shops. Scan a tag and the bill is ready in under a minute, in Marathi, Hindi or English, on the phone you already have.</p>
        </Reveal>
        <Reveal delay={0.5} className="mt-9 flex flex-wrap gap-3">
          <DemoButton testid="jewellery-hero-demo" />
          <GhostButton onClick={() => scrollToId("see-it")}>See how it works <ArrowDown className="h-4 w-4" /></GhostButton>
        </Reveal>
        <Reveal delay={0.6} className="mt-8 flex flex-wrap gap-2">
          {CHIPS.map(([I, t]) => <span key={t} className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-3 py-1.5 text-[13px] font-semibold text-navy"><I className="h-3.5 w-3.5 text-gold" />{t}</span>)}
        </Reveal>
      </div>
      <div className="relative mx-auto h-[500px] w-full max-w-[460px] sm:h-[580px]">
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="absolute right-0 top-12 w-[48%]">
          <Phone shot="billview" alt="A finished GST bill in CaratCloud" tilt={5} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="absolute left-[6%] top-0 w-[54%]">
          <Phone shot="bill_customer" alt="Making a new bill in CaratCloud" />
        </motion.div>
      </div>
    </div>
  </section>
);

// Numbered story, each step next to the real screen
const Journey = () => (
  <section id="see-it" className="section" data-testid="jewellery-journey">
    <SectionHead eyebrow="How the counter works" title="One customer, one minute," accent="one clean bill." sub="Follow a sale from the showcase to the customer's WhatsApp, then everything that happens after." align="center" />
    <div className="mt-16 grid gap-16 sm:gap-20">
      {JOURNEY.map((s, i) => (
        <div key={s.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`} data-testid={`journey-step-${i + 1}`}>
          <Reveal>
            <div className="relative">
              <span className="font-display text-[7rem] sm:text-[9rem] font-extrabold leading-none text-navy/[0.06] select-none" aria-hidden="true">0{i + 1}</span>
              <div className="-mt-16 sm:-mt-20">
                <span className="icon-chip"><s.icon className="h-5 w-5" /></span>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Step 0{i + 1}</p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy">{s.title}</h3>
                <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed text-ink-2">{s.text}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-[300px] rounded-[2.5rem] bg-cream px-8 pt-10">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(60%_50%_at_50%_30%,rgba(212,175,55,0.3),transparent_70%)]" />
              <div className="relative h-[380px] overflow-hidden"><Phone shot={s.img} alt={s.title} /></div>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);

const Everything = () => (
  <section className="relative border-y border-line bg-cream" data-testid="jewellery-everything">
    <div className="section">
      <SectionHead eyebrow="What's included" title="Everything the counter needs." accent="Nothing it doesn't." sub="All in the browser of your phone, tablet or computer. Nothing to install from an app store." />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 4) * 0.06} className="h-full">
            <div className="card card-hover h-full p-6" data-testid={`feature-${i}`}>
              <span className="icon-chip"><f.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const SeeItLive = () => (
  <section className="section" data-testid="jewellery-video">
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
      <div>
        <SectionHead eyebrow="See it live" title="The whole app" accent="in 70 seconds." sub="Billing, payments, WhatsApp, stock, schemes, offline mode and the plans, explained in Marathi." />
        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3"><DemoButton label="Book a live demo" /></Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="mx-auto w-full max-w-[330px] rounded-[2.4rem] border border-navy bg-navy p-[8px] shadow-[0_40px_80px_-30px_rgba(11,21,40,0.55)]">
          <video className="block aspect-[9/16] w-full rounded-[1.9rem] bg-navy object-cover" src={asset("video/caratcloud-software-reel.mp4")} poster={asset("video/caratcloud-software-reel.jpg")} controls playsInline preload="none" data-testid="jewellery-reel" />
        </div>
      </Reveal>
    </div>
  </section>
);

const AnyLanguage = () => (
  <section className="relative overflow-hidden border-y border-line bg-navy text-white" data-testid="jewellery-languages">
    <div className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_65%)]" />
    <div className="section relative grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">Your staff work in <em className="font-serif-i font-normal text-[#F4E3B0]">their own language.</em></h2>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-[#D5DBE6]">Switch between मराठी, हिंदी and English in one tap. Each person can pick their own, and bills print in it too. Here is the same home screen in Marathi and English.</p>
      </div>
      <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:gap-6">
        {[["dashboard_mr", "मराठी"], ["dashboard_en", "English"]].map(([s, l], i) => (
          <Reveal key={s} delay={i * 0.1}>
            <Phone shot={s} alt={`CaratCloud in ${l}`} />
            <p className="mt-3 text-center font-semibold text-[#F4E3B0]">{l}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default function JewelleryPage() {
  return (
    <main data-testid="jewellery-page">
      <ProductHero />
      <Journey />
      <Everything />
      <SeeItLive />
      <AnyLanguage />
      <section id="pricing" className="section">
        <SectionHead eyebrow="Pricing" title="Pick a plan." accent="Move up any time." sub="All plans include setup at your counter and staff training. Taxes extra." />
        <SoftwarePlans />
      </section>
      <BookDemo title="See it on your" accent="own counter." />
      <Faq />
    </main>
  );
}
