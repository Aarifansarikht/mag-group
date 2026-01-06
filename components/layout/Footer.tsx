import React from "react";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-industrial-400 py-20 border-t border-brand-800">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          {/* BRAND */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-black text-white uppercase italic leading-none">
                MAG <span className="text-brand-accent">GROUP</span>
              </span>
              <span className="text-[10px] font-bold text-industrial-600 uppercase tracking-widest mt-2">
                Doha • Dubai • Manufacturing & Engineering
              </span>
            </div>

            <p className="text-sm leading-relaxed text-industrial-500 font-medium">
              MAG Group International is a GCC-based manufacturing and construction
              solutions company. With operational hubs in Qatar and the UAE, we
              support complex infrastructure, commercial, and industrial projects
              through engineering-driven execution, customization, and strict
              quality control.
            </p>
{/* 
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 bg-brand-900 border border-brand-800 hover:border-brand-accent transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div> */}
          </div>

          {/* QATAR */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-xs italic">
              QATAR HEADQUARTERS
            </h4>

            <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Doha+Qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-accent transition"
                >
                  <MapPin className="h-4 w-4 mt-0.5 text-brand-accent shrink-0" />
                  <span className="leading-relaxed">
                    MAG GENERAL TRADING WLL
                    <br />
                    Doha, Qatar
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+974 3158 6804"
                  className="flex items-center gap-3 hover:text-brand-accent transition"
                >
                  <Phone className="h-4 w-4 text-brand-accent" />
                  +974 3158 6804
                </a>
              </li>

              <li>
                <a
                  href="mailto:qatar@magtrading.com"
                  className="flex items-center gap-3 hover:text-brand-accent transition"
                >
                  <Mail className="h-4 w-4 text-brand-accent" />
                  qatar@magtrading.com
                </a>
              </li>
            </ul>
          </div>

          {/* UAE */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-xs italic">
              UAE OPERATIONS
            </h4>

            <ul className="space-y-5 text-xs font-bold uppercase tracking-widest">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jebel+Ali+Dubai+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-brand-accent transition"
                >
                  <MapPin className="h-4 w-4 mt-0.5 text-brand-accent shrink-0" />
                  <span className="leading-relaxed">
                    DMAG TRADING CO WLL
                    <br />
                    Dubai, UAE
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="tel:+97140000000"
                  className="flex items-center gap-3 hover:text-brand-accent transition"
                >
                  <Phone className="h-4 w-4 text-brand-accent" />
                  +971 4 000 0000
                </a>
              </li>

              <li>
                <a
                  href="mailto:uae@dmagtrading.com"
                  className="flex items-center gap-3 hover:text-brand-accent transition"
                >
                  <Mail className="h-4 w-4 text-brand-accent" />
                  uae@dmagtrading.com
                </a>
              </li>
            </ul>
          </div>

          {/* CAPABILITIES */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-6 text-xs italic">
              CAPABILITIES
            </h4>

            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-accent transition flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  In-House Manufacturing
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-accent transition flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Engineering & Customization
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-accent transition flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  Quality & Compliance Control
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-accent transition flex items-center gap-2"
                >
                  <ArrowRight className="w-3 h-3" />
                  GCC Project Execution
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-industrial-600 uppercase tracking-[0.2em]">
          <p>© 2026 MAG GROUP INTERNATIONAL. ALL RIGHTS RESERVED.</p>

          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition">
              Quality Assurance
            </Link>
            <Link href="#" className="hover:text-white transition">
              Safety Standards
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Supply
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
