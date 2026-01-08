import { Button, Input } from "@/components/ui/Primitives";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-950" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <div>
              <span className="text-brand-accent font-black text-xs uppercase tracking-[0.5em] mb-4 block">
                GET IN TOUCH
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1] md:leading-[0.9]">
                Contact WITH <br />
                US TODAY.
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { icon: Phone, label: "Regional Hotline", val: "+974 3158 6804" },
                { icon: Mail, label: "Email Enquiries", val: "info@magtrading.com" },
                { icon: MapPin, label: "Doha Industrial Hub", val: "977 Bait Al Hikma St, Doha, Qatar" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-center group">
                  <div className="bg-industrial-100/50 dark:bg-brand-900/50 backdrop-blur-md p-3 md:p-4 border border-industrial-200/50 dark:border-brand-800/50 group-hover:border-brand-accent transition-colors">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-industrial-400 tracking-widest leading-none mb-1">
                      {item.label}
                    </p>
                    <p className="text-base md:text-xl font-display font-black text-brand-950 dark:text-white uppercase italic">
                      {item.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-brand-950/90 backdrop-blur-2xl p-8 md:p-12 lg:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] -z-10" />
            <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase italic mb-8 md:mb-10 leading-none drop-shadow-md">
              Engineering Request
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-stone-500 uppercase tracking-widest">FULL NAME</label>
                <Input
                  className="bg-white/5 backdrop-blur-md border-white/10 text-white h-12 md:h-14 focus:bg-white/10 placeholder:text-stone-700"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-stone-500 uppercase tracking-widest">COMPANY</label>
                <Input
                  className="bg-white/5 backdrop-blur-md border-white/10 text-white h-12 md:h-14 focus:bg-white/10 placeholder:text-stone-700"
                  placeholder="Construction Co."
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black text-stone-500 uppercase tracking-widest">PROJECT TYPE</label>

                <select className="w-full h-12 md:h-14 bg-white/10 backdrop-blur-md border-b-2 border-white/10 px-4 text-[11px] md:text-xs font-black uppercase text-white focus:outline-none focus:border-brand-accent appearance-none">
                  {/* STEEL FABRICATION */}
                  <option className="bg-brand-950">Structural Steel Fabrication</option>
                  <option className="bg-brand-950">Lightweight Steel Structures</option>
                  <option className="bg-brand-950">Steel Mezzanine Floors</option>
                  <option className="bg-brand-950">Prefabricated Steel Buildings</option>
                  <option className="bg-brand-950">Industrial & Logistics Warehouses</option>
                  <option className="bg-brand-950">Steel Bridges & Infrastructure</option>
                  <option className="bg-brand-950">Retractable Glass Roof Systems</option>
                  <option className="bg-brand-950">Steel Transformer & Energy Doors</option>
                  <option className="bg-brand-950">Steel Shutters & Automation</option>
                  <option className="bg-brand-950">Protective Railings & Safety Systems</option>

                  {/* DRAINAGE & WATER MANAGEMENT */}
                  <option className="bg-brand-950">Drainage Systems & Manhole Covers</option>
                  <option className="bg-brand-950">Channel Drainage Systems</option>
                  <option className="bg-brand-950">Roof Drains & Parking Drains</option>
                  <option className="bg-brand-950">Access & Hatch Covers</option>
                  <option className="bg-brand-950">Grease Interceptors & Oil Separators</option>
                  <option className="bg-brand-950">PVC Fabricated Drainage Items</option>

                  {/* BUILDING MATERIALS */}
                  <option className="bg-brand-950">Clay Roofing Products</option>
                  <option className="bg-brand-950">Cladding & Clay Facade Systems</option>
                  <option className="bg-brand-950">Extruded Clay Flooring Tiles</option>

                  {/* DOORS & ACCESS */}
                  <option className="bg-brand-950">Garage Doors & Rolling Shutters</option>
                  <option className="bg-brand-950">Automated Gates & Barriers</option>

                  {/* SOLAR & ENERGY */}
                  <option className="bg-brand-950">Solar Outdoor Lighting Systems</option>

                  {/* INDUSTRIAL PIPING */}
                  <option className="bg-brand-950">Pipes, Valves & Fittings</option>

                  {/* AGGREGATES */}
                  <option className="bg-brand-950">Pumice & Lightweight Aggregates</option>

                  {/* GENERAL */}
                  <option className="bg-brand-950">Custom Manufacturing Requirement</option>
                  <option className="bg-brand-950">Technical Consultation / RFQ</option>
                  <option className="bg-brand-950">Other Technical Request</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black text-stone-500 uppercase tracking-widest">
                  ENQUIRY DETAILS
                </label>
                <textarea
                  className="w-full h-28 md:h-32 bg-white/5 backdrop-blur-md border-b-2 border-white/10 p-4 text-sm text-white focus:outline-none focus:border-brand-accent resize-none placeholder:text-stone-600"
                  placeholder="Describe your project requirements..."
                />
              </div>
              <div className="md:col-span-2 pt-4 md:pt-6">
                <Button className="w-full h-14 md:h-16 bg-brand-accent text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] border-none shadow-xl hover:bg-white hover:text-brand-950 transition-all">
                  SUBMIT TECHNICAL RFQ
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
