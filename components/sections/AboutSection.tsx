import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Primitives";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* IMAGE */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-brand-accent/5 rounded-full blur-3xl" />

            {/* Image Wrapper */}
            <div className="relative w-full h-[400px] md:h-[550px] shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="Industrial Workflow"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-none"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-brand-accent/90 backdrop-blur-xl text-white p-8 md:p-12 hidden md:block shadow-3xl border border-white/10">
              <p className="text-4xl md:text-5xl font-display font-black italic leading-none">20+</p>
              <p className="text-[10px] font-black uppercase tracking-widest mt-2">Years of Excellence</p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6 md:space-y-8 lg:pl-10 order-1 lg:order-2">
            <div>
              <span className="text-xs font-black text-brand-accent uppercase tracking-[0.3em] mb-3 block italic">
                About Us • من نحن
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1.1] md:leading-none">
                The Regional Backbone <br className="hidden md:block" />
                Of Construction.
              </h2>
            </div>

            <p className="text-base md:text-lg text-industrial-600 dark:text-stone-400 leading-relaxed font-medium">
              MAG Group International stands as the dual-hub powerhouse in the Middle East, operating state-of-the-art
              fabrication facilities in both Doha and Dubai.
            </p>

            <div className="p-5 md:p-6 bg-industrial-50 dark:bg-brand-900/50 backdrop-blur-md border border-industrial-100 dark:border-brand-800">
              <p className="text-sm md:text-base text-industrial-500 font-medium italic">
                "Our mission is to provide architects and engineers with reliable, high-specification drainage hardware
                and structural steel components that exceed international safety benchmarks."
              </p>
            </div>

            <div className="pt-4 md:pt-6">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 border-brand-950 dark:border-white hover:bg-brand-950 hover:text-white dark:hover:bg-white dark:hover:text-brand-950 transition-all font-black uppercase tracking-widest"
                >
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
