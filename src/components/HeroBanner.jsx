import React from 'react';

export default function HeroBanner({ tHero }) {
  return (
    <section 
      className="relative min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px] flex items-center justify-start overflow-hidden" 
      id="inicio"
    >
      {/* Background Image - Modern illuminated building */}
      <img
        alt="Complejo moderno Mosha Departamentos bajo cielo azul"
        className="absolute inset-0 w-full h-full object-cover object-[center_45%] transition-transform duration-700"
        src="./hero-mosha.webp"
        fetchpriority="high"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = "./hero-mosha.jpg";
        }}
      />

      {/* Dramatic Atmospheric Overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2d] via-transparent to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-14">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Subtitle */}
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-cyan-200 uppercase drop-shadow-sm">
              {tHero.eyebrow || 'TU GUÍA EN TREVELIN'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-2.5 sm:mb-3.5 drop-shadow-md">
            {tHero.title1 || 'Mosha'} <span className="text-white/95">{tHero.title2 || 'Departamentos'}</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100/90 font-normal max-w-xl leading-relaxed drop-shadow-sm mb-4 sm:mb-6">
            {tHero.subtitle || 'Toda la información que necesitás para disfrutar tu estadía, en un solo lugar.'}
          </p>

          {/* Quick Action Buttons for Mobile and Desktop */}
          <div className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5">
            <a
              href="#guia"
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
            >
              <span>Explorar Guía</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-xs font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition duration-200 text-xs sm:text-sm cursor-pointer"
            >
              <span>WiFi & Servicios</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
