export default function PartnersSection() {
  return (
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
  );
}
