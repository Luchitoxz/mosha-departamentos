import React from 'react';
import { MapPin, Sparkles, Navigation } from 'lucide-react';

export default function HeroInicio() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '¡Buenos días!';
    if (hour < 20) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  };

  const googleMapsUrl = "https://www.google.com/maps/place/Mosha+Departamentos/@-43.107466,-71.4677729,16.42z/data=!4m9!3m8!1s0x961dbb904dcf206f:0xe8f8aba74a34a72c!5m2!4m1!1i2!8m2!3d-43.1027926!4d-71.4637045!16s%2Fg%2F11hmkq9s01";

  return (
    <section className="pt-4 pb-2 px-4 max-w-2xl mx-auto">
      {/* Real Photo Card Container */}
      <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group mb-5">
        <div className="h-60 sm:h-72 w-full overflow-hidden">
          <img
            src="/hero-mosha.jpg"
            alt="Fachada de Mosha Departamentos en Trevelin"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Gradient shadow overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/40 to-transparent" />

        {/* Floating badge inside photo */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-white/15 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Guía Digital del Huésped</span>
          </span>
        </div>

        {/* Content bottom of photo */}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            {getGreeting()}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Mosha Departamentos
          </h1>
          <p className="text-xs sm:text-sm text-slate-200/90 font-light mt-0.5">
            Tu refugio para descansar y recorrer el Valle 16 de Octubre.
          </p>
        </div>
      </div>

      {/* Address & Navigation Quick Button */}
      <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 shadow-md mb-4">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="truncate">
            <span className="block text-[11px] text-slate-400 font-medium leading-none mb-1">
              Dirección del complejo
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white truncate block">
              Av. San Martín 1883, Trevelin, Chubut
            </span>
          </div>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-bold transition-all active:scale-95 shadow-md"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Cómo llegar</span>
        </a>
      </div>
    </section>
  );
}
