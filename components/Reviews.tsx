"use client";

import Reveal from "./Reveal";
import { REVIEWS } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.8L10 15.9 4.8 17.7l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5 justify-center">Client Reviews</p>
          <h2 className="heading-lux text-4xl sm:text-5xl">
            Trusted with the finest vehicles
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-sm border border-[var(--color-line)] bg-surface p-8 transition-colors duration-500 hover:border-[var(--color-gold-dim)]">
                <Stars />
                <blockquote className="mt-5 flex-1 text-cream/80 leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-[var(--color-line)] pt-5">
                  <p className="font-display text-lg text-cream">{review.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-gold">
                    {review.vehicle}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
