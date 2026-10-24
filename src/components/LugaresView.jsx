import React from 'react';
import { Globe } from 'lucide-react';
import Footer from './Footer';
import PanoramicBanner from './PanoramicBanner';
import { t } from '../data/translations';

export default function LugaresView({ lang, setLang, onBack, onOpenPrivacy }) {
  const currentT = t[lang] || t.es;
  const tPage = currentT.lugaresPage;

  const places = [
    {
      id: 'nant-y-fall',
      title: lang === 'es' ? 'Cascadas Nant y Fall' : 'Nant y Fall Waterfalls',
      location: 'Trevelin',
      category: lang === 'es' ? 'Naturaleza' : 'Nature',
      desc: lang === 'es'
        ? 'Un entorno natural increíble con cascadas, bosques nativos y senderos para recorrer.'
        : 'A breathtaking natural environment with cascading waterfalls, native forests and walking trails.',
      image: './cascadas-nant-y-fall.webp',
      imagePos: 'object-[center_20%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cascadas+Nant+y+Fall+Trevelin',
    },
    {
      id: 'tulipanes',
      title: lang === 'es' ? 'Campo de Tulipanes' : 'Tulip Fields',
      location: 'Trevelin',
      category: lang === 'es' ? 'Primavera (Oct-Nov)' : 'Spring (Oct-Nov)',
      desc: lang === 'es'
        ? 'Un paisaje único en primavera con millones de tulipanes florecidos con el fondo de la cordillera nevada.'
        : 'A unique spring wonderland featuring millions of vibrant blooming tulips framed by snow-capped Andean peaks.',
      image: './tulipanes.webp',
      imagePos: 'object-[center_55%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Campo+de+Tulipanes+Trevelin',
    },
    {
      id: 'los-alerces',
      title: lang === 'es' ? 'Parque Nacional Los Alerces' : 'Los Alerces National Park',
      location: 'Esquel / Trevelin',
      category: lang === 'es' ? 'Parque Nacional' : 'National Park',
      desc: lang === 'es'
        ? 'Lagos glaciares de aguas turquesas, bosques milenarios de alerce y vistas impresionantes declaradas Patrimonio Mundial.'
        : 'Turquoise glacial lakes, ancient millennial alerce forests and UNESCO World Heritage mountain landscapes.',
      image: './parque-los-alerces.webp',
      imagePos: 'object-[center_40%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parque+Nacional+Los+Alerces',
    },
    {
      id: 'molino-nant-fach',
      title: lang === 'es' ? 'Molino Nant Fach' : 'Nant Fach Mill Museum',
      location: 'Trevelin',
      category: lang === 'es' ? 'Sitio histórico' : 'Historic Site',
      desc: lang === 'es'
        ? 'Museo histórico del primer molino harinero de la zona impulsado por rueda hidráulica y rodeado de naturaleza.'
        : 'Historic watermill museum recreating the pioneering Welsh agricultural era in an idyllic setting.',
      image: './molino-nant-fach.webp',
      imagePos: 'object-[center_35%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Molino+Museo+Nant+Fach+Trevelin',
    },
    {
      id: 'lago-futalaufquen',
      title: lang === 'es' ? 'Lago Futalaufquen' : 'Futalaufquen Lake',
      location: 'Parque Nacional Los Alerces',
      category: lang === 'es' ? 'Lago glaciar' : 'Glacial Lake',
      desc: lang === 'es'
        ? 'Aguas cristalinas y playas de montaña, ideal para relajarse y disfrutar la naturaleza en estado puro.'
        : 'Crystal-clear waters and mountain beaches, ideal for relaxation, boat excursions and serene nature contemplation.',
      image: './lago-futalaufquen.webp',
      imagePos: 'object-[center_55%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lago+Futalaufquen+Trevelin',
    },
    {
      id: 'la-trochita',
      title: lang === 'es' ? 'La Trochita' : 'La Trochita Steam Train',
      location: 'Esquel / Trevelin',
      category: lang === 'es' ? 'Tren histórico' : 'Historic Train',
      desc: lang === 'es'
        ? 'El histórico tren a vapor patagónico de trocha angosta que conecta paisajes, historia y tradición.'
        : 'The historic narrow-gauge steam train connecting breathtaking Patagonian landscapes and folklore.',
      image: './la-trochita.webp',
      imagePos: 'object-[center_35%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Estacion+La+Trochita+Esquel',
    },
    {
      id: 'museo-regional',
      title: lang === 'es' ? 'Museo Regional Trevelin' : 'Trevelin Regional Museum',
      location: 'Trevelin',
      category: lang === 'es' ? 'Museo' : 'Museum',
      desc: lang === 'es'
        ? 'Ubicado en el antiguo molino harinero Andes, recorre la historia local, la cultura galesa y el poblamiento de la región.'
        : 'Located in the historic Andes flour mill building, exploring pioneer lore, Welsh heritage and valley settlement.',
      image: './museo-regional-trevelin.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Museo+Regional+Trevelin+Molino+Andes',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeaderAndHero */}
      <header className="w-full bg-[#0c1a2d] text-white select-none">
        {/* Top Alpine Navigation Bar (Dedicated bar so artwork is never obstructed) */}
        <div className="w-full bg-[#0c1a2d] border-b border-white/10">
          <nav aria-label="Navegación principal" className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3 sm:py-4 flex items-center justify-between">
            {/* Mosha Brand Logo */}
            <button
              onClick={onBack}
              className="flex flex-col items-start group cursor-pointer text-left"
              data-purpose="brand-logo"
            >
              <div className="flex items-center space-x-1.5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[1.75] transition-transform group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 10.5L12 3l9 7.5M5.25 8.75V20.25a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V8.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-lg sm:text-2xl font-extrabold tracking-[0.25em] text-white">MOSHA</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.38em] text-slate-200 uppercase pl-0.5">
                DEPARTAMENTOS
              </span>
            </button>

            {/* Action Buttons Right */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switch */}
              <button
                onClick={() => setLang(prev => (prev === 'es' ? 'en' : 'es'))}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Return to Home Top Button */}
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/35 bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-medium tracking-wide transition cursor-pointer"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hidden sm:inline">{currentT.nav.volverInicio || 'Volver al inicio'}</span>
                <span className="sm:hidden">{currentT.nav.inicio || 'Inicio'}</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Uncropped 2.5:1 Panoramic Banner Artwork + Bilingual Graphic Overlay */}
        <div className="relative w-full aspect-[2.5/1] overflow-hidden bg-[#0c1a2d]">
          <img
            alt={tPage.title || 'Lugares para Visitar en Trevelin'}
            className="w-full h-full object-cover object-center"
            src="./banner-lugares-2x.webp?v=2"
            srcSet="./banner-lugares.webp?v=2 1200w, ./banner-lugares-2x.webp?v=2 1983w"
            sizes="100vw"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "./banner-lugares-2x.jpg";
            }}
          />

          {/* Bilingual Wooden Signpost Labels (Locked to exact sign coordinates) */}
          <div className="absolute inset-0 pointer-events-none">
            <span
              className="absolute left-[11.2%] top-[10.8%] rotate-[7deg] text-white/90 font-bold tracking-[0.08em] uppercase text-[clamp(6px,1.25vw,22px)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
            >
              {lang === 'en' ? 'WATERFALLS' : 'CASCADAS'}
            </span>
            <span
              className="absolute left-[11.4%] top-[27.5%] rotate-[4.5deg] text-white/90 font-bold tracking-[0.08em] uppercase text-[clamp(6px,1.25vw,22px)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
            >
              {lang === 'en' ? 'FORESTS' : 'BOSQUES'}
            </span>
            <span
              className="absolute left-[12.2%] top-[42.8%] rotate-[1.8deg] text-white/90 font-bold tracking-[0.08em] uppercase text-[clamp(6px,1.25vw,22px)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
            >
              {lang === 'en' ? 'LAKES' : 'LAGOS'}
            </span>
          </div>

          {/* Center Bilingual Title & Graphic Icon Lockup */}
          <div className="absolute left-[53%] top-[49%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
            <div className="flex items-center gap-[clamp(0.4rem,1.4vw,1.5rem)]">
              <h1 className="flex flex-col items-center text-center font-extrabold tracking-tight leading-[0.94]">
                <span className="text-white text-[clamp(1.25rem,5vw,5.2rem)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
                  {lang === 'en' ? 'Places' : 'Lugares'}
                </span>
                <span className="bg-gradient-to-b from-[#fef3c7] via-[#f5d096] to-[#dfa954] bg-clip-text text-transparent text-[clamp(1rem,3.8vw,3.9rem)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)] whitespace-nowrap">
                  {lang === 'en' ? 'to Visit' : 'para Visitar'}
                </span>
              </h1>

              {/* Custom Location Pin + Mountains + Trail SVG Icon */}
              <svg
                className="w-[clamp(2.2rem,8.5vw,8.8rem)] h-[clamp(2.2rem,8.5vw,8.8rem)] shrink-0 drop-shadow-[0_5px_14px_rgba(0,0,0,0.7)]"
                viewBox="0 0 120 120"
                fill="none"
              >
                <defs>
                  <linearGradient id="lugaresPinGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#e2b05e" />
                  </linearGradient>
                </defs>
                {/* Map Pin */}
                <path
                  d="M60 8C46.7 8 36 18.7 36 32c0 16.5 24 38 24 38s24-21.5 24-38c0-13.3-10.7-24-24-24zm0 33c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"
                  fill="url(#lugaresPinGrad)"
                />
                {/* Left & Right Mountain Peaks */}
                <path
                  d="M12 88l24-28 16 18-8 10H12zm96 0L82 58 64 78l10 10h34z"
                  fill="#ffffff"
                />
                {/* Winding River Trail */}
                <path
                  d="M56 76c-10 4-16 8-6 13 10 5 6 12-12 19h26c12-7 14-15 2-21-8-4-6-7 2-11H56z"
                  fill="#ffffff"
                />
                {/* Pine Trees Bottom Right */}
                <path
                  d="M90 78l-7 11h4l-5 9h16l-5-9h4l-7-11zm12 5l-5 8h3l-4 7h12l-4-7h3l-5-8z"
                  fill="#ffffff"
                />
              </svg>
            </div>

            {/* Curved Golden Brush Stroke Underline */}
            <svg
              className="w-[88%] h-[clamp(6px,1.2vw,14px)] -mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              viewBox="0 0 300 18"
              fill="none"
            >
              <path
                d="M8 15 C 95 2, 205 2, 292 11 C 205 7, 95 8, 8 15 Z"
                fill="#f5d096"
              />
            </svg>
          </div>
        </div>
      </header>
      {/* END: MainHeaderAndHero */}

      {/* BEGIN: SubHeaderBar */}
      <section className="w-full bg-[#f1f5f9]/80 border-b border-slate-200/80 py-3 sm:py-4 px-4 sm:px-6 select-none" data-purpose="sub-header-navigation">
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between gap-4 px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Back to Guide Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold tracking-wide transition shadow-sm cursor-pointer shrink-0"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden sm:inline">{currentT.nav.volverGuia || 'Volver a la guía'}</span>
            <span className="sm:hidden">{currentT.nav.guia || 'Guía'}</span>
          </button>

          {/* Location Indicator Right */}
          <div className="flex items-center gap-2 text-right min-w-0">
            <div className="text-right min-w-0">
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Trevelin, Chubut</p>
              <p className="hidden sm:block text-[10px] sm:text-xs text-slate-500 font-normal leading-tight">
                {tPage.badge || 'Naturaleza en estado puro'}
              </p>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-200/70 flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* END: SubHeaderBar */}

      {/* BEGIN: MainContentSection */}
      <main className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 grow">
        {/* Title & Description Intro */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#091524] tracking-tight mb-2 sm:mb-3">
            {tPage.sectionTitle || 'Recomendaciones imperdibles'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {tPage.sectionDesc || 'Descubrí los mejores lugares para conocer, disfrutar de la naturaleza y vivir experiencias únicas en Trevelin y sus alrededores. Todos los destinos están muy cerca de tu estadía.'}
          </p>
        </div>

        {/* Places 8-Card Grid matching Google Stitch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 xl:gap-8" data-purpose="recommendations-grid">
          {places.map((place, idx) => (
            <article
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-slate-100 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-100">
                  <img
                    alt={place.title}
                    className={`w-full h-full object-cover ${place.imagePos || 'object-center'} transition-transform duration-300 hover:scale-105`}
                    src={place.image}
                    loading={idx < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2.5">
                    {place.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {place.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {place.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {place.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <a
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#0b1b30] hover:bg-[#132847] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  href={place.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {tPage.btnMaps || 'Ver en Google Maps'}
                  </span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      {/* END: MainContentSection */}

      {/* BEGIN: ClosingPanoramicBanner */}
      <PanoramicBanner
        eyebrow={currentT.banner.descubriMas || 'DESCUBRÍ MÁS'}
        title={currentT.banner.entornoTitle || 'Trevelin y su entorno'}
        subtitle={currentT.banner.entornoDesc || 'Cada rincón de Trevelin ofrece paisajes, historia y experiencias únicas. ¡Animate a explorar y vivir la Patagonia!'}
        buttonText={currentT.banner.btnVolver || 'Volver al inicio'}
        onButtonClick={onBack}
        isSubpage={true}
        image="./stitch/banner-panoramico.webp"
      />
      {/* END: ClosingPanoramicBanner */}

      {/* BEGIN: Footer */}
      <Footer tFooter={currentT.footer} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
