import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingSection, SoftwarePricing } from "@/components/sections/PricingSection";
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
      <SoftwarePricing />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <Founder />
      <Why />
      <Faq />
      <BookDemo />
    </main>
  );
}
