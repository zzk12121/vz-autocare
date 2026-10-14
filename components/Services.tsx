import Reveal from "./Reveal";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 lg:py-24">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">Our services</p>
          <h2 className="heading-lux text-4xl sm:text-5xl">Everyday cars, cared for.</h2>
          <p className="mt-5 text-cream/75">Choose an interior clean, an exterior wash or both. We agree the work and price with you before a visit.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-sm border border-[var(--color-line)] bg-surface p-7">
                <p className="text-sm text-gold">0{i + 1}</p>
                <h3 className="mt-5 font-display text-2xl text-cream">{service.title}</h3>
                <p className="mt-3 text-sm text-cream/75">{service.blurb}</p>
                <ul className="my-6 flex-1 space-y-3 text-sm text-cream/80">
                  {service.includes.map(item => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden>✓</span>{item}</li>)}
                </ul>
                <a href="#contact" className="btn btn-ghost">Ask about this service</a>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-cream/65">Launch packages and prices are being finalised. Vehicle size, condition and any extra work will be discussed before booking.</p>
      </div>
    </section>
  );
}
