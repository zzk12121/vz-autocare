// Confirm contact details and launch packages here before enabling enquiries.
export const BUSINESS = {
  name: "Vz Autocare",
  logo: "/logo.png",
  location: "Brighton & Hove, UK",
  email: "",
  phone: "",
  phoneHref: "",
  instagram: "",
  facebook: "",
  formspreeEndpoint: "",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

// Decorative stock photography, never presented as our own work.
const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
export const IMAGES = { hero: img("1503376780353-7e6692767b70", 2400) };
export const TRUST = ["Mobile service", "Brighton & Hove", "Interior & exterior care"];
export const SERVICES = [
  { title: "Exterior clean", blurb: "A clean, fresh exterior for your everyday car.", includes: ["Bodywork wash", "Wheel cleaning", "Exterior glass", "Hand drying"] },
  { title: "Interior clean", blurb: "Freshen up the cabin and tackle everyday dirt.", includes: ["Seats and carpets vacuumed", "Mats cleaned", "Dashboard and surfaces wiped", "Interior glass"] },
  { title: "Inside & out", blurb: "Combine interior and exterior care in one visit.", includes: ["Exterior clean", "Interior clean", "A package suited to your car", "Scope agreed before the visit"] },
];
export const SERVICE_OPTIONS = [...SERVICES.map(service => service.title), "Not sure — help me choose"];
