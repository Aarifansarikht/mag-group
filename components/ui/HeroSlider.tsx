"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function HeroSlider() {
  const slides = [
    "/images/banner/banner-1.jpg",
    "/images/services/shutters-automation.jpg",
    "/images/banner/banner-2.jpg",
    "/images/drain.jpg",
    "/images/services/structural-steel.jpg",
  ];

  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  /* -------------------------------
     AUTO SLIDE
  --------------------------------*/
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  /* -------------------------------
     DRAG HANDLERS (MOUSE + TOUCH)
  --------------------------------*/
  const handleStart = (clientX: number) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  const handleEnd = (clientX: number) => {
    if (!isDragging.current || startX.current === null) return;

    const diff = startX.current - clientX;

    if (diff > 60) nextSlide();
    if (diff < -60) prevSlide();

    isDragging.current = false;
    startX.current = null;
  };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden select-none"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={(e) => handleEnd(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      {/* SLIDES */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`Hero Slide ${i + 1}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            draggable={false}
          />
        </div>
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent pointer-events-none" />

      {/* SLIDER INDICATOR BARS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 ease-out ${
              active === i ? "w-12 bg-brand-accent" : "w-4 bg-industrial-200 hover:bg-industrial-300"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
