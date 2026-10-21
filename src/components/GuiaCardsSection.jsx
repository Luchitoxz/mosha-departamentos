import React from 'react';

export default function GuiaCardsSection({
  tGuia,
  onOpenLugares,
  onOpenGastronomia,
  onOpenHistoricos,
  onOpenMedicos,
}) {
  const cards = [
    {
      id: 'lugares',
      title: tGuia.card1Title || 'Lugares para visitar',
      desc: tGuia.card1Desc || 'Naturaleza, paisajes y experiencias únicas.',
      image: './cascadas-nant-y-fall.png',
      fallbackImage: './tulipanes.jpg',
      onClick: onOpenLugares,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'gastronomia',
      title: tGuia.card2Title || 'Dónde comer',
      desc: tGuia.card2Desc || 'Restaurantes, cafeterías y sabores locales.',
      image: './los-troncos.jpg',
      fallbackImage: './nain-maggie.jpg',
      onClick: onOpenGastronomia,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M8.25 4.5v7.5a2.25 2.25 0 01-4.5 0V4.5m4.5 0h-4.5m12 0v15m0-15c1.657 0 3 1.343 3 3v4.5c0 1.657-1.343 3-3 3m0-10.5h-1.5v10.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'historicos',
      title: tGuia.card3Title || 'Puntos históricos',
      desc: tGuia.card3Desc || 'Historia, cultura y el legado galés.',
      image: './la-trochita.jpg',
      fallbackImage: './molino-nant-fach.jpg',
      onClick: onOpenHistoricos,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5m-15 10.5V10.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'medicos',
      title: tGuia.card4Title || 'Servicios médicos',
      desc: tGuia.card4Desc || 'Hospitales, clínicas, farmacias y urgencias.',
      image: './stitch/medicos-hero.jpg',
      fallbackImage: './stitch/medicos-1-hospital.jpg',
      onClick: onOpenMedicos,
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-8 sm:py-16 lg:py-20 bg-[#f8fafc]" id="guia">
      <div className="w-full max-w-[1800px] mx-auto px-3.5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header Section Info */}
        <div className="mb-5 sm:mb-10 lg:mb-12">
          <span className="text-[11px] sm:text-sm font-bold tracking-[0.2em] text-[#1e3e62] uppercase block mb-1">
            {tGuia.eyebrow || 'DESCUBRÍ TREVELIN'}
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c1a2d] tracking-tight">
            {tGuia.title || 'Explorá, disfrutá y viví la experiencia'}
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-slate-600 mt-1 sm:mt-2.5 max-w-4xl leading-relaxed">
            {tGuia.subtitle || 'Accedé a nuestra guía con los mejores lugares para visitar, dónde comer, puntos históricos y servicios médicos en Trevelin y sus alrededores.'}
          </p>
        </div>

        {/* 4 Category Cards: 2x2 grid on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 lg:gap-7 xl:gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              onClick={card.onClick}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 h-[180px] sm:h-[240px] md:h-[340px] lg:h-[430px] xl:h-[470px] flex flex-col justify-between bg-slate-900 cursor-pointer select-none"
            >
              {/* Cover Image */}
              <img
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={card.image}
                onError={(e) => {
                  e.currentTarget.src = card.fallbackImage;
                }}
              />

              {/* Atmospheric Vignette Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

              {/* Top-Left Category Icon Badge */}
              <div className="relative z-10 p-2.5 sm:p-4">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-sm group-hover:bg-white/30 group-hover:scale-105 transition-all">
                  {card.icon}
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 p-2.5 sm:p-5 lg:p-6 flex items-end justify-between gap-2">
                <div className="min-w-0 pr-1">
                  <h3 className="text-xs sm:text-base md:text-xl font-bold text-white leading-tight drop-shadow-sm group-hover:text-cyan-100 transition-colors">
                    {card.title}
                  </h3>
                  <p className="hidden md:block text-xs sm:text-[13px] text-slate-200/90 line-clamp-2 mt-1 sm:mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Floating Action Arrow */}
                <button
                  aria-label={`Ver ${card.title}`}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white text-[#0c1a2d] group-hover:bg-cyan-50 group-hover:scale-110 shadow-md flex items-center justify-center shrink-0 transition-transform cursor-pointer"
                  type="button"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
