import React from 'react';

export default function HeroBanner({ tHero }) {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#0c1a2d] aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2.39/1] min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px] flex items-center justify-start select-none" 
      id="inicio"
    >
      {/* Full-Bleed High-Resolution Real Facade Image of Punto Sur Esquel */}
      <img
        alt="Fachada real de Punto Sur Esquel - Departamentos Turísticos"
        className="absolute inset-0 w-full h-full object-cover object-[center_45%] z-0"
        src="./hero-puntosur-2x.webp"
        srcSet="./hero-puntosur.webp 1200w, ./hero-puntosur-2x.webp 1639w"
        sizes="100vw"
        fetchpriority="high"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = "./punto-sur-fachada.jpg";
        }}
      />

      {/* Balanced Atmospheric Overlays for crisp text contrast and vibrant sunset tones */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0c1a2d]/92 via-[#0c1a2d]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0c1a2d]/90 via-transparent to-black/35 pointer-events-none" />

      {/* Hero Content Overlaid directly on the High-Resolution Banner */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-10 sm:pb-14 md:pb-16 lg:pb-18">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Subtitle with Logo Icon Badge */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full shadow-sm">
            <img src="./punto-sur-logo.png" alt="Logo" className="w-5 h-5 rounded-full object-cover" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-amber-300 uppercase">
              {tHero.eyebrow || 'TU GUÍA EN ESQUEL'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 drop-shadow-md">
            {tHero.title1 || 'Punto Sur'} <span className="text-amber-400">{tHero.title2 || 'Esquel'}</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-100/95 font-normal max-w-xl leading-relaxed drop-shadow-sm mb-5 sm:mb-7">
            {tHero.subtitle || 'Toda la información que necesitás para disfrutar tu estadía en Esquel y la cordillera patagónica.'}
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
              className="inline-flex items-center justify-center space-x-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
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
