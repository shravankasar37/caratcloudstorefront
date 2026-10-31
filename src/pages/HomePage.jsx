import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingSection } from "@/components/sections/PricingSection";
import { Founder } from "@/components/sections/Founder";
import { Why } from "@/components/sections/Why";
import { Faq } from "@/components/sections/Faq";
import { BookDemo } from "@/components/sections/BookDemo";

export default function HomePage() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Marquee />
      <ProductsSection />
      <ServicesSection />
      <HowItWorks />
      <PricingSection />
      <Founder />
      <Why />
      <Faq />
      <BookDemo />
    </main>
  );
}
