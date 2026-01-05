
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

const ProductBlock = ({ title, sub, desc, items, icons, img, reverse = false }: any) => (
  <div className="bg-white/40 dark:bg-brand-950/40 backdrop-blur-lg rounded-3xl overflow-hidden shadow-[0_4px_60px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 items-stretch mb-20 border border-white/20 dark:border-brand-800/50">
    <div className={`lg:col-span-4 p-12 md:p-16 flex flex-col justify-center ${reverse ? 'lg:order-2' : ''}`}>
      <h3 className="text-4xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic mb-4 leading-tight">{title}</h3>
      <div className="flex gap-2 mb-6">
        <div className="h-1.5 w-12 bg-brand-accent rounded-full"></div>
        <div className="h-1.5 w-4 bg-industrial-200 rounded-full"></div>
      </div>
      <p className="text-sm text-industrial-500 font-medium mb-10 leading-relaxed">{desc}</p>
      
      {/* Dynamic Product Visuals */}
      <div className="flex gap-4 mb-8">
        <img src={img} className="w-full h-48 object-cover rounded-sm shadow-lg border-2 border-white/20" alt={title} />
      </div>

      <div className="flex gap-4">
        {icons.map((Icon: any, i: number) => (
           <div key={i} className="w-16 h-16 bg-white/30 dark:bg-brand-900/40 backdrop-blur-md flex items-center justify-center p-4 border border-white/10 dark:border-brand-800/50">
              <Icon className="w-full h-full text-brand-accent opacity-60" />
           </div>
        ))}
      </div>
    </div>
    <div className={`lg:col-span-8 bg-industrial-50/20 dark:bg-brand-900/10 backdrop-blur-sm p-8 md:p-16 flex flex-col justify-center ${reverse ? 'lg:order-1' : ''}`}>
      <ul className="grid grid-cols-1 gap-4">
        {items.map((item: any, i: number) => (
          <li key={i} className="flex items-center justify-between bg-white/60 dark:bg-brand-950/60 backdrop-blur-md px-10 py-7 border border-white/10 dark:border-brand-800/30 group hover:border-brand-accent transition-all cursor-pointer shadow-sm hover:shadow-md">
            <span className="text-xs font-black uppercase tracking-widest text-brand-950 dark:text-white group-hover:text-brand-accent">{item}</span>
            <ChevronRight className="w-4 h-4 text-industrial-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 bg-[#fbfbfb] dark:bg-brand-950 relative overflow-hidden">
        {/* Background glow for glass effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-accent/5 blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px]" />
        </div>

        <section className="bg-white/50 dark:bg-brand-950/50 backdrop-blur-xl py-32 text-center border-b border-white/10 dark:border-brand-800/50">
           <div className="container mx-auto px-4">
              <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.5em] mb-4 block">Building Materials • Construction Materials</span>
              <h1 className="text-7xl font-display font-black text-brand-950 dark:text-white uppercase italic mb-6 leading-none">Our Product <br/> <span className="text-brand-accent">Range</span></h1>
              <p className="text-industrial-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">Discover our comprehensive portfolio ranging from world-class drainage systems to light-weight construction aggregates.</p>
           </div>
        </section>

        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <ProductBlock 
              title="Drainage Solutions"
              desc="Premium drainage hardware for all major infrastructure enterprises."
              img="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=800"
              icons={[Droplets, ShieldCheck]}
              items={[
                "Manhole Covers, Gratings & JRC Covers – RBA & FRA, India",
                "Channel Drainages – MUFLE / GRIDIRON / FIRSTPLAST, Italy",
                "Roof Drains & Parking Drains – FRANCO, India",
                "Multipart Access & Hatch Covers – HOWEGREEN, U.K",
                "Grease Interceptors & Oil Separators – ENEKA, Lithuania",
                "Grease Traps & PVC Fabricated Items – FITCO, UAE"
              ]}
            />

            <ProductBlock 
              title="Clay Roofing Products"
              desc="Natural and glazed clay roof tiles from the world's finest manufacturers."
              img="https://images.unsplash.com/photo-1635443375043-40e11c504ca0?q=80&w=800"
              icons={[Home, Layers]}
              items={[
                "Natural & Antique Clay Roof Tiles – TOGNANA, Italy",
                "Glazed Roof Tiles – CEIPO, Italy",
                "Glazed Roof Tiles – CEJATEL, Brazil"
              ]}
              reverse
            />

            <ProductBlock 
              title="Solar Outdoor Lights"
              desc="Sole authorized distributor of TRUELITE USA - Smart solar lighting solutions."
              img="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800"
              icons={[Sun, Settings]}
              items={[
                "Smart Solar Outdoor Lights – TRUELITE, U.S.A.",
                "High-Efficiency Photovoltaic Panels",
                "Autonomous Lighting Control Systems"
              ]}
            />

            <ProductBlock 
              title="Garage Doors & Barriers"
              desc="Automated and high-security closure systems for all usage scenarios."
              img="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800"
              icons={[DoorOpen, ShieldCheck]}
              items={[
                "Rolling Shutters – COL, Malaysia",
                "Garage Doors – MARCEGAGLIA, Italy",
                "Sectional Overhead Doors – C.H.I, USA",
                "Garage Doors Automation – NICE, Italy",
                "Rolling Shutters Automation – KINGGATES, Italy"
              ]}
              reverse
            />

            <ProductBlock 
              title="Pipes, Valves & Fittings"
              desc="Industrial grade piping and fitting solutions for water and fuel infrastructure."
              img="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800"
              icons={[Settings, Droplets]}
              items={[
                "PPR, Inox, Copper Pipes & Fittings – KANTHERM, Germany",
                "Valves & Fittings – FUCOLI, Portugal",
                "Industrial Pumping & Control Systems"
              ]}
            />

            <ProductBlock 
              title="Pumice - Light Aggregates"
              desc="Natural light-weight aggregates from the Yali Island quarry, Greece."
              img="https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=800"
              icons={[Mountain, Layers]}
              items={[
                "YALI Pumice, Greece – Light Weight Aggregates",
                "Insulation Grade Raw Aggregates",
                "Landscape & Horticulture Media"
              ]}
              reverse
            />
          </div>
        </section>

        <section className="py-24 bg-brand-950 text-white text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-accent/5 backdrop-blur-3xl -z-10" />
           <div className="container mx-auto px-4">
              <h2 className="text-5xl font-display font-black uppercase italic mb-8">Technical Submission Hub</h2>
              <p className="text-stone-400 mb-12 max-w-2xl mx-auto font-medium">Download full project portfolios, CAD drawings, and ASTM test results for your project documentation.</p>
              <Button className="bg-orange-600 hover:bg-orange-700 h-16 px-16 text-white font-black uppercase tracking-widest rounded-none shadow-3xl border-none">DOWNLOAD PORTFOLIO</Button>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
