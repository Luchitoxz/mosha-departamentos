import { MapPin } from 'lucide-react';

export default function HeroBanner({ tHero = {} }) {
  const eyebrow = tHero.eyebrow || "TU ESTADÍA, MÁS SIMPLE";
  const title1 = tHero.title1 || "Mosha";
  const title2 = tHero.title2 || "Departamentos";
  const subtitle = tHero.subtitle || "Toda la información que necesitás para disfrutar tu estadía, en un solo lugar.";

  return (
    <section id="inicio" className="relative w-full h-[370px] sm:h-[480px] lg:h-[560px] overflow-hidden scroll-mt-24">
      {/* Background Image: Facade of Mosha Departamentos without artificial zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url('./hero-mosha.jpg')` }}
      />

      {/* Subtle top shadow for navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

      {/* Subtle bottom shadow to ensure text legibility while keeping the facade visible */}
      <div className="absolute bottom-0 left-0 right-0 h-72 sm:h-80 bg-gradient-to-t from-[#0b192c]/95 via-[#0b192c]/40 to-transparent pointer-events-none" />

      {/* Hero Content positioned gracefully at the bottom */}
      <div className="relative h-full max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-col justify-end pb-7 sm:pb-12">
        <div className="max-w-xl">
          {/* Eyebrow & Location Pill */}
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#38bdf8] uppercase drop-shadow-sm">
              {eyebrow}
            </span>
            <span className="text-white/40">•</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-200 font-medium drop-shadow-sm">
              <MapPin className="w-3 h-3 text-sky-400" />
              Trevelin, Chubut
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-2 sm:mb-3 drop-shadow-md">
            {title1} <span className="text-sky-300">{title2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-100 font-normal leading-relaxed max-w-md drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
