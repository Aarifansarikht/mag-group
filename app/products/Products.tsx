"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/Primitives";
import ProductBlock from "@/components/products/ProductBlock";
import { ChevronRight, Droplets, ShieldCheck, Home, Layers, Sun, Settings, DoorOpen, Mountain } from "lucide-react";
import Image from "next/image";

type Props = {
  serviceList: any[];
};

export default function Products({ serviceList }: Props) {
  const [activeTab, setActiveTab] = useState<"products" | "services">("products");
  const [isCompact, setIsCompact] = useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 120);
    };
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeTab]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950">
      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="py-20 md:py-32 text-center border-b">
          <div className="container mx-auto px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-accent block mb-4">
              Building Materials • Construction Hub
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase italic mb-6">
              Products & <span className="text-brand-accent">Services</span>
            </h1>
            <p className="text-industrial-500 max-w-xl mx-auto">
              Explore our complete portfolio of building products and steel fabrication services.
            </p>
          </div>
        </section>

        {/* TABS */}

        <section className="sticky top-20 z-30 transition-all duration-500">
          <div
            className={`container mx-auto flex justify-center transition-all duration-500 ${
              isCompact ? "py-1" : "py-4"
            }`}
          >
            <div
              className={`relative flex items-center backdrop-blur-xl border rounded-full shadow-lg transition-all duration-500 ${
                isCompact
                  ? "bg-white/40 dark:bg-brand-950/60 scale-90 p-0.5"
                  : "bg-white/30 dark:bg-brand-950/40 scale-100 p-1"
              } border-white/20 dark:border-brand-800/40`}
            >
              {/* SLIDING ACTIVE INDICATOR */}
              <div
                className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-brand-accent/90 transition-all duration-500 ease-out ${
                  activeTab === "products" ? "left-1" : "left-1/2"
                }`}
              />

              {/* PRODUCTS TAB */}
              <button
                onClick={() => setActiveTab("products")}
                className={`relative z-10 font-black uppercase tracking-[0.25em] transition-all duration-500 ${
                  isCompact ? "px-6 h-9 text-[9px]" : "px-10 md:px-14 h-12 text-[10px]"
                } ${
                  activeTab === "products"
                    ? "text-white"
                    : "text-industrial-500 hover:text-brand-950 dark:hover:text-white"
                }`}
              >
                Products
              </button>

              {/* SERVICES TAB */}
              <button
                onClick={() => setActiveTab("services")}
                className={`relative z-10 font-black uppercase tracking-[0.25em] transition-all duration-500 ${
                  isCompact ? "px-6 h-9 text-[9px]" : "px-10 md:px-14 h-12 text-[10px]"
                } ${
                  activeTab === "services"
                    ? "text-white"
                    : "text-industrial-500 hover:text-brand-950 dark:hover:text-white"
                }`}
              >
                Services
              </button>
            </div>
          </div>
        </section>

        {/* PRODUCTS TAB */}
        {activeTab === "products" && (
          <section className="py-12 md:py-24" id="drainage">
            <div className="container mx-auto px-4 max-w-8xl">
              <section>
                <ProductBlock
                  title="Drainage Solutions"
                  desc="Comprehensive range of engineered drainage systems designed for residential, commercial, and industrial infrastructure across the GCC."
                  icons={[Droplets, ShieldCheck]}
                  items={[
                    {
                      title: "Drain Outlets",
                      desc: "Floor drains, cleanouts and shower drains engineered for efficient water flow, hygiene, and long-term durability in residential and commercial environments.",
                      img: "/images/products/drain-outlets.jpg",
                    },
                    {
                      title: "Rainwater Outlets & Roof Scupper Drains",
                      desc: "High-capacity roof drainage systems designed for rapid rainwater discharge and rooftop flood protection.",
                      img: "/images/products/rainwater-outlets.jpg",
                    },
                    {
                      title: "Parking & Area Drains",
                      desc: "Heavy-duty drainage systems for parking areas, driveways, service yards, and external paved surfaces.",
                      img: "/images/products/parking-area-drains.jpg",
                    },
                    {
                      title: "Kitchen Drainage & Ablution Gratings",
                      desc: "Hygienic stainless steel drainage solutions for commercial kitchens, mosques, and high-traffic wet areas.",
                      img: "/images/products/kitchen-ablution-drains.jpg",
                    },
                    {
                      title: "Gratings & Gully Gratings",
                      desc: "Ductile iron, stainless steel and composite gratings for surface water management and load-bearing applications.",
                      img: "/images/products/gratings-gully.jpg",
                    },
                    {
                      title: "Manhole Covers",
                      desc: "EN124 certified manhole covers available in ductile iron, composite and recessed options for infrastructure and utilities.",
                      img: "/images/products/manhole-covers.jpg",
                    },
                  ]}
                />
              </section>
              <section id="clay-roofing">
                <ProductBlock
                  title="Clay Roofing Products"
                  desc="Natural and glazed clay roof tiles."
                  icons={[Home, Layers]}
                  reverse
                  items={[
                    {
                      title: "Natural Clay Tiles",
                      desc: "Traditional architectural tiles.",
                      img: "/images/products/clay-roofing.jpg",
                    },
                    // { title: "Glazed Tiles", desc: "Premium glazed finishes.", img: "/images/products/glazed-tiles.jpg" },
                  ]}
                />
              </section>

              <ProductBlock
                title="Solar Outdoor Lights"
                desc="Smart solar lighting solutions."
                icons={[Sun, Settings]}
                items={[
                  {
                    title: "Smart Solar Lights",
                    desc: "Energy efficient lighting.",
                    img: "/images/products/solar-lighting.jpg",
                  },
                ]}
              />

              <ProductBlock
                title="Doors & Barriers"
                desc="Automated access systems."
                icons={[DoorOpen, ShieldCheck]}
                reverse
                items={[
                  {
                    title: "Garage Doors",
                    desc: "Residential and commercial doors.",
                    img: "/images/products/garage-doors.jpg",
                  },
                  {
                    title: "Rolling Shutters",
                    desc: "Industrial shutter systems.",
                    img: "/images/products/rolling-shutters.jpg",
                  },
                ]}
              />

              <ProductBlock
                title="Pumice Aggregates"
                desc="Lightweight natural aggregates."
                icons={[Mountain, Layers]}
                items={[
                  {
                    title: "YALI Pumice",
                    desc: "Volcanic lightweight aggregate.",
                    img: "/images/products/pumice-aggregates.jpg",
                  },
                ]}
              />
            </div>
          </section>
        )}

        {/* SERVICES TAB */}
        {activeTab === "services" && (
          <section className="py-12 md:py-24">
            <div className="container mx-auto px-4 max-w-7xl">
              {/* <div className="text-center mb-14 md:mb-20">
                   <span className="text-brand-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                     STEEL FABRICATION DIVISION
                   </span>
                   <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-4">
                     Engineering <span className="text-brand-accent">Services</span>
                   </h2>
                   <p className="text-industrial-500 max-w-2xl mx-auto">
                     End-to-end structural steel fabrication and engineering services across the GCC.
                   </p>
                 </div> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {serviceList.map((service, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 rounded-none md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="h-60 md:h-72 overflow-hidden relative">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover group-hover:grayscale-0 transition-all duration-700"
                        priority={i < 2} // preload first visible cards
                      />

                      <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-all" />
                    </div>

                    <div className="p-8 md:p-12 space-y-6">
                      <h3 className="text-2xl md:text-3xl font-display font-black uppercase italic text-brand-950 dark:text-white">
                        {service.title}
                      </h3>

                      <p className="text-industrial-500 font-medium text-sm leading-relaxed">{service.desc}</p>

                      <div className="grid grid-cols-1 gap-3 pt-4 border-t border-industrial-100 dark:border-brand-800">
                        {service.items.map((item: any, j: any) => (
                          <div
                            key={j}
                            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-industrial-400"
                          >
                            <ChevronRight className="w-3 h-3 text-brand-accent" /> {item}
                          </div>
                        ))}
                      </div>

                      <div className="pt-6">
                        <Button className="w-full h-12 md:h-14 bg-brand-accent text-white rounded-none border-none hover:bg-brand-950">
                          REQUEST QUOTATION
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-24 bg-brand-950 text-white text-center">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic mb-6">
            Technical Submission Hub
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-10">
            Download CAD drawings, certifications and technical documents.
          </p>
          <Button className="bg-brand-accent h-14 px-14 uppercase font-black">DOWNLOAD PORTFOLIO</Button>
        </section>
      </main>
    </div>
  );
}
