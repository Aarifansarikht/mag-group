"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/Primitives";
import {
  ChevronRight,
  ChevronDown,
  Droplets,
  ShieldCheck,
  Home,
  Layers,
  Sun,
  Settings,
  DoorOpen,
  Mountain,
} from "lucide-react";

/* ---------------------------------------------
   DROPDOWN ITEM (RIGHT SIDE ONLY)
---------------------------------------------- */
const ProductItem = ({ title, desc }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="bg-white/60 dark:bg-brand-950/60 backdrop-blur-md border border-white/10 dark:border-brand-800/30 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 md:px-10 py-5 md:py-7 group"
      >
        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-950 dark:text-white group-hover:text-brand-accent pr-4 text-left">
          {title}
        </span>

        <ChevronDown
          className={`w-4 h-4 transition-all ${
            open ? "rotate-180 text-brand-accent" : "text-industrial-300"
          }`}
        />
      </button>

      {open && (
        <div className="px-6 md:px-10 pb-6 text-sm text-industrial-500 leading-relaxed border-t border-white/10 dark:border-brand-800/30">
          {desc}
        </div>
      )}
    </li>
  );
};

/* ---------------------------------------------
   PRODUCT BLOCK (DESIGN UNCHANGED)
---------------------------------------------- */
const ProductBlock = ({
  title,
  desc,
  items,
  icons,
  img,
  reverse = false,
}: any) => (
  <div className="bg-white/40 dark:bg-brand-950/40 backdrop-blur-lg rounded-none md:rounded-3xl overflow-hidden shadow-[0_4px_60px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 items-stretch mb-12 border border-white/20 dark:border-brand-800/50">
    {/* LEFT */}
    <div
      className={`lg:col-span-4 p-8 md:p-16 flex flex-col justify-center ${
        reverse ? "lg:order-2" : ""
      }`}
    >
      <h3 className="text-3xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic mb-4 leading-tight">
        {title}
      </h3>

      <div className="flex gap-2 mb-6">
        <div className="h-1 w-12 bg-brand-accent rounded-full" />
        <div className="h-1 w-4 bg-industrial-200 rounded-full" />
      </div>

      <p className="text-sm text-industrial-500 font-medium mb-8 leading-relaxed">
        {desc}
      </p>

      <img
        src={img}
        className="w-full h-40 md:h-48 object-cover shadow-lg border border-white/20 mb-6"
        alt={title}
      />

      <div className="flex gap-4">
        {icons.map((Icon: any, i: number) => (
          <div
            key={i}
            className="w-12 h-12 md:w-16 md:h-16 bg-white/30 dark:bg-brand-900/40 flex items-center justify-center p-3 border border-white/10 dark:border-brand-800/50"
          >
            <Icon className="w-full h-full text-brand-accent opacity-60" />
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT – DROPDOWN PRODUCTS */}
    <div
      className={`lg:col-span-8 bg-industrial-50/20 dark:bg-brand-900/10 p-4 md:p-16 flex flex-col justify-center ${
        reverse ? "lg:order-1" : ""
      }`}
    >
      <ul className="grid grid-cols-1 gap-2 md:gap-4">
        {items.map((item: any, i: number) => (
          <ProductItem key={i} {...item} />
        ))}
      </ul>
    </div>
  </div>
);

/* ---------------------------------------------
   PAGE
---------------------------------------------- */
export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950">
      <Header />

      <main className="flex-grow pt-20">

        {/* HERO */}
        <section className="py-20 md:py-32 text-center border-b">
          <div className="container mx-auto px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent block mb-4">
              Building Materials • Construction Hub
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase italic mb-6">
              Product <span className="text-brand-accent">Range</span>
            </h1>
            <p className="text-industrial-500 max-w-xl mx-auto">
              A comprehensive portfolio ranging from world-class drainage systems
              to light-weight construction aggregates.
            </p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">

            {/* DRAINAGE */}
            <ProductBlock
              title="Drainage Solutions"
              desc="Premium drainage solutions for all enterprises."
              img="/images/products/drainage-solutions.jpg"
              icons={[Droplets, ShieldCheck]}
              items={[
                {
                  title:
                    "Manhole Covers, Gratings & JRC Covers – RBA & FRA, India",
                  desc:
                    "Compliant with BS EN 124 & BS 497/76 standards, available in solid top and recessed designs with multiple load ratings for residential, commercial and infrastructure projects.",
                },
                {
                  title:
                    "Channel Drainages – MUFLE / GRIDIRON / FIRSTPLAST, Italy",
                  desc:
                    "Linear drainage systems for pedestrian, commercial and heavy-duty applications ensuring efficient surface water management.",
                },
                {
                  title: "Roof & Parking Drains – FRANCO, India",
                  desc:
                    "High-performance roof and podium drainage systems engineered for durability and flow efficiency.",
                },
                {
                  title:
                    "Multipart Access & Hatch Covers – HOWEGREEN, U.K",
                  desc:
                    "Specialist access covers designed for safe access to plant rooms, tunnels and service areas.",
                },
                {
                  title:
                    "Grease Interceptors & Oil Separators – ENEKA, Lithuania",
                  desc:
                    "Advanced separation systems for commercial kitchens and industrial facilities.",
                },
                {
                  title:
                    "Grease Traps & PVC Fabricated Items – FITCO, UAE",
                  desc:
                    "PVC fabricated drainage and grease management solutions for long-term reliability.",
                },
              ]}
            />

            {/* CLAY ROOFING */}
            <ProductBlock
              title="Clay Roofing Products"
              desc="Natural and glazed clay roof tiles from global manufacturers."
              img="/images/products/clay-roofing.jpg"
              icons={[Home, Layers]}
              reverse
              items={[
                {
                  title: "Natural & Antique Clay Roof Tiles – TOGNANA, Italy",
                  desc:
                    "Traditional and contemporary clay tiles offering durability and architectural appeal.",
                },
                {
                  title: "Glazed Roof Tiles – CEIPO, Italy",
                  desc:
                    "High-quality glazed tiles for premium residential and commercial projects.",
                },
                {
                  title: "Glazed Roof Tiles – CEJATEL, Brazil",
                  desc:
                    "Decorative glazed clay tiles combining aesthetics with weather resistance.",
                },
              ]}
            />

            {/* SOLAR */}
            <ProductBlock
              title="Solar Outdoor Lights"
              desc="Smart solar lighting – authorized distributor of TRUELITE USA."
              img="/images/products/solar-lighting.jpg"
              icons={[Sun, Settings]}
              items={[
                {
                  title: "Smart Solar Outdoor Lights – TRUELITE, USA",
                  desc:
                    "Energy-efficient solar lighting systems for roads, parks and landscapes.",
                },
              ]}
            />

            {/* DOORS */}
            <ProductBlock
              title="Doors & Barriers"
              desc="Automated access and security systems."
              img="/images/products/garage-doors.jpg"
              icons={[DoorOpen, ShieldCheck]}
              reverse
              items={[
                {
                  title: "Rolling Shutters – COL, Malaysia",
                  desc:
                    "Industrial-grade rolling shutters for security and access control.",
                },
                {
                  title: "Garage Doors – MARCEGAGLIA, Italy",
                  desc:
                    "High-quality steel garage doors for residential and commercial use.",
                },
                {
                  title: "Sectional Doors – C.H.I, USA",
                  desc:
                    "Sectional overhead doors designed for performance and insulation.",
                },
                {
                  title: "Automation Systems – NICE / KINGGATES, Italy",
                  desc:
                    "Advanced automation solutions for doors, gates and barriers.",
                },
              ]}
            />

            {/* AGGREGATES */}
            <ProductBlock
              title="Pumice Aggregates"
              desc="Natural lightweight aggregates from Greece."
              img="/images/products/pumice-aggregates.jpg"
              icons={[Mountain, Layers]}
              items={[
                {
                  title: "YALI Pumice – Greece",
                  desc:
                    "Natural volcanic lightweight aggregate used for insulation, concrete and landscaping applications.",
                },
              ]}
            />

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-brand-950 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic mb-6">
            Technical Submission Hub
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-10">
            Download CAD drawings, certifications and technical documents.
          </p>
          <Button className="bg-brand-accent h-14 px-14 uppercase font-black">
            DOWNLOAD PORTFOLIO
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
