"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
const ProductBlock = ({ title, desc, items, icons, reverse = false }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className="bg-white/40 dark:bg-brand-950/40 backdrop-blur-lg rounded-none md:rounded-3xl overflow-hidden shadow-[0_4px_60px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 items-stretch mb-12 border border-white/20 dark:border-brand-800/50">
      {/* LEFT */}
      <div className={`lg:col-span-4 p-8 md:p-16 flex flex-col justify-center ${reverse ? "lg:order-2" : ""}`}>
        <h3 className="text-3xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic mb-4 leading-tight">
          {title}
        </h3>

        {/* INDICATORS */}
        <div className="flex gap-2 mb-6">
          {items.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeIndex === i ? "w-12 bg-brand-accent" : "w-4 bg-industrial-200 hover:bg-industrial-300"
              }`}
            />
          ))}
        </div>

        <p className="text-sm text-industrial-500 font-medium mb-6 leading-relaxed">{desc}</p>

        <div className="relative w-full h-40 md:h-80 overflow-hidden mb-6 border border-white/20 shadow-lg">
          <Image
            key={activeItem.img}
            src={activeItem.img || "/images/placeholder.jpg"}
            alt={activeItem.title}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            priority
            className="object-cover transition-opacity duration-700"
          />
        </div>

        {/* ICONS */}
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

      {/* RIGHT */}
      <div
        className={`lg:col-span-8 bg-industrial-50/20 dark:bg-brand-900/10 p-4 md:p-16 flex flex-col justify-center ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        <ul className="grid grid-cols-1 gap-2 md:gap-4">
          {items.map((item: any, i: number) => {
            const isActive = activeIndex === i;

            return (
              <li
                key={i}
                className={`cursor-pointer backdrop-blur-md border transition-all ${
                  isActive
                    ? "bg-brand-accent/10 border-brand-accent"
                    : "bg-white/60 dark:bg-brand-950/60 border-white/10 dark:border-brand-800/30"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(i)}
                  className="w-full flex items-center justify-between px-6 md:px-10 py-5 md:py-7 text-left"
                >
                  <span
                    className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${
                      isActive ? "text-brand-accent" : "text-brand-950 dark:text-white"
                    }`}
                  >
                    {item.title}
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "rotate-180 text-brand-accent" : "text-industrial-300"
                    }`}
                  />
                </button>

                {isActive && (
                  <div className="px-6 md:px-10 pb-6 text-sm text-industrial-500 leading-relaxed border-t border-white/10 dark:border-brand-800/30 animate-fade-up">
                    {item.desc}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductBlock;
