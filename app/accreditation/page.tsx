import React from "react";
import { ShieldCheck, Award, CheckCircle2, FileCheck, Layers } from "lucide-react";
import Image from "next/image";
export default function AccreditationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="bg-brand-accent text-white py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-6 leading-none">
              Quality <br className="sm:hidden" /> Engineered.
            </h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto font-medium opacity-90 px-4">
              Built on international standards, audited processes, and uncompromising compliance across every product
              line.
            </p>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
              {[
                {
                  icon: ShieldCheck,
                  title: "ISO 9001",
                  desc: "Quality Management",
                },
                {
                  icon: Award,
                  title: "ASTM",
                  desc: "Material Standards",
                },
                {
                  icon: CheckCircle2,
                  title: "ISO 45001",
                  desc: "Occupational Safety",
                },
                {
                  icon: FileCheck,
                  title: "EN 124",
                  desc: "Drainage Compliance",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 md:p-10 border border-industrial-100 dark:border-brand-800 text-center space-y-4 hover:border-brand-accent transition-colors"
                >
                  <item.icon className="w-10 h-10 md:w-16 md:h-16 mx-auto text-brand-accent" />
                  <h3 className="text-sm md:text-xl font-black uppercase italic text-brand-950 dark:text-white leading-none">
                    {item.title}
                  </h3>
                  <p className="text-[8px] md:text-[10px] text-industrial-500 font-bold uppercase tracking-widest leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* TESTING SECTION */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-950 dark:bg-brand-900 text-white p-8 md:p-16 shadow-3xl">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase italic mb-6 md:mb-8 leading-none">
                  Certified Testing & Validation
                </h2>

                <p className="text-stone-400 font-medium leading-relaxed text-sm md:text-base">
                  All MAG & DMAG products undergo strict in-house and third-party verification before delivery. Load
                  performance, corrosion resistance, and dimensional accuracy are validated to meet or exceed
                  international project specifications.
                </p>

                <ul className="space-y-4 text-[10px] md:text-sm font-bold uppercase tracking-tight">
                  <li className="flex gap-4 items-center">
                    <Layers className="w-5 h-5 text-brand-accent shrink-0" />
                    EN 124 Load Classification (A15 – F900)
                  </li>
                  <li className="flex gap-4 items-center">
                    <Layers className="w-5 h-5 text-brand-accent shrink-0" />
                    Corrosion & Coating Verification
                  </li>
                  <li className="flex gap-4 items-center">
                    <Layers className="w-5 h-5 text-brand-accent shrink-0" />
                    Batch Traceability & Material Certification
                  </li>
                </ul>
              </div>

              <div className="relative w-full h-64 md:h-80 overflow-hidden shadow-2xl">
                <Image
                  src="/images/inspection.jpg"
                  alt="Industrial Quality Testing & Inspection"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
