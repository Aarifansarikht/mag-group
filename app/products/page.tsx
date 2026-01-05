
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Primitives';
import { 
  ChevronRight, 
  Droplets, 
  Construction, 
  Layers, 
  Warehouse, 
  ShieldCheck, 
  DoorOpen, 
  HardHat, 
  Home, 
  Sun, 
  Settings,
  Mountain
} from 'lucide-react';

const ProductBlock = ({ title, desc, items, icons, img, reverse = false }: any) => (
  <div className="bg-white/40 dark:bg-brand-950/40 backdrop-blur-lg rounded-none md:rounded-3xl overflow-hidden shadow-[0_4px_60px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 items-stretch mb-12 md:20 border border-white/20 dark:border-brand-800/50">
    <div className={`lg:col-span-4 p-8 md:p-16 flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}>
      <h3 className="text-3xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic mb-4 leading-tight">{title}</h3>
      <div className="flex gap-2 mb-6">
        <div className="h-1 w-12 bg-brand-accent rounded-full"></div>
        <div className="h-1 w-4 bg-industrial-200 rounded-full"></div>
      </div>
      <p className="text-sm text-industrial-500 font-medium mb-8 md:mb-10 leading-relaxed">{desc}</p>
      
      {/* Dynamic Product Visuals */}
      <div className="flex gap-4 mb-6 md:mb-8">
        <img src={img} className="w-full h-40 md:h-48 object-cover rounded-none shadow-lg border border-white/20" alt={title} />
      </div>

      <div className="flex gap-4">
        {icons.map((Icon: any, i: number) => (
           <div key={i} className="w-12 h-12 md:w-16 md:h-16 bg-white/30 dark:bg-brand-900/40 backdrop-blur-md flex items-center justify-center p-3 border border-white/10 dark:border-brand-800/50">
              <Icon className="w-full h-full text-brand-accent opacity-60" />
           </div>
        ))}
      </div>
    </div>
    <div className={`lg:col-span-8 bg-industrial-50/20 dark:bg-brand-900/10 backdrop-blur-sm p-4 md:p-16 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
      <ul className="grid grid-cols-1 gap-2 md:gap-4">
        {items.map((item: any, i: number) => (
          <li key={i} className="flex items-center justify-between bg-white/60 dark:bg-brand-950/60 backdrop-blur-md px-6 md:px-10 py-5 md:py-7 border border-white/10 dark:border-brand-800/30 group hover:border-brand-accent transition-all cursor-pointer shadow-sm">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-950 dark:text-white group-hover:text-brand-accent pr-4">{item}</span>
            <ChevronRight className="w-4 h-4 text-industrial-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all shrink-0" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <Header />
      <main className="flex-grow pt-20 bg-[#fbfbfb] dark:bg-brand-950 relative overflow-hidden">
        {/* Background glow for glass effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-brand-accent/5 blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-accent/5 blur-[80px] md:blur-[120px]" />
        </div>

        <section className="bg-white/50 dark:bg-brand-950/50 backdrop-blur-xl py-20 md:py-32 text-center border-b border-white/10 dark:border-brand-800/50">
           <div className="container mx-auto px-4">
              <span className="text-[9px] md:text-[10px] font-black text-brand-accent uppercase tracking-[0.4em] mb-4 block italic">Building Materials • Construction Hub</span>
              <h1 className="text-4xl md:text-7xl font-display font-black text-brand-950 dark:text-white uppercase italic mb-6 leading-[0.9]">Product <br/> <span className="text-brand-accent">Range</span></h1>
              <p className="text-industrial-500 max-w-xl mx-auto font-medium text-base md:text-lg leading-relaxed">A comprehensive portfolio ranging from world-class drainage systems to light-weight construction aggregates.</p>
           </div>
        </section>

        <section className="py-12 md:py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <ProductBlock 
              title="Drainage Solutions"
              desc="Premium drainage hardware for all major infrastructure enterprises."
              img="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800"
              icons={[Droplets, ShieldCheck]}
              items={[
                "Manhole Covers & Gratings – RBA & FRA",
                "Channel Drainages – MUFLE / GRIDIRON",
                "Roof & Parking Drains – FRANCO",
                "Access & Hatch Covers – HOWEGREEN",
                "Grease Interceptors – ENEKA",
                "PVC Fabricated Items – FITCO"
              ]}
            />

            <ProductBlock 
              title="Clay Roofing Products"
              desc="Natural and glazed clay roof tiles from the world's finest manufacturers."
              img="https://images.unsplash.com/photo-1635443375043-40e11c504ca0?q=80&w=800"
              icons={[Home, Layers]}
              items={[
                "Antique Clay Roof Tiles – TOGNANA",
                "Glazed Roof Tiles – CEIPO",
                "Glazed Roof Tiles – CEJATEL"
              ]}
              reverse
            />

            <ProductBlock 
              title="Solar Lighting"
              desc="Smart solar lighting solutions - Sole authorized distributor of TRUELITE USA."
              img="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800"
              icons={[Sun, Settings]}
              items={[
                "Smart Solar Outdoor Lights – TRUELITE",
                "Efficiency Photovoltaic Panels",
                "Autonomous Control Systems"
              ]}
            />

            <ProductBlock 
              title="Doors & Barriers"
              desc="Automated and high-security closure systems for all usage scenarios."
              img="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800"
              icons={[DoorOpen, ShieldCheck]}
              items={[
                "Rolling Shutters – COL",
                "Garage Doors – MARCEGAGLIA",
                "Sectional Doors – C.H.I, USA",
                "Automation Systems – NICE / KINGGATES"
              ]}
              reverse
            />

            <ProductBlock 
              title="Aggregates"
              desc="Natural light-weight aggregates from the Yali Island quarry, Greece."
              img="https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800"
              icons={[Mountain, Layers]}
              items={[
                "YALI Pumice Aggregates",
                "Insulation Grade Raw Aggregates",
                "Landscape Media"
              ]}
            />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-brand-950 text-white text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-accent/5 backdrop-blur-3xl -z-10" />
           <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase italic mb-8 leading-none">Technical <br className="sm:hidden"/> Submission Hub</h2>
              <p className="text-stone-400 mb-10 max-w-2xl mx-auto font-medium text-sm md:text-base">Download full project portfolios, CAD drawings, and ASTM test results for your project documentation.</p>
              <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 h-14 md:h-16 px-10 md:px-16 text-white font-black uppercase tracking-widest rounded-none border-none">DOWNLOAD PORTFOLIO</Button>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
