import { Construction, DoorOpen, Globe, Layers, ShieldCheck, Warehouse } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Primitives";

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* CONTENT */}
          <div className="space-y-8 md:space-y-10">
            <span className="text-brand-accent font-black text-xs uppercase tracking-[0.5em] block">
              STEEL FABRICATION SERVICES
            </span>

            <h2 className="text-4xl md:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1] md:leading-[0.9]">
              ENGINEERED <br />
              <span className="text-brand-accent">STEEL SOLUTIONS</span>
            </h2>

            <p className="text-base md:text-lg text-industrial-500 font-medium leading-relaxed max-w-xl">
              We deliver end-to-end steel fabrication and structural engineering services for infrastructure,
              industrial, commercial, and high-end residential projects across the GCC. Our in-house facilities ensure
              precision manufacturing, customization, and compliance with international standards.
            </p>

            {/* SERVICE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  title: "STRUCTURAL STEEL SYSTEMS",
                  desc: "Steel frameworks for buildings, bridges, and stadiums",
                  icon: Construction,
                },
                {
                  title: "LIGHTWEIGHT & MEZZANINE STRUCTURES",
                  desc: "Light steel systems, mezzanine floors & suspended platforms",
                  icon: Layers,
                },
                {
                  title: "INDUSTRIAL & LOGISTICS FACILITIES",
                  desc: "Warehouses, factories & prefabricated steel buildings",
                  icon: Warehouse,
                },
                {
                  title: "RETRACTABLE & SPECIALIZED SYSTEMS",
                  desc: "Retractable glass roofs, transformer doors & energy doors",
                  icon: Globe,
                },
                {
                  title: "ACCESS & SHUTTER SYSTEMS",
                  desc: "Steel shutters, rolling systems & automated access solutions",
                  icon: DoorOpen,
                },
                {
                  title: "PROTECTIVE & SAFETY STRUCTURES",
                  desc: "Guard rails, handrails & protective steel systems",
                  icon: ShieldCheck,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 md:p-6 bg-white/50 dark:bg-brand-900/40 backdrop-blur-md border border-industrial-100/50 dark:border-brand-800/50 shadow-sm hover:shadow-md transition-all border-l-2 hover:border-l-brand-accent"
                >
                  <s.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-accent shrink-0" />
                  <div>
                    <h5 className="text-[11px] md:text-xs font-black uppercase tracking-widest text-brand-950 dark:text-white mb-1">
                      {s.title}
                    </h5>
                    <p className="text-[10px] font-bold text-industrial-500 uppercase tracking-tight leading-snug">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/services" className="block sm:inline-block pt-4">
              <Button className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 bg-brand-950 text-white hover:bg-brand-accent transition-colors font-black uppercase tracking-widest border-none shadow-xl">
                VIEW ALL STEEL SERVICES
              </Button>
            </Link>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            {/* Image 1 */}
            <div className="relative w-full h-64 md:h-80 shadow-2xl border-2 md:border-4 border-white/10 overflow-hidden">
              <Image
                src="/images/services/protective-railings.jpg"
                alt="Steel Fabrication Facility"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full h-64 md:h-80 mt-8 md:mt-12 shadow-2xl border-2 md:border-4 border-white/10 overflow-hidden">
              <Image
                src="/images/services/energy-doors.jpg"
                alt="Structural Steel Works"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
