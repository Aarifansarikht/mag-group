"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button, Input, AccordionItem } from "@/components/ui/Primitives";
import {
  ArrowRight,
  Settings,
  ShieldCheck,
  ChevronRight,
  Globe,
  Droplets,
  Construction,
  Layers,
  Sun,
  Home,
  DoorOpen,
  Pipette,
  Mountain,
  Truck,
  CloudRain,
  Utensils,
  LayoutGrid,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/ui/HeroSlider";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const solutionsGrid = [
    {
      title: "DRAINAGE SOLUTIONS",
      sub: "MANHOLE COVERS & DRAINAGE",
      icon: Droplets,
      img: "/images/products/drainage-solutions.jpg",
    },
    {
      title: "CLAY ROOFING PRODUCTS",
      sub: "NATURAL & GLAZED TILES",
      icon: Home,
      img: "/images/products/clay-roofing.jpg",
    },
    {
      title: "SOLAR OUTDOOR LIGHTS",
      sub: "SMART & SUSTAINABLE",
      icon: Sun,
      img: "/images/products/solar-lighting.jpg",
    },
    {
      title: "PREMIUM FLOOR DRAINS",
      sub: "LINEAR & FLOOR TRAPS",
      icon: Droplets,
      img: "/images/products/floor-drains.jpg",
    },
    {
      title: "GARAGE DOORS & SHUTTERS",
      sub: "AUTOMATED ACCESS",
      icon: DoorOpen,
      img: "/images/products/garage-doors.jpg",
    },
    {
      title: "CLADDING & FLOORING",
      sub: "ARCHITECTURAL SURFACES",
      icon: Layers,
      img: "/images/products/cladding-flooring.jpg",
    },
    {
      title: "PIPES, VALVES & FITTINGS",
      sub: "INDUSTRIAL SYSTEMS",
      icon: Pipette,
      img: "/images/products/pipes-valves.jpg",
    },
    {
      title: "PUMICE AGGREGATES",
      sub: "LIGHT WEIGHT MATERIALS",
      icon: Mountain,
      img: "/images/products/pumice-aggregates.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-950 transition-colors">
      <Header />
      <main className="flex-grow pt-20">
        {/* CINEMATIC HERO SECTION */}
        {/* CINEMATIC HERO SECTION WITH SLIDER */}
        <section className="relative h-[80vh] md:h-[85vh] flex items-center overflow-hidden bg-brand-950">
          {/* SLIDER BACKGROUND */}
          <HeroSlider />

          {/* CONTENT */}
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl text-left">
              <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/5 backdrop-blur-md border border-white/10 mb-6 animate-fade-up">
                <span className="text-brand-accent font-black text-[10px] md:text-xs uppercase tracking-[0.4em]">
                  MAG GROUP INTERNATIONAL • GCC
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase italic leading-[0.9] md:leading-[0.85] mb-8 animate-fade-up delay-100 drop-shadow-2xl">
                ENGINEERING <br />
                <span className="text-brand-accent">THE GCC.</span>
              </h1>

              <p className="text-stone-300 max-w-xl font-medium text-base md:text-xl mb-10 md:mb-12 animate-fade-up delay-200 leading-relaxed">
                A dual-hub manufacturing and construction solutions group delivering precision-engineered systems for
                infrastructure, commercial, and industrial developments across the Middle East.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 animate-fade-up delay-300">
                <Link href="/products" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 h-14 md:h-16 px-10 md:px-12 text-white rounded-none shadow-2xl border-none">
                    EXPLORE RANGE
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-white/20 bg-white/5 backdrop-blur-lg text-white hover:bg-white/10 h-14 md:h-16 px-10 md:px-12 rounded-none"
                  >
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-950">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-brand-accent/5 rounded-full blur-3xl" />
                <img
                  src="/images/about.jpg"
                  className="relative w-full h-[400px] md:h-[550px] object-cover rounded-none shadow-2xl"
                  alt="Industrial Workflow"
                />
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-brand-accent/90 backdrop-blur-xl text-white p-8 md:p-12 hidden md:block shadow-3xl border border-white/10">
                  <p className="text-4xl md:text-5xl font-display font-black italic leading-none">20+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest mt-2">Years of Excellence</p>
                </div>
              </div>
              <div className="space-y-6 md:space-y-8 lg:pl-10 order-1 lg:order-2">
                <div>
                  <span className="text-xs font-black text-brand-accent uppercase tracking-[0.3em] mb-3 block italic">
                    About Us • من نحن
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1.1] md:leading-none">
                    The Regional Backbone <br className="hidden md:block" />
                    Of Construction.
                  </h2>
                </div>
                <p className="text-base md:text-lg text-industrial-600 dark:text-stone-400 leading-relaxed font-medium">
                  MAG Group International stands as the dual-hub powerhouse in the Middle East, operating
                  state-of-the-art fabrication facilities in both Doha and Dubai.
                </p>
                <div className="p-5 md:p-6 bg-industrial-50 dark:bg-brand-900/50 backdrop-blur-md border border-industrial-100 dark:border-brand-800">
                  <p className="text-sm md:text-base text-industrial-500 font-medium italic">
                    "Our mission is to provide architects and engineers with reliable, high-specification drainage
                    hardware and structural steel components that exceed international safety benchmarks."
                  </p>
                </div>
                <div className="pt-4 md:pt-6">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 border-brand-950 dark:border-white hover:bg-brand-950 hover:text-white dark:hover:bg-white dark:hover:text-brand-950 transition-all font-black uppercase tracking-widest"
                    >
                      LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DRAINAGE SOLUTIONS GRID */}
        <section className="py-16 md:py-24 bg-industrial-50 dark:bg-brand-900 border-y border-industrial-100 dark:border-brand-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
                  ENGINEERED SOLUTIONS
                </span>

                <h2 className="text-5xl md:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1] md:leading-[0.9]">
                  BUILDING <br /> SYSTEMS
                </h2>

                <p className="text-industrial-500 mt-6 font-medium text-sm md:text-base max-w-lg">
                  A comprehensive range of engineered building systems designed to support infrastructure, commercial,
                  residential, and industrial developments across the GCC.
                </p>
              </div>

              <div className="w-full md:w-auto pb-2">
                <Link href="/products" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-brand-950 dark:border-white h-12 px-8 text-[10px] font-black uppercase tracking-[0.2em] bg-white/20 backdrop-blur-md"
                  >
                    VIEW ALL DATA
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-industrial-200 dark:border-brand-800">
              {solutionsGrid.map((item, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden bg-brand-950 border border-industrial-200 dark:border-brand-800"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-40"
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-brand-950/20 backdrop-blur-none group-hover:backdrop-blur-[2px] transition-all duration-500" />

                  <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <div className="bg-brand-accent/90 backdrop-blur-md p-2.5 md:p-3 skew-x-[-10deg] border border-white/20 shadow-lg">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white skew-x-[10deg]" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left z-10">
                    <h4 className="text-xl md:text-2xl font-display font-black text-white uppercase italic leading-none drop-shadow-lg">
                      {item.title}
                    </h4>
                    {item.sub && (
                      <p className="text-[10px] font-black text-brand-accent uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-16 md:py-24 bg-white dark:bg-brand-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 blur-[120px] -z-10" />

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* CONTENT */}
              <div className="space-y-8 md:space-y-10">
                <span className="text-brand-accent font-black text-xs uppercase tracking-[0.5em] block">
                  STEEL FABRICATION SERVICES
                </span>

                <h2 className="text-4xl md:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1] md:leading-[0.9]">
                  ENGINEERED <br />
                  <span className="text-brand-accent">STEEL SOLUTIONS</span>
                </h2>

                <p className="text-base md:text-lg text-industrial-500 font-medium leading-relaxed max-w-xl">
                  We deliver end-to-end steel fabrication and structural engineering services for infrastructure,
                  industrial, commercial, and high-end residential projects across the GCC. Our in-house facilities
                  ensure precision manufacturing, customization, and compliance with international standards.
                </p>

                {/* SERVICE GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      title: "STRUCTURAL STEEL SYSTEMS",
                      desc: "Steel frameworks for buildings, bridges, and stadiums",
                      icon: Construction,
                    },
                    {
                      title: "LIGHTWEIGHT & MEZZANINE STRUCTURES",
                      desc: "Light steel systems, mezzanine floors & suspended platforms",
                      icon: Layers,
                    },
                    {
                      title: "INDUSTRIAL & LOGISTICS FACILITIES",
                      desc: "Warehouses, factories & prefabricated steel buildings",
                      icon: Warehouse,
                    },
                    {
                      title: "RETRACTABLE & SPECIALIZED SYSTEMS",
                      desc: "Retractable glass roofs, transformer doors & energy doors",
                      icon: Globe,
                    },
                    {
                      title: "ACCESS & SHUTTER SYSTEMS",
                      desc: "Steel shutters, rolling systems & automated access solutions",
                      icon: DoorOpen,
                    },
                    {
                      title: "PROTECTIVE & SAFETY STRUCTURES",
                      desc: "Guard rails, handrails & protective steel systems",
                      icon: ShieldCheck,
                    },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 md:p-6 bg-white/50 dark:bg-brand-900/40 backdrop-blur-md border border-industrial-100/50 dark:border-brand-800/50 shadow-sm hover:shadow-md transition-all border-l-2 hover:border-l-brand-accent"
                    >
                      <s.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-accent shrink-0" />
                      <div>
                        <h5 className="text-[11px] md:text-xs font-black uppercase tracking-widest text-brand-950 dark:text-white mb-1">
                          {s.title}
                        </h5>
                        <p className="text-[10px] font-bold text-industrial-500 uppercase tracking-tight leading-snug">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/services" className="block sm:inline-block pt-4">
                  <Button className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 bg-brand-950 text-white hover:bg-brand-accent transition-colors font-black uppercase tracking-widest border-none shadow-xl">
                    VIEW ALL STEEL SERVICES
                  </Button>
                </Link>
              </div>

              {/* IMAGES */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
                <img
                  src="/images/services/protective-railings.jpg"
                  className="w-full h-64 md:h-80 object-cover shadow-2xl border-2 md:border-4 border-white/10"
                  alt="Steel Fabrication Facility"
                />
                <img
                  src="/images/services/energy-doors.jpg"
                  className="w-full h-64 md:h-80 object-cover mt-8 md:mt-12 shadow-2xl border-2 md:border-4 border-white/10"
                  alt="Structural Steel Works"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-24 bg-industrial-50/50 dark:bg-brand-900/30 backdrop-blur-md border-y border-industrial-100 dark:border-brand-800">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-brand-accent font-black text-xs uppercase tracking-[0.5em] mb-4 block">
                KNOWLEDGE BASE
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-none">
                FREQUENTLY ASKED <br />
                QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "WHICH REGIONS DOES MAG GROUP SERVICE?",
                  a: "We operate fully functional hubs in Qatar and the UAE, providing local manufacturing and distribution across the entire GCC region.",
                },
                {
                  q: "ARE YOUR PRODUCTS COMPLIANT WITH INTERNATIONAL STANDARDS?",
                  a: "Yes. All our drainage hardware is tested to EN124 standards, and our steel fabrication follows strict ISO 9001:2015 and ASTM compliance protocols.",
                },
                {
                  q: "CAN YOU PROVIDE CUSTOM FABRICATION FOR UNIQUE PROJECTS?",
                  a: "Absolutely. Our in-house engineering team specializes in custom structural designs, from specialized energy sector doors to bespoke mezzanine flooring.",
                },
                {
                  q: "DO YOU PROVIDE TECHNICAL SUBMITTALS AND CAD DRAWINGS?",
                  a: "Yes, we provide full technical support for consultants and contractors, including shop drawings, CAD files, and material certificates for every batch.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/40 dark:bg-brand-950/40 backdrop-blur-md border border-white/20 dark:border-brand-800/50"
                >
                  <AccordionItem
                    title={faq.q}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <p className="px-6 pb-6 text-sm md:text-base text-industrial-500 dark:text-stone-400 font-medium leading-relaxed italic">
                      {faq.a}
                    </p>
                  </AccordionItem>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT US FORM SECTION */}
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
                    <label className="text-[10px] font-black text-stone-500 uppercase tracking-widest">
                      PROJECT TYPE
                    </label>

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

        {/* STRATEGIC PARTNERS SLIDER */}
        <section className="py-12 md:py-20 bg-industrial-100/30 dark:bg-brand-900/20 backdrop-blur-md overflow-hidden border-y border-industrial-200 dark:border-brand-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-30 grayscale hover:opacity-100 transition-all">
              {["Hospitality", "Civil Property", "Educational", "Residential", "Commercial"].map((p) => (
                <span
                  key={p}
                  className="text-2xl md:text-4xl font-display font-black italic text-brand-950 dark:text-white drop-shadow-sm"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Missing icons for the grid
function Scaling(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-scaling"
    >
      <path d="M12 3v18" />
      <path d="m15 18 3 3 3-3" />
      <path d="m18 21V3" />
      <path d="m15 6 3-3 3 3" />
      <path d="m9 18-3 3-3-3" />
      <path d="M6 21V3" />
      <path d="m9 6-3-3-3 3" />
    </svg>
  );
}
