import React from 'react';

export default function PanoramicBanner({
  eyebrow = "TREVELIN, CHUBUT",
  title = "Naturaleza, historia y sabores únicos",
  subtitle = "Un destino que combina paisajes increíbles, cultura galesa, buena gastronomía y la calidez de su gente. Descubrí todo lo que Trevelin tiene para ofrecerte.",
  buttonText = "Conocé más sobre Trevelin",
  onButtonClick,
  isSubpage = false,
  image = "./stitch/banner-panoramico-tulipanes-2x.webp?v=2",
}) {
  return (
    <section className="relative min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] flex items-center justify-start overflow-hidden select-none">
      {/* Background Tulip Fields & Andean Mountain Peaks Image */}
      <img
        alt="Campo de tulipanes florecidos con fondo cordillerano en Trevelin, Patagonia"
        className="absolute inset-0 w-full h-full object-cover object-[center_45%] filter brightness-[0.95]"
        src={image}
        srcSet="./stitch/banner-panoramico-tulipanes.webp?v=2 1024w, ./stitch/banner-panoramico-tulipanes-2x.webp?v=2 2048w"
        sizes="100vw"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.src = "./stitch/banner-panoramico-tulipanes.jpg";
        }}
      />

      {/* Atmospheric Overlays for crisp contrast and landscape depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a2d]/92 via-[#0c1a2d]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a2d]/75 via-transparent to-black/25" />

      {/* Banner Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl text-left">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-cyan-200 uppercase block mb-2 drop-shadow-sm">
            {eyebrow}
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4 drop-shadow-md">
            {title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-100/95 leading-relaxed mb-6 sm:mb-7 max-w-xl drop-shadow-sm">
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
