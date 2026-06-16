"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 lg:py-32">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">Our Services</p>
          <h2 className="heading-lux text-4xl sm:text-5xl">
            Crafted care for every surface
          </h2>
          <p className="mt-5 text-cream/65">
            From a single transformative detail to long-term protection, every
            service is delivered with obsessive attention to detail.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <a
                href="#contact"
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-[var(--color-line)] bg-surface transition-all duration-500 hover:border-[var(--color-gold-dim)] hover:shadow-[var(--shadow-card)]"
              >
                {/* gold top reveal */}
                <span className="absolute inset-x-0 top-0 z-10 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">
                    {service.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-gold transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
