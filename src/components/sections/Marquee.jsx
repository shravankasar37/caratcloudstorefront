const ITEMS = [
  ["Jewellery ERP", false], ["Builder sales platform", true], ["Reels shot at your shop", false],
  ["GST · HUID · MahaRERA", true], ["Works offline", false], ["One local team", true], ["Kamothe, Navi Mumbai", false],
];

const Row = ({ hidden }) => (
  <div className="flex shrink-0 items-center" aria-hidden={hidden}>
    {ITEMS.map(([t, serif], i) => (
      <span key={i} className="flex items-center">
        <span className={`px-8 whitespace-nowrap text-4xl sm:text-6xl ${serif ? "font-serif-i text-gold-deep" : "font-display font-extrabold tracking-tight text-navy"}`}>{t}</span>
        <svg viewBox="0 0 20 20" className="h-5 w-5 text-gold" fill="currentColor"><path d="M10 0l2.6 7.4L20 10l-7.4 2.6L10 20l-2.6-7.4L0 10l7.4-2.6z" /></svg>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <div className="marquee-wrap relative overflow-hidden border-y border-line bg-cream py-8 sm:py-10" data-testid="editorial-marquee">
    <div className="marquee-track flex w-max">
      <Row />
      <Row hidden />
    </div>
  </div>
);
