import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { SectionHead, Reveal } from "../site/Motion";
import { DemoButton } from "../site/Buttons";
import { FAQS } from "@/data/content";

export const Faq = () => (
  <section id="faq" className="relative border-y border-line bg-cream" data-testid="faq-section">
    <div className="section grid gap-12 lg:grid-cols-[1fr_1.4fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHead eyebrow="FAQ" title="Questions," accent="answered simply." sub="Still unsure? Message us on WhatsApp and we'll explain it on a call." />
        <Reveal delay={0.2} className="mt-8"><DemoButton testid="faq-demo-button" /></Reveal>
      </div>
      <Reveal>
        <Accordion type="single" collapsible className="rounded-[1.6rem] border border-line bg-white px-5 sm:px-8" data-testid="faq-accordion">
          {FAQS.map(([q, a], i) => (
            <AccordionItem key={i} value={`q${i}`} className="border-line last:border-0">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold text-navy hover:no-underline" data-testid={`faq-question-${i}`}>{q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-ink-2" data-testid={`faq-answer-${i}`}>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
