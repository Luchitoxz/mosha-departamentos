import React from 'react';

export default function PanoramicBanner({
  eyebrow = "TREVELIN, CHUBUT",
  title = "Naturaleza, historia y sabores únicos",
  subtitle = "Un destino que combina paisajes increíbles, cultura galesa, buena gastronomía y la calidez de su gente. Descubrí todo lo que Trevelin tiene para ofrecerte.",
  buttonText = "Conocé más sobre Trevelin",
  onButtonClick,
  isSubpage = false,
  image = "./stitch/banner-panoramico.png",
}) {
  return (
    <section className="relative min-h-[360px] lg:min-h-[440px] flex items-center justify-start overflow-hidden">
      {/* Background Mountain Lake Landscape Image */}
      <img
        alt="Cordillera patagónica, valles y lagos de Trevelin, Chubut"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={image}
      />

      {/* Panoramic Gradient Overlay */}
      <div className="absolute inset-0 banner-gradient" />

      {/* Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="max-w-xl text-left">
          <span className="text-xs font-bold tracking-[0.25em] text-white/90 uppercase block mb-3">
            {eyebrow}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 max-w-lg">
            {subtitle}
          </p>

          <button
            type="button"
            onClick={onButtonClick}
            className="inline-flex items-center space-x-3 bg-white text-[#0c1a2d] hover:bg-slate-100 font-bold px-7 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 text-sm cursor-pointer"
          >
            {isSubpage && (
              <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span>{buttonText}</span>
            <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
