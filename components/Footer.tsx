import Image from "next/image";
import { BUSINESS, NAV_LINKS } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-line)] bg-ink-900">
      <div className="container-lux py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image src={BUSINESS.logo} alt="Vz Autocare" width={120} height={120} className="h-16 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
              Premium automotive detailing, paint correction and protection in
              {" "}
              {BUSINESS.location}.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Explore
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream/70 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-cream/40">
              Get in touch
            </p>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href={BUSINESS.phoneHref} className="transition-colors hover:text-gold">{BUSINESS.phone}</a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-gold">{BUSINESS.email}</a>
              </li>
              <li>{BUSINESS.location}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-cream/70 transition-colors hover:border-[var(--color-gold)] hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] text-cream/70 transition-colors hover:border-[var(--color-gold)] hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6C16.4 2.5 15.5 2.4 14.5 2.4c-2.3 0-3.8 1.4-3.8 3.9v2.2H8.3V12h2.4v9.6h3.3V12h2.4l.4-3.5H14z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-line)] pt-7 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Detailing &middot; Paint Correction &middot; Ceramic Coating
          </p>
        </div>
      </div>
    </footer>
  );
}
