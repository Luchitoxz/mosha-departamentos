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
      mapsUrl: 'https://maps.app.goo.gl/9Zc1j3d3BsmhVnN26',
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
      mapsUrl: 'https://maps.app.goo.gl/5p7kL7LhY3GZkmZ78',
    },
    {
      id: 'los-alerces',
      title: lang === 'es' ? 'Parque Nacional Los Alerces' : 'Los Alerces National Park',
      location: 'Esquel / Trevelin',
      category: lang === 'es' ? 'Parque Nacional' : 'National Park',
      desc: lang === 'es'
        ? 'Lagos glaciares de aguas turquesas, bosques milenarios de alerce y vistas impresionantes declaradas Patrimonio Mundial.'
        : 'Turquoise glacial lakes, ancient millennial alerce forests and UNESCO World Heritage mountain landscapes.',
      image: './los-alerces.webp',
      imagePos: 'object-[center_40%]',
      mapsUrl: 'https://maps.app.goo.gl/P85cQ3PzXhU1p8M57',
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
      mapsUrl: 'https://maps.app.goo.gl/uK5UfM8k6dGkZkM47',
    },
    {
      id: 'lago-futalaufquen',
      title: lang === 'es' ? 'Lago Futalaufquen' : 'Futalaufquen Lake',
      location: 'Parque Nacional Los Alerces',
      category: lang === 'es' ? 'Lago glaciar' : 'Glacial Lake',
      desc: lang === 'es'
        ? 'Aguas cristalinas y paisajes increíbles, ideal para relajarse y disfrutar la naturaleza en estado puro.'
        : 'Crystal-clear waters and mountain beaches, ideal for relaxation, boat excursions and serene nature contemplation.',
      image: './los-alerces.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/kG1v9U7hE9GZ1',
    },
    {
      id: 'mirador-cerro-cruz',
      title: lang === 'es' ? 'Mirador del Valle' : 'Valley Viewpoint',
      location: 'Trevelin',
      category: lang === 'es' ? 'Mirador panorámico' : 'Panoramic Viewpoint',
      desc: lang === 'es'
        ? 'Una vista panorámica increíble del valle y la cordillera a pocos minutos del centro.'
        : 'A breathtaking 360° panoramic view of the agricultural valley and mountain ranges just minutes from downtown.',
      image: './mirador-cerro-la-cruz.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/4r3d8sK9nL2m1pQ49',
    },
    {
      id: 'senderos-trekking',
      title: lang === 'es' ? 'Senderos y trekking' : 'Trails & Trekking',
      location: 'Trevelin',
      category: lang === 'es' ? 'Senderos' : 'Trails',
      desc: lang === 'es'
        ? 'Distintos senderos para disfrutar del bosque, la flora local y la tranquilidad cordillerana.'
        : 'Diverse trails through native Andean woods, local flora and mountain tranquility.',
      image: './vinas-nant-fall.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/vinasnantfall',
    },
    {
      id: 'cordillera-alrededores',
      title: lang === 'es' ? 'Cordillera y alrededores' : 'Andes & Scenic Surroundings',
      location: 'Trevelin',
      category: lang === 'es' ? 'Paisajes' : 'Scenic Routes',
      desc: lang === 'es'
        ? 'Rutas escénicas y paisajes únicos en todas las estaciones del año en el corazón de la Patagonia.'
        : 'Scenic driving routes towards the border pass, meltwater rivers and awe-inspiring alpine scenery in every season.',
      image: './stitch/banner-panoramico.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/trevelin',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeaderAndHero */}
      <header className="relative w-full h-[400px] sm:h-[460px] md:h-[520px] overflow-hidden text-white flex flex-col justify-between select-none">
        {/* Hero Background Image with Overlay */}
        <img
          alt="Cascadas turquesas en Trevelin"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 transform scale-105"
          src="./stitch/lugares-hero.webp"
          fetchpriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "./stitch/lugares-hero.png";
          }}
        />
        <div className="absolute inset-0 hero-gradient z-[1]" />

        {/* Top Navigation Bar */}
        <nav aria-label="Navegación principal" className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-6 flex items-center justify-between">
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
              <span className="text-xl sm:text-2xl font-extrabold tracking-[0.25em] text-white">MOSHA</span>
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
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-white/35 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-xs sm:text-sm font-medium tracking-wide transition cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="hidden sm:inline">{currentT.nav.volverInicio || 'Volver al inicio'}</span>
              <span className="sm:hidden">Inicio</span>
            </button>
          </div>
        </nav>

        {/* Hero Titles and Subtitle */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-10 sm:pb-16 pt-4 sm:pt-6">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-slate-200 mb-2">
            {tPage.eyebrow || 'EXPLORÁ TREVELIN'}
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
            {tPage.title || 'Lugares para visitar'}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal max-w-xl leading-relaxed">
            {tPage.subtitle || 'Naturaleza, paisajes y experiencias únicas en Trevelin y sus alrededores.'}
          </p>
        </div>
      </header>
      {/* END: MainHeaderAndHero */}

      {/* BEGIN: SubHeaderBar */}
      <section className="w-full bg-[#f1f5f9]/80 border-b border-slate-200/80 py-3 sm:py-4 px-4 sm:px-6 select-none" data-purpose="sub-header-navigation">
        <div className="w-full max-w-[1800px] mx-auto flex items-center justify-between gap-4 px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Back to Guide Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{currentT.nav.volverGuia || 'Volver a la guía'}</span>
          </button>

          {/* Location Indicator Right */}
          <div className="flex items-center gap-2.5 text-right">
            <div className="text-right">
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Trevelin, Chubut</p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-normal leading-tight">
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
          {places.map((place) => (
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
                    loading="lazy"
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
