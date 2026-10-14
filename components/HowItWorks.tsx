import Reveal from "./Reveal";
const steps = [
  { title: "Tell us about your car", text: "Let us know the make and model, your area and what you’d like cleaned. Photos help us understand its condition." },
  { title: "Agree the details", text: "We’ll discuss the price, timing and a suitable place to work, including any water or electricity access needed." },
  { title: "We come to you", text: "We clean your car at the agreed location. If the weather makes the work unsuitable, we’ll discuss rearranging." },
];
export default function HowItWorks() {
  return <section id="how-it-works" className="bg-ink py-20 lg:py-24"><div className="container-lux">
    <Reveal><p className="eyebrow mb-5">How it works</p><h2 className="heading-lux text-4xl sm:text-5xl">Car care that comes to you.</h2></Reveal>
    <div className="mt-10 grid gap-8 md:grid-cols-3">{steps.map((step, i) => <Reveal key={step.title} delay={i * 0.08}><p className="text-gold">0{i + 1}</p><h3 className="mt-4 font-display text-2xl">{step.title}</h3><p className="mt-3 leading-relaxed text-cream/75">{step.text}</p></Reveal>)}</div>
    <p className="mt-10 border-t border-[var(--color-line)] pt-6 text-sm text-cream/65">Based in Brighton &amp; Hove. We’ll confirm whether we can reach your postcode and whether your parking space is suitable before booking.</p>
  </div></section>;
}
