"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Primitives";
import HeroSlider from "@/components/ui/HeroSlider";

export default function HeroSection() {
  return (
    <>
      <section className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden bg-brand-950">
        {/* SLIDER BACKGROUND */}
        <HeroSlider />

        {/* CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 mb-6 animate-fade-up">
              <span className="text-brand-accent font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
                MAG GROUP INTERNATIONAL • GCC
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase italic leading-[0.9] md:leading-[0.85] mb-8 animate-fade-up delay-100 drop-shadow-2xl">
              ENGINEERING <br />
              <span className="text-brand-accent">THE GCC.</span>
            </h1>

            <p className="text-stone-300 max-w-xl font-medium text-base md:text-xl mb-10 md:mb-12 animate-fade-up delay-200 leading-relaxed">
              A dual-hub manufacturing and construction solutions group delivering precision-engineered systems for
              infrastructure, commercial, and industrial developments across the Middle East.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 animate-fade-up delay-300">
              <Link href="/products" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 h-14 md:h-16 px-10 md:px-12 text-white rounded-none shadow-2xl border-none">
                  EXPLORE RANGE
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white/20 bg-white/5 backdrop-blur-lg text-white hover:bg-white/10 h-14 md:h-16 px-10 md:px-12 rounded-none"
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
