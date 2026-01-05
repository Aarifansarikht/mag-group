
"use client";

import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Primitives';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-industrial-100/50 bg-white/70 backdrop-blur-xl dark:bg-brand-950/80 dark:border-brand-800/50 transition-colors">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex flex-col text-right border-r border-brand-accent/30 pr-4">
            <span className="text-lg font-display font-black text-brand-950 dark:text-white leading-none">مجموعة ماج</span>
            <span className="text-[8px] font-bold text-brand-accent uppercase tracking-widest mt-1">الدولية</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-display font-black tracking-tighter text-brand-950 dark:text-white uppercase leading-none italic">MAG <span className="text-brand-accent">GROUP</span></span>
            <span className="text-[10px] font-bold text-industrial-500 uppercase tracking-widest leading-none mt-1">International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Products & Services', path: '/products' },
            { name: 'Accreditation', path: '/accreditation' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <Link 
              key={item.name}
              href={item.path} 
              className="text-[11px] font-black uppercase tracking-[0.2em] text-industrial-600 dark:text-industrial-400 transition-colors hover:text-brand-accent flex items-center gap-1 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <Button size="sm" className="bg-orange-600 text-white hover:bg-orange-700 h-10 px-8 rounded-sm tracking-widest border-none shadow-lg">
               CONTACT US
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button className="text-brand-950 dark:text-white p-2 bg-industrial-100/50 dark:bg-brand-900/50 backdrop-blur-md border border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="xl:hidden border-t border-industrial-100/50 bg-white/95 backdrop-blur-2xl dark:bg-brand-950/95 p-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            {['Home', 'About Us', 'Products & Services', 'Accreditation', 'Contact'].map((item) => (
               <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                className="text-sm font-black uppercase tracking-widest text-brand-950 dark:text-white hover:text-brand-accent py-2 transition-colors border-b border-industrial-100/20 dark:border-brand-800/20" 
                onClick={() => setIsMenuOpen(false)}
               >
                 {item}
               </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
