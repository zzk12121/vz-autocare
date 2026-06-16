"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { GALLERY } from "@/lib/content";

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ink py-24 lg:py-32">
      <div className="container-lux">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-5">The Portfolio</p>
          <h2 className="heading-lux text-4xl sm:text-5xl">
            Results that speak for themselves
          </h2>
          <p className="mt-5 text-cream/65">
            A selection of recent transformations — every finish achieved
            in-studio with precision and patience.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4 lg:auto-rows-[280px]">
          {GALLERY.map((item, i) => (
            <Reveal
              key={item.caption + i}
              delay={(i % 4) * 0.08}
              className={`group relative overflow-hidden rounded-sm ${
                item.span ? "col-span-2" : "col-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

              {/* caption */}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
                  {item.tag}
                </span>
                <p className="mt-1 font-display text-lg text-cream">
                  {item.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
