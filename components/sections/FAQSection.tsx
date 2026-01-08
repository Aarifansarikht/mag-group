"use client";
import { useState } from "react";
import { AccordionItem } from "@/components/ui/Primitives";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-industrial-50/50 dark:bg-brand-900/30 backdrop-blur-md border-y border-industrial-100 dark:border-brand-800">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-brand-accent font-black text-xs uppercase tracking-[0.5em] mb-4 block">
            KNOWLEDGE BASE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-none">
            FREQUENTLY ASKED <br />
            QUESTIONS
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "WHICH REGIONS DOES MAG GROUP SERVICE?",
              a: "We operate fully functional hubs in Qatar and the UAE, providing local manufacturing and distribution across the entire GCC region.",
            },
            {
              q: "ARE YOUR PRODUCTS COMPLIANT WITH INTERNATIONAL STANDARDS?",
              a: "Yes. All our drainage hardware is tested to EN124 standards, and our steel fabrication follows strict ISO 9001:2015 and ASTM compliance protocols.",
            },
            {
              q: "CAN YOU PROVIDE CUSTOM FABRICATION FOR UNIQUE PROJECTS?",
              a: "Absolutely. Our in-house engineering team specializes in custom structural designs, from specialized energy sector doors to bespoke mezzanine flooring.",
            },
            {
              q: "DO YOU PROVIDE TECHNICAL SUBMITTALS AND CAD DRAWINGS?",
              a: "Yes, we provide full technical support for consultants and contractors, including shop drawings, CAD files, and material certificates for every batch.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white/40 dark:bg-brand-950/40 backdrop-blur-md border border-white/20 dark:border-brand-800/50"
            >
              <AccordionItem title={faq.q} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <p className="px-6 pb-6 text-sm md:text-base text-industrial-500 dark:text-stone-400 font-medium leading-relaxed italic">
                  {faq.a}
                </p>
              </AccordionItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
