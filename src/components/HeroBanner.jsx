import React from 'react';

export default function HeroBanner({ tHero }) {
  return (
    <section 
      className="relative w-full bg-[#0c1a2d] text-white pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 overflow-hidden" 
      id="inicio"
    >
      <div className="w-full max-w-[1800px] mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Brand Intro & Navigation Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-3 sm:mb-5">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-cyan-200 uppercase block mb-1">
              {tHero.eyebrow || 'TU GUÍA EN TREVELIN'}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {tHero.title1 || 'Mosha'} <span className="text-white/95">{tHero.title2 || 'Departamentos'}</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal max-w-xl leading-relaxed mt-1 sm:mt-1.5">
              {tHero.subtitle || 'Toda la información que necesitás para disfrutar tu estadía, en un solo lugar.'}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 pt-1 md:pt-0">
            <a
              href="#guia"
              className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md text-xs sm:text-sm cursor-pointer transition-transform hover:scale-105"
            >
              <span>Explorar Guía</span>
              <svg className="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center space-x-1.5 sm:space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm cursor-pointer transition-colors"
            >
              <span>WiFi & Servicios</span>
            </a>
          </div>
        </div>

        {/* 100% COMPLETE UNCROPPED PANORAMIC BANNER */}
        <div className="relative w-full aspect-[1024/341] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
          <img
            alt="Complejo moderno Mosha Departamentos Trevelin al atardecer"
            className="w-full h-full object-contain sm:object-cover block"
            src="./hero-mosha.webp"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "./hero-mosha.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
}
