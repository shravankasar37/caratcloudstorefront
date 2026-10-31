export const PHONE = "7208124194";
export const PHONE_DISPLAY = "+91 72081 24194";
export const EMAIL = "caratcloud26@gmail.com";
export const ADDRESS = "Panvel, Navi Mumbai, Maharashtra";
export const CALL_LINK = `tel:+91${PHONE}`;
export const MAIL_LINK = `mailto:${EMAIL}`;

// files in /public, served under the site's base path
export const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

// WhatsApp messages each button opens with
export const MSG = {
  demo: "Hi CaratCloud, I have an enquiry about the software demo for my jewellery shop.",
  plan: (name) => `Hi CaratCloud, I have an enquiry about the ${name} plan of the software for my jewellery shop.`,
  social: (name) => `Hi CaratCloud, I have an enquiry about the ${name} social media package for my jewellery shop.`,
  combo: "Hi CaratCloud, I have an enquiry about the social media + software combo for my jewellery shop.",
  referral: "Hi CaratCloud, I want to refer a jewellery shop to you.",
  restaurant: "Hi CaratCloud, I run a restaurant / hotel / café. Please tell me when your software launches.",
  general: "Hi CaratCloud, I have an enquiry.",
};

export const wa = (msg = MSG.demo) => `https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`;

export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "youtube", label: "YouTube", href: "#" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
];

export const NAV = [
  { label: "Products", hash: "products" },
  { label: "Services", hash: "services" },
  { label: "How it works", hash: "how-it-works" },
  { label: "Pricing", hash: "pricing" },
  { label: "Founder", hash: "founder" },
  { label: "FAQ", hash: "faq" },
];

export const scrollToId = (id) => {
  const el = id === "top" ? 0 : document.getElementById(id);
  if (el === null) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84, duration: 1.4 });
  else if (el === 0) window.scrollTo({ top: 0, behavior: "smooth" });
  else el.scrollIntoView({ behavior: "smooth" });
};
