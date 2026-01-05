
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Primitives';
import { Construction, HardHat, Warehouse, Zap, ShieldCheck, ArrowRight, ChevronRight, Scaling, Layers } from 'lucide-react';

const serviceList = [
  { 
    title: "Structural Steel", 
    desc: "Precision engineering for high-rise frames, stadium structures, and bridge systems.",
    img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200",
    items: ["High-Rise Structures", "Heavy Bridge Girders", "Stadium Canopy Systems"]
  },
  { 
    title: "Mezzanine & Flooring", 
    desc: "Light and heavy industrial mezzanines designed for maximum spatial optimization.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    items: ["Steel Platform Systems", "Suspended Office Floors", "Catwalk Systems"]
  },
  { 
    title: "Logistics Hubs", 
    desc: "Turnkey structural solutions for cold storage and automated logistics hubs.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    items: ["High-Span Warehouse Roofs", "Racking Support", "Energy-Efficient Enclosures"]
  },
  { 
    title: "Specialized Tech", 
    desc: "Bespoke engineering for retractable glass systems and mission-critical energy doors.",
    img: "https://images.unsplash.com/photo-1522071823931-0d9273659c2c?q=80&w=1200",
    items: ["Retractable Glass Roofs", "Safety Doors", "Protective Railings"]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-brand-950 text-white py-20 md:py-32 relative overflow-hidden">
           <div className="absolute inset-0 opacity-20">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000" className="w-full h-full object-cover" alt="Services Background" />
           </div>
           <div className="container mx-auto px-4 relative z-10 text-center">
              <span className="text-brand-accent font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 block italic">Fabrication Hub • Doha & Dubai</span>
              <h1 className="text-4xl md:text-7xl font-display font-black uppercase italic mb-6 leading-none">Steel <span className="text-brand-accent">Fabrication</span></h1>
              <p className="text-stone-300 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">World-class structural steel solutions delivered with ISO-certified precision across the Middle East.</p>
           </div>
        </section>

        <section className="py-12 md:py-24">
           <div className="container mx-auto px-4 md:px-6 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 {serviceList.map((service, i) => (
                   <div key={i} className="bg-white dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 rounded-none md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                      <div className="h-60 md:h-72 overflow-hidden relative">
                         <img src={service.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={service.title} />
                         <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-transparent transition-all" />
                      </div>
                      <div className="p-8 md:p-12 space-y-6">
                         <h3 className="text-2xl md:text-3xl font-display font-black uppercase italic text-brand-950 dark:text-white leading-none">{service.title}</h3>
                         <p className="text-industrial-500 font-medium text-sm leading-relaxed">{service.desc}</p>
                         <div className="grid grid-cols-1 gap-3 pt-4 border-t border-industrial-100 dark:border-brand-800">
                           {service.items.map((item, j) => (
                             <div key={j} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-industrial-400 group-hover:text-brand-950 dark:group-hover:text-white transition-colors">
                                <ChevronRight className="w-3 h-3 text-brand-accent" /> {item}
                             </div>
                           ))}
                         </div>
                         <div className="pt-6">
                            <Button className="w-full h-12 md:h-14 bg-brand-accent text-white rounded-none border-none hover:bg-brand-950 transition-colors">PROJECT ENQUIRY</Button>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FACILITY STATS */}
        <section className="py-16 md:py-24 bg-brand-950 text-white">
          <div className="container mx-auto px-4 text-center max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-display font-black uppercase italic mb-12 md:mb-20 tracking-tight leading-none">Industrial Capacity</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {[
                { label: "Workshop Area", value: "25,000 SQM", icon: Scaling },
                { label: "Annual Capacity", value: "12,000 TONS", icon: Construction },
                { label: "Expert Workforce", value: "350+ STAFF", icon: HardHat }
              ].map((stat, i) => (
                <div key={i} className="p-10 md:p-16 border border-brand-800 bg-brand-900 shadow-2xl relative overflow-hidden group">
                   <stat.icon className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 text-brand-accent opacity-10 group-hover:opacity-20 transition-all" />
                   <p className="text-4xl md:text-6xl font-display font-black italic text-brand-accent mb-4 leading-none">{stat.value}</p>
                   <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
