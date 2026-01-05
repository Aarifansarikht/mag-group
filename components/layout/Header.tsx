
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '../ui/Primitives';
import Link from 'next/link';
import ThemeToggle from '../ui/ThemeToggle';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Accreditation', path: '/accreditation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-industrial-100/50 bg-white/70 backdrop-blur-xl dark:bg-brand-950/80 dark:border-brand-800/50 transition-colors">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="flex flex-col text-right border-r border-brand-accent/30 pr-3 md:pr-4">
            <span className="text-sm md:text-lg font-display font-black text-brand-950 dark:text-white leading-none">مجموعة ماج</span>
            <span className="text-[7px] md:text-[8px] font-bold text-brand-accent uppercase tracking-widest mt-1">الدولية</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-display font-black tracking-tighter text-brand-950 dark:text-white uppercase leading-none italic">MAG <span className="text-brand-accent">GROUP</span></span>
            <span className="text-[8px] md:text-[10px] font-bold text-industrial-500 uppercase tracking-widest leading-none mt-1">International</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.name}
              href={item.path} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-industrial-600 dark:text-industrial-400 transition-colors hover:text-brand-accent flex items-center gap-1 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Link href="/contact" className="hidden md:block">
            <Button size="sm" className="bg-orange-600 text-white hover:bg-orange-700 h-10 px-8 rounded-none tracking-widest border-none shadow-lg">
               CONTACT
            </Button>
          </Link>
          
          {/* Mobile Menu Button - High Z to stay above overlay content if needed */}
          <button 
            className="lg:hidden p-3 bg-brand-950/5 dark:bg-white/5 backdrop-blur-md border border-brand-950/10 dark:border-white/10 relative z-[10000]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 text-brand-950 dark:text-white" /> : <Menu className="h-5 w-5 text-brand-950 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* SOLID OPAQUE FULLSCREEN MOBILE MENU */}
      <div className={cn(
        "fixed inset-0 top-0 left-0 w-screen h-[100dvh] z-[9999] lg:hidden bg-white dark:bg-brand-950 transition-all duration-500 ease-in-out transform shadow-2xl",
        isMenuOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <div className="h-full flex flex-col p-8 md:p-12 overflow-y-auto">
          {/* Top Branding In Menu */}
          <div className="flex justify-between items-center mb-16 pt-2">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-black text-brand-950 dark:text-white italic">MAG <span className="text-brand-accent">GROUP</span></span>
                <span className="text-[10px] font-bold text-industrial-400 dark:text-stone-500 uppercase tracking-widest -mt-1">International Hub</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow flex flex-col justify-center gap-8 md:gap-10">
            {navLinks.map((item, i) => (
               <Link 
                key={item.name}
                href={item.path} 
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase italic text-brand-950 dark:text-white hover:text-brand-accent transition-all flex items-center group",
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                )}
                style={{ transitionDelay: `${i * 100 + 100}ms` }}
                onClick={() => setIsMenuOpen(false)}
               >
                 <span className="mr-5 text-brand-accent font-sans text-xl font-bold opacity-30">0{i+1}</span>
                 {item.name}
                 <ArrowRight className="ml-6 w-8 h-8 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-accent hidden sm:block" />
               </Link>
            ))}
          </nav>

          {/* Bottom Footer Info In Menu */}
          <div className={cn(
            "mt-12 flex flex-col gap-10 transition-all duration-700 delay-500",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}>
            <div className="h-px bg-industrial-200 dark:bg-brand-800/50 w-full" />
            <div className="flex flex-col sm:flex-row justify-between gap-10">
              <div className="space-y-4">
                <p className="text-[10px] font-black text-industrial-400 dark:text-stone-500 uppercase tracking-widest italic border-b border-brand-accent inline-block pb-1">Regional Headquarters</p>
                <div className="space-y-1">
                  <p className="text-brand-950 dark:text-white font-bold text-sm">info@magtrading.com</p>
                  <p className="text-brand-950 dark:text-white font-bold text-sm">+974 4400 0000</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 flex items-center justify-center border border-industrial-200 dark:border-brand-800/50 bg-white dark:bg-brand-900/50 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-brand-950 dark:text-white shadow-sm">
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
                <div className="sm:hidden self-start">
                   <ThemeToggle />
                </div>
              </div>
            </div>
            
            <p className="text-[8px] font-bold text-industrial-400 dark:text-stone-600 uppercase tracking-[0.3em] mt-4">
              © 2024 MAG GROUP INTERNATIONAL • QUALITY DRIVEN ENGINEERING
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
