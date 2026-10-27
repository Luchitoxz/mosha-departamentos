import React from 'react';
import { Globe, Phone, AlertCircle } from 'lucide-react';
import Footer from './Footer';
import PanoramicBanner from './PanoramicBanner';
import { t } from '../data/translations';

export default function ServiciosMedicosView({ lang, setLang, onBack, onOpenPrivacy }) {
  const currentT = t[lang] || t.es;
  const tPage = currentT.medicosPage;

  const quickDials = [
    { label: lang === 'es' ? '107 Médicas' : '107 Medical', num: '107', icon: '🚑', desc: lang === 'es' ? 'SAME Urgencias' : 'Ambulance' },
    { label: lang === 'es' ? 'Hospital Esquel' : 'Esquel Hospital', num: '02945451222', icon: '🏥', desc: '(02945) 451222' },
    { label: lang === 'es' ? 'Hospital Trevelin' : 'Trevelin Hospital', num: '02945480117', icon: '🏥', desc: '(02945) 480117' },
    { label: lang === 'es' ? '101 Policía' : '101 Police', num: '101', icon: '👮', desc: lang === 'es' ? 'Comisaría local' : 'Local Police' },
    { label: lang === 'es' ? '100 Bomberos' : '100 Fire Dept', num: '100', icon: '🚒', desc: lang === 'es' ? 'Bomberos' : 'Fire Rescue' },
  ];

  const services = [
    {
      id: 'hospital-esquel',
      title: lang === 'es' ? 'Hospital Zonal de Esquel (Guardia 24 hs)' : 'Esquel Regional Hospital (24/7 ER)',
      category: lang === 'es' ? 'Hospital de Cabecera (Alta Complejidad)' : 'Regional Hospital & ER',
      location: '25 de Mayo 150, Esquel',
      phone: '02945 451222',
      desc: lang === 'es'
        ? 'Centro de salud público de cabecera comarcal y máxima complejidad en la cordillera. Cuenta con guardia médica de urgencias 24 hs para adultos y pediatría, terapia intensiva y ambulancias SAME 107.'
        : 'Main high-complexity regional public hospital in the Andean corridor. Features 24/7 adult and pediatric emergency room, ICU, and ambulance fleet (SAME 107).',
      image: './hospital-zonal-esquel.webp',
      fallbackImage: './hospital-zonal-esquel.jpg',
      imagePos: 'object-[center_55%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hospital+Zonal+de+Esquel',
    },
    {
      id: 'hospital-trevelin',
      title: lang === 'es' ? 'Hospital Rural Trevelin (Guardia 24 hs)' : 'Trevelin Rural Hospital (24/7 ER)',
      category: lang === 'es' ? 'Hospital y Urgencias' : 'Hospital & Emergency',
      location: 'Av. San Martín 955, Trevelin',
      phone: '02945 480117',
      desc: lang === 'es'
        ? 'Centro de salud público con atención clínica general, guardia médica de urgencias las 24 horas, consultorios externos y ambulancias (SAME 107).'
        : 'Main public healthcare center in Trevelin with general clinical care, 24/7 emergency room, pediatric service and ambulance dispatch (SAME 107).',
      image: './hospital-rural-trevelin.webp?v=2',
      fallbackImage: './hospital-rural-trevelin.jpg',
      imagePos: 'object-[center_60%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hospital+Rural+Trevelin',
    },
    {
      id: 'farmacias',
      title: lang === 'es' ? 'Farmacias de Turno (Guardia 24 hs)' : '24h Duty Pharmacies',
      category: lang === 'es' ? 'Farmacia de Turno' : 'Duty Pharmacy',
      location: 'Esquel y Trevelin',
      phone: '02945 450500',
      desc: lang === 'es'
        ? 'Red de farmacias con turnos rotativos obligatorios las 24 horas para venta de medicamentos bajo receta, artículos de primera necesidad y primeros auxilios.'
        : 'Network of local pharmacies operating on a mandatory 24-hour rotating schedule for emergency prescriptions, medical items and first-aid.',
      image: './farmacia-trevelin.webp?v=2',
      fallbackImage: './farmacia-trevelin.jpg',
      imagePos: 'object-center',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Farmacias+de+turno+Esquel',
    },
    {
      id: 'veterinarias',
      title: lang === 'es' ? 'Clínicas Veterinarias y Mascotas' : 'Veterinary Clinics & Pets',
      category: lang === 'es' ? 'Veterinaria y Urgencias' : 'Veterinary Care',
      location: 'Esquel y Trevelin',
      phone: '02945 452000',
      desc: lang === 'es'
        ? 'Atención veterinaria local para emergencias, consultas clínicas, medicamentos y bienestar de mascotas durante tu estadía.'
        : 'Local veterinary clinics for emergency consultations, pet health care, medications and supplies during your stay in the region.',
      image: './stitch/medicos-8-veterinarias.webp',
      fallbackImage: './stitch/medicos-8-veterinarias.jpg',
      imagePos: 'object-center',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Veterinarias+en+Esquel',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeader */}
      <header className="w-full bg-[#0c1a2d] text-white select-none" data-purpose="hero-section">
        {/* Top Alpine Navigation Bar (Dedicated bar so artwork is never obstructed) */}
        <div className="w-full bg-[#0c1a2d] border-b border-white/10">
          <nav aria-label="Navegación principal" className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3 sm:py-4 flex items-center justify-between">
            {/* Punto Sur Brand Logo */}
            <button
              onClick={onBack}
              className="flex items-center space-x-2.5 sm:space-x-3 group cursor-pointer text-left text-white"
            >
              <img
                src="./punto-sur-logo.png"
                alt="Punto Sur Esquel"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shadow-sm border border-amber-400/40 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-extrabold tracking-[0.18em] text-white">PUNTO SUR</span>
                <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.32em] text-amber-300 uppercase pl-0.5">
                  ESQUEL • DEPTOS
                </span>
              </div>
            </button>

            {/* Right Action Buttons */}
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
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/35 bg-white/10 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
            alt={tPage.title || 'Servicios Médicos en Trevelin'}
            className="w-full h-full object-cover object-center"
            src="./banner-servicios-medicos-2x.webp?v=2"
            srcSet="./banner-servicios-medicos.webp?v=2 1200w, ./banner-servicios-medicos-2x.webp?v=2 1983w"
            sizes="100vw"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "./banner-servicios-medicos-2x.jpg";
            }}
          />

          {/* Center Bilingual Title & Medical Kit Icon Lockup */}
          <div className="absolute left-[53.5%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
            <div className="flex items-center gap-[clamp(0.4rem,1.4vw,1.5rem)]">
              <h1 className="flex flex-col items-center text-center font-extrabold tracking-tight leading-[0.94]">
                <span className="text-white text-[clamp(1.25rem,4.8vw,5rem)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
                  {lang === 'en' ? 'Medical' : 'Servicios'}
                </span>
                <span className="bg-gradient-to-b from-[#e0f2fe] via-[#7dd3fc] to-[#38bdf8] bg-clip-text text-transparent text-[clamp(1.15rem,4.5vw,4.7rem)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)] whitespace-nowrap">
                  {lang === 'en' ? 'Services' : 'Médicos'}
                </span>
              </h1>

              {/* Custom Medical First-Aid Kit SVG Icon */}
              <svg
                className="w-[clamp(2.2rem,8vw,8.2rem)] h-[clamp(2.2rem,8vw,8.2rem)] shrink-0 drop-shadow-[0_5px_14px_rgba(0,0,0,0.7)]"
                viewBox="0 0 120 110"
                fill="none"
              >
                <defs>
                  <linearGradient id="medKitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="55%" stopColor="#bae6fd" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
                {/* Kit Handle & Body with Cutout Medical Cross */}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M42 12c-4.4 0-8 3.6-8 8v8H18c-6.6 0-12 5.4-12 12v48c0 6.6 5.4 12 12 12h84c6.6 0 12-5.4 12-12V40c0-6.6-5.4-12-12-12H86v-8c0-4.4-3.6-8-8-8H42zm2 16v-6h32v6H44zm10 16h12v14h14v12H66v14H54V70H40V58h14V44z"
                  fill="url(#medKitGrad)"
                />
              </svg>
            </div>

            {/* Curved Sky-Blue Brush Stroke Underline */}
            <svg
              className="w-[88%] h-[clamp(6px,1.2vw,14px)] -mt-0.5 drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
              viewBox="0 0 300 18"
              fill="none"
            >
              <path
                d="M8 15 C 95 2, 205 2, 292 11 C 205 7, 95 8, 8 15 Z"
                fill="#7dd3fc"
              />
            </svg>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      {/* BEGIN: SubBar */}
      <section className="bg-white border-b border-slate-200/80 py-3.5 shadow-sm" data-purpose="secondary-toolbar">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between gap-4">
          {/* Back Link Button */}
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition shadow-sm cursor-pointer shrink-0"
          >
            <svg className="w-3.5 h-3.5 stroke-slate-700 fill-none stroke-[2.2]" viewBox="0 0 24 24">
              <line x1="19" x2="5" y1="12" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span className="hidden sm:inline">{currentT.nav.volverGuia || 'Volver a la guía'}</span>
            <span className="sm:hidden">{currentT.nav.guia || 'Guía'}</span>
          </button>

          {/* Location Indicator */}
          <div className="flex items-center gap-2 text-right min-w-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 fill-none stroke-current stroke-[2] shrink-0" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="text-right min-w-0 leading-tight">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Esquel, Chubut</div>
              <div className="hidden sm:block text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                {tPage.badge || 'Salud y bienestar durante tu estadía'}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: SubBar */}

      {/* BEGIN: Quick Emergency Bar */}
      <section className="bg-red-50/70 border-b border-red-100 py-3.5 sm:py-4 px-4 sm:px-6">
        <div className="w-full max-w-[1800px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 px-0 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="flex items-center gap-2 text-red-900">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              {tPage.quickUrgent || 'Líneas directas de emergencia'}:
            </span>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            {quickDials.map((qd) => (
              <a
                key={qd.num}
                href={`tel:${qd.num}`}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2 sm:py-1.5 rounded-full bg-white hover:bg-red-600 hover:text-white border border-red-200 text-slate-800 text-xs font-bold transition shadow-xs group"
              >
                <span>{qd.icon}</span>
                <span>{qd.label}</span>
                <Phone className="w-3 h-3 text-red-500 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* END: Quick Emergency Bar */}

      {/* BEGIN: MainContent */}
      <main className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16" data-purpose="medical-directory">
        {/* Header Titles */}
        <div className="mb-8 sm:mb-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-3">
            {tPage.sectionTitle || 'Información útil para tu tranquilidad'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {tPage.sectionDesc || 'Encontrá el Hospital Zonal de Esquel (alta complejidad) y el Hospital Rural de Trevelin con guardias médicas las 24 horas, farmacias con turnos rotativos y atención veterinaria. Toda la información esencial para tu tranquilidad.'}
          </p>
        </div>

        {/* Cards Grid: 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 xl:gap-8" data-purpose="directory-grid">
          {services.map((svc, idx) => (
            <article
              key={svc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 card-shadow flex flex-col justify-between hover:shadow-lg transition duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-slate-100">
                  <img
                    alt={svc.title}
                    className={`w-full h-full object-cover ${svc.imagePos || 'object-center'} hover:scale-105 transition-transform duration-300`}
                    loading={idx < 4 ? "eager" : "lazy"}
                    decoding="async"
                    src={svc.image}
                    onError={(e) => {
                      if (svc.fallbackImage) {
                        e.currentTarget.src = svc.fallbackImage;
                      }
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2 leading-snug">
                    {svc.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 stroke-slate-600 fill-none stroke-[2]" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                      {svc.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 stroke-slate-600 fill-none stroke-[2]" viewBox="0 0 24 24">
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                      </svg>
                      {svc.location}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 space-y-2">
                {svc.phone && (
                  <a
                    href={`tel:${svc.phone.replace(/[^0-9]/g, '')}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-700" />
                    <span>{svc.phone}</span>
                  </a>
                )}
                <a
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#071d33] hover:bg-[#0c2a47] text-white text-xs font-semibold rounded-xl transition cursor-pointer"
                  href={svc.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 stroke-white fill-none stroke-[2]" viewBox="0 0 24 24">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    {tPage.btnMaps || 'Ver en Google Maps'}
                  </span>
                  <svg className="w-3.5 h-3.5 stroke-white fill-none stroke-[2.2]" viewBox="0 0 24 24">
                    <line x1="5" x2="19" y1="12" y2="12" />
                    <polyline points="12 5 19 12 12 19"></polyline>
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
        subtitle={currentT.banner.entornoDesc || 'Cada rincón de Trevelin ofrece paisajes, historia y experiencias únicas. ¡Animate a explorar y vivir la Patagonia!'}
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
