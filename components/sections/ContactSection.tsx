import ContactForm from "@/app/contact/ContactForm";
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
