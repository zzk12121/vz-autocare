"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { IMAGES, TRUST } from "@/lib/content";

const fade: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={IMAGES.hero}
          alt="Car on the road — decorative stock photograph"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-black/30" />
      </div>

      <div className="container-lux pt-28">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="eyebrow mb-6"
        >
          Mobile Car Care · Brighton &amp; Hove
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="heading-lux max-w-4xl text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-7xl"
        >
          A cleaner car.
          <span className="block text-gold">At your doorstep.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          Mobile interior and exterior cleaning in Brighton &amp; Hove.
          We come to you, so you can get on with your day.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn btn-gold">
            Check Availability
          </a>
          <a href="#services" className="btn btn-ghost">
            View Services
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.ul
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-line)] pt-7"
        >
          {TRUST.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-cream/70"
            >
              <span className="text-gold">◆</span>
              {t}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/40">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
