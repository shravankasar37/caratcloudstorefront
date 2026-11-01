import { TopicPage } from "./TopicPage";
import { DINE } from "@/data/caratcloud";
import { MSG } from "@/lib/site";

export default function RestaurantPage() {
  return (
    <TopicPage
      testid="restaurant-page"
      badge={`CaratCloud Dine · Launching ${DINE.launch}`}
      title="Restaurant software,"
      accent="as simple as your menu."
      intro={`Billing, kitchen orders, stock and daily sales for restaurants, hotels and cafés, in Marathi, Hindi or English. CaratCloud Dine launches in ${DINE.launch}. Join the early-access list and we will set you up first.`}
      msg={MSG.restaurant}
      cta="Join early access"
      cardsTitle="Coming in January 2027:"
      cardsAccent="what we are building."
      cards={DINE.features}
      faqs={DINE.faqs}
    />
  );
}
