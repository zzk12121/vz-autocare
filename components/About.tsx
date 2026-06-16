"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { IMAGES, STATS } from "@/lib/content";

const PILLARS = [
  "Uncompromising quality",
  "Obsessive attention to detail",
  "Only premium-grade products",
  "Total customer satisfaction",
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal y={32} className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={IMAGES.about}
              alt="Detailer perfecting a vehicle"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--color-line)]" />
          </div>
          {/* floating accent card */}
          <div className="absolute -bottom-6 -right-4 hidden rounded-sm border border-[var(--color-line)] bg-surface/95 px-7 py-5 backdrop-blur-sm sm:block lg:-right-8">
            <p className="font-display text-3xl text-gold">5.0★</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/60">
              Customer Rated
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow mb-5">About Vz Autocare</p>
            <h2 className="heading-lux text-4xl sm:text-5xl">
              Every vehicle deserves meticulous attention
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-cream/65 leading-relaxed">
              <p>
                At Vz Autocare, we believe every vehicle deserves meticulous
                attention to detail. Based in Brighton &amp; Hove, we provide
                premium detailing services focused on perfection, protection and
                presentation.
              </p>
              <p>
                From daily drivers to prized collector cars, we treat each
                vehicle as if it were our own — combining proven technique with
                the finest products available to deliver results that speak for
                themselves.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-cream/80">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-[var(--color-gold-dim)] text-gold">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                      <path d="M1 5l3 3 5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-[var(--color-line)] pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-cream sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-cream/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
