import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { TemplatesGrid } from "@/components/sections/TemplatesSection";
import { TEMPLATES } from "@/data/caratcloud";

export default function WebsiteDesignsPage() {
  return (
    <main className="section !pt-32 sm:!pt-40" data-testid="website-designs-page">
      <Link to="/#websites" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-2 hover:text-navy"><ArrowLeft className="h-4 w-4" />Home</Link>
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-gold-deep">Premium storefront websites</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
        All {TEMPLATES.length} website designs <em className="font-serif-i font-normal text-gold-deep">for jewellers.</em>
      </h1>
      <p className="mt-5 mb-10 max-w-2xl text-base leading-relaxed text-ink-2 md:text-lg">Tap any design to see it live. Pick the one you like and we make it in your shop's name.</p>
      <TemplatesGrid />
    </main>
  );
}
