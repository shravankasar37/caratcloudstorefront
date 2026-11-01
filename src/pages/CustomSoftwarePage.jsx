import { TopicPage } from "./TopicPage";
import { CustomArt } from "@/components/site/HeroArt";
import { CUSTOM } from "@/data/caratcloud";
import { MSG } from "@/lib/site";

export default function CustomSoftwarePage() {
  return (
    <TopicPage
      testid="custom-page"
      art={<CustomArt />}
      badge="Custom software development · Navi Mumbai"
      title="Software made for"
      accent="your business."
      intro="CaratCloud is a software company in Panvel, Navi Mumbai. We build apps and websites around the way your business already works, and support you after launch. To start, reach out on WhatsApp: we meet you, listen to your requirements and then send you a quote."
      msg={MSG.custom}
      cta="Tell us your idea"
      cardsTitle="What we"
      cardsAccent="can build."
      cards={CUSTOM.services}
      steps={CUSTOM.steps}
      faqs={CUSTOM.faqs}
    />
  );
}
