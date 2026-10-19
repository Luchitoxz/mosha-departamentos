import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Navigation, 
  Star, 
  Sparkles, 
  Compass, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Globe
} from 'lucide-react';

export default function LugaresView({ lang = 'es', setLang, onBack }) {
  const [selectedTag, setSelectedTag] = useState('todos');

  const isEn = lang === 'en';

  const filterPills = isEn ? [
    { id: 'todos', label: 'All Places' },
    { id: 'naturaleza', label: 'Waterfalls & Parks' },
    { id: 'imperdible', label: 'Tulips' },
    { id: 'cultura', label: 'History & Culture' },
    { id: 'vinos', label: 'Vineyards & Wine' },
  ] : [
    { id: 'todos', label: 'Todos los lugares' },
    { id: 'naturaleza', label: 'Cascadas & Parques' },
    { id: 'imperdible', label: 'Tulipanes' },
    { id: 'cultura', label: 'Historia & Museos' },
    { id: 'vinos', label: 'Viñedos & Bodegas' },
  ];

  const lugares = [
    {
      id: 'cascadas',
      title: isEn ? 'Nant y Fall Waterfalls Nature Reserve' : 'Reserva Natural Cascadas Nant y Fall',
      tag: 'naturaleza',
      categoryLabel: isEn ? 'Nature & Waterfalls' : 'Naturaleza & Saltos de Agua',
      image: './cascadas-nant-y-fall.png',
      rating: '4.8',
      reviews: '2.797',
      distance: isEn ? '17 km from Mosha • 20 min drive' : 'A 17 km de Mosha • 20 min en auto',
      road: 'Ruta 259',
      desc: isEn 
        ? 'A striking river canyon featuring crystal-clear waterfalls surrounded by native Andean cypress forest. Features well-marked walking trails, scenic lookout points, and wooden walkways.'
        : 'Un imponente cañadón del río Nant y Fall con una serie de saltos de agua cristalina rodeados de bosque nativo de cipreses y coihues. Cuenta con senderos señalizados, miradores panorámicos y pasarelas muy accesibles.',
      tip: isEn 
        ? 'Best visited in the morning or early afternoon. Wear comfortable walking shoes and bring your camera.'
        : 'Ideales para visitar a la mañana o después de almorzar. Llevar calzado cómodo y cámara de fotos.',
      mapsQuery: 'Reserva Natural Cascadas Nant y Fall Trevelin',
    },
    {
      id: 'tulipanes',
      title: isEn ? 'Trevelin Tulip Fields' : 'Campo de Tulipanes Trevelin',
      tag: 'imperdible',
      categoryLabel: isEn ? 'Patagonian Landmark' : 'Postal Emblema de la Patagonia',
      image: './tulipanes.jpg',
      rating: '4.9',
      reviews: '3.410',
      distance: isEn ? '14 km from Mosha • 15 min drive' : 'A 14 km de Mosha • 15 min en auto',
      road: 'Ruta 259 km 50',
      desc: isEn
        ? 'One of the world’s most scenic flower fields. Millions of tulips across 30+ varieties bloom against snow-capped Mount Greda. Open every spring during October and early November.'
        : 'Uno de los espectáculos visuales más famosos del mundo. Millones de tulipanes de más de 30 variedades florecen en franjas multicolores con el cerro nevado Greda de fondo. Abierto cada año durante octubre y principios de noviembre.',
      tip: isEn
        ? 'During blooming season, book tickets ahead of time and enjoy tea or lunch right at the field restaurant.'
        : 'Si viajas en temporada, conviene reservar entrada anticipada y disfrutar del servicio de té o almuerzo en el predio.',
      mapsQuery: 'Campo de Tulipanes Trevelin',
    },
    {
      id: 'alerces',
      title: isEn ? 'Los Alerces National Park (UNESCO)' : 'Parque Nacional Los Alerces',
      tag: 'naturaleza',
      categoryLabel: isEn ? 'World Heritage Site (UNESCO)' : 'Patrimonio de la Humanidad (UNESCO)',
      image: './los-alerces.jpg',
      rating: '4.9',
      reviews: '5.820',
      distance: isEn ? '24 km from Mosha • 25 min drive' : 'A 24 km de Mosha • 25 min en auto',
      road: 'Ruta 71 (Portal Centro / Lago Futalaufquen)',
      desc: isEn
        ? 'Pristine turquoise lakes, glacier rivers, and ancient temperate rainforests home to giant alerce trees over 2,600 years old. Highlights: Arrayanes River, Green Lake, and Menéndez Lake catamaran cruise.'
        : 'Un paraíso virgen de lagos turquesas, ríos de deshielo y bosques milenarios donde habitan los alerces (lahuán) de más de 2.600 años. Imperdibles: Río Arrayanes, Lago Verde, Pasarela colgante y Lago Menéndez.',
      tip: isEn
        ? 'Dedicate at least one full day. Boat tours to the ancient Alerzal grove depart from Puerto Chucao.'
        : 'Dedicá al menos un día entero. Podés hacer excursiones lacustres en catamarán hacia el Alerzal Milenario.',
      mapsQuery: 'Parque Nacional Los Alerces Portada Centro',
    },
    {
      id: 'molino',
      title: isEn ? 'Nant Fach Historic Flour Mill' : 'Molino Harinero Nant Fach',
      tag: 'cultura',
      categoryLabel: isEn ? 'Welsh Heritage & Living Museum' : 'Historia Galesa & Museo Vivo',
      image: './molino-nant-fach.jpg',
      rating: '4.7',
      reviews: '1.450',
      distance: isEn ? '17 km from Mosha • 20 min drive' : 'A 17 km de Mosha • 20 min en auto',
      road: 'Ruta 259 km 56',
      desc: isEn
        ? 'A working replica of early Welsh settlers watermills, powered by real river hydro energy to grind organic wheat. The museum displays pioneer artifacts, carriages, and agricultural machinery.'
        : 'Réplica fiel de los molinos de agua de los primeros colonos galeses construida por Mervyn Evans. Funciona con energía hidráulica real moliendo trigo. El museo exhibe herramientas históricas, carruajes y artefactos pioneros.',
      tip: isEn
        ? 'Guided tours are led by the founder himself, rich with pioneer storytelling and milling demonstrations.'
        : 'Las visitas son guiadas por su propio creador, llenas de relatos históricos fascinantes y demostración de molienda.',
      mapsQuery: 'Molino Harinero Nant Fach Trevelin',
    },
    {
      id: 'vinas',
      title: isEn ? 'Viñas del Nant y Fall Winery' : 'Viñas del Nant y Fall',
      tag: 'vinos',
      categoryLabel: isEn ? 'Southernmost Wine Tourism' : 'Enoturismo Austral & Bodega',
      image: './vinas-nant-fall.jpg',
      rating: '4.8',
      reviews: '1.230',
      distance: isEn ? '15 km from Mosha • 18 min drive' : 'A 15 km de Mosha • 18 min en auto',
      road: 'Ruta 259 km 56',
      desc: isEn
        ? 'Pioneers of cool-climate viticulture in the Trevelin Valley, producing world-class Pinot Noir, Sauvignon Blanc, and Riesling with mountain views.'
        : 'Pioneros de la vitivinicultura en el Valle de Trevelin, una de las zonas vitivinícolas más australes del planeta. Producen variedades de clima frío de clase mundial como Pinot Noir, Sauvignon Blanc y Riesling.',
      tip: isEn
        ? 'Enjoy vineyard tours, glass tastings, and artisanal cold-cut and regional cheese pairings.'
        : 'Ofrecen visitas guiadas por el viñedo, degustación de copas y tablas de fiambres y quesos artesanales.',
      mapsQuery: 'Vinas del Nant y Fall Trevelin',
    },
    {
      id: 'trochita',
      title: isEn ? 'La Trochita (Old Patagonian Express)' : 'La Trochita (Viejo Expreso Patagónico)',
      tag: 'cultura',
      categoryLabel: isEn ? 'National Historic Monument' : 'Monumento Histórico Nacional',
      image: './la-trochita.jpg?v=2',
      rating: '4.8',
      reviews: '4.100',
      distance: isEn ? '25 km from Mosha • 25 min drive (Esquel Station)' : 'A 25 km de Mosha • 25 min en auto (Estación Esquel)',
      road: 'Ruta 259',
      desc: isEn
        ? 'The legendary narrow-gauge (75 cm) steam train that still traverses the Patagonian steppe. Cozy wooden carriages warmed by iron wood-stoves offer a nostalgic journey through time.'
        : 'El mítico tren a vapor de trocha angosta (75 cm) que sigue recorriendo la estepa patagónica como hace casi un siglo. Sus vagones de madera calefaccionados con salamandras brindan un viaje en el tiempo inolvidable.',
      tip: isEn
        ? 'Departs from Esquel station towards Nahuel Pan community. Check schedule and purchase tickets in advance.'
        : 'Sale desde la estación de Esquel hacia la comunidad Nahuel Pan. Consultar salidas y comprar pasaje con anticipación.',
      mapsQuery: 'Estacion La Trochita Esquel',
    },
    {
      id: 'mirador-cruz',
      title: isEn ? 'La Cruz Viewpoint' : 'Mirador de la Cruz & Cerro La Cruz',
      tag: 'naturaleza',
      categoryLabel: isEn ? 'Panoramic Hike & Viewpoint' : 'Senderismo & Vistas Panorámicas',
      image: './mirador-cerro-la-cruz.jpg?v=2',
      rating: '4.6',
      reviews: '420',
      distance: isEn ? '2.5 km from Mosha • 5 min drive / hike' : 'A 2.5 km de Mosha • 5 min en auto o caminata',
      road: 'Acceso desde Trevelin',
      desc: isEn
        ? 'The best vantage point for 360-degree vistas of Trevelin, cultivated valleys, and the dramatic Situación mountain range.'
        : 'El mejor mirador para contemplar una vista panorámica de 360 grados de todo el pueblo de Trevelin, los valles cultivados y el imponente Cordón Situación.',
      tip: isEn
        ? 'Spectacular at sunset when the mountain ridges turn deep orange and gold.'
        : 'Espectacular para subir al atardecer cuando las montañas se tiñen de tonos dorados y rojizos.',
      mapsQuery: 'Mirador de la Cruz Trevelin',
    },
  ];

  const filteredLugares = selectedTag === 'todos' 
    ? lugares 
    : lugares.filter(l => l.tag === selectedTag);

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
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Trevelin & Alrededores</span>
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

      {/* Hero Banner of the Places Section */}
      <div className="bg-[#0f2537] text-white py-10 sm:py-14 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            {isEn ? 'SIGHTSEEING & ADVENTURE GUIDE' : 'GUÍA DE ATRACTIVOS & PASEOS'}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {isEn ? 'Places to visit' : 'Lugares para visitar'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
            {isEn
              ? 'Crystal waterfalls, national parks, flower meadows, and southern wineries just minutes from Mosha Apartments.'
              : 'Cascadas cristalinas, parques nacionales, campos de flores y bodegas australes a pocos minutos de Mosha Departamentos.'}
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

      {/* Main Places Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>{isEn ? 'Showing' : 'Mostrando'} <strong>{filteredLugares.length}</strong> {isEn ? 'must-visit attractions' : 'atractivos turísticos imperdibles'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {filteredLugares.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner with Badges */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

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
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item.distance}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl font-bold text-[#0f2537] leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Tip de Mosha Box */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/60">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{isEn ? "Mosha's Recommendation" : 'Recomendación de Mosha'}</span>
                    </div>
                    <p className="text-xs text-amber-950/90 italic leading-relaxed">
                      "{item.tip}"
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
