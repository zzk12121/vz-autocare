"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { BUSINESS, SERVICE_OPTIONS } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-sm border border-[var(--color-line)] bg-ink/60 px-4 py-3 text-sm text-cream placeholder:text-muted outline-none transition-colors focus:border-[var(--color-gold)]";
const labelClass =
  "mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-cream/60";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const res = await fetch(BUSINESS.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-ink py-24 lg:py-32">
      <div className="container-lux grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Intro */}
        <Reveal>
          <p className="eyebrow mb-5">Book Your Detail</p>
          <h2 className="heading-lux text-4xl sm:text-5xl">
            Request your personal quote
          </h2>
          <p className="mt-5 text-cream/65 leading-relaxed">
            Tell us about your vehicle and the result you&rsquo;re after. We
            reply to every enquiry personally — usually within 24 hours.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-4 text-cream/80 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--color-line)] text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted">Call us</span>
                {BUSINESS.phone}
              </span>
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-4 text-cream/80 transition-colors hover:text-gold"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--color-line)] text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.6" />
                  <path d="m3.5 5.5 8.5 7 8.5-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted">Email</span>
                {BUSINESS.email}
              </span>
            </a>
            <div className="flex items-center gap-4 text-cream/80">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--color-line)] text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span>
                <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted">Studio</span>
                {BUSINESS.location}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            className="rounded-sm border border-[var(--color-line)] bg-surface p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="vehicle" className={labelClass}>Vehicle</label>
                <input id="vehicle" name="vehicle" placeholder="Make &amp; model" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className={labelClass}>Service Required</label>
                <select id="service" name="service" required defaultValue="" className={`${fieldClass} appearance-none`}>
                  <option value="" disabled>Select a service…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s} className="bg-ink text-cream">{s}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your vehicle and what you'd like…" className={`${fieldClass} resize-none`} />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-gold mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request Your Quote"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-center text-sm text-gold">
                Thank you — your enquiry has been sent. We&rsquo;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-400">
                Something went wrong. Please email us directly at {BUSINESS.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
