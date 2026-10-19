import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Navigation, 
  Star, 
  Sparkles, 
  ShoppingBag, 
  Fuel, 
  HeartPulse, 
  CreditCard, 
  ExternalLink,
  Store,
  Globe
} from 'lucide-react';

export default function EsencialesView({ lang = 'es', setLang, onBack }) {
  const [selectedTag, setSelectedTag] = useState('todos');

  const isEn = lang === 'en';

  const filterPills = isEn ? [
    { id: 'todos', label: 'All Essentials' },
    { id: 'super', label: 'Groceries & Bakeries' },
    { id: 'combustible', label: 'Fuel & ATMs' },
    { id: 'salud', label: 'Pharmacy & Health' },
  ] : [
    { id: 'todos', label: 'Todos los servicios' },
    { id: 'super', label: 'Supermercados & Panaderías' },
    { id: 'combustible', label: 'YPF & Cajeros' },
    { id: 'salud', label: 'Farmacia & Salud' },
  ];

  const esenciales = [
    {
      id: 'la-anonima',
      title: 'Supermercado La Anónima (Sucursal Trevelin)',
      tag: 'super',
      categoryLabel: isEn ? 'Main Supermarket & Groceries' : 'Supermercado Principal & Almacén',
      image: './la-anonima.jpg?v=2',
      rating: '4.4',
      reviews: '1.820',
      distance: isEn ? '900 m from Mosha • 2 min drive / 10 min walk' : 'A 900 m de Mosha • 2 min en auto / 10 min a pie',
      address: 'Av. San Martín 328, Trevelin',
      desc: isEn
        ? 'The town’s most comprehensive supermarket. Features full butcher with Argentine cuts, fresh produce, deli counter, bakery, dairy, beverages, regional wines, and toiletries.'
        : 'El supermercado más completo de la localidad. Cuenta con carnicería con cortes de asado, verdulería, fiambrería, panadería, lácteos, bebidas, vinos regionales y artículos de limpieza e higiene personal.',
      tip: isEn
        ? 'Accepts all major debit and credit cards. Open continuously daily until 9:30 PM.'
        : 'Aceptan todas las tarjetas de débito y crédito. Abierto todos los días de corrido hasta las 21:30 hs.',
      mapsQuery: 'La Anonima Trevelin Chubut',
    },
    {
      id: 'ypf',
      title: 'Estación de Servicio YPF & Tienda Full',
      tag: 'combustible',
      categoryLabel: isEn ? '24h Gas Station & Convenience Store' : 'Combustible 24h & Tienda',
      image: './ypf-trevelin.jpg?v=2',
      rating: '4.5',
      reviews: '1.450',
      distance: isEn ? '1.2 km from Mosha • 3 min drive' : 'A 1.2 km de Mosha • 3 min en auto',
      address: 'Ruta 259 y Av. San Martín',
      desc: isEn
        ? 'Vital pit-stop before road-tripping to waterfalls or Los Alerces National Park. Premium & regular fuel, clean restrooms, coffee bar, and 24-hour convenience market.'
        : 'Punto estratégico indispensable en la Patagonia. Carga de naftas Infinia, Súper y Diésel antes de salir hacia las cascadas o el Parque Nacional Los Alerces. Cuenta con tienda Full abierta las 24 horas y cafetería.',
      tip: isEn
        ? 'Fill up your tank before entering Los Alerces National Park as there are no fuel stations inside the park.'
        : 'Cargá tanque lleno antes de entrar al Parque Los Alerces porque adentro no hay estaciones de servicio.',
      mapsQuery: 'YPF Trevelin Chubut',
    },
    {
      id: 'panaderia',
      title: 'Panadería & Pastelería Artesanal del Valle',
      tag: 'super',
      categoryLabel: isEn ? 'Fresh Bread & Breakfast Treats' : 'Pan Casero & Desayunos',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      rating: '4.8',
      reviews: '520',
      distance: isEn ? '600 m from Mosha • 7 min walk' : 'A 600 m de Mosha • 7 min a pie',
      address: 'Centro de Trevelin',
      desc: isEn
        ? 'Warm crusty bread baked fresh early morning, hot butter medialunas (croissants), tortas fritas, and packed sandwiches perfect for outdoor hikes.'
        : 'Pan recién horneado a la mañana temprano, medialunas de manteca calientes, tortas fritas, criollos y sándwiches de miga ideales para llevar de vianda a las excursiones del día.',
      tip: isEn
        ? 'Opens early at 07:30 AM. Stop by before heading to the lake for fresh pastries or sandwiches.'
        : 'Abre a las 07:30 AM. Pasen temprano a buscar las facturas o sándwiches para llevar al lago en la conservadora.',
      mapsQuery: 'Panaderia Trevelin Chubut',
    },
    {
      id: 'farmacia',
      title: 'Farmacia Trevelin & Turno de Guardia',
      tag: 'salud',
      categoryLabel: isEn ? 'Pharmacy & First Aid' : 'Farmacia & Primeros Auxilios',
      image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80',
      rating: '4.6',
      reviews: '310',
      distance: isEn ? '800 m from Mosha • 2 min drive' : 'A 800 m de Mosha • 2 min en auto',
      address: 'Zona Plaza Coronel Fontana',
      desc: isEn
        ? 'Prescription and OTC medications, sunblock, insect repellent, baby supplies, and emergency first-aid products. Follows the mandatory rotating night duty shift.'
        : 'Medicamentos bajo receta y de venta libre, protector solar, repelente de insectos, perfumería y artículos de primeros auxilios. Cumple con el cronograma de turno rotativo nocturno de la ciudad.',
      tip: isEn
        ? 'The active 24h night pharmacy is posted on each shopfront window, or send a WhatsApp message to your host.'
        : 'Si necesitás saber qué farmacia está de turno hoy a la noche, tienen la pizarra de guardia pegada en la vidriera o consultanos por WhatsApp.',
      mapsQuery: 'Farmacia Trevelin Chubut',
    },
    {
      id: 'cajero',
      title: isEn ? 'Banco del Chubut (24h ATMs & Branch)' : 'Banco del Chubut (Sucursal & Cajeros 24h)',
      tag: 'combustible',
      categoryLabel: isEn ? '24h Cash ATMs (Red Link / Cirrus)' : 'Extracción de Efectivo (Red Link)',
      image: './banco-chubut.jpg?v=2',
      rating: '4.2',
      reviews: '230',
      distance: isEn ? '1.0 km from Mosha • 2 min drive' : 'A 1.0 km de Mosha • 2 min en auto',
      address: 'Av. San Martín (frente a Plaza Coronel Fontana)',
      desc: isEn
        ? '24-hour ATMs for cash withdrawals accepting domestic and international cards.'
        : 'Cajeros automáticos habilitados las 24 horas para extracción de dinero en efectivo con tarjetas nacionales e internacionales.',
      tip: isEn
        ? 'Having cash is very handy at rural farm entrances, flower fields, and artisanal craft fairs.'
        : 'En ferias artesanales, entradas a campos y puestos rurales es muy útil tener algo de dinero en efectivo a mano.',
      mapsQuery: 'Banco del Chubut Trevelin',
    },
    {
      id: 'rotiseria',
      title: 'Rotisería & Comidas Caseras para Llevar',
      tag: 'super',
      categoryLabel: isEn ? 'Takeout Deli & Home Cooking' : 'Comidas Rápidas para el Depto',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      rating: '4.7',
      reviews: '410',
      distance: isEn ? '500 m from Mosha • 6 min walk' : 'A 500 m de Mosha • 6 min a pie',
      address: 'Av. San Martín cerca de Mosha',
      desc: isEn
        ? 'Ideal when you return tired after trekking all day and want a comforting hot meal in the apartment without cooking. Milanesas, handmade empanadas, quiches, and pastas.'
        : 'Excelente opción para cuando volvés cansado de caminar todo el día y querés cenar en la tranquilidad del departamento sin cocinar. Milanesas, empanadas caseras, tartas y pastas.',
      tip: isEn
        ? 'You can preorder at midday or order beforehand to pick up hot food on your way back.'
        : 'Podés encargar al mediodía o llamar antes para retirar caliente camino al departamento.',
      mapsQuery: 'Rotiseria Trevelin Chubut',
    },
  ];

  const filtered = selectedTag === 'todos' 
    ? esenciales 
    : esenciales.filter(e => e.tag === selectedTag);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0f2537] pb-16">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-[#0f2537] hover:bg-slate-100 transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{isEn ? 'Back to Home' : 'Volver al Inicio'}</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>{isEn ? 'Neighborhood Essentials in Trevelin' : 'Servicios de Barrio en Trevelin'}</span>
            </div>

            {setLang && (
              <button
                onClick={() => setLang(prev => (prev === 'es' ? 'en' : 'es'))}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f2537] text-xs font-bold border border-slate-200 transition-all active:scale-95 cursor-pointer shadow-xs"
                title="Cambiar idioma / Switch language"
              >
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                <span className={lang === 'es' ? 'text-sky-600 font-extrabold' : 'text-slate-400'}>ES</span>
                <span className="text-slate-300">|</span>
                <span className={lang === 'en' ? 'text-sky-600 font-extrabold' : 'text-slate-400'}>EN</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Banner of Essentials */}
      <div className="bg-[#0f2537] text-white py-10 sm:py-14 px-4 sm:px-8 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            {isEn ? 'PRACTICAL INFO & SHOPPING' : 'INFORMACIÓN PRÁCTICA & COMPRAS'}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {isEn ? 'Shops & Essentials' : 'Comercios & Esenciales'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
            {isEn
              ? 'Supermarkets, artisan bakeries, 24-hour pharmacies, ATMs, and YPF gas stations just minutes from Mosha Apartments.'
              : 'Supermercados, panaderías, farmacias de turno, cajeros y estación de servicio YPF a pocos minutos de Mosha Departamentos.'}
          </p>

          {/* Filter Pills with mobile horizontal swipe */}
          <div className="flex gap-2 pt-6 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterPills.map(pill => (
              <button
                key={pill.id}
                onClick={() => setSelectedTag(pill.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === pill.id
                    ? 'bg-white text-[#0f2537] shadow-md font-bold'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>{isEn ? 'Showing' : 'Mostrando'} <strong>{filtered.length}</strong> {isEn ? 'neighborhood shops & essential services' : 'comercios y puntos de servicio cercanos'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#0f2537] backdrop-blur-md shadow-sm">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Top Right: Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/60 text-white backdrop-blur-md">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{item.rating}</span>
                    <span className="text-[10px] text-slate-300 font-normal">({item.reviews})</span>
                  </div>

                  {/* Bottom of Image: Distance from Mosha */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white font-medium drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{item.distance}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f2537] leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {item.address}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Tip de Mosha Box */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isEn ? 'Helpful Tip for Your Stay' : 'Dato Útil para tu Estadía'}</span>
                    </div>
                    <p className="text-xs text-blue-950/90 leading-relaxed">
                      {item.tip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#0f2537] hover:bg-[#1c3a54] text-white font-bold text-xs shadow-md transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>{isEn ? 'Directions on Google Maps' : 'Cómo llegar en Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f2537] hover:bg-[#1c3a54] text-white font-bold text-xs shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? 'Back to Main Page' : 'Volver a la página principal'}</span>
          </button>
        </div>
      </main>
    </div>
  );
}
