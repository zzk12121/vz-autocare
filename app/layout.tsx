import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://vzautocare.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vz Autocare — Premium Car Detailing in Brighton & Hove",
    template: "%s · Vz Autocare",
  },
  description:
    "Premium automotive detailing, paint correction and ceramic coating in Brighton & Hove. Precision care designed to restore and protect your vehicle.",
  keywords: [
    "car detailing Brighton",
    "paint correction Hove",
    "ceramic coating Brighton & Hove",
    "premium valeting Sussex",
    "Vz Autocare",
  ],
  authors: [{ name: "Vz Autocare" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Vz Autocare",
    title: "Vz Autocare — Premium Car Detailing in Brighton & Hove",
    description:
      "Precision detailing, paint correction and protection services designed to restore and protect your vehicle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vz Autocare — Premium Car Detailing in Brighton & Hove",
    description:
      "Precision detailing, paint correction and protection for your vehicle.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
