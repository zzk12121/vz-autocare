import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: BUSINESS.name,
  description:
    "Premium automotive detailing, paint correction and ceramic coating in Brighton & Hove.",
  areaServed: "Brighton & Hove, UK",
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brighton & Hove",
    addressCountry: "GB",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "120",
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
        <Gallery />
        <Reviews />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
