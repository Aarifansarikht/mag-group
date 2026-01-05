
import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-industrial-400 py-20 border-t border-brand-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand & Identity */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black tracking-tighter text-white uppercase italic leading-none">MAG <span className="text-brand-accent">GROUP</span></span>
              <span className="text-[10px] font-bold text-industrial-600 uppercase tracking-widest mt-2">Doha • Dubai • Industrial Manufacturer</span>
            </div>
            <p className="text-sm leading-relaxed text-industrial-500 font-medium">
              We specialize in the manufacturing and supply of high-capacity drainage systems and industrial structural steel for the Middle Eastern infrastructure market.
            </p>
            <div className="flex gap-4">
                <a href="#" className="p-3 bg-brand-900 border border-brand-800 hover:border-brand-accent transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
            </div>
          </div>

          {/* Qatar Presence */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-xs italic">QATAR HEADQUARTERS</h4>
            <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-accent" />
                <span className="leading-relaxed">MAG GENERAL TRADING WLL<br/>Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-accent" />
                <span>+974 4400 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-accent" />
                <span>qatar@magtrading.com</span>
              </li>
            </ul>
          </div>

          {/* UAE Presence */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-xs italic">UAE OPERATIONS</h4>
            <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brand-accent" />
                <span className="leading-relaxed">DMAG TRADING CO WLL<br/>Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-accent" />
                <span>+971 4 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-accent" />
                <span>uae@dmagtrading.com</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-xs italic">CAPABILITIES</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li><Link href="#products" className="hover:text-brand-accent transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Drainage Solutions</Link></li>
              <li><Link href="#products" className="hover:text-brand-accent transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Manhole Covers</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Steel Fabrication</Link></li>
              <li><Link href="#services" className="hover:text-brand-accent transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Custom Engineering</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-industrial-600 uppercase tracking-[0.2em]">
          <p>&copy; 2024 MAG GROUP INTERNATIONAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Quality Assurance</Link>
            <Link href="#" className="hover:text-white transition-colors">Safety Standards</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Supply</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
