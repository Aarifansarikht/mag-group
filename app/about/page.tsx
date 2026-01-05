import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Factory, Settings, Construction, Globe, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* HERO */}
        <section className="relative h-[60vh] flex items-center bg-brand-950">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200" className="w-full h-full object-cover opacity-30" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-7xl font-display font-black text-white uppercase italic mb-6">Pioneering <span className="text-brand-accent">GCC</span> Infrastructure</h1>
             <p className="text-stone-400 max-w-2xl mx-auto font-medium">Dual hubs in Doha and Dubai delivering world-class engineering precision.</p>
          </div>
        </section>

        {/* CORE STORY */}
        <section className="py-24 bg-white dark:bg-brand-950">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="space-y-8">
                    <div>
                       <span className="text-xs font-black text-brand-accent uppercase tracking-widest block mb-2">Our Identity</span>
                       <h2 className="text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-none">Who We Are</h2>
                    </div>
                    <p className="text-lg text-industrial-600 dark:text-stone-400 leading-relaxed font-medium">
                       MAG Group International is more than just a trading company. We are an industrial fabrication powerhouse with over 20 years of presence in the Middle East. We specialize in two primary verticals: high-spec drainage accessories and advanced structural steel systems.
                    </p>
                    <p className="text-industrial-500 font-medium">
                       With fully operational manufacturing plants in Doha (MAG General Trading) and Dubai (DMAG Trading), we maintain 100% control over the fabrication quality, material grading, and load-testing protocols.
                    </p>
                    <div className="flex gap-4">
                       <div className="flex flex-col items-center p-6 bg-industrial-50 dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 rounded-sm w-32">
                          <Factory className="w-8 h-8 text-brand-accent mb-2" />
                          <span className="text-[10px] font-black uppercase text-center">Owner Ops</span>
                       </div>
                       <div className="flex flex-col items-center p-6 bg-industrial-50 dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 rounded-sm w-32">
                          <ShieldCheck className="w-8 h-8 text-brand-accent mb-2" />
                          <span className="text-[10px] font-black uppercase text-center">Certified</span>
                       </div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800" className="w-full h-80 object-cover shadow-2xl" />
                    <img src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=800" className="w-full h-80 object-cover mt-12 shadow-2xl" />
                 </div>
              </div>
           </div>
        </section>

        {/* OUR HUBS */}
        <section className="py-24 bg-industrial-50 dark:bg-brand-900 border-y border-industrial-100 dark:border-brand-800">
           <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-display font-black text-brand-950 dark:text-white uppercase italic">Regional Infrastructure Hubs</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="p-12 bg-white dark:bg-brand-950 border-t-4 border-brand-accent shadow-xl group">
                    <div className="flex justify-between items-start mb-8">
                       <MapPin className="w-10 h-10 text-brand-accent" />
                       <Globe className="w-6 h-6 text-industrial-200" />
                    </div>
                    <h3 className="text-3xl font-display font-black uppercase italic text-brand-950 dark:text-white mb-4">MAG Qatar Hub</h3>
                    <p className="text-industrial-500 font-medium text-sm leading-relaxed mb-6">
                       Our Doha facility is the heart of our heavy casting and large-scale structural steel operations, serving the Metro, Stadiums, and Lusail developments.
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Doha Industrial Area</span>
                 </div>
                 <div className="p-12 bg-white dark:bg-brand-950 border-t-4 border-brand-950 shadow-xl group">
                    <div className="flex justify-between items-start mb-8">
                       <MapPin className="w-10 h-10 text-brand-950 dark:text-white" />
                       <Globe className="w-6 h-6 text-industrial-200" />
                    </div>
                    <h3 className="text-3xl font-display font-black uppercase italic text-brand-950 dark:text-white mb-4">DMAG UAE Hub</h3>
                    <p className="text-industrial-500 font-medium text-sm leading-relaxed mb-6">
                       Jebel Ali based operations focusing on high-speed structural fabrication, logistics warehouse systems, and aesthetic glass/steel retractable roofs.
                    </p>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-950 dark:text-white">Jebel Ali Free Zone</span>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}