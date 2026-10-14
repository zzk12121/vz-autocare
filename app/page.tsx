import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: BUSINESS.name,
  description:
    "Mobile interior and exterior car cleaning in Brighton & Hove.",
  areaServed: "Brighton & Hove, UK",
  ...(BUSINESS.email ? { email: BUSINESS.email } : {}),
  ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brighton & Hove",
    addressCountry: "GB",
  },

};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
