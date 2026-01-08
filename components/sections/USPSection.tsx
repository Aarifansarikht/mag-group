import { Settings, Truck, ShieldCheck, Layers } from "lucide-react";
import { Button } from "@/components/ui/Primitives";
import Link from "next/link";
import Image from "next/image";

export default function USPSection() {
  return (
    <section className="py-16 md:py-28 bg-brand-950 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,138,0,0.12),transparent_55%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <span className="text-brand-accent font-black text-xs uppercase tracking-[0.5em] block">
              OUR DIFFERENCE • USP
            </span>

            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase italic leading-[1] md:leading-[0.9]">
              MORE THAN A <br />
              <span className="text-brand-accent">SUPPLIER.</span>
            </h2>

            <p className="text-stone-300 text-base md:text-lg font-medium leading-relaxed max-w-xl">
              MAG Group is not just a trading company — we are a full-scale manufacturer with in-house
              engineering, fabrication, and customization capabilities. This gives our clients unmatched
              flexibility, faster delivery timelines, and total quality control from concept to execution.
            </p>

            {/* USP POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {[
                {
                  title: "IN-HOUSE MANUFACTURING",
                  desc: "Complete control over production quality, timelines, and specifications.",
                  icon: Settings,
                },
                {
                  title: "CUSTOM ENGINEERING",
                  desc: "Products tailored exactly to project drawings and site requirements.",
                  icon: Layers,
                },
                {
                  title: "FASTER TURNAROUND",
                  desc: "No dependency on third-party factories or long import cycles.",
                  icon: Truck,
                },
                {
                  title: "CONSISTENT QUALITY",
                  desc: "Strict QA processes aligned with international standards.",
                  icon: ShieldCheck,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-accent transition-all"
                >
                  <item.icon className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                  <div>
                    <h5 className="text-[11px] font-black uppercase tracking-widest text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-stone-400 leading-snug font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link href="/contact">
                <Button className="h-14 md:h-16 px-10 md:px-12 bg-brand-accent text-white hover:bg-white hover:text-brand-950 transition-all font-black uppercase tracking-widest shadow-xl border-none">
                  START A CUSTOM PROJECT
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="absolute -inset-6 bg-brand-accent/10 blur-3xl rounded-full" />

            {/* Image Wrapper */}
            <div className="relative w-full h-[420px] md:h-[560px] shadow-2xl border border-white/10 overflow-hidden">
              <Image
                src="/images/usp-manufacturing.jpg"
                alt="Manufacturing Facility"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-brand-accent text-white px-6 py-5 shadow-xl backdrop-blur-xl border border-white/20">
              <p className="text-3xl font-display font-black italic leading-none">
                100%
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest mt-1">
                In-House Manufacturing
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
