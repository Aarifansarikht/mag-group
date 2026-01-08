import React from "react";
import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
  style: ["normal", "italic"],
  display: "swap",
});

/* =========================
   GLOBAL SEO METADATA
========================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.maggroupinternational.com"),

  title: {
    default: "MAG Group International | Industrial Drainage & Structural Steel Experts",
    template: "%s | MAG Group International",
  },

  description:
    "MAG Group International is a leading manufacturer and supplier of industrial drainage systems, manhole covers, and structural steel solutions across Qatar, UAE, and the GCC. Trusted by infrastructure, commercial, and industrial projects.",

  keywords: [
    "industrial drainage systems",
    "manhole covers manufacturer",
    "structural steel fabrication",
    "steel fabrication Qatar",
    "steel fabrication UAE",
    "drainage accessories supplier",
    "mezzanine steel structures",
    "warehouse steel buildings",
    "GCC infrastructure solutions",
    "MAG Group International",
  ],

  authors: [{ name: "MAG Group International" }],
  creator: "MAG Group International",
  publisher: "MAG Group International",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.maggroupinternational.com",
    siteName: "MAG Group International",
    title: "MAG Group International | Industrial Drainage & Structural Steel Experts",
    description:
      "Manufacturer of drainage systems and structural steel solutions serving Qatar, UAE & GCC infrastructure projects.",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "MAG Group International – Industrial Manufacturing",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "MAG Group International | Industrial Drainage & Steel Fabrication",
    description:
      "Trusted manufacturer of industrial drainage accessories and structural steel systems across the Middle East.",
    images: ["/favicon-32x32.png"],
  },

  category: "Industrial Manufacturing",
};

/* =========================
   ROOT LAYOUT
========================= */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${chakra.variable} font-sans antialiased bg-white text-brand-950 dark:bg-brand-950 dark:text-industrial-100`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
