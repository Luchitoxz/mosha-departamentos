import React from 'react';
import { MapPin, Utensils, ShoppingBag, ChevronRight } from 'lucide-react';

export default function GuiaCardsSection({ tGuia = {}, onOpenLugares, onOpenGastronomia, onOpenEsenciales }) {
  const cards = [
    {
      id: 'lugares',
      title: tGuia.lugaresTitle || "Lugares para visitar",
      subtitle: tGuia.lugaresSub || "Cascadas, tulipanes y lagos",
      image: './cascadas-nant-y-fall.png',
      icon: MapPin,
      action: onOpenLugares,
    },
    {
      id: 'gastronomia',
      title: tGuia.gastroTitle || "Restaurantes & Bares",
      subtitle: tGuia.gastroSub || "Té galés, bodegones y cafés",
      image: './nikanor.jpg',
      icon: Utensils,
      action: onOpenGastronomia,
    },
    {
      id: 'esenciales',
      title: tGuia.esencialesTitle || "Comercios & Esenciales",
      subtitle: tGuia.esencialesSub || "Supermercados, YPF y farmacias",
      image: './la-anonima.jpg?v=2',
      icon: ShoppingBag,
      action: onOpenEsenciales,
    },
  ];

  const eyebrow = tGuia.eyebrow || "DESCUBRÍ TODO LO QUE TENEMOS PARA VOS";
  const title = tGuia.title || "Una guía pensada para tu comodidad";
  const subtitle = tGuia.subtitle || "Información actualizada y recomendaciones locales para que vivas una experiencia única en Trevelin, Chubut.";

  return (
    <section id="guia" className="py-10 sm:py-16 bg-white border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        
        {/* Section Heading & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-3 space-y-2 sm:space-y-3">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#0284c7] uppercase">
              {eyebrow}
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2537] leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed pt-0.5 max-w-sm">
              {subtitle}
            </p>
            {/* Mobile swipe helper badge */}
            <div className="inline-flex lg:hidden items-center gap-1.5 text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
              <span>Deslizá con el dedo</span>
              <span>➔</span>
            </div>
          </div>

          {/* Right Cards: Swipeable carousel on mobile, 3-col grid on desktop */}
          <div className="lg:col-span-9">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 pt-1 -mx-5 px-5 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:mx-0 sm:px-0 sm:gap-6">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    onClick={card.action}
                    className="group relative snap-center shrink-0 w-[84vw] max-w-[340px] h-[210px] sm:h-auto sm:w-full sm:aspect-square rounded-3xl overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl bg-slate-900 flex flex-col justify-end p-5 sm:p-6 select-none"
                  >
                    {/* Background Photo with strict object-cover */}
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                    {/* Content over image */}
                    <div className="relative z-10 space-y-1">
                      {/* Icon + Title + Chevron arrow */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 text-white min-w-0">
                          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20 shadow-sm">
                            <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                          </div>
                          <div className="min-w-0">
                            <span className="text-base sm:text-lg font-bold leading-tight block drop-shadow-sm">
                              {card.title}
                            </span>
                            <span className="text-xs text-slate-300 font-medium block leading-snug mt-0.5 truncate">
                              {card.subtitle}
                            </span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                          <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Visual 3-dots indicator on mobile */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 pt-2">
              <span className="w-6 h-1.5 rounded-full bg-blue-600" />
              <span className="w-2 h-1.5 rounded-full bg-slate-300" />
              <span className="w-2 h-1.5 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
