"use client";

import React from "react";

function HeroSlider() {
  const slides = [
    "/images/banner/banner-1.jpg",
    "/images/banner/banner-2.jpg",
    "/images/banner/banner-3.jpg",
  ];

  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 z-0">
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Dubai Infrastructure"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/60 to-transparent" />
    </div>
  );
}

export default HeroSlider;
