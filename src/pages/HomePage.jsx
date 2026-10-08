import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Pricing } from "@/components/sections/Pricing";
import { Why } from "@/components/sections/Why";
import { Faq } from "@/components/sections/Faq";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Marquee />
      <Products />
      <Services />
      <HowWeWork />
      <Pricing />
      <Why />
      <Faq />
      <About />
      <Contact />
    </main>
  );
}
