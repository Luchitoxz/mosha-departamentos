import React from 'react';
import { Globe, Building2, CreditCard, Clock, MapPin, ExternalLink } from 'lucide-react';
import Footer from './Footer';
import PanoramicBanner from './PanoramicBanner';
import { t } from '../data/translations';

export default function BancosView({ lang, setLang, onBack, onOpenPrivacy }) {
  const currentT = t[lang] || t.es;
  const tPage = currentT.bancosPage || currentT.historicosPage;

  const places = [
    {
      id: 'banco-chubut',
      title: lang === 'es' ? 'Banco del Chubut (Trevelin)' : 'Banco del Chubut (Trevelin)',
      badge: lang === 'es' ? 'Red Link · Sucursal Oficial y Cajeros 24 hs' : 'Link Network · Main Branch & 24h ATMs',
      location: 'Av. San Martín 450, Trevelin',
      distance: 'Trevelin · Centro',
      hours: lang === 'es' ? 'Lun a Vie 08:00 - 13:00 (Cajeros 24 hs)' : 'Mon-Fri 8:00 AM - 1:00 PM (24h ATMs)',
      desc: lang === 'es'
        ? 'Única sucursal bancaria oficial en Trevelin. Cuenta con atención personalizada, cajas de atención comercial y cajeros automáticos Red Link habilitados las 24 hs los 365 días del año.'
        : 'Official bank branch in Trevelin with teller services, customer support, and 24/7 Red Link ATMs for withdrawals and transactions year-round.',
      image: './banco-chubut.webp',
      fallbackImage: './banco-chubut.jpg',
      imagePos: 'object-[center_40%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Banco+del+Chubut+Trevelin',
    },
    {
      id: 'extra-cash-anonima',
      title: lang === 'es' ? 'Supermercado La Anónima (Extra Cash)' : 'La Anónima Supermarket (Cash Back)',
      badge: lang === 'es' ? 'Retiro en Caja · Extra Cash' : 'Checkout Cash Back · Extra Cash',
      location: 'Av. San Martín 328, Trevelin',
      distance: 'Trevelin · Centro',
      hours: lang === 'es' ? 'Lun a Sáb 08:30 - 21:30 | Dom 09:00 - 13:00 / 17:00 - 21:00' : 'Mon-Sat 8:30 AM - 9:30 PM | Sun 9:00 AM - 1:00 PM / 5:00 PM - 9:00 PM',
      desc: lang === 'es'
        ? 'Excelente alternativa cuando hay filas en el cajero: podés retirar dinero en efectivo directamente por línea de caja al abonar tus compras con tarjeta de débito (Visa Débito / Maestro / Cabal).'
        : 'Great alternative during busy hours: withdraw cash directly at checkout counters when paying for your groceries with your debit card (Extra Cash service).',
      image: './la-anonima.webp',
      fallbackImage: './la-anonima.jpg',
      imagePos: 'object-[center_35%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Supermercado+La+Anonima+Trevelin',
    },
    {
      id: 'extra-cash-ypf',
      title: lang === 'es' ? 'Estación YPF Trevelin (Extra Cash 24 hs)' : 'YPF Gas Station (24h Cash Back)',
      badge: lang === 'es' ? 'Retiro de Efectivo · 24 Horas' : '24/7 Cash Back · Extra Cash',
      location: 'Av. San Martín y Río Corintos, Trevelin',
      distance: 'Trevelin · Acceso',
      hours: lang === 'es' ? 'Atención las 24 hs los 365 días' : 'Open 24/7 all year round',
      desc: lang === 'es'
        ? 'Estación de servicio y tienda de compras abierta las 24 horas. Ofrece la posibilidad de retirar efectivo con tu tarjeta de débito en caja con el servicio Extra Cash sujeto a disponibilidad de caja.'
        : '24-hour service station and convenience store. Allows cash withdrawals with debit card purchases via Extra Cash (subject to register cash availability).',
      image: './ypf-trevelin.webp',
      fallbackImage: './ypf-trevelin.jpg',
      imagePos: 'object-[center_35%]',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=YPF+Trevelin',
    },
  ];

  return (
    <div className="bg-[#fcfdfe] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
      {/* BEGIN: MainHeader */}
      <header className="relative w-full overflow-hidden bg-slate-900 min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex flex-col justify-between" data-purpose="hero-header">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Banco del Chubut y servicios financieros en Trevelin"
            className="h-full w-full object-cover object-[center_40%] filter brightness-[0.88]"
            src="./banco-chubut.webp"
            fetchpriority="high"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "./banco-chubut.jpg";
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
              {tPage.eyebrow || 'SERVICIOS FINANCIEROS'}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 drop-shadow-md">
              {tPage.title || 'Bancos y cajeros'}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed max-w-xl drop-shadow">
              {tPage.subtitle || 'Sucursales bancarias, cajeros automáticos 24 hs y puntos de retiro de efectivo en Trevelin y Esquel.'}
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
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-300/80 bg-white px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs transition-colors hover:border-slate-400 hover:bg-slate-50 cursor-pointer shrink-0"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="hidden sm:inline">{currentT.nav.volverGuia || 'Volver a la guía'}</span>
            <span className="sm:hidden">← Guía</span>
          </button>

          {/* Location Badge */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>Trevelin, Chubut</span>
          </div>
        </div>
      </section>
      {/* END: SecondarySubNav */}

      {/* Quick Financial Tips Banner */}
      <section className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-6 sm:pt-8">
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-[#0c1a2d] text-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2.5 sm:p-3 bg-white/10 rounded-xl text-cyan-300 shrink-0">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                {lang === 'es' ? 'Consejos útiles para efectivo en Trevelin' : 'Helpful Cash Tips in Trevelin'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {lang === 'es'
                  ? 'En Trevelin contás con la sucursal del Banco del Chubut (con cajeros Red Link 24 hs) y comercios adheridos al servicio Extra Cash (Supermercado La Anónima y Estación YPF) para retirar efectivo en el acto con tu tarjeta de débito.'
                  : 'Trevelin hosts Banco del Chubut (with 24/7 Link Network ATMs) and local Extra Cash partners (La Anónima Supermarket and YPF Gas Station) to withdraw cash instantly with debit purchases.'}
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=cajeros+automaticos+Trevelin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition shrink-0 cursor-pointer border border-white/20"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Ver cajeros en mapa' : 'View ATMs on map'}</span>
          </a>
        </div>
      </section>

      {/* BEGIN: MainContentSection */}
      <main className="flex-1 w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-14">
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block mb-3">
            {tPage.badge || 'Dinero en efectivo y cajeros'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {tPage.sectionTitle || 'Sucursales, cajeros y puntos Extra Cash'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            {tPage.sectionDesc || 'En Trevelin contás con la sucursal del Banco del Chubut (con cajeros automáticos Red Link habilitados las 24 hs) y puntos de retiro Extra Cash para obtener efectivo al instante abonando con tarjeta de débito.'}
          </p>
        </div>

        {/* Places Grid: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {places.map((place, idx) => (
            <article
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    alt={place.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${place.imagePos || 'object-center'}`}
                    src={place.image}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    fetchpriority={idx === 0 ? 'high' : 'auto'}
                    decoding="async"
                    onError={(e) => {
                      if (place.fallbackImage) {
                        e.currentTarget.src = place.fallbackImage;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Badge on Image */}
                  <span className="absolute bottom-3 left-3 bg-[#0b1b30]/90 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20">
                    {place.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors leading-snug mb-2">
                    {place.title}
                  </h3>

                  {/* Location & Distance */}
                  <div className="flex flex-col gap-1.5 text-xs text-slate-500 font-medium mb-3">
                    <span className="inline-flex items-center gap-1.5 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                      <span className="truncate">{place.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-[11px] sm:text-xs">{place.hours}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {place.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1">
                <a
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-[#0b1b30] hover:bg-[#132847] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-xs"
                  href={place.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-sky-300" />
                    {tPage.btnMaps || 'Ver en Google Maps'}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
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
