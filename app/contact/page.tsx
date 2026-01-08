import React from "react";
import { Button, Input } from "@/components/ui/Primitives";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="bg-brand-950 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase italic mb-6">Contact The Hubs</h1>
            <p className="text-base md:text-xl max-w-2xl mx-auto text-stone-300">
              Discuss your structural steel and drainage requirements with our regional consultants.
            </p>
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="py-16 bg-white dark:bg-brand-950">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* LEFT: OFFICE DETAILS */}
              <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Qatar */}
                  <div className="p-8 bg-industrial-50 dark:bg-brand-900 border-l-4 border-brand-accent shadow-xl">
                    <h3 className="text-2xl font-display font-black uppercase italic mb-4">Qatar HQ</h3>

                    <div className="space-y-3 text-xs font-bold uppercase text-industrial-600">
                      {/* Address */}
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=977+Bait+Al+Hikma+St,+Doha,+Qatar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 hover:text-brand-accent transition"
                      >
                        <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                        977 Bait Al Hikma St, Doha, Qatar
                      </a>

                      {/* Phone */}
                      <a href="tel:+97431586804" className="flex gap-3 hover:text-brand-accent transition">
                        <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                        +974 3158 6804
                      </a>

                      {/* Email */}
                      <a href="mailto:qatar@magtrading.com" className="flex gap-3 hover:text-brand-accent transition">
                        <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                        qatar@magtrading.com
                      </a>
                    </div>
                  </div>

                  {/* UAE */}
                  <div className="p-8 bg-industrial-50 dark:bg-brand-900 border-l-4 border-brand-950 shadow-xl">
                    <h3 className="text-2xl font-display font-black uppercase italic mb-4">UAE HQ</h3>

                    <div className="space-y-3 text-xs font-bold uppercase text-industrial-600">
                      {/* Address */}
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Jebel+Ali,+Dubai,+UAE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-3 hover:text-brand-950 transition"
                      >
                        <MapPin className="w-5 h-5 text-brand-950 shrink-0" />
                        Jebel Ali, Dubai
                      </a>

                      {/* Phone */}
                      <a href="tel:+97140000000" className="flex gap-3 hover:text-brand-950 transition">
                        <Phone className="w-5 h-5 text-brand-950 shrink-0" />
                        +971 4 000 0000
                      </a>

                      {/* Email */}
                      <a href="mailto:uae@dmagtrading.com" className="flex gap-3 hover:text-brand-950 transition">
                        <Mail className="w-5 h-5 text-brand-950 shrink-0" />
                        uae@dmagtrading.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WHATSAPP */}
                <div className="bg-brand-accent text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
                  <div>
                    <h4 className="text-2xl font-display font-black uppercase italic">WhatsApp RFQ</h4>
                    <p className="text-sm opacity-90">Send drawings for instant quotations</p>
                  </div>
                  <a href="https://wa.me/97400000000" target="_blank">
                    <Button className="h-14 px-8 bg-white text-brand-accent font-black uppercase tracking-widest">
                      Chat with Us
                    </Button>
                  </a>
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div className="bg-white dark:bg-brand-900 border p-10 shadow-2xl">
                <ContactForm variant="light" />
              </div>
            </div>
          </div>
        </section>

        {/* MAPS */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-black uppercase italic text-center mb-10 ">Our Locations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <iframe
                className="w-full h-[350px] border"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230896.45011071148!2d55.3271354!3d25.2787575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6758fcf2aabd%3A0x20b78ef8ed8f4726!2sDMAG%20Equipment%20Rental%20LLC!5e0!3m2!1sen!2sin!4v1767677659146!5m2!1sen!2sin"
              />

              <iframe
                className="w-full h-[350px] border"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.694507803302!2d51.54227600000001!3d25.2808601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c57f441eba7b%3A0xe3734042bb3b492d!2sMAG%20General%20Trading%20W.L.L!5e0!3m2!1sen!2sin!4v1767677519764!5m2!1sen!2sin"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
