// SEO for every page: titles, descriptions, structured data and the plain-HTML copy
// that crawlers read before JavaScript runs. Used by the app (per-route <head>) and by
// the build (vite.config.js writes it into each page's index.html).
import { PLANS, SOCIAL, FAQS, PRODUCTS, JOURNEY, FEATURES, FOUNDER, DINE, CUSTOM } from "../data/caratcloud.js";
import { PHONE, PHONE_DISPLAY, EMAIL } from "./site.js";

export const SITE_URL = "https://caratcloudstorefront.vercel.app";
export const OG_IMAGE = "og-image.jpg";

export const PAGES = {
  "/": {
    title: "CaratCloud | Jewellery & Restaurant Software Company, Navi Mumbai",
    description:
      "CaratCloud is a software company in Navi Mumbai. Jewellery billing software in Marathi, Hindi & English from ₹499/month, restaurant software from Jan 2027, and custom software.",
  },
  "/jewellery": {
    title: "Jewellery Billing Software in Marathi & Hindi | CaratCloud",
    description:
      "Jewellery shop software: scan a QR tag and the GST + HUID bill is ready in under a minute. Stock, saving schemes, dues, girvi and old gold. From ₹499 a month.",
    name: "CaratCloud Jewellery",
  },
  "/restaurant-software": {
    title: "Restaurant Billing Software, Launching Jan 2027 | CaratCloud Dine",
    description:
      "CaratCloud Dine: restaurant, hotel and café billing software with kitchen orders, stock and daily sales, in Marathi, Hindi or English. Launching January 2027. Join early access.",
    name: "Restaurant software",
  },
  "/custom-software": {
    title: "Custom Software Development in Navi Mumbai & Panvel | CaratCloud",
    description:
      "Custom software development for small businesses in Navi Mumbai and Panvel: business apps, websites and WhatsApp tools. We meet you, understand your needs, then send a quote.",
    name: "Custom software",
  },
};

const url = (base, path) => base.replace(/\/$/, "") + path;
const inr = (n) => `₹${n.toLocaleString("en-IN")}`;

export function jsonLd(path, base = SITE_URL) {
  const org = {
    "@type": "Organization",
    "@id": url(base, "/#org"),
    name: "CaratCloud",
    description: "Software company in Panvel, Navi Mumbai building simple software for small Indian businesses: jewellery shop software, restaurant software and custom software.",
    knowsAbout: ["Jewellery billing software", "Jewellery ERP", "Restaurant billing software", "Custom software development", "Social media marketing for jewellers"],
    url: url(base, "/"),
    logo: url(base, "/img/brand/logo-full.png"),
    email: EMAIL,
    telephone: `+91${PHONE}`,
    foundingDate: "2025-08",
    address: { "@type": "PostalAddress", addressLocality: "Panvel", addressRegion: "Maharashtra", addressCountry: "IN" },
    areaServed: ["Panvel", "Navi Mumbai", "Maharashtra"],
    founder: { "@type": "Person", name: FOUNDER.name, jobTitle: FOUNDER.role, sameAs: [FOUNDER.linkedin, FOUNDER.portfolio] },
  };
  const app = {
    "@type": "SoftwareApplication",
    "@id": url(base, "/jewellery#app"),
    name: "CaratCloud Jewellery",
    url: url(base, "/jewellery"),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS, Windows",
    inLanguage: ["mr", "hi", "en"],
    description: PRODUCTS[0].text,
    publisher: { "@id": org["@id"] },
    offers: PLANS.map((p) => ({
      "@type": "Offer",
      name: `${p.name} plan (${p.logins})`,
      price: p.price,
      priceCurrency: "INR",
      priceSpecification: { "@type": "UnitPriceSpecification", price: p.price, priceCurrency: "INR", unitText: "MONTH", valueAddedTaxIncluded: false },
    })),
  };
  const graph = [org, { "@type": "WebSite", "@id": url(base, "/#site"), name: "CaratCloud", url: url(base, "/"), publisher: { "@id": org["@id"] } }, app];

  if (path === "/") {
    graph.push({
      "@type": "Service",
      name: "Social media for jewellers",
      serviceType: "Social media management",
      provider: { "@id": org["@id"] },
      areaServed: "Navi Mumbai",
      offers: SOCIAL.map((s) => ({ "@type": "Offer", name: s.name, price: s.price, priceCurrency: "INR" })),
    });
    graph.push({
      "@type": "FAQPage",
      mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    });
  } else {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: url(base, "/") },
        { "@type": "ListItem", position: 2, name: PAGES[path].name, item: url(base, path) },
      ],
    });
  }
  if (path === "/custom-software") {
    graph.push({
      "@type": "Service",
      name: "Custom software development",
      serviceType: "Custom software development",
      provider: { "@id": org["@id"] },
      areaServed: ["Panvel", "Navi Mumbai", "India"],
      description: CUSTOM.services.map((s) => s.title).join(", "),
    });
  }
  const pageFaqs = { "/restaurant-software": DINE.faqs, "/custom-software": CUSTOM.faqs }[path];
  if (pageFaqs) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: pageFaqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const plansHtml = () =>
  `<h2>Prices</h2><ul>${PLANS.map((p) => `<li><strong>${esc(p.name)}</strong>: ${inr(p.price)} a month, ${esc(p.logins)}. ${esc(p.items.join(", "))}.</li>`).join("")}</ul>` +
  `<p>Social media for jewellers: ${SOCIAL.map((s) => `${esc(s.name)} ${inr(s.price)} a month (${esc(s.items.join(", "))})`).join("; ")}. Taxes extra.</p>`;

const contactHtml = () =>
  `<p>Book a free demo: call or WhatsApp <a href="tel:+91${PHONE}">${PHONE_DISPLAY}</a> or email <a href="mailto:${EMAIL}">${EMAIL}</a>. Panvel, Navi Mumbai, Maharashtra.</p>`;

// Plain copy of the page inside #root. React replaces it on load; crawlers and
// AI tools that do not run JavaScript read this instead of an empty div.
const faqHtml = (faqs) => `<h2>Questions</h2><dl>${faqs.map(([q, a]) => `<dt>${esc(q)}</dt><dd>${esc(a)}</dd>`).join("")}</dl>`;
const cardsHtml = (h, cards) => `<h2>${h}</h2><ul>${cards.map((c) => `<li><strong>${esc(c.title)}</strong>: ${esc(c.text)}</li>`).join("")}</ul>`;

export function fallbackHtml(path) {
  if (path === "/restaurant-software") {
    return (
      `<main><h1>Restaurant software, as simple as your menu</h1>` +
      `<p>CaratCloud Dine is billing software for restaurants, hotels and cafés, in Marathi, Hindi or English. It launches in ${DINE.launch}.</p>` +
      cardsHtml("Coming in January 2027: what we are building", DINE.features) + faqHtml(DINE.faqs) + contactHtml() + `<p><a href="/">CaratCloud home</a></p></main>`
    );
  }
  if (path === "/custom-software") {
    return (
      `<main><h1>Custom software made for your business</h1>` +
      `<p>CaratCloud is a software company in Panvel, Navi Mumbai. We build apps and websites around the way your business already works, and support you after launch. To start, reach out on WhatsApp: we meet you, listen to your requirements and then send you a quote.</p>` +
      cardsHtml("What we can build", CUSTOM.services) + `<h2>How we work</h2><ol>${CUSTOM.steps.map((s) => `<li><strong>${esc(s.title)}</strong>. ${esc(s.text)}</li>`).join("")}</ol>` +
      faqHtml(CUSTOM.faqs) + contactHtml() + `<p><a href="/">CaratCloud home</a></p></main>`
    );
  }
  if (path === "/jewellery") {
    return (
      `<main><h1>CaratCloud Jewellery: your whole shop, on one app</h1>` +
      `<p>Bills, stock, saving schemes, dues and girvi for jewellery shops. Scan a tag and the bill is ready in under a minute, in Marathi, Hindi or English, on the phone you already have.</p>` +
      `<h2>How it works</h2><ol>${JOURNEY.map((j) => `<li><strong>${esc(j.title)}</strong>. ${esc(j.text)}</li>`).join("")}</ol>` +
      `<h2>Features</h2><ul>${FEATURES.map((f) => `<li><strong>${esc(f.title)}</strong>: ${esc(f.text)}</li>`).join("")}</ul>` +
      plansHtml() + contactHtml() + `<p><a href="/">CaratCloud home</a></p></main>`
    );
  }
  return (
    `<main><h1>Your shop runs on software, not on notebooks</h1>` +
    `<p>CaratCloud is a software company in Panvel, Navi Mumbai, making simple software for small Indian businesses in their own language.</p>` +
    `<h2>CaratCloud Jewellery: jewellery shop software</h2><p>${esc(PRODUCTS[0].text)} <a href="/jewellery">See CaratCloud Jewellery</a></p>` +
    `<h2>CaratCloud Dine: restaurant software</h2><p>${esc(PRODUCTS[1].text)} <a href="/restaurant-software">Restaurant software</a></p>` +
    `<h2>Custom software</h2><p>Need software made for your own business? We design, build and support apps and websites. <a href="/custom-software">Custom software development</a></p>` +
    plansHtml() + faqHtml(FAQS) +
    `<h2>Founder</h2><p>${esc(FOUNDER.name)}, ${esc(FOUNDER.role)}. ${esc(FOUNDER.since)}.</p>` +
    contactHtml() + `</main>`
  );
}

// <head> tags for one page, written at build time
export function headHtml(path, base = SITE_URL) {
  const p = PAGES[path];
  const canonical = url(base, path);
  const img = url(base, "/" + OG_IMAGE);
  return [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:site_name" content="CaratCloud" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="CaratCloud jewellery billing software" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(p.title)}" />`,
    `<meta name="twitter:description" content="${esc(p.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd(path, base)).replace(/</g, "\\u003c")}</script>`,
  ].join("\n    ");
}

export const robotsTxt = (base = SITE_URL) => `User-agent: *\nAllow: /\n\nSitemap: ${url(base, "/sitemap.xml")}\n`;

export const sitemapXml = (base = SITE_URL, lastmod = new Date().toISOString().slice(0, 10)) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  Object.keys(PAGES).map((p) => `  <url><loc>${url(base, p)}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`;

export const llmsTxt = (base = SITE_URL) =>
  `# CaratCloud\n\n> Software company in Panvel, Navi Mumbai, building simple software for small Indian businesses in Marathi, Hindi and English. ` +
  `Live product: CaratCloud Jewellery (billing, stock, saving schemes, dues and girvi for jewellery shops). ` +
  `Next: CaratCloud Dine, restaurant software launching ${DINE.launch}. Also builds custom software.\n\n` +
  `## Pages\n\n- [Home](${url(base, "/")}): products, prices, founder and FAQ\n- [CaratCloud Jewellery](${url(base, "/jewellery")}): jewellery billing software, step by step\n` +
  `- [Restaurant software](${url(base, "/restaurant-software")}): CaratCloud Dine, launching ${DINE.launch}\n- [Custom software](${url(base, "/custom-software")}): apps and websites built for your business\n\n` +
  `## Prices (monthly, taxes extra)\n\n${PLANS.map((p) => `- ${p.name}: ${inr(p.price)} (${p.logins})`).join("\n")}\n` +
  `${SOCIAL.map((s) => `- ${s.name} social media package: ${inr(s.price)}`).join("\n")}\n\n` +
  `## Contact\n\n- Phone / WhatsApp: ${PHONE_DISPLAY}\n- Email: ${EMAIL}\n- Founder: ${FOUNDER.name}\n`;
