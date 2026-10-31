// All site copy and prices in one place. Prices follow the CaratCloud price list (taxes extra).
import {
  ScanLine, Coins, Send, PiggyBank, ClipboardCheck, Wallet, WifiOff, Languages, Tags, Users, FileSpreadsheet,
  Landmark, PackageCheck, Scale, ShieldCheck, Printer, Presentation, Store, GraduationCap, LifeBuoy,
  Camera, Clapperboard, CalendarHeart, Gem, UtensilsCrossed,
} from "lucide-react";

export const PRODUCTS = [
  {
    key: "jewellery", status: "live", icon: Gem, to: "/jewellery",
    tag: "For jewellery shops", name: "CaratCloud", accent: "Jewellery",
    text: "Billing, stock, saving schemes, dues and girvi in one simple app, in Marathi, Hindi or English. Works on any phone, tablet or computer, even without internet.",
    points: ["Bill in under a minute", "GST + HUID ready", "WhatsApp bills & passbooks"],
    img: "img/app/dashboard_en.webp",
  },
  {
    key: "dine", status: "soon", icon: UtensilsCrossed,
    tag: "For restaurants, hotels & cafés", name: "CaratCloud", accent: "Dine",
    text: "Our next product, for food businesses. We are working on it now. Join the early-access list and we will tell you first when it is ready.",
  },
];

// Numbered walk-through of the jewellery app (each step shows a real screen)
export const JOURNEY = [
  { icon: ScanLine, title: "Scan the tag, the bill fills itself", img: "bill_items",
    text: "Print a QR label for every piece. Scan it with the phone camera and the weight, purity, today's rate, making charge (% or ₹ per gram), GST and HUID are filled in. No separate scanner machine." },
  { icon: Coins, title: "Old gold, cash and UPI in one bill", img: "bill_bottom",
    text: "Take old gold in exchange, split the payment across cash, UPI and card, and save any balance with a due date. It all goes on one GST bill or estimate." },
  { icon: Send, title: "Print it, or send it on WhatsApp", img: "billview",
    text: "Print two copies on A4 or thermal paper with your shop's name and GSTIN, or send the bill as a PDF to the customer's WhatsApp in one tap." },
  { icon: PiggyBank, title: "Saving schemes without the notebook", img: "scheme_detail",
    text: "Open unlimited schemes. Every instalment is saved, and the customer gets a PIN-protected passbook link on WhatsApp, with reminders for the next payment." },
  { icon: ClipboardCheck, title: "Stock you can trust", img: "stock",
    text: "Live stock in pieces and grams. Import your old stock from Excel, then scan every piece in a stock check to see exactly what is missing." },
  { icon: Landmark, title: "Girvi, orders and old gold stock", img: "girvi",
    text: "Pledge loans with interest worked out, custom orders with a locked rate, and an old gold register, in the Plus plan." },
];

export const FEATURES = [
  { icon: WifiOff, title: "Works without internet", text: "Billing, scanning and printing keep going. Everything syncs when you are back online." },
  { icon: Languages, title: "Marathi, Hindi, English", text: "Switch the whole app and the bills to your language in one tap." },
  { icon: Wallet, title: "Dues with due dates", text: "Every rupee owed, with a polite WhatsApp reminder in one tap." },
  { icon: Tags, title: "QR & barcode labels", text: "Print labels for every piece and scan them with the phone camera." },
  { icon: Users, title: "Staff logins", text: "Give staff their own login. The owner decides who can do what." },
  { icon: FileSpreadsheet, title: "Ready for your CA", text: "Audit reports, GSTR-1 and Tally files when your CA asks." },
  { icon: ShieldCheck, title: "Your data stays private", text: "Each shop's data is kept separate and bills are locked once saved." },
  { icon: Printer, title: "Bills with your branding", text: "Your shop name, logo and GSTIN on every bill, in two copies." },
];

export const PLANS = [
  { name: "Starter", price: 499, logins: "1 login", yearly: 5988, free: null,
    items: ["GST bills & estimates, print + WhatsApp PDF", "QR tag scan: weight, rate, making, GST, HUID", "Old gold + cash + UPI + card in one bill", "Live stock, customers and dues", "Unlimited saving schemes + WhatsApp passbook", "Works offline · Marathi / Hindi / English"] },
  { name: "Standard", price: 799, logins: "3 logins", yearly: 8789, free: "1 month free", popular: true, includes: "Everything in Starter, plus",
    items: ["Returns & credit notes", "Import old stock from Excel", "Stock check: see what is missing", "Audit reports and copies for your CA", "Yearly sales report", "Staff logins with permissions"] },
  { name: "Plus", price: 1299, logins: "8 logins", yearly: 12990, free: "2 months free", includes: "Everything in Standard, plus",
    items: ["Order booking with rate lock", "Girvi with interest worked out", "Old gold stock register", "Gram saving schemes", "GSTR-1 and Tally files", "Priority support"] },
];

export const SOCIAL = [
  { name: "Social Basic", price: 3499, items: ["1 shoot a week at your shop for post photos", "4 reels a month", "We set up the shoot, edit and post"] },
  { name: "Social Plus", price: 5499, popular: true, includes: "Everything in Social Basic, plus",
    items: ["Daily gold rate post", "2 shoots a week", "8 reels a month"] },
];

export const COMBO = { a: "Social Basic", ap: 3499, b: "Standard software", bp: 799, total: 4000 };

export const SERVICES = [
  { icon: Gem, title: "Jewellery shop software", text: "CaratCloud Jewellery: billing, stock, schemes, dues and girvi in one app.", to: "/jewellery", cta: "See the app" },
  { icon: Camera, title: "Social media for jewellers", text: "We come to your shop, shoot your jewellery, edit reels and post them for you.", hash: "pricing", cta: "See packages" },
];

export const STEPS = [
  { icon: Presentation, title: "Free demo", text: "We show you the app on your own phone, with your kind of bills." },
  { icon: Store, title: "Setup at your counter", text: "We add your shop details, rates and stock, and design your bill." },
  { icon: GraduationCap, title: "Staff training", text: "Your staff learn billing, schemes and dues, hands-on, in your language." },
  { icon: LifeBuoy, title: "Local support", text: "A local team on call in Panvel and Navi Mumbai, with regular updates." },
];

export const SOCIAL_STEPS = [
  { icon: Camera, title: "Shoot at your shop", text: "Real jewellery, real counter, your own staff." },
  { icon: Clapperboard, title: "Edit & post", text: "Reels and posts with Marathi + English captions." },
  { icon: CalendarHeart, title: "Festival planning", text: "Dhanteras, Akshaya Tritiya and wedding season planned ahead." },
];

export const WHY_ROWS = [
  ["Made for Indian jewellers: GST, HUID, old gold, girvi", "Generic billing, needs workarounds"],
  ["Marathi, Hindi and English, for you and your staff", "English only"],
  ["Works offline, on any phone, tablet or computer", "Needs internet or one fixed PC"],
  ["From ₹499 a month, no big upfront cost", "Large one-time price plus yearly charges"],
  ["Unlimited saving schemes with WhatsApp passbooks", "Schemes in a separate notebook"],
  ["Setup and training at your shop by a local team", "Phone or email support only"],
  ["Software and social media from one team", "Separate vendor and agency"],
];

export const FAQS = [
  ["Do I need to buy a computer or a scanner?", "No. CaratCloud runs on the phone, tablet or computer you already have. The phone camera scans the QR labels, so no scanner machine is needed."],
  ["Does it work without internet?", "Yes. Billing, scanning and printing keep working when the internet is down, and everything syncs on its own once you are back online."],
  ["Which languages does it support?", "Marathi, Hindi and English. You and each staff member can pick a language, and bills can be printed in it too."],
  ["Which plan should I choose?", "Starter is enough for a small counter. Standard adds returns, stock checks, CA reports and staff logins. Plus adds orders, girvi, old gold stock, gram schemes and Tally files. You can move up any time."],
  ["Is there a discount for paying yearly?", "Yes. Standard paid yearly is ₹8,789 (1 month free) and Plus paid yearly is ₹12,990 (2 months free). Taxes are extra."],
  ["Is my data safe and private?", "Each shop's data is kept separate from every other shop. Staff only see what the owner allows, and bills are locked once saved."],
  ["What do the social media packages include?", "Social Basic (₹3,499 a month) gives one shoot a week and 4 reels a month. Social Plus (₹5,499 a month) adds a daily gold rate post, two shoots a week and 8 reels a month. We shoot, edit and post for you."],
  ["Is there a referral offer?", "Yes. Refer another jewellery shop, and when they start using CaratCloud, you get one month of your software plan free. There is no limit on referrals."],
  ["Do you make software for restaurants, hotels or cafés?", "CaratCloud Dine is coming soon. Message us on WhatsApp and we will tell you as soon as it is ready."],
];

export const ROADMAP = [
  { when: "Live now", title: "CaratCloud Jewellery", text: "Billing, stock, schemes, dues and girvi for jewellery shops.", live: true },
  { when: "Live now", title: "Social media for jewellers", text: "Shoots, reels and posts done for the shop.", live: true },
  { when: "Coming soon", title: "CaratCloud Dine", text: "For restaurants, hotels and cafés." },
  { when: "Next", title: "More local businesses", text: "The same simple software for more shops across India." },
];

export const FOUNDER = {
  name: "Shravan Kasar",
  role: "Founder, CaratCloud",
  photo: "img/founder.jpg",
  since: "Founded August 2025 · Navi Mumbai",
  linkedin: "https://www.linkedin.com/in/shravan-kasar-2445962a9",
  portfolio: "https://shravankasar.vercel.app",
  about: [
    "I'm a B.Tech Information Technology student at Pillai College of Engineering, and I started CaratCloud in August 2025.",
    "Talking to jewellers around Panvel, I kept hearing the same thing: software is too complicated, it's only in English, and it costs too much up front. So bills, schemes and dues stayed in notebooks.",
    "I built CaratCloud to be the opposite: scan a tag and the bill is ready, in Marathi, Hindi or English, on the phone you already own. I design it, build it, set it up at the counter and support every shop myself.",
  ],
  vision: "Every small business in India runs on simple software, in its own language.",
  mission: [
    "Build software a shop owner can learn in one day.",
    "Keep it affordable: a small monthly price, no big upfront cost.",
    "Work in Marathi, Hindi and English, online or offline.",
    "Stay local: set up and support every shop in person.",
  ],
};

export const REFERRAL = {
  title: "Refer a jeweller, get a month free",
  text: "When a shop you refer starts using CaratCloud, you get one month of your software plan free. Refer as many shops as you like.",
};
