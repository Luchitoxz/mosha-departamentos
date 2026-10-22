import React from 'react';

export default function PanoramicBanner({
  eyebrow = "TREVELIN, CHUBUT",
  title = "Naturaleza, historia y sabores únicos",
  subtitle = "Un destino que combina paisajes increíbles, cultura galesa, buena gastronomía y la calidez de su gente. Descubrí todo lo que Trevelin tiene para ofrecerte.",
  buttonText = "Conocé más sobre Trevelin",
  onButtonClick,
  isSubpage = false,
  image = "./stitch/banner-tulipanes-hd-2x.webp?v=4",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c1a2d] min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] xl:min-h-[560px] flex items-center justify-start select-none">
      {/* Layer 1: Ambient background matching the blue sky, snowy peaks & vibrant tulips */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-2xl opacity-45 scale-110 filter brightness-[0.88]"
          src="./stitch/banner-tulipanes-hd-2x.webp?v=4"
        />
        <div className="absolute inset-0 bg-[#0c1a2d]/45" />
      </div>

      {/* Layer 2: Complete High-Resolution Image (100% visible, guaranteed uncropped on mobile and desktop) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <img
          alt="Campo de tulipanes florecidos con fondo cordillerano en Trevelin, Patagonia"
          className="w-full h-full object-contain md:object-cover md:object-[center_40%] filter brightness-[0.96]"
          src="./stitch/banner-tulipanes-hd-2x.webp?v=4"
          srcSet="./stitch/banner-tulipanes-hd.webp?v=4 1024w, ./stitch/banner-tulipanes-hd-2x.webp?v=4 2048w"
          sizes="100vw"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "./stitch/banner-tulipanes-hd-2x.jpg";
          }}
        />
      </div>

      {/* Atmospheric Overlays for crisp contrast and vibrant landscape colors */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0c1a2d]/88 via-[#0c1a2d]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0c1a2d]/70 via-transparent to-black/25 pointer-events-none" />

      {/* Banner Content Overlaid directly on the Banner */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-14 md:py-18 lg:py-20">
        <div className="max-w-2xl text-left">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-cyan-200 uppercase block mb-2 drop-shadow-sm">
            {eyebrow}
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4 drop-shadow-md">
            {title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-100/95 leading-relaxed mb-5 sm:mb-7 max-w-xl drop-shadow-sm">
            {subtitle}
          </p>

          <button
            type="button"
            onClick={onButtonClick}
            className="w-auto inline-flex items-center justify-center space-x-2.5 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full shadow-xl transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
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
