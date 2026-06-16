/* ============================================================
   Vz Autocare — central content + config
   Edit business details, links and copy here.
   ============================================================ */

export const BUSINESS = {
  name: "Vz Autocare",
  logo: "/logo.png",
  location: "Brighton & Hove, UK",
  email: "hello@vzautocare.co.uk",
  phone: "+44 7000 000000",
  phoneHref: "tel:+447000000000",
  instagram: "https://instagram.com/vzautocare",
  facebook: "https://facebook.com/vzautocare",
  // Replace with your real Formspree form id: https://formspree.io
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

/** Unsplash helper — all URLs verified reachable. Swap for your own photography. */
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: img("1503376780353-7e6692767b70", 2400),
  about: img("1542362567-b07e54358753", 1400),
};

export const TRUST = [
  "Fully Insured",
  "Premium Products",
  "Brighton & Hove Based",
  "Customer Focused",
];

export type Service = {
  title: string;
  blurb: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    title: "Full Detail",
    blurb:
      "A deep interior and exterior transformation — every surface decontaminated, cleansed and refined to a flawless finish.",
    image: img("1605559424843-9e4c228bf1c2"),
  },
  {
    title: "Paint Correction",
    blurb:
      "Multi-stage machine polishing that removes swirls, scratches and oxidation to restore deep, mirror-like gloss.",
    image: img("1614200187524-dc4b892acf16"),
  },
  {
    title: "Ceramic Coating",
    blurb:
      "Long-term nano-ceramic protection with a hydrophobic finish that repels water, dirt and UV for years.",
    image: img("1601362840469-51e4d8d58785"),
  },
  {
    title: "Maintenance Detail",
    blurb:
      "Scheduled care that keeps your vehicle looking showroom-ready between major details — effortless and consistent.",
    image: img("1606664515524-ed2f786a0bd6"),
  },
];

export type GalleryItem = {
  src: string;
  caption: string;
  tag: string;
  span?: boolean;
};

export const GALLERY: GalleryItem[] = [
  { src: img("1583121274602-3e2820c69888"), caption: "Paint correction", tag: "Exterior", span: true },
  { src: img("1494976388531-d1058494cdd8"), caption: "Ceramic protection", tag: "Coating" },
  { src: img("1568605117036-5fe5e7bab0b7"), caption: "Showroom finish", tag: "Full detail" },
  { src: img("1502877338535-766e1452684a"), caption: "Cabin restoration", tag: "Interior" },
  { src: img("1552519507-da3b142c6e3d"), caption: "Gloss enhancement", tag: "Polish" },
  { src: img("1492144534655-ae79c964c9d7"), caption: "Protection detail", tag: "Exterior", span: true },
];

export type Review = {
  name: string;
  vehicle: string;
  quote: string;
};

export const REVIEWS: Review[] = [
  {
    name: "James M.",
    vehicle: "Porsche 911",
    quote:
      "Absolutely meticulous work. The paint correction brought my 911 back to better-than-showroom. You can tell they genuinely care.",
  },
  {
    name: "Sophie R.",
    vehicle: "Range Rover Sport",
    quote:
      "The ceramic coating is incredible — water just slides off and it still looks freshly detailed months later. Faultless service.",
  },
  {
    name: "Daniel K.",
    vehicle: "Audi RS6",
    quote:
      "Professional from first contact to handover. The attention to detail on the interior was on another level. Highly recommended.",
  },
];

export const SERVICE_OPTIONS = [
  "Full Detail",
  "Paint Correction",
  "Ceramic Coating",
  "Maintenance Detail",
  "Not sure — advise me",
];

export const STATS = [
  { value: "500+", label: "Vehicles Detailed" },
  { value: "5.0", label: "Average Rating" },
  { value: "100%", label: "Premium Products" },
];
