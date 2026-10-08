import {
  Tags, Receipt, WifiOff, Wallet, PiggyBank, Send, Printer, Users, ShieldCheck, HardDriveDownload, Sparkles,
  Globe, LayoutGrid, Rotate3d, Inbox, CalendarCheck, FileText, BadgeCheck, Crown, KeyRound,
} from "lucide-react";

// Edit social media plan prices here
export const SOCIAL_PRICES = { starter: "[___]", growth: "[___]", premium: "[___]" };

export const ERP_FEATURES = [
  { icon: Receipt, title: "Billing in under 60 seconds", span: "md:col-span-2 lg:col-span-4", big: true,
    text: "GST tax invoices, estimates, bill of supply and sales returns. Old gold exchange and buyback. Split payments across cash, UPI, card, bank, cheque and old gold.",
    chips: ["HUID printed on bills", "PAN check for ₹2 lakh+ bills", "Split payments"] },
  { icon: WifiOff, title: "Works offline", span: "lg:col-span-2",
    text: "Internet down? Billing continues. Everything syncs on its own once you are back online." },
  { icon: Tags, title: "Stock management", span: "lg:col-span-2",
    text: "A unique tag ID and barcode label for every piece. Scan to bill, silver lots, stock tally mode and valuation at today's rate." },
  { icon: Wallet, title: "Part-payments & credit ledger", span: "lg:col-span-2",
    text: "Track every rupee owed. A clear due list with one-tap WhatsApp reminders." },
  { icon: PiggyBank, title: "Saving schemes", span: "lg:col-span-2",
    text: "Open a scheme in under 2 minutes. Passbook PDF, a PIN-protected private link for customers, maturity and redemption." },
  { icon: Send, title: "WhatsApp sharing", span: "lg:col-span-3",
    text: "Bills, receipts and passbooks sent in one tap, in English, Hindi or Marathi.",
    chips: ["English", "हिंदी", "मराठी"] },
  { icon: Printer, title: "Printing your way", span: "lg:col-span-3",
    text: "A4, A5 and 80 mm thermal bills with your shop's logo and GSTIN.",
    chips: ["A4", "A5", "80 mm thermal"] },
  { icon: Users, title: "Staff logins & roles", span: "lg:col-span-2",
    text: "Owner and staff logins with limited access, plus a full record of who did what." },
  { icon: ShieldCheck, title: "Your shop, your own private vault", span: "md:col-span-2 lg:col-span-4", big: true,
    text: "Each shop's data is stored in its own separate private database, never mixed with other shops. Bills are locked after saving so they cannot be changed quietly." },
  { icon: HardDriveDownload, title: "Your data is yours", span: "lg:col-span-3",
    text: "Nightly backup to your own Google Sheet and Drive. Your data is kept for life, even if you stop paying." },
  { icon: Sparkles, title: "AI billing assistant", span: "md:col-span-2 lg:col-span-3", soon: true,
    text: "Say or type “2 gold rings, 8 grams, 22 carat” and the bill is ready. Works in English, Hindi and Marathi." },
];

export const ESTATE_FEATURES = [
  { icon: Globe, title: "Your project website", span: "md:col-span-2 lg:col-span-4", big: true,
    text: "Home, explore flats, flat pages, amenities, location, construction updates, gallery and brochure, about the builder and contact. In English and Marathi.",
    chips: ["English + मराठी", "Loads in under 3 sec on 4G"] },
  { icon: Rotate3d, title: "360° walkthroughs", span: "lg:col-span-2",
    text: "Photoreal 360° walkthroughs of each flat type. Opens on any phone, with no app." },
  { icon: LayoutGrid, title: "Live unit explorer", span: "lg:col-span-2",
    text: "Tap a tower, a floor, then a flat. Filter by BHK, floor, facing and budget." },
  { icon: CalendarCheck, title: "Site visit booking", span: "lg:col-span-2",
    text: "Buyers book a visit and get an automatic WhatsApp confirmation and reminder." },
  { icon: BadgeCheck, title: "Booking & receipt", span: "lg:col-span-2",
    text: "Booking form and receipt. The flat turns “Booked” everywhere, instantly." },
  { icon: Inbox, title: "Lead CRM", span: "lg:col-span-3",
    text: "Every lead lands in one place, auto-assigned, with follow-up reminders and one-tap WhatsApp templates.",
    chips: ["Website", "Facebook / Instagram ads", "Google Ads", "99acres", "MagicBricks", "Housing.com", "Walk-ins", "Calls"] },
  { icon: FileText, title: "Cost sheet generator", span: "lg:col-span-3",
    text: "A correct, branded PDF on WhatsApp in under 2 minutes. Discount approval, on-hold timer, and your MahaRERA number + QR code on every document." },
  { icon: Crown, title: "Pro only", span: "md:col-span-2 lg:col-span-4", big: true, pro: true,
    list: [
      "Broker (channel partner) portal with client registration protection and commission tracking",
      "Payment demand letters sent the same day a construction stage is complete, with collections and TDS tracking",
      "Buyer portal with progress photos, payments and documents",
      "Full owner dashboard with ad-source and cost-per-booking reports",
    ] },
  { icon: KeyRound, title: "No monthly software fees", span: "md:col-span-2 lg:col-span-2",
    text: "Everything runs on your own accounts. After handover you only pay for the domain, about ₹800 to 1,200 a year." },
];

export const ESTATE_COMPARE = [
  ["Project website (English + Marathi)", true, true],
  ["Live unit explorer with colour-coded flats", true, true],
  ["Photoreal 360° walkthroughs of each flat type", true, true],
  ["Lead CRM with auto-assign and follow-up reminders", true, true],
  ["Site visit booking with WhatsApp confirmation", true, true],
  ["Cost sheet generator with MahaRERA number + QR", true, true],
  ["Booking form and receipt", true, true],
  ["Broker (channel partner) portal + commission tracking", false, true],
  ["Payment demand letters, collections and TDS tracking", false, true],
  ["Buyer portal: progress photos, payments, documents", false, true],
  ["Owner dashboard: ad-source and cost-per-booking reports", false, true],
  ["Go-live time", "About 4 weeks", "5 to 6 weeks"],
  ["One-time price, per project", "₹50,000", "₹75,000"],
];

export const BILL_STEPS = [
  { n: "01", title: "Scan the tag", text: "Scan the piece's barcode. Weight, purity and HUID fill in on their own." },
  { n: "02", title: "Rate & payment", text: "Today's rate, making charges and GST are worked out. Add old gold or split the payment." },
  { n: "03", title: "Print or WhatsApp", text: "Print on A4, A5 or thermal, or send the bill to the customer on WhatsApp in one tap." },
];
