import React from 'react';

export default function HeroBanner({ tHero }) {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0c1a2d] aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2.39/1] min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[520px] flex items-center justify-start select-none" 
      id="inicio"
    >
      {/* Full-Bleed High-Resolution Hero Background Image (100% crisp, no artificial scale zoom) */}
      <img
        alt="Complejo moderno Mosha Departamentos Trevelin al atardecer"
        className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-center z-0"
        src="./hero-mosha-banner-2x.webp?v=8"
        srcSet="./hero-mosha-banner.webp?v=8 1024w, ./hero-mosha-banner-2x.webp?v=8 2048w"
        sizes="100vw"
        fetchpriority="high"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = "./hero-mosha-banner-2x.png";
        }}
      />

      {/* Balanced Atmospheric Overlays for crisp text contrast and vibrant sunset tones */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0c1a2d]/80 via-[#0c1a2d]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0c1a2d]/85 via-transparent to-black/25 pointer-events-none" />

      {/* Hero Content Overlaid directly on the High-Resolution Banner */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-14 md:pb-16 lg:pb-18">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Subtitle */}
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-cyan-200 uppercase drop-shadow-sm">
              {tHero.eyebrow || 'TU GUÍA EN TREVELIN'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 drop-shadow-md">
            {tHero.title1 || 'Mosha'} <span className="text-white/95">{tHero.title2 || 'Departamentos'}</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100/90 font-normal max-w-xl leading-relaxed drop-shadow-sm mb-5 sm:mb-7">
            {tHero.subtitle || 'Toda la información que necesitás para disfrutar tu estadía, en un solo lugar.'}
          </p>

          {/* Quick Action Buttons for Mobile and Desktop */}
          <div className="flex flex-row flex-wrap items-center gap-2.5 sm:gap-3.5">
            <a
              href="#guia"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('guia');
                if (el) {
                  const navOffset = 70;
                  const elTop = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
                  window.scrollTo({ top: Math.max(0, elTop), behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center space-x-2 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
            >
              <span>{tHero.btnExplore || 'Explorar Guía'}</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('servicios');
                if (el) {
                  const navOffset = 70;
                  const elTop = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
                  window.scrollTo({ top: Math.max(0, elTop), behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center space-x-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-xs font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition duration-200 text-xs sm:text-sm cursor-pointer"
            >
              <span>{tHero.btnServices || 'WiFi & Servicios'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
