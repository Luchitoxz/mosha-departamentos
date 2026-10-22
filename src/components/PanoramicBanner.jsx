import React from 'react';

export default function PanoramicBanner({
  eyebrow = "TREVELIN, CHUBUT",
  title = "Naturaleza, historia y sabores únicos",
  subtitle = "Un destino que combina paisajes increíbles, cultura galesa, buena gastronomía y la calidez de su gente. Descubrí todo lo que Trevelin tiene para ofrecerte.",
  buttonText = "Conocé más sobre Trevelin",
  onButtonClick,
  isSubpage = false,
  image = "./stitch/banner-panoramico.webp",
}) {
  return (
    <section className="relative min-h-[190px] sm:min-h-[220px] md:min-h-[250px] flex items-center justify-start overflow-hidden">
      {/* Background Mountain Lake Landscape Image */}
      <img
        alt="Cordillera patagónica, valles y lagos de Trevelin, Chubut"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={image}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          if (e.currentTarget.src.includes('.webp')) {
            e.currentTarget.src = image.replace('.webp', '.png');
          }
        }}
      />

      {/* Panoramic Gradient Overlay */}
      <div className="absolute inset-0 banner-gradient" />

      {/* Banner Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 lg:py-10">
        <div className="max-w-xl text-left">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-white/90 uppercase block mb-1.5">
            {eyebrow}
          </span>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
            {title}
          </h2>

          <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed mb-4 max-w-lg">
            {subtitle}
          </p>

          <button
            type="button"
            onClick={onButtonClick}
            className="w-auto inline-flex items-center justify-center space-x-2 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md transition-transform hover:scale-105 duration-200 text-xs sm:text-sm cursor-pointer"
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
