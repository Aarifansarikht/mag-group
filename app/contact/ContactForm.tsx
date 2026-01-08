"use client";

import { useState } from "react";
import { Button, Input } from "@/components/ui/Primitives";

type ContactFormProps = {
  variant?: "dark" | "light";
};

const initialState = {
  name: "",
  company: "",
  email: "",
  service: "Structural Steel Fabrication",
  message: "",
};

export default function ContactForm({ variant = "dark" }: ContactFormProps) {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const isLight = variant === "light";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const recipient = "sales@maggroupinternational.com"; // change if needed

    const subject = encodeURIComponent(`New Engineering RFQ - ${form.service}`);

    const body = encodeURIComponent(`
        Full Name: ${form.name}
        Company: ${form.company}
        Email: ${form.email}
        Service: ${form.service}

        Message:
        ${form.message}
          `);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Open Gmail in new tab with prefilled content
    window.open(gmailUrl, "_blank");

    setLoading(false);
    setForm(initialState);
  };

  return (
    <>
      {/* GLOW (ONLY FOR DARK) */}
      {!isLight && <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] -z-10" />}

      <h3
        className={`text-2xl md:text-3xl font-display font-black uppercase italic mb-8 md:mb-10 leading-none ${
          isLight ? "dark:text-white drop-shadow-md" : "text-white drop-shadow-md"
        }`}
      >
        Engineering Request
      </h3>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* FULL NAME */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">FULL NAME</label>
          <Input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            required
            className={`h-12 md:h-14 ${
              isLight
                ? "bg-industrial-50 border-industrial-200 dark:text-white text-brand-950 focus:border-brand-accent"
                : "bg-white/5 border-white/10  placeholder:text-stone-600 focus:bg-white/10"
            }`}
          />
        </div>

        {/* COMPANY */}
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">COMPANY</label>
          <Input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Construction Co."
            className={`h-12 md:h-14 ${
              isLight
                ? "bg-industrial-50 border-industrial-200 dark:text-white text-brand-950 focus:border-brand-accent"
                : "bg-white/5 border-white/10  placeholder:text-stone-600 focus:bg-white/10"
            }`}
          />
        </div>
        <div className="space-y-2 col-span-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Email</label>
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="xyz@gmail.com"
            className={`h-12 md:h-14 ${
              isLight
                ? "bg-industrial-50 border-industrial-200 dark:text-white text-brand-950 focus:border-brand-accent"
                : "bg-white/5 border-white/10  placeholder:text-stone-600 focus:bg-white/10"
            }`}
          />
        </div>

        {/* PROJECT TYPE */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">PROJECT TYPE</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full h-12 md:h-14 border-b-2 px-4 text-xs font-black uppercase focus:outline-none ${
              isLight
                ? "bg-industrial-50 border-industrial-200 text-brand-950 focus:border-brand-accent dark:bg-white/10 dark:border-white/10 dark:text-white dark:focus:border-brand-accent"
                : "bg-white/10 border-white/10 text-white focus:border-brand-accent"
            }`}
          >
            <option className="text-brand-950">Structural Steel Fabrication</option>
            <option className="text-brand-950">Lightweight Steel Structures</option>
            <option className="text-brand-950">Steel Mezzanine Floors</option>
            <option className="text-brand-950">Prefabricated Steel Buildings</option>
            <option className="text-brand-950">Industrial & Logistics Warehouses</option>
            <option className="text-brand-950">Steel Bridges & Infrastructure</option>
            <option className="text-brand-950">Drainage Systems & Manhole Covers</option>
            <option className="text-brand-950">Solar Outdoor Lighting Systems</option>
            <option className="text-brand-950">Custom Manufacturing Requirement</option>
            <option className="text-brand-950">Technical Consultation / RFQ</option>
            <option className="text-brand-950">Other Technical Request</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="space-y-2 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">ENQUIRY DETAILS</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your project requirements..."
            className={`w-full h-28 md:h-32 border-b-2 p-4 resize-none focus:outline-none ${
              isLight
                ? "bg-industrial-50 border-industrial-200 text-brand-950 focus:border-brand-accent dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder:text-stone-600 dark:focus:border-brand-accent"
                : "bg-white/5 border-white/10 text-white placeholder:text-stone-600 focus:border-brand-accent"
            }`}
          />
        </div>

        {/* SUBMIT */}
        <div className="md:col-span-2 pt-4 md:pt-6">
          <Button
            type="submit"
            disabled={loading}
            className={`w-full h-14 md:h-16 font-black uppercase tracking-[0.2em] ${
              isLight
                ? "bg-brand-950 text-white hover:bg-brand-accent"
                : "bg-brand-accent text-white hover:bg-white hover:text-brand-950"
            }`}
          >
            {loading ? "SENDING..." : "SUBMIT TECHNICAL RFQ"}
          </Button>
        </div>
      </form>
    </>
  );
}
