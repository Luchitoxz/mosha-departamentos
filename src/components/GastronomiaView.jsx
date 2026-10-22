import React from 'react';
import { Globe } from 'lucide-react';
import Footer from './Footer';
import PanoramicBanner from './PanoramicBanner';
import { t } from '../data/translations';

export default function GastronomiaView({ lang, setLang, onBack, onOpenPrivacy }) {
  const currentT = t[lang] || t.es;
  const tPage = currentT.gastronomiaPage;

  const places = [
    {
      id: 'cocina-patagonica',
      title: lang === 'es' ? 'Cocina patagónica' : 'Patagonian Cuisine',
      category: lang === 'es' ? 'Restaurante' : 'Restaurant',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Platos regionales con ingredientes locales, sabores auténticos y un ambiente cálido.'
        : 'Regional delicacies prepared with fresh local ingredients, authentic Andean flavors and cozy mountain ambiance.',
      image: './nain-maggie.webp',
      mapsUrl: 'https://maps.app.goo.gl/3w8S5zX9yL1k4vP27',
    },
    {
      id: 'cafeterias-te',
      title: lang === 'es' ? 'Cafeterías y casas de té' : 'Cafes & Tea Rooms',
      category: lang === 'es' ? 'Cafetería' : 'Cafe',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Opciones ideales para disfrutar de un buen café, pastelería casera y vistas increíbles.'
        : 'Perfect retreats to savor specialty pour-over coffee, traditional homemade pastries and scenic views.',
      image: './la-mutisia.webp',
      mapsUrl: 'https://maps.app.goo.gl/8v3kP2d1zL4w7yS99',
    },
    {
      id: 'pizzerias',
      title: lang === 'es' ? 'Pizzerías' : 'Pizzerias',
      category: lang === 'es' ? 'Pizzería' : 'Pizzeria',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Variedad de pizzas artesanales en un ambiente familiar y relajado.'
        : 'Artisanal stone-baked pizzas crafted in a welcoming and family-friendly environment.',
      image: './sangre-tinta.webp',
      mapsUrl: 'https://maps.app.goo.gl/7y2kL1z4w8v3P9S44',
    },
    {
      id: 'comida-rapida-gourmet',
      title: lang === 'es' ? 'Comida rápida gourmet' : 'Gourmet Fast Food',
      category: lang === 'es' ? 'Gastronomía' : 'Gastronomy',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Opciones modernas y sabrosas para una comida rápida y de calidad.'
        : 'Contemporary artisanal burgers, gourmet bites and quick high-quality mountain dining.',
      image: './nikanor.webp',
      mapsUrl: 'https://maps.app.goo.gl/9z1kL4w7y2v8P3S22',
    },
    {
      id: 'parrillas',
      title: lang === 'es' ? 'Parrillas' : 'Steakhouses & Grills',
      category: lang === 'es' ? 'Parrilla' : 'Steakhouse',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Cortes de carne y sabores tradicionales de la Patagonia en un entorno único.'
        : 'Prime Argentinian beef cuts, slow-roasted Patagonian lamb and time-honored gaucho barbecue traditions.',
      image: './los-troncos.webp',
      mapsUrl: 'https://maps.app.goo.gl/5x9kL2z1w4v8P7S11',
    },
    {
      id: 'panaderias',
      title: lang === 'es' ? 'Panaderías y confiterías' : 'Bakeries & Confectioneries',
      category: lang === 'es' ? 'Panadería' : 'Bakery',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Productos artesanales, facturas, empanadas y opciones dulces y saladas.'
        : 'Fresh daily baked sourdough bread, Argentine medialunas, homemade empanadas and regional sweets.',
      image: './virginia-y-mabel.webp',
      imagePos: 'object-[center_15%]',
      mapsUrl: 'https://maps.app.goo.gl/2w4kL7z1y8v3P9S55',
    },
    {
      id: 'cervecerias',
      title: lang === 'es' ? 'Cervecerías' : 'Craft Breweries',
      category: lang === 'es' ? 'Cervecería' : 'Brewery',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Cerveza artesanal y propuestas gastronómicas para disfrutar con amigos.'
        : 'Locally crafted mountain tap beer, regional tapas and welcoming sunset gathering spots.',
      image: './stitch/comer-7-cervecerias.webp',
      imagePos: 'object-center',
      mapsUrl: 'https://maps.app.goo.gl/trevelin',
    },
    {
      id: 'cocina-internacional',
      title: lang === 'es' ? 'Cocina internacional' : 'International Cuisine',
      category: lang === 'es' ? 'Restaurante' : 'Restaurant',
      location: 'Trevelin',
      desc: lang === 'es'
        ? 'Opciones variadas con sabores del mundo, en un ambiente acogedor.'
        : 'Eclectic menu choices blending international flavors with Patagonian produce in an intimate venue.',
      image: './vinas-nant-fall.webp',
      mapsUrl: 'https://maps.app.goo.gl/vinasnantfall',
    },
  ];

  return (
    <div className="bg-[#f6f8fa] text-slate-800 antialiased selection:bg-slate-800 selection:text-white min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeaderAndHero */}
      <header className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex flex-col justify-between" data-purpose="hero-header-section">
        {/* Background Hero Image */}
        <img
          alt="Gastronomía en Trevelin"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-105"
          src="./sangre-tinta.webp"
          fetchpriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "./sangre-tinta.jpg";
          }}
        />
        {/* Hero Dark Overlay Gradients */}
        <div className="absolute inset-0 hero-gradient z-10 pointer-events-none" />

        {/* Navigation Bar */}
        <div className="relative z-20 w-full border-b border-white/10">
          <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-5 flex items-center justify-between">
            {/* Logo Mosha */}
            <button
              onClick={onBack}
              className="flex flex-col items-start group cursor-pointer text-left text-white"
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
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="hidden sm:inline">{currentT.nav.volverInicio || 'Volver al inicio'}</span>
                <span className="sm:hidden">Inicio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8 sm:pt-12 pb-12 sm:pb-20">
          <div className="max-w-3xl text-white">
            <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/85 mb-2 sm:mb-3">
              {tPage.eyebrow || 'EXPLORÁ TREVELIN'}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-3 sm:mb-4">
              {tPage.title || 'Dónde comer'}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-xl text-shadow-sm">
              {tPage.subtitle || 'Restaurantes, cafeterías y sabores locales para disfrutar la gastronomía de Trevelin y sus alrededores.'}
            </p>
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
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 bg-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>{currentT.nav.volverGuia || 'Volver a la guía'}</span>
          </button>

          {/* Region indicator pill */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">Trevelin, Chubut</h2>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">
                {tPage.badge || 'Gastronomía regional y sabores únicos'}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: SubNavigationBanner */}

      {/* BEGIN: MainContent */}
      <main className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16" data-purpose="gastronomy-catalog">
        {/* Intro text */}
        <div className="max-w-4xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0b192c] tracking-tight mb-2 sm:mb-3">
            {tPage.sectionTitle || 'Sabores para descubrir'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {tPage.sectionDesc || 'Desde comida regional hasta cafeterías y casas de té, Trevelin ofrece una gran variedad de propuestas gastronómicas para todos los gustos. Descubrí algunos lugares recomendados para disfrutar durante tu estadía.'}
          </p>
        </div>

        {/* Cards Grid matching Google Stitch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 xl:gap-8" data-purpose="cards-grid">
          {places.map((place) => (
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
                    loading="lazy"
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
