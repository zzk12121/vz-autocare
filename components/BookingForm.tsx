import Reveal from "./Reveal";
import { BUSINESS } from "@/lib/content";

export default function BookingForm() {
  const hasContact = Boolean(BUSINESS.email || BUSINESS.phoneHref);
  return <section id="contact" className="bg-ink-900 py-20 lg:py-24">
    <div className="container-lux grid gap-10 lg:grid-cols-2">
      <Reveal><p className="eyebrow mb-5">Get in touch</p><h2 className="heading-lux text-4xl sm:text-5xl">Let’s talk about your car.</h2><p className="mt-5 leading-relaxed text-cream/75">For an enquiry, include your car’s make and model, your postcode and whether you’d like an interior clean, exterior clean or both.</p></Reveal>
      <Reveal delay={0.1}><div className="rounded-sm border border-[var(--color-line)] bg-surface p-8">
        {hasContact ? <><h3 className="font-display text-2xl">Check availability</h3><p className="mt-4 text-cream/75">We’ll discuss your car and confirm the price before booking.</p><div className="mt-6 flex flex-wrap gap-4">{BUSINESS.phoneHref && <a className="btn btn-gold" href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>}{BUSINESS.email && <a className="btn btn-ghost" href={`mailto:${BUSINESS.email}`}>Email us</a>}</div></> : <><h3 className="font-display text-2xl">Getting ready to launch</h3><p className="mt-4 leading-relaxed text-cream/75">We’re putting the finishing touches on our service. Booking details will be available here when we’re ready to take enquiries.</p></>}
        <p className="mt-6 text-sm text-cream/60">Mobile service · {BUSINESS.location}</p>
      </div></Reveal>
    </div>
  </section>;
}
