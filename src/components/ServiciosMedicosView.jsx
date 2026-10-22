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
    { label: lang === 'es' ? 'Hospital Trevelin' : 'Trevelin Hospital', num: '02945480117', icon: '🏥', desc: '(02945) 480117' },
    { label: lang === 'es' ? '101 Policía' : '101 Police', num: '101', icon: '👮', desc: lang === 'es' ? 'Comisaría local' : 'Local Police' },
    { label: lang === 'es' ? '100 Bomberos' : '100 Fire Dept', num: '100', icon: '🚒', desc: lang === 'es' ? 'Rescate y auxilio' : 'Rescue' },
  ];

  const services = [
    {
      id: 'hospital',
      title: lang === 'es' ? 'Hospital Rural Trevelin (Guardia 24 hs)' : 'Trevelin Rural Hospital (24/7 ER)',
      category: lang === 'es' ? 'Hospital y Urgencias' : 'Hospital & Emergency',
      location: 'Av. San Martín 955, Trevelin',
      phone: '02945 480117',
      desc: lang === 'es'
        ? 'Centro de salud público con atención clínica general, guardia médica de urgencias las 24 horas, pediatría y ambulancias (SAME 107).'
        : 'Main public healthcare center in Trevelin with general clinical care, 24/7 emergency room, pediatric service and ambulance dispatch (SAME 107).',
      image: './stitch/medicos-1-hospital.webp',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hospital+Rural+Trevelin',
    },
    {
      id: 'farmacias',
      title: lang === 'es' ? 'Farmacias de Trevelin (Turnos de Guardia)' : 'Trevelin Pharmacies (Rotating Night Shifts)',
      category: lang === 'es' ? 'Farmacia' : 'Pharmacy',
      location: 'Av. San Martín, Trevelin',
      phone: '02945 480409',
      desc: lang === 'es'
        ? 'Farmacias locales con sistema rotativo de turnos de guardia obligatorios de 24 horas para emergencias nocturnas, recetas y medicamentos.'
        : 'Local pharmacies with mandatory 24-hour rotating night-shift schedules for prescription medicine, urgent health supplies and first aid.',
      image: './stitch/medicos-3-farmacias.webp',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Farmacias+en+Trevelin',
    },
    {
      id: 'veterinarias',
      title: lang === 'es' ? 'Atención Veterinaria y Mascotas' : 'Veterinary Care & Pets',
      category: lang === 'es' ? 'Veterinaria' : 'Veterinary',
      location: 'Trevelin',
      phone: '02945 480500',
      desc: lang === 'es'
        ? 'Atención veterinaria local para consultas médicas, urgencias, medicamentos y cuidados de tus mascotas durante tu estadía.'
        : 'Local veterinary care for general checkups, pet emergencies, medications and supplies during your stay in Trevelin.',
      image: './stitch/medicos-8-veterinarias.webp',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Veterinarias+en+Trevelin',
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeader */}
      <header className="relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col justify-between text-white border-b border-white/10" data-purpose="hero-section">
        {/* Hero Background Image */}
        <img
          alt="Servicios médicos en Trevelin"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] z-0 scale-105"
          src="./stitch/medicos-hero.webp"
          fetchpriority="high"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = "./stitch/medicos-hero.jpg";
          }}
        />
        <div className="absolute inset-0 hero-gradient z-10 pointer-events-none" />

        {/* Top Navigation Bar */}
        <nav aria-label="Navegación principal" className="relative z-20 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-5 flex items-center justify-between">
          {/* Brand Logo */}
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
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-white/35 bg-white/10 backdrop-blur-md text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="hidden sm:inline">{currentT.nav.volverInicio || 'Volver al inicio'}</span>
              <span className="sm:hidden">Inicio</span>
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 pb-10 sm:pb-16 flex flex-col justify-end">
          <span className="text-[11px] font-bold tracking-[0.25em] text-cyan-200 uppercase mb-2">
            {tPage.eyebrow || 'EXPLORÁ TREVELIN'}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 sm:mb-3">
            {tPage.title || 'Servicios médicos'}
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
            {tPage.subtitle || 'Hospitales, clínicas, farmacias y atención de urgencias en Trevelin y sus alrededores.'}
          </p>
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
            <span className="sm:hidden">Guía</span>
          </button>

          {/* Location Indicator */}
          <div className="flex items-center gap-2 text-right min-w-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 fill-none stroke-current stroke-[2] shrink-0" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div className="text-right min-w-0 leading-tight">
              <div className="text-xs sm:text-sm font-bold text-slate-900">Trevelin, Chubut</div>
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
            {tPage.sectionDesc || 'Encontrá el Hospital público con guardia de emergencias las 24 horas, farmacias con turnos rotativos y atención veterinaria en Trevelin. Toda la información esencial para una estadía segura y tranquila.'}
          </p>
        </div>

        {/* Cards Grid: 3 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto" data-purpose="directory-grid">
          {services.map((svc, idx) => (
            <article
              key={svc.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 card-shadow flex flex-col justify-between hover:shadow-lg transition duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-slate-100">
                  <img
                    alt={svc.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    loading={idx < 4 ? "eager" : "lazy"}
                    decoding="async"
                    src={svc.image}
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
