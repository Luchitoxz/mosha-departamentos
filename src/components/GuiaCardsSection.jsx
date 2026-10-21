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
      titleSplit: ['Lugares', 'para visitar'],
      desc: tGuia.card1Desc || 'Naturaleza, paisajes y experiencias únicas.',
      image: './cascadas-nant-y-fall.png',
      fallbackImage: './tulipanes.jpg',
      onClick: onOpenLugares,
      icon: (
        <svg className="w-6 h-6 text-white shrink-0 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12M15 15l3 3m0 0l3-3m-3 3V9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'gastronomia',
      title: tGuia.card2Title || 'Dónde comer',
      titleSplit: ['Dónde', 'comer'],
      desc: tGuia.card2Desc || 'Restaurantes, cafeterías y sabores locales.',
      image: './los-troncos.jpg',
      fallbackImage: './nain-maggie.jpg',
      onClick: onOpenGastronomia,
      icon: (
        <svg className="w-6 h-6 text-white shrink-0 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M8.25 4.5v7.5a2.25 2.25 0 01-4.5 0V4.5m4.5 0h-4.5m12 0v15m0-15c1.657 0 3 1.343 3 3v4.5c0 1.657-1.343 3-3 3m0-10.5h-1.5v10.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'historicos',
      title: tGuia.card3Title || 'Puntos históricos',
      titleSplit: ['Puntos', 'históricos'],
      desc: tGuia.card3Desc || 'Historia, cultura y el legado galés.',
      image: './la-trochita.jpg',
      fallbackImage: './molino-nant-fach.jpg',
      onClick: onOpenHistoricos,
      icon: (
        <svg className="w-6 h-6 text-white shrink-0 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: 'medicos',
      title: tGuia.card4Title || 'Servicios médicos',
      titleSplit: ['Servicios', 'médicos'],
      desc: tGuia.card4Desc || 'Hospitales, clínicas, farmacias y urgencias.',
      image: './stitch/medicos-hero.jpg',
      fallbackImage: './stitch/medicos-1-hospital.jpg',
      onClick: onOpenMedicos,
      icon: (
        <svg className="w-6 h-6 text-white shrink-0 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#f8fafc]" id="guia">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header Section Info */}
        <div className="mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#1e3e62] uppercase block mb-1.5">
            {tGuia.eyebrow || 'DESCUBRÍ TREVELIN'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0c1a2d] tracking-tight">
            {tGuia.title || 'Explorá, disfrutá y viví la experiencia'}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-2.5 max-w-4xl leading-relaxed">
            {tGuia.subtitle || 'Accedé a nuestra guía con los mejores lugares para visitar, dónde comer, puntos históricos y servicios médicos en Trevelin y sus alrededores.'}
          </p>
        </div>

        {/* 4-Columns Category Cards matching Google Stitch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 xl:gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              onClick={card.onClick}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 h-[270px] sm:h-[340px] md:h-[380px] lg:h-[430px] xl:h-[450px] flex flex-col justify-end bg-slate-900 cursor-pointer select-none"
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

              {/* Atmospheric Vignette */}
              <div className="absolute inset-0 card-vignette" />

              {/* Card Footer Content */}
              <div className="relative z-10 p-4 sm:p-5 lg:p-6 flex items-end justify-between">
                <div className="pr-2">
                  {/* Icon + Title */}
                  <div className="flex items-center space-x-2 sm:space-x-2.5 mb-1 sm:mb-1.5">
                    {card.icon}
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                      {card.titleSplit[0]} <br /> {card.titleSplit[1]}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 line-clamp-2 mt-1 sm:mt-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Floating Action Arrow */}
                <button
                  aria-label={`Ver ${card.title}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#0c1a2d] group-hover:bg-white group-hover:scale-110 shadow-md flex items-center justify-center shrink-0 transition-transform cursor-pointer"
                  type="button"
                >
                  <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
