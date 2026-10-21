import React from 'react';

export default function HeroBanner({ tHero }) {
  return (
    <section 
      className="relative min-h-[580px] lg:min-h-[720px] flex items-center justify-start overflow-hidden" 
      id="inicio"
    >
      {/* Background Image - Modern illuminated building */}
      <img
        alt="Complejo moderno Mosha Departamentos bajo cielo azul"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 transition-transform duration-700"
        src="./hero-mosha.jpg"
      />

      {/* Dramatic Atmospheric Overlays */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2d] via-transparent to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-32 lg:pt-40 pb-14 sm:pb-20 lg:pb-28 w-full">
        <div className="max-w-3xl text-left">
          {/* Eyebrow Subtitle */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-bold tracking-[0.22em] text-white/95 uppercase drop-shadow-sm">
              {tHero.eyebrow || 'TU GUÍA EN TREVELIN'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 sm:mb-6 drop-shadow-md">
            {tHero.title1 || 'Mosha'} <br />
            <span className="text-white/95">{tHero.title2 || 'Departamentos'}</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-100/90 font-normal max-w-2xl leading-relaxed drop-shadow-sm mb-6 sm:mb-8">
            {tHero.subtitle || 'Toda la información que necesitás para disfrutar tu estadía, en un solo lugar.'}
          </p>

          {/* Quick Action Buttons for Mobile and Desktop */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#guia"
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-5 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
            >
              <span>Explorar Guía</span>
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-xs font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition duration-200 text-xs sm:text-sm cursor-pointer"
            >
              <span>WiFi & Servicios</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
