import {
  Presentation, Store, PackageOpen, GraduationCap, LifeBuoy,
  ClipboardList, PenTool, MonitorPlay, RefreshCcw, Rocket,
  SearchCheck, UserCog, Camera, CalendarClock, LineChart,
} from "lucide-react";

export const TIMELINES = {
  jewellers: {
    label: "Jewellers",
    note: "Most shops are billing on day one.",
    steps: [
      { icon: Presentation, title: "Free demo", text: "We show you the app on your own phone, with your kind of bills." },
      { icon: Store, title: "Onboarding at your counter", text: "We set everything up at your shop in about 30 minutes." },
      { icon: PackageOpen, title: "Stock import & bill design", text: "Your stock goes in and your bill is designed with your logo and GSTIN." },
      { icon: GraduationCap, title: "Staff training", text: "Your staff learn billing, schemes and dues, hands-on." },
      { icon: LifeBuoy, title: "Ongoing support & updates", text: "A local team on call, and regular updates included." },
    ],
  },
  builders: {
    label: "Builders",
    note: "Essential goes live in about 4 weeks, Pro in 5 to 6 weeks.",
    steps: [
      { icon: ClipboardList, title: "Kick-off & inputs", text: "You share floor plans, the price list and MahaRERA details." },
      { icon: PenTool, title: "Design sign-off", text: "You approve the look of your project website." },
      { icon: MonitorPlay, title: "Staging link to review", text: "Website and 3D go live on a test link for you to check." },
      { icon: RefreshCcw, title: "Revisions + training", text: "One round of changes, and training for your sales team." },
      { icon: Rocket, title: "Go-live & handover", text: "Your project goes live and everything is handed over to you." },
    ],
  },
  marketing: {
    label: "Marketing",
    note: "5 reels a week, every week.",
    steps: [
      { icon: SearchCheck, title: "Brand & shop audit", text: "We study your shop, your customers and your area." },
      { icon: UserCog, title: "Profile setup", text: "Instagram, Facebook, Google Business Profile and WhatsApp Business." },
      { icon: Camera, title: "Shoot day", text: "Our team shoots reels and product photos at your shop." },
      { icon: CalendarClock, title: "Weekly posting", text: "5 reels go out every week, on schedule." },
      { icon: LineChart, title: "Monthly review", text: "We sit with you, look at what worked and plan next month." },
    ],
  },
};

export const WHY_ROWS = [
  ["Software + marketing from one team", "Separate vendor and agency"],
  ["Every client gets a separate private database", "Often one shared database"],
  ["Lifetime data, exported to your own Google account", "Data locked inside their system"],
  ["Low yearly AMC with no hidden charges", "Monthly fees and add-on charges"],
  ["Built for Indian rules: GST, HUID, PAN limits, MahaRERA", "Generic, needs workarounds"],
  ["Works offline and on any device, no app store", "Often needs internet or one PC"],
  ["Local support from Navi Mumbai, onboarding at your shop", "Phone or email support only"],
  ["Real content shot at your shop, not stock templates", "Stock templates and reused designs"],
];

export const FAQS = [
  ["Do I own my data?", "Yes. Your data belongs to you. Every night a backup goes to your own Google Sheet and Google Drive, so you always have a copy in your own account."],
  ["What happens if I stop paying AMC?", "Your data is never deleted. It stays saved for life and your own Google backup remains yours. The AMC covers continued use, updates and support."],
  ["Does it work without internet?", "Yes. Billing keeps working when the internet is down. Once you are back online, everything syncs on its own."],
  ["Is my data safe?", "Each shop's data is kept in its own separate private database, never mixed with other shops. Staff get limited access, every action is recorded, and bills are locked after saving."],
  ["Can I use it on my phone?", "Yes. It works on laptop, tablet and phone. You install it straight from the browser, with no Play Store needed."],
  ["How long does setup take?", "For jewellers, onboarding at your counter takes about 30 minutes, followed by stock import, bill design and staff training. For builders, Essential goes live in about 4 weeks and Pro in 5 to 6 weeks."],
  ["Do you send WhatsApp messages automatically?", "The owner taps Send, and the message opens ready on WhatsApp. Fully automatic sending is a possible paid add-on later."],
  ["Do I need to buy any app or monthly software for the Estate platform?", "No. Everything runs on your own accounts, so there are no monthly software fees after handover. You only pay for the domain, about ₹800 to 1,200 a year."],
];
