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

const siteUrl = "https://vzautocare.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vz Autocare — Mobile Car Care in Brighton & Hove",
    template: "%s · Vz Autocare",
  },
  description:
    "Mobile interior and exterior car cleaning in Brighton & Hove. A local service that comes to you.",
  keywords: [
    "car detailing Brighton",
    "mobile car cleaning Hove",
    "mobile valeting Brighton & Hove",
    "interior car cleaning Brighton",
    "Vz Autocare",
  ],
  authors: [{ name: "Vz Autocare" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Vz Autocare",
    title: "Vz Autocare — Mobile Car Care in Brighton & Hove",
    description:
      "Mobile interior and exterior car cleaning in Brighton & Hove. We come to you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vz Autocare — Mobile Car Care in Brighton & Hove",
    description:
      "Mobile car care in Brighton & Hove. We come to you.",
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
