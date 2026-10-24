import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import Footer from './Footer';
import PanoramicBanner from './PanoramicBanner';
import { t } from '../data/translations';

export default function GastronomiaView({ lang, setLang, onBack, onOpenPrivacy }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const currentT = t[lang] || t.es;
  const tPage = currentT.gastronomiaPage;

  const places = [
    {
      id: 'cocina-patagonica',
      group: 'restaurantes',
      title: lang === 'es' ? 'Cocina patagónica' : 'Patagonian Cuisine',
      category: lang === 'es' ? 'Restaurante' : 'Restaurant',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Platos regionales con ingredientes locales, sabores auténticos y un ambiente cálido.'
        : 'Regional delicacies prepared with fresh local ingredients, authentic Andean flavors and cozy mountain ambiance.',
      image: './nain-maggie.webp',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Casa+de+Te+Nain+Maggie+Trevelin',
    },
    {
      id: 'cafeterias-te',
      group: 'cafes',
      title: lang === 'es' ? 'Cafeterías y casas de té' : 'Cafes & Tea Rooms',
      category: lang === 'es' ? 'Cafetería' : 'Cafe',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Opciones ideales para disfrutar de un buen café, pastelería casera y vistas increíbles.'
        : 'Perfect retreats to savor specialty pour-over coffee, traditional homemade pastries and scenic views.',
      image: './la-mutisia.webp?v=2',
      imagePos: 'object-center',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Casa+de+Te+La+Mutisia+Trevelin',
    },
    {
      id: 'pizzerias',
      group: 'restaurantes',
      title: lang === 'es' ? 'Pizzerías' : 'Pizzerias',
      category: lang === 'es' ? 'Pizzería' : 'Pizzeria',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Variedad de pizzas artesanales al horno, empanadas caseras y cerveza artesanal patagónica.'
        : 'Artisanal stone-baked pizzas, homemade empanadas and regional Patagonian craft beer.',
      image: './el-refugio-pizzeria.webp',
      imagePos: 'object-[center_40%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pizzeria+El+Refugio+Trevelin',
    },
    {
      id: 'bodegon-nikanor',
      group: 'restaurantes',
      title: 'Bodegón Nikanor',
      category: lang === 'es' ? 'Bodegón' : 'Traditional Bodegón',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Platos abundantes, minutas, opciones gourmet y sabores tradicionales en un ambiente cálido y familiar.'
        : 'Generous traditional dishes, gourmet bites, homemade comfort food and welcoming family atmosphere.',
      image: './nikanor.webp',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bodegon+Nikanor+Trevelin',
    },
    {
      id: 'parrillas',
      group: 'restaurantes',
      title: lang === 'es' ? 'Parrillas' : 'Steakhouses & Grills',
      category: lang === 'es' ? 'Parrilla' : 'Steakhouse',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Cortes de carne y sabores tradicionales de la Patagonia en un entorno único.'
        : 'Prime Argentinian beef cuts, slow-roasted Patagonian lamb and time-honored gaucho barbecue traditions.',
      image: './los-troncos.webp',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Parrilla+Los+Troncos+Trevelin',
    },
    {
      id: 'panaderias',
      group: 'cafes',
      title: lang === 'es' ? 'Panaderías y confiterías' : 'Bakeries & Confectioneries',
      category: lang === 'es' ? 'Panadería' : 'Bakery',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Productos artesanales, facturas, empanadas y opciones dulces y saladas.'
        : 'Fresh daily baked sourdough bread, Argentine medialunas, homemade empanadas and regional sweets.',
      image: './panaderias-confiterias.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Panaderia+Virginia+y+Mabel+Trevelin',
    },
    {
      id: 'cervecerias',
      group: 'cervecerias',
      title: lang === 'es' ? 'Cervecerías' : 'Craft Breweries',
      category: lang === 'es' ? 'Cervecería' : 'Brewery',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Cerveza artesanal y propuestas gastronómicas para disfrutar con amigos.'
        : 'Locally crafted mountain tap beer, regional tapas and welcoming sunset gathering spots.',
      image: './cervecerias-artesanales.webp',
      imagePos: 'object-[center_35%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cervecerias+Trevelin',
    },
  ];

  const filters = [
    { id: 'all', label: lang === 'en' ? 'All (7)' : 'Todos (7)' },
    { id: 'restaurantes', label: lang === 'en' ? 'Restaurants & Grills (4)' : 'Restaurantes y Parrillas (4)' },
    { id: 'cafes', label: lang === 'en' ? 'Cafes & Bakeries (2)' : 'Cafés y Panaderías (2)' },
    { id: 'cervecerias', label: lang === 'en' ? 'Breweries (1)' : 'Cervecerías (1)' },
  ];

  const filteredPlaces = activeFilter === 'all'
    ? places
    : places.filter(p => p.group === activeFilter);

  return (
    <div className="bg-[#f6f8fa] text-slate-800 antialiased selection:bg-slate-800 selection:text-white min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeaderAndHero */}
      <header className="w-full bg-[#0c1a2d] text-white select-none" data-purpose="hero-header-section">
        {/* Top Alpine Navigation Bar (Dedicated bar so artwork is never obstructed) */}
        <div className="w-full bg-[#0c1a2d] border-b border-white/10">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3 sm:py-4 flex items-center justify-between">
            {/* Logo Mosha */}
            <button
              onClick={onBack}
              className="flex flex-col items-start group cursor-pointer text-left text-white"
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
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="hidden sm:inline">{currentT.nav.volverInicio || 'Volver al inicio'}</span>
                <span className="sm:hidden">{currentT.nav.inicio || 'Inicio'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Uncropped 2.5:1 Panoramic Banner Artwork + Bilingual Graphic Overlay */}
        <div className="relative w-full aspect-[2.5/1] overflow-hidden bg-[#0c1a2d]">
          <img
            alt={tPage.title || 'Dónde Comer en Trevelin'}
            className="w-full h-full object-cover object-center"
            src="./banner-donde-comer-2x.webp?v=2"
            srcSet="./banner-donde-comer.webp?v=2 1200w, ./banner-donde-comer-2x.webp?v=2 1983w"
            sizes="100vw"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "./banner-donde-comer-2x.jpg";
            }}
          />

          {/* Center Bilingual Title & Graphic Icon Lockup */}
          <div className="absolute left-[53.5%] top-[49%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
            <div className="flex items-center gap-[clamp(0.4rem,1.4vw,1.5rem)]">
              <h1 className="flex flex-col items-center text-center font-extrabold tracking-tight leading-[0.94]">
                <span className="text-white text-[clamp(1.25rem,5vw,5.2rem)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
                  {lang === 'en' ? 'Where' : 'Dónde'}
                </span>
                <span className="bg-gradient-to-b from-[#fef3c7] via-[#f4c882] to-[#df9e42] bg-clip-text text-transparent text-[clamp(1.1rem,4.4vw,4.5rem)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)] whitespace-nowrap">
                  {lang === 'en' ? 'to Eat' : 'Comer'}
                </span>
              </h1>

              {/* Custom Fork + Plate + Knife SVG Icon */}
              <svg
                className="w-[clamp(2.2rem,8.2vw,8.5rem)] h-[clamp(2.2rem,8.2vw,8.5rem)] shrink-0 drop-shadow-[0_5px_14px_rgba(0,0,0,0.7)]"
                viewBox="0 0 130 120"
                fill="none"
              >
                <defs>
                  <linearGradient id="comerGoldGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="50%" stopColor="#f4c882" />
                    <stop offset="100%" stopColor="#df9e42" />
                  </linearGradient>
                </defs>
                {/* Fork (Left) */}
                <path
                  d="M14 16v28c0 5 3.5 9 8 10v46c0 2.8 2.2 5 5 5s5-2.2 5-5V54c4.5-1 8-5 8-10V16h-4v22h-3V16h-4v22h-3V16h-4v22h-4V16h-4z"
                  fill="url(#comerGoldGrad)"
                />
                {/* Plate Outer Ring & Inner Dish */}
                <circle cx="70" cy="60" r="36" stroke="url(#comerGoldGrad)" strokeWidth="6" />
                <circle cx="70" cy="60" r="26" fill="url(#comerGoldGrad)" />
                {/* Knife (Right) */}
                <path
                  d="M116 16c-6 6-10 18-10 34v18h5v32c0 2.8 2.2 5 5 5s5-2.2 5-5V16h-5z"
                  fill="url(#comerGoldGrad)"
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
                fill="#f4c882"
              />
            </svg>
          </div>
        </div>
      </header>
      {/* END: MainHeaderAndHero */}

      {/* BEGIN: SubNavigationBanner */}
      <section className="w-full bg-white border-b border-slate-200/80 relative z-30" data-purpose="breadcrumb-and-location-bar">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3.5 sm:py-4 flex items-center justify-between gap-4">
          {/* Back button pill */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 bg-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span className="hidden sm:inline">{currentT.nav.volverGuia || 'Volver a la guía'}</span>
            <span className="sm:hidden">{currentT.nav.guia || 'Guía'}</span>
          </button>

          {/* Region indicator pill */}
          <div className="flex items-center gap-2 text-right min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div className="text-right min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">Trevelin, Chubut</h2>
              <p className="hidden sm:block text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 truncate">
                {tPage.badge || 'Gastronomía regional y sabores únicos'}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: SubNavigationBanner */}

      {/* BEGIN: MainContent */}
      <main className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16" data-purpose="gastronomy-catalog">
        {/* Intro text & Quick Filter Pills */}
        <div className="mb-6 sm:mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b192c] tracking-tight mb-2 sm:mb-3">
              {tPage.sectionTitle || 'Sabores para descubrir'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {tPage.sectionDesc || 'Desde comida regional hasta cafeterías y casas de té, Trevelin ofrece una gran variedad de propuestas gastronómicas para todos los gustos. Descubrí algunos lugares recomendados para disfrutar durante tu estadía.'}
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer border ${
                  activeFilter === f.id
                    ? 'bg-[#0b192c] text-white border-[#0b192c] shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid matching Google Stitch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 xl:gap-8" data-purpose="cards-grid">
          {filteredPlaces.map((place, idx) => (
            <article
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    alt={place.title}
                    className={`w-full h-full object-cover ${place.imagePos || 'object-center'} hover:scale-105 transition-transform duration-300`}
                    src={place.image}
                    loading={idx < 4 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {place.title}
                  </h3>
                  {/* Badges */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1 font-medium">
                      <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {place.category}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium">
                      <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                      {place.location}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {place.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0b192c] hover:bg-[#152844] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
                  href={place.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span>{tPage.btnMaps || 'Ver en Google Maps'}</span>
                  <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
      {/* END: MainContent */}

      {/* BEGIN: PanoramicBanner */}
      <PanoramicBanner
        eyebrow={currentT.banner.descubriMas || 'DESCUBRÍ MÁS'}
        title={currentT.banner.entornoTitle || 'Trevelin y su entorno'}
        subtitle={lang === 'es' 
          ? 'Además de su excelente gastronomía, Trevelin te invita a descubrir paisajes únicos, actividades al aire libre y la calidez de su gente.' 
          : 'Alongside world-class dining, Trevelin invites you to experience pristine nature, outdoor trails and warm local hospitality.'}
        buttonText={currentT.banner.btnVolver || 'Volver al inicio'}
        onButtonClick={onBack}
        isSubpage={true}
        image="./stitch/banner-panoramico.webp"
      />
      {/* END: PanoramicBanner */}

      {/* BEGIN: MainFooter */}
      <Footer tFooter={currentT.footer} onOpenPrivacy={onOpenPrivacy} />
    </div>
  );
}
