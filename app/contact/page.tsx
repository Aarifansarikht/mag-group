import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button, Input } from '@/components/ui/Primitives';
import { MapPin, Phone, Mail, MessageSquare, Globe, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-brand-950 text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2000')] bg-cover bg-center opacity-20" />
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h1 className="text-7xl font-display font-black uppercase italic mb-6">Contact The Hubs</h1>
             <p className="text-xl max-w-2xl mx-auto font-medium text-stone-300">Discuss your structural steel and drainage requirements with our regional consultants.</p>
          </div>
        </section>

        <section className="py-24 bg-white dark:bg-brand-950">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 {/* Regional Details */}
                 <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-10 bg-industrial-50 dark:bg-brand-900 border-l-4 border-brand-accent shadow-xl">
                          <h3 className="text-2xl font-display font-black uppercase italic mb-4 text-brand-950 dark:text-white">Qatar HQ</h3>
                          <div className="space-y-4 text-sm font-bold uppercase tracking-tight text-industrial-500">
                             <p className="flex gap-3"><MapPin className="w-5 h-5 text-brand-accent shrink-0" /> Industrial Area, Doha</p>
                             <p className="flex gap-3"><Phone className="w-5 h-5 text-brand-accent shrink-0" /> +974 4400 0000</p>
                             <p className="flex gap-3"><Mail className="w-5 h-5 text-brand-accent shrink-0" /> qatar@magtrading.com</p>
                          </div>
                       </div>
                       <div className="p-10 bg-industrial-50 dark:bg-brand-900 border-l-4 border-brand-950 shadow-xl">
                          <h3 className="text-2xl font-display font-black uppercase italic mb-4 text-brand-950 dark:text-white">UAE HQ</h3>
                          <div className="space-y-4 text-sm font-bold uppercase tracking-tight text-industrial-500">
                             <p className="flex gap-3"><MapPin className="w-5 h-5 text-brand-950 dark:text-white shrink-0" /> Jebel Ali, Dubai</p>
                             <p className="flex gap-3"><Phone className="w-5 h-5 text-brand-950 dark:text-white shrink-0" /> +971 4 000 0000</p>
                             <p className="flex gap-3"><Mail className="w-5 h-5 text-brand-950 dark:text-white shrink-0" /> uae@dmagtrading.com</p>
                          </div>
                       </div>
                    </div>

                    <div className="bg-brand-accent text-white p-12 flex items-center justify-between shadow-3xl">
                       <div className="space-y-2">
                          <h4 className="text-3xl font-display font-black uppercase italic leading-none">WhatsApp RFQ</h4>
                          <p className="font-medium opacity-90">Send technical drawings for instant quotes.</p>
                       </div>
                       <a href="https://wa.me/97400000000" target="_blank">
                        <Button className="h-16 px-10 bg-white text-brand-accent font-black uppercase tracking-widest shadow-xl">Chat with Sales</Button>
                       </a>
                    </div>
                 </div>

                 {/* enquiry Form */}
                 <div className="bg-white dark:bg-brand-900 border border-industrial-100 dark:border-brand-800 p-12 md:p-16 shadow-3xl">
                    <h3 className="text-3xl font-display font-black uppercase italic mb-8 text-brand-950 dark:text-white leading-none">Engineering Enquiry</h3>
                    <form className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Input placeholder="Full Name" className="h-14 bg-industrial-50 border-industrial-200" />
                          <Input placeholder="Company" className="h-14 bg-industrial-50 border-industrial-200" />
                       </div>
                       <Input placeholder="Email Address" className="h-14 bg-industrial-50 border-industrial-200" type="email" />
                       <select className="w-full h-14 bg-industrial-50 border-b-2 border-industrial-200 px-4 text-sm font-black uppercase text-industrial-600 focus:outline-none focus:border-brand-accent">
                          <option>Drainage Accessories</option>
                          <option>Steel Structure Systems</option>
                          <option>Retractable Roof Systems</option>
                          <option>Custom Manufacturing</option>
                       </select>
                       <textarea className="w-full h-40 bg-industrial-50 border-b-2 border-industrial-200 p-4 text-sm focus:outline-none focus:border-brand-accent resize-none" placeholder="Project details or bill of quantities..." />
                       <Button className="w-full h-16 bg-brand-950 text-white font-black uppercase tracking-widest shadow-2xl hover:bg-brand-accent transition-colors">Submit Request</Button>
                    </form>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}