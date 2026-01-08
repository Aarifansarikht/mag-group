import Link from "next/link";
import Image from "next/image";
import { Droplets, Home, Sun, Layers, DoorOpen, Pipette, Mountain } from "lucide-react";
import { Button } from "../ui/Primitives";

const solutionsGrid = [
  {
    title: "DRAINAGE SOLUTIONS",
    sub: "MANHOLE COVERS & DRAINAGE",
    icon: Droplets,
    img: "/images/products/drainage-solutions.jpg",
    href: "/products#drainage",
    active: true,
  },
  {
    title: "CLAY ROOFING PRODUCTS",
    sub: "NATURAL & GLAZED TILES",
    icon: Home,
    img: "/images/products/clay-roofing.jpg",
    active: true,
    href: "/products#clay-roofing",
  },
  {
    title: "SOLAR OUTDOOR LIGHTS",
    sub: "SMART & SUSTAINABLE",
    icon: Sun,
    img: "/images/products/solar-lighting.jpg",
    href: "/products#drainage",
    active: false,
  },
  {
    title: "PREMIUM FLOOR DRAINS",
    sub: "LINEAR & FLOOR TRAPS",
    icon: Droplets,
    img: "/images/products/floor-drains.jpg",
    href: "/products#drainage",
    active: false,
  },
  {
    title: "GARAGE DOORS & SHUTTERS",
    sub: "AUTOMATED ACCESS",
    icon: DoorOpen,
    img: "/images/products/garage-doors.jpg",
    href: "/products#drainage",
    active: false,
  },
  {
    title: "CLADDING & FLOORING",
    sub: "ARCHITECTURAL SURFACES",
    icon: Layers,
    img: "/images/products/cladding-flooring.jpg",
    href: "/products#drainage",
    active: false,
  },
  {
    title: "PIPES, VALVES & FITTINGS",
    sub: "INDUSTRIAL SYSTEMS",
    icon: Pipette,
    img: "/images/products/pipes-valves.jpg",
    href: "/products#drainage",
    active: false,
  },
  {
    title: "PUMICE AGGREGATES",
    sub: "LIGHT WEIGHT MATERIALS",
    icon: Mountain,
    img: "/images/products/pumice-aggregates.jpg",
    href: "/products#drainage",
    active: false,
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-16 md:py-24 bg-industrial-50 dark:bg-brand-900 border-y border-industrial-100 dark:border-brand-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">
              ENGINEERED SOLUTIONS
            </span>

            <h2 className="text-5xl md:text-6xl font-display font-black text-brand-950 dark:text-white uppercase italic leading-[1] md:leading-[0.9]">
              BUILDING <br /> SYSTEMS
            </h2>

            <p className="text-industrial-500 mt-6 font-medium text-sm md:text-base max-w-lg">
              A comprehensive range of engineered building systems designed to support infrastructure,
              commercial, residential, and industrial developments across the GCC.
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-industrial-200 dark:border-brand-800">
          {solutionsGrid.map((item, i) => {
            const isActive = item.active;

            return (
              <Link
                key={i}
                href={item.href}
                className={`
                  group relative aspect-square overflow-hidden border 
                  ${
                    isActive
                      ? "bg-brand-950 cursor-pointer"
                      : "bg-gray-900 opacity-50 grayscale pointer-events-none"
                  }
                  border-industrial-200 dark:border-brand-800
                  transition-all duration-500
                `}
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={i < 2} // preload first row images
                    className={`
                      object-cover transition-transform duration-700
                      ${isActive ? "group-hover:scale-105 opacity-95" : "opacity-40 grayscale"}
                    `}
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-500
                    ${isActive ? "bg-brand-950/20 group-hover:backdrop-blur-[2px]" : "bg-black/10"}
                  `}
                />

                {/* Icon */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <div
                    className={`
                      backdrop-blur-md p-2.5 md:p-3 skew-x-[-10deg] border shadow-lg
                      ${isActive ? "bg-brand-accent/90 border-white/20" : "bg-gray-600/70 border-gray-500"}
                    `}
                  >
                    <item.icon
                      className={`
                        w-4 h-4 md:w-5 md:h-5 skew-x-[10deg]
                        ${isActive ? "text-white" : "text-gray-300"}
                      `}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left z-10">
                  <h4
                    className={`
                      text-xl md:text-2xl font-display font-black uppercase italic leading-none drop-shadow-lg
                      ${isActive ? "text-white" : "text-gray-400"}
                    `}
                  >
                    {item.title}
                  </h4>

                  {item.sub && (
                    <p
                      className={`
                        text-[10px] font-black uppercase tracking-widest mt-2 transition-opacity
                        ${
                          isActive
                            ? "text-brand-accent opacity-0 group-hover:opacity-100"
                            : "text-gray-500 opacity-100"
                        }
                      `}
                    >
                      {item.sub}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
