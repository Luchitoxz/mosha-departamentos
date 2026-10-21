import React from 'react';

export default function HeroBanner({ tHero }) {
  return (
    <section 
      className="relative min-h-[580px] lg:min-h-[720px] flex items-center justify-start overflow-hidden" 
      id="inicio"
    >
      {/* Background Image */}
      <img
        alt="Complejo moderno Mosha Departamentos bajo cielo azul"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-700"
        src="./stitch/hero-home.png"
        onError={(e) => {
          e.currentTarget.src = "./hero-mosha.jpg";
        }}
      />

      {/* Dramatic Atmospheric Overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2d] via-transparent to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Subtitle */}
          <div className="inline-block mb-3">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-white/95 uppercase drop-shadow-sm">
              {tHero.eyebrow || 'TU GUÍA EN TREVELIN'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-5 drop-shadow-md">
            {tHero.title1 || 'Mosha'} <br />
            <span className="text-white/95">{tHero.title2 || 'Departamentos'}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-100/90 font-normal max-w-xl leading-relaxed drop-shadow-sm">
            {tHero.subtitle || 'Toda la información que necesitás para disfrutar tu estadía, en un solo lugar.'}
          </p>
        </div>
      </div>
    </section>
  );
}
