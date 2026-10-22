import React from 'react';
import { Globe } from 'lucide-react';
import Footer from './Footer';
import PanoramicBanner from './PanoramicBanner';
import { t } from '../data/translations';

export default function PuntosHistoricosView({ lang, setLang, onBack, onOpenPrivacy }) {
  const currentT = t[lang] || t.es;
  const tPage = currentT.historicosPage;

  const places = [
    {
      id: 'capilla-bethel',
      title: lang === 'es' ? 'Capilla Bethel' : 'Bethel Chapel',
      category: lang === 'es' ? 'Sitio histórico' : 'Historic Site',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Emblemática capilla de la colonia galesa construida en piedra y madera.'
        : 'Iconic Welsh colony chapel built in stone and native wood in 1897.',
      image: './stitch/historicos-1-bethel.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/capillabethel',
    },
    {
      id: 'museo-regional',
      title: lang === 'es' ? 'Museo Regional Trevelin' : 'Trevelin Regional Museum',
      category: lang === 'es' ? 'Museo' : 'Museum',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Recorre la historia local, la cultura galesa y el desarrollo de la región.'
        : 'Explore local frontier history, Welsh culture and regional valley development.',
      image: './stitch/historicos-2-museo.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/museoregional',
    },
    {
      id: 'la-trochita',
      title: lang === 'es' ? 'La Trochita' : 'La Trochita Steam Train',
      category: lang === 'es' ? 'Patrimonio' : 'Heritage',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'El histórico tren patagónico que conecta paisajes, historia y tradición.'
        : 'The historic narrow-gauge steam train connecting breathtaking landscapes, history and lore.',
      image: './la-trochita.webp',
      imagePos: 'object-[center_35%]',
      mapsUrl: 'https://maps.app.goo.gl/latrochita',
    },
    {
      id: 'molino-nant-fach',
      title: lang === 'es' ? 'Molino Nant Fach' : 'Nant Fach Mill',
      category: lang === 'es' ? 'Sitio histórico' : 'Historic Site',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Primer molino harinero de la zona, testimonio del legado galés en la región.'
        : 'First flour mill in the area, a testament to Welsh agricultural pioneering.',
      image: './molino-nant-fach.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/uK5UfM8k6dGkZkM47',
    },
    {
      id: 'escuela-corintos',
      title: lang === 'es' ? 'Ruinas de la Escuela Nº 1' : 'School No. 1 Ruins',
      category: lang === 'es' ? 'Patrimonio' : 'Heritage',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Restos del antiguo edificio escolar, parte de la historia educativa de la colonia.'
        : 'Ruins of the historic school building and site of the 1902 Argentine plebiscite.',
      image: './stitch/historicos-5-escuela1.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/escuelariocorintos',
    },
    {
      id: 'cementerio-gales',
      title: lang === 'es' ? 'Cementerio Galés' : 'Welsh Cemetery',
      category: lang === 'es' ? 'Sitio histórico' : 'Historic Site',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Un lugar cargado de historia que refleja las raíces y tradiciones de la comunidad.'
        : 'A place rich in memory reflecting the pioneer roots and heritage of the community.',
      image: './stitch/historicos-6-cementerio.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/cementeriogales',
    },
    {
      id: 'campo-exposicion',
      title: lang === 'es' ? 'Campo de Exposición' : 'Heritage Fairgrounds',
      category: lang === 'es' ? 'Patrimonio' : 'Heritage',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Espacio histórico y cultural vinculado al desarrollo de la región.'
        : 'Historic and cultural grounds celebrating regional rural traditions.',
      image: './stitch/historicos-7-campo.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/campotradicion',
    },
    {
      id: 'puente-viejo',
      title: lang === 'es' ? 'Puente Viejo' : 'Old Wooden Bridge',
      category: lang === 'es' ? 'Sitio histórico' : 'Historic Site',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Antiguo puente de madera, parte del trazado histórico de la zona.'
        : 'Historic wooden bridge and pioneer crossing over the mountain river.',
      image: './stitch/historicos-8-puenteviejo.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/puenteviejo',
    },
  ];

  return (
    <div className="bg-[#fcfdfe] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeader */}
      <header className="relative w-full overflow-hidden bg-slate-900 min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex flex-col justify-between" data-purpose="hero-header">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Tren histórico La Trochita con fondo cordillerano"
            className="h-full w-full object-cover object-[center_35%] filter brightness-[0.92]"
            src="./la-trochita.webp"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "./la-trochita.jpg";
            }}
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        {/* Navigation Top Bar */}
        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 border-b border-white/15">
          <nav aria-label="Navegación principal" className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo Mosha Departamentos */}
            <button
              onClick={onBack}
              className="group flex flex-col items-start cursor-pointer text-left text-white"
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

            {/* Right Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switch */}
              <button
                onClick={() => setLang(prev => (prev === 'es' ? 'en' : 'es'))}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{lang.toUpperCase()}</span>
              </button>

              {/* Back to Home Button */}
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/40 bg-white/10 px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-slate-900 cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="hidden sm:inline">{currentT.nav.volverInicio || 'Volver al inicio'}</span>
                <span className="sm:hidden">Inicio</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Hero Typography Section */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 sm:py-16 md:py-20">
          <div className="max-w-3xl text-left">
            <span className="text-xs font-bold tracking-[0.28em] text-cyan-200 uppercase block mb-2 sm:mb-3">
              {tPage.eyebrow || 'EXPLORÁ TREVELIN'}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-md">
              {tPage.title || 'Puntos históricos'}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow">
              {tPage.subtitle || 'Historia, cultura y legado galés de Trevelin y sus alrededores.'}
            </p>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: SecondarySubNav */}
      <section className="border-b border-slate-200/80 bg-white shadow-xs" data-purpose="breadcrumb-location-bar">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3.5">
          {/* Back to Guide Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:bg-slate-50 cursor-pointer"
          >
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{currentT.nav.volverGuia || 'Volver a la guía'}</span>
          </button>

          {/* Region & Category Badge */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
              <svg className="w-4 h-4 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs sm:text-sm font-bold leading-none text-slate-900">Trevelin, Chubut</div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">{tPage.badge || 'Historia, cultura y patrimonio'}</div>
            </div>
          </div>
        </div>
      </section>
      {/* END: SecondarySubNav */}

      {/* BEGIN: MainContentSection */}
      <main className="py-8 sm:py-12 md:py-16" data-purpose="historical-sites-grid">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Section Heading Intro */}
          <div className="mb-8 sm:mb-12 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3">
              {tPage.sectionTitle || 'Un recorrido por la historia'}
            </h2>
            <p className="max-w-3xl text-sm font-normal text-slate-600 sm:text-base leading-relaxed">
              {tPage.sectionDesc || 'Descubrí los lugares más emblemáticos de Trevelin, su herencia cultural galesa y sitios históricos que forman parte de la identidad de la región.'}
            </p>
          </div>

          {/* 8 Historical Places Grid matching Google Stitch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 xl:gap-8">
            {places.map((place) => (
              <article
                key={place.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white travel-card-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={place.title}
                    className={`h-full w-full object-cover ${place.imagePos || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                    src={place.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {place.title}
                  </h3>

                  {/* Badges */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {place.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2l4 7h-3l4 7h-4v4h-2v-4h-4l4-7h-3l4-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {place.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-3">
                    {place.desc}
                  </p>

                  {/* Action Button */}
                  <div className="mt-auto pt-5">
                    <a
                      className="flex w-full items-center justify-between rounded-xl bg-[#0e1c2f] hover:bg-[#1e3e62] py-2.5 px-3.5 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                      href={place.mapsUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{tPage.btnMaps || 'Ver en Google Maps'}</span>
                      </span>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      {/* END: MainContentSection */}

      {/* BEGIN: BottomPanoramicBanner */}
      <PanoramicBanner
        eyebrow={currentT.banner.descubriMas || 'DESCUBRÍ MÁS'}
        title={currentT.banner.entornoTitle || 'Trevelin y su entorno'}
        subtitle={currentT.banner.entornoDesc || 'Cada rincón de Trevelin ofrece paisajes, historia y experiencias únicas. ¡Animate a explorar y vivir la Patagonia!'}
        buttonText={currentT.banner.btnVolver || 'Volver al inicio'}
        onButtonClick={onBack}
        isSubpage={true}
        image="./stitch/banner-panoramico.webp"
      />
      {/* END: BottomPanoramicBanner */}

      {/* BEGIN: MainFooter */}
      <Footer tFooter={currentT.footer} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
