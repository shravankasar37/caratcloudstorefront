export const PHONE = "7208124194";
export const PHONE_DISPLAY = "+91 72081 24194";
export const EMAIL = "[email — to be added]";
export const ADDRESS = "Kamothe, Navi Mumbai, Maharashtra";
export const CALL_LINK = `tel:+91${PHONE}`;

export const wa = (msg = "Hi CaratCloud, I would like to book a free demo.") =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`;

export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: "#" },
  { key: "facebook", label: "Facebook", href: "#" },
  { key: "youtube", label: "YouTube", href: "#" },
  { key: "linkedin", label: "LinkedIn", href: "#" },
];

export const NAV = [
  { label: "Home", hash: "top" },
  { label: "Products", hash: "products" },
  { label: "Services", hash: "services" },
  { label: "How We Work", hash: "how-we-work" },
  { label: "Pricing", hash: "pricing" },
  { label: "Why CaratCloud", hash: "why" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export const scrollToId = (id) => {
  const el = id === "top" ? 0 : document.getElementById(id);
  if (el === null) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -84, duration: 1.4 });
  else if (el === 0) window.scrollTo({ top: 0, behavior: "smooth" });
  else el.scrollIntoView({ behavior: "smooth" });
};
