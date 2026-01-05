
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Award, CheckCircle2, FileCheck, Layers } from 'lucide-react';

export default function AccreditationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-brand-accent text-white py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-6xl font-display font-black uppercase italic mb-6 leading-none">Quality <br className="sm:hidden"/> Driven.</h1>
             <p className="text-base md:text-xl max-w-2xl mx-auto font-medium opacity-90 px-4">Commitment to global engineering standards. Our processes are strictly audited for safety and reliability.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white dark:bg-brand-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
              {[
                { icon: ShieldCheck, title: "ISO 9001", desc: "Quality Systems" },
                { icon: Award, title: "ASTM", desc: "Durability" },
                { icon: CheckCircle2, title: "ISO 45001", desc: "Safety Systems" },
                { icon: FileCheck, title: "EN 124", desc: "Drainage Tech" }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-10 border border-industrial-100 dark:border-brand-800 text-center space-y-4 hover:border-brand-accent transition-colors">
                  <item.icon className="w-10 h-10 md:w-16 md:h-16 mx-auto text-brand-accent" />
                  <h3 className="text-sm md:text-xl font-black uppercase italic text-brand-950 dark:text-white leading-none">{item.title}</h3>
                  <p className="text-[8px] md:text-[10px] text-industrial-500 font-bold uppercase tracking-widest leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-brand-950 dark:bg-brand-900 text-white p-8 md:p-16 shadow-3xl">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase italic mb-6 md:mb-8 leading-none">Rigorous Lab Testing</h2>
                <p className="text-stone-400 font-medium leading-relaxed text-sm md:text-base">
                  Every product leaving our facility undergoes load-bearing and stress testing. Our manhole covers are rated from A15 to F900, ensuring they exceed project load requirements.
                </p>
                <ul className="space-y-4 text-[10px] md:text-sm font-bold uppercase tracking-tight">
                  <li className="flex gap-4 items-center"><Layers className="w-5 h-5 text-brand-accent shrink-0" /> 100% Traceability</li>
                  <li className="flex gap-4 items-center"><Layers className="w-5 h-5 text-brand-accent shrink-0" /> Anti-Corrosion Verification</li>
                  <li className="flex gap-4 items-center"><Layers className="w-5 h-5 text-brand-accent shrink-0" /> Load Testing to EN124</li>
                </ul>
              </div>
              <div className="overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800" className="w-full h-64 md:h-80 object-cover shadow-2xl" alt="Testing Lab" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
