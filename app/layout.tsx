
import React from "react";
import type { Metadata } from "next";
import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const chakra = Chakra_Petch({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"], 
  variable: "--font-chakra",
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "MAG Group | Industrial Drainage & Structural Steel Experts",
  description: "Manufacturer and Supplier of Drainage Accessories and Structural Steel Systems in Qatar and UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${chakra.variable} font-sans antialiased bg-white text-brand-950 dark:bg-brand-950 dark:text-industrial-100`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
