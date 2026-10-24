import React from 'react';

export default function PanoramicBanner({
  eyebrow = "TREVELIN, CHUBUT",
  title = "Naturaleza, historia y sabores únicos",
  subtitle = "Un destino que combina paisajes increíbles, cultura galesa, buena gastronomía y la calidez de su gente. Descubrí todo lo que Trevelin tiene para ofrecerte.",
  buttonText = "Conocé más sobre Trevelin",
  onButtonClick,
  isSubpage = false,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c1a2d] aspect-[16/10] sm:aspect-[2.1/1] lg:aspect-[2.5/1] min-h-[260px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px] flex items-center justify-start select-none">
      {/* Full-Resolution Panoramic Tulip & Andes Image (1983x793, 2.5:1 ratio, zero scale blur) */}
      <img
        alt="Campo de tulipanes florecidos con fondo cordillerano en Trevelin, Patagonia"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        src="./stitch/banner-tulipanes-hd-2x.webp?v=5"
        srcSet="./stitch/banner-tulipanes-hd.webp?v=5 1200w, ./stitch/banner-tulipanes-hd-2x.webp?v=5 1983w"
        sizes="100vw"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = "./stitch/banner-tulipanes-hd-2x.jpg";
        }}
      />

      {/* Refined Atmospheric Scrim on Left for Crisp Text Legibility while Preserving Vibrant Tulip Colors */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0c1a2d]/82 via-[#0c1a2d]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0c1a2d]/60 via-transparent to-black/15 pointer-events-none" />

      {/* Banner Content Overlaid directly on the Banner */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-7 sm:py-10 md:py-14 lg:py-16">
        <div className="max-w-xl lg:max-w-2xl text-left">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.24em] text-cyan-200 uppercase block mb-1.5 sm:mb-2 drop-shadow-sm">
            {eyebrow}
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3.5 drop-shadow-md">
            {title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-100/95 leading-relaxed mb-4 sm:mb-6 max-w-xl drop-shadow-sm">
            {subtitle}
          </p>

          <button
            type="button"
            onClick={onButtonClick}
            className="w-auto inline-flex items-center justify-center space-x-2.5 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
          >
            {isSubpage && (
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span>{buttonText}</span>
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
