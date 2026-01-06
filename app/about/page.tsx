import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ShieldCheck,
  Factory,
  Globe,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <Header />

      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center bg-brand-950">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200"
              className="w-full h-full object-cover opacity-30"
              alt="About Hero"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-7xl font-display font-black text-white uppercase italic mb-6 leading-[0.9]">
              Pioneering <span className="text-brand-accent">GCC</span>
              <br className="md:hidden" /> Infrastructure
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto font-medium text-sm md:text-base px-4">
              Dual hubs in Doha and Dubai delivering world-class engineering
              precision for the modern Middle East.
            </p>
          </div>
        </section>

        {/* CORE STORY */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.3em] block mb-2 italic">
                    Our Identity • من نحن
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-none">
                    Who We Are
                  </h2>
                </div>

                <p className="text-base md:text-lg text-industrial-600 dark:text-stone-400 leading-relaxed font-medium">
                  MAG Group International is a GCC-focused building materials and
                  construction solutions company with a strong manufacturing and
                  engineering foundation. Operating across Doha and Dubai, we
                  support complex construction projects by delivering technically
                  driven, project-specific solutions aligned with international
                  standards.
                </p>

                <p className="text-sm md:text-base text-industrial-500 font-medium leading-relaxed">
                  We are more than a trading organization. Our operations are built
                  around in-house manufacturing, customization, strict quality
                  control, and engineering coordination. This integrated approach
                  allows us to meet consultant specifications, contractor demands,
                  and evolving project requirements with speed, precision, and
                  reliability.
                </p>

                {/* WHAT WE DO */}
                <div className="pt-4">
                  <span className="text-[10px] md:text-xs font-black text-brand-accent uppercase tracking-[0.3em] block mb-2 italic">
                    Our Expertise • ماذا نفعل
                  </span>
                  <p className="text-sm md:text-base text-industrial-500 font-medium leading-relaxed">
                    We work closely with consultants, developers, and EPC
                    contractors from early-stage technical consultation through
                    manufacturing and delivery. Our role is to simplify execution,
                    ensure compliance, and provide long-term value across
                    commercial, industrial, and infrastructure developments.
                  </p>
                </div>

                {/* STATS */}
                <div className="flex gap-4 pt-6">
                  <div className="flex flex-col items-center p-4 md:p-6 bg-industrial-50 dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 w-full sm:w-32">
                    <Factory className="w-6 h-6 md:w-8 md:h-8 text-brand-accent mb-2" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase text-center leading-tight">
                      In-House Manufacturing
                    </span>
                  </div>

                  <div className="flex flex-col items-center p-4 md:p-6 bg-industrial-50 dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 w-full sm:w-32">
                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-brand-accent mb-2" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase text-center leading-tight">
                      Quality & Compliance
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800"
                  className="w-full h-64 md:h-80 object-cover shadow-2xl"
                  alt="Manufacturing Facility"
                />
                <img
                  src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=800"
                  className="w-full h-64 md:h-80 object-cover mt-8 md:mt-12 shadow-2xl"
                  alt="Engineering Operations"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR HUBS */}
        <section className="py-16 md:py-24 bg-industrial-50 dark:bg-brand-900 border-y border-industrial-100 dark:border-brand-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic">
                Regional Hubs
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              {/* QATAR */}
              <div className="p-8 md:p-12 bg-white dark:bg-brand-950 border-t-4 border-brand-accent shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-brand-accent" />
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-industrial-200" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase italic mb-4">
                  MAG Qatar Hub
                </h3>
                <p className="text-industrial-500 font-medium text-sm leading-relaxed mb-6">
                  Our Doha hub operates as a core manufacturing and engineering
                  center, supporting large-scale infrastructure and government
                  projects. The facility enables controlled production, testing,
                  and full compliance with regional authority standards.
                </p>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent border-b border-brand-accent/20 pb-1">
                  Doha Industrial Area
                </span>
              </div>

              {/* UAE */}
              <div className="p-8 md:p-12 bg-white dark:bg-brand-950 border-t-4 border-brand-950 dark:border-white shadow-xl">
                <div className="flex justify-between items-start mb-6">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-brand-950 dark:text-white" />
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-industrial-200" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase italic mb-4">
                  DMAG UAE Hub
                </h3>
                <p className="text-industrial-500 font-medium text-sm leading-relaxed mb-6">
                  Strategically located in Jebel Ali, our UAE hub enables rapid
                  project execution, regional logistics, and engineering support
                  across the GCC, ensuring flexibility, speed, and consistent
                  delivery standards.
                </p>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-950 dark:text-white border-b border-brand-950/20 dark:border-white/20 pb-1">
                  Jebel Ali Free Zone
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
