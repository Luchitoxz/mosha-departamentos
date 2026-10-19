import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Navigation, 
  Star, 
  Sparkles, 
  Utensils, 
  Coffee, 
  Beer, 
  ExternalLink,
  Globe
} from 'lucide-react';

export default function GastronomiaView({ lang = 'es', setLang, onBack }) {
  const [selectedTag, setSelectedTag] = useState('todos');

  const isEn = lang === 'en';

  const filterPills = isEn ? [
    { id: 'todos', label: 'All Dining' },
    { id: 'restaurante', label: 'Bistros & Grills' },
    { id: 'te', label: 'Traditional Welsh Tea' },
    { id: 'cerveceria', label: 'Craft Breweries & Pubs' },
  ] : [
    { id: 'todos', label: 'Todo gastronómico' },
    { id: 'restaurante', label: 'Restaurantes & Bodegones' },
    { id: 'te', label: 'Casas de Té Galés' },
    { id: 'cerveceria', label: 'Cervecerías & Bares' },
  ];

  const restaurantes = [
    {
      id: 'nikanor',
      title: 'El Bodegón de Nikanor (Fonda Sur)',
      tag: 'restaurante',
      categoryLabel: isEn ? 'Country Bistro & Regional Fare' : 'Bodegón de Campo & Minutas',
      image: './nikanor.jpg',
      rating: '4.7',
      reviews: '839',
      distance: isEn ? '600 m from Mosha • 7 min walk / 2 min drive' : 'A 600 m de Mosha • 7 min a pie / 2 min en auto',
      cuisine: isEn ? 'Stone-baked pizza, crepes, charcuterie boards, craft drinks' : 'Pizzas a la piedra, crepes, tablas de campo, carnes y tragos',
      desc: isEn 
        ? 'A charming exposed-brick tavern with an illuminated wooded patio. Features home-cooked specials, crisp artisanal pizzas, filled crepes, regional charcuterie and cheese boards, and signature cocktails.'
        : 'Un pintoresco bodegón de ladrillo a la vista con un gran patio arbolado iluminado por guirnaldas de luces. Ofrece una carta variada de comida casera, pizzas crujientes, crepes rellenos, tablas de quesos y fiambres, y rica coctelería.',
      tip: isEn
        ? 'The garden atmosphere at night is wonderful for a relaxed dinner. Do not miss the charcuterie platter paired with cold craft draft beer.'
        : 'El ambiente nocturno en el patio es hermoso para cenar relajados. No dejen de probar la tabla de picada con una cerveza tirada bien fría.',
      mapsQuery: 'Nikanor Fonda Sur Trevelin',
    },
    {
      id: 'nain-maggie',
      title: 'Casa de Té Nain Maggie',
      tag: 'te',
      categoryLabel: isEn ? 'Traditional Welsh Tea (50+ years)' : 'Té Galés Tradicional (50 años)',
      image: './nain-maggie.jpg?v=2',
      rating: '4.8',
      reviews: '2.490',
      distance: isEn ? '1.2 km from Mosha • 3 min drive' : 'A 1.2 km de Mosha • 3 min en auto',
      cuisine: isEn ? 'Full Welsh afternoon tea service, black cake, scones & pastries' : 'Servicio de té galés completo, torta negra, scones y repostería',
      desc: isEn
        ? 'The most legendary Welsh teahouse in Trevelin, founded over half a century ago by direct descendants of the early Welsh settlers. The table is laid with an astonishing feast of homemade breads, butter, berry jams, tarts, and authentic Welsh black cake.'
        : 'La casa de té más legendaria de Trevelin, fundada hace más de medio siglo por los descendientes directos de los colonos galeses. La mesa se sirve con una abundancia inolvidable de panes caseros, manteca, mermeladas regionales, tartas y la receta original de la torta negra galesa.',
      tip: isEn
        ? 'Very generous portions (functions almost like lunch or early dinner). Come with an appetite; reservations recommended during high season.'
        : 'Es muy abundante (funciona casi como almuerzo o cena temprana). Vayan con buen apetito y consulten si hace falta reservar en temporada alta.',
      mapsQuery: 'Casa de Te Nain Maggie Trevelin',
    },
    {
      id: 'los-troncos',
      title: 'Parrilla Los Troncos',
      tag: 'restaurante',
      categoryLabel: isEn ? 'Patagonian Lamb & Mountain Grill' : 'Parrilla Criolla & Cordero Patagónico',
      image: './los-troncos.jpg?v=2',
      rating: '4.7',
      reviews: '690',
      distance: isEn ? '1 km from Mosha • 2 min drive (Av. San Martín 214)' : 'A 1 km de Mosha • 2 min en auto (Av. San Martín 214)',
      cuisine: isEn ? 'Patagonian lamb, river trout, homemade pasta & complete grill' : 'Cordero patagónico al asador, trucha cordillerana, sorrentinos y parrillada',
      desc: isEn
        ? 'A landmark restaurant on Trevelin’s main avenue built with traditional stone and logs. Famous for its slow-roasted Patagonian lamb, fresh mountain trout, and handmade stuffed pasta.'
        : 'Un restaurante emblemático sobre la avenida principal de Trevelin, construido en piedra y madera de troncos. Famoso por su cordero patagónico al asador, truchas frescas de cordillera y pastas artesanales.',
      tip: isEn
        ? 'Do not miss the lamb-stuffed sorrentinos or the trout with wild mushroom sauce. High season usually fills up quickly.'
        : 'Imperdible pedir los sorrentinos caseros de cordero o la trucha con salsa de hongos. En temporada alta conviene ir temprano.',
      mapsQuery: 'Parrilla Los Troncos Trevelin',
    },
    {
      id: 'sangre-tinta',
      title: 'Restaurante Sangre Tinta',
      tag: 'restaurante',
      categoryLabel: isEn ? 'Vineyard Dining & Italian Flavors' : 'Gastronomía en Viñedos & Cocina Italiana',
      image: './sangre-tinta.jpg?v=2',
      rating: '4.8',
      reviews: '1.180',
      distance: isEn ? '15 km from Mosha • 18 min drive (Ruta 259 km 52.5)' : 'A 15 km de Mosha • 18 min en auto (Ruta 259 km 52,5)',
      cuisine: isEn ? 'Artisanal stuffed pasta, regional cured meats, estate wines' : 'Pastas rellenas caseras, picadas ahumadas y maridaje con vinos de finca',
      desc: isEn
        ? 'Situated right inside the Viñas del Nant y Fall estate. A stunning dining room with floor-to-ceiling glass windows facing the vineyards and Andean peaks, centered around a cozy stone fireplace.'
        : 'Ubicado en el corazón de la bodega Viñas del Nant y Fall. Un salón vidriado con vista panorámica a los viñedos y a la cordillera, con un cálido hogar a leña central y cocina con marcada identidad italiana y patagónica.',
      tip: isEn
        ? 'Pair the venison or trout raviolones with a glass of their cold-climate Pinot Noir or Riesling.'
        : 'Acompañen los raviolones de trucha u osobuco con una copa de Pinot Noir o Riesling de clima extremo de la propia bodega.',
      mapsQuery: 'Restaurante Sangre Tinta Trevelin',
    },
    {
      id: 'virginia-y-mabel',
      title: 'Virginia y Mabel (Casa de Campo & Almacén)',
      tag: 'restaurante',
      categoryLabel: isEn ? 'Country Fare & Regional Grill' : 'Comida Casera & Almacén de Campo',
      image: './virginia-y-mabel.jpg?v=2',
      rating: '4.8',
      reviews: '520',
      distance: isEn ? '9 km from Mosha • 10 min drive (Aldea Escolar)' : 'A 9 km de Mosha • 10 min en auto (Aldea Escolar)',
      cuisine: isEn ? 'Country grill, homemade pasta, empanadas & artisanal regional store' : 'Parrillada de campo, pastas caseras, empanadas y productos regionales',
      desc: isEn
        ? 'A beloved family-run country retreat in Aldea Escolar operated by its owners Irene and Fidalgo. Offers homestyle mountain recipes, authentic slow charcoal barbecue, and an artisanal grocery with local crafts.'
        : 'Un entrañable emprendimiento familiar en Aldea Escolar atendido con calidez por sus dueños, Irene y Fidalgo. Brinda cocina casera con sabor a hogar, parrillada completa y un almacén de campo con productos regionales.',
      tip: isEn
        ? 'Perfect lunch stop on the way to Los Alerces National Park or after visiting the rural surroundings.'
        : 'Parada ideal para almorzar rico y casero camino al Parque Nacional Los Alerces o de regreso de paseos rurales.',
      mapsQuery: 'Virginia y Mabel Trevelin',
    },
    {
      id: 'la-mutisia',
      title: 'Casa de Té La Mutisia',
      tag: 'te',
      categoryLabel: isEn ? 'Welsh Tea & Artisanal Bakery' : 'Té Galés & Pastelería Casera',
      image: './la-mutisia.jpg',
      rating: '4.7',
      reviews: '1.120',
      distance: isEn ? '900 m from Mosha • 2 min drive (Av. San Martín 170)' : 'A 900 m de Mosha • 2 min en auto (Av. San Martín 170)',
      cuisine: isEn ? 'Welsh tea, cream tarts, wild berry preserves & breads' : 'Té galés, tartas de crema, dulces de frutas finas y panes',
      desc: isEn
        ? 'Located near the civic square, this family-owned gem offers the intimate Welsh tea experience amidst antique teapots and historic pioneer photographs.'
        : 'Ubicada muy cerca de la plaza central, es un clásico familiar donde se disfruta del tradicional ritual del té en un entorno cálido y lleno de detalles históricos galeses.',
      tip: isEn
        ? 'Freshly baked warm scones with homemade raspberry and redcurrant jam are unforgettable on a crisp mountain afternoon.'
        : 'Los scones recién horneados con dulce casero de corinto y frambuesa son imperdibles para una tarde cordillerana.',
      mapsQuery: 'Casa de Te La Mutisia Trevelin',
    },
    {
      id: 'huemul',
      title: 'Cervecería Huemul',
      tag: 'cerveceria',
      categoryLabel: isEn ? 'Craft Beer & Gourmet Burgers' : 'Cerveza Artesanal & Tapas',
      image: 'https://images.unsplash.com/photo-1538488881523-298f007c0145?auto=format&fit=crop&w=800&q=80',
      rating: '4.7',
      reviews: '680',
      distance: isEn ? '850 m from Mosha • 10 min walk / 2 min drive' : 'A 850 m de Mosha • 10 min a pie / 2 min en auto',
      cuisine: isEn ? 'House-brewed beers, burgers, pizzas and rustic fries' : 'Cervezas de la casa, burgers caseras, pizzas y papas rústicas',
      desc: isEn
        ? 'A microbrewery born in the heart of Trevelin, brewing distinctive styles using pure glacial meltwater and Patagonian hops. Laid-back atmosphere with great music and vibrant crowd.'
        : 'Microcervecería nacida en el corazón de Trevelin que elabora sus estilos utilizando agua pura de deshielo y lúpulos patagónicos. Espacio descontracturado con excelente música y ambiente joven.',
      tip: isEn
        ? 'The American IPA and Honey Beer are house standouts. Delicious burgers with artisanal brioche buns.'
        : 'La IPA Americana y la Honey Beer son las estrellas de la canilla. Muy ricas hamburguesas con pan casero.',
      mapsQuery: 'Cerveceria Huemul Trevelin',
    },
    {
      id: 'blest',
      title: 'Cervecería Blest Trevelin',
      tag: 'cerveceria',
      categoryLabel: isEn ? 'Beer Garden & Mountain Gastropub' : 'Patio Cervecero & Gastropub',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      rating: '4.6',
      reviews: '750',
      distance: isEn ? '1.3 km from Mosha • 3 min drive' : 'A 1.3 km de Mosha • 3 min en auto',
      cuisine: isEn ? 'Draft beers, giant pizzas, tender beef sandwiches & platters' : 'Cervezas tiradas, pizzas gigantes, sándwiches de lomo y tablas',
      desc: isEn
        ? 'The historic pioneer craft brewery of Patagonia has an outpost in Trevelin, featuring a spacious rustic wood hall and open patio for sunny summer afternoons.'
        : 'La histórica marca pionera de cerveza artesanal patagónica cuenta con su sede en Trevelin, con un salón amplio y acogedor con madera rústica y patio exterior para las tardes soleadas de verano.',
      tip: isEn
        ? 'Great for families and groups thanks to generous portions and menu variety.'
        : 'Ideal para ir en familia o grupos grandes por sus porciones abundantes y variedad para todos los gustos.',
      mapsQuery: 'Cerveceria Blest Trevelin',
    },
  ];

  const filtered = selectedTag === 'todos' 
    ? restaurantes 
    : restaurantes.filter(r => r.tag === selectedTag);

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
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>{isEn ? 'Dining & Welsh Tea in Trevelin' : 'Gastronomía en Trevelin'}</span>
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

      {/* Hero Banner of Gastronomy */}
      <div className="bg-[#0f2537] text-white py-10 sm:py-14 px-4 sm:px-8 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[11px] font-bold tracking-[0.25em] text-[#38bdf8] uppercase mb-2">
            {isEn ? 'WHERE TO EAT & DRINK' : 'DONDE COMER & BEBER'}
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            {isEn ? 'Restaurants, Welsh Tea & Pubs' : 'Restaurantes, Té Galés & Bares'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
            {isEn 
              ? 'Trevelin’s finest culinary spots: Patagonian spit-roasted lamb, ceremonial Welsh afternoon tea, country bistros, and craft microbreweries recommended by Mosha.'
              : 'Los mejores sabores de Trevelin: cordero al asador, el tradicional servicio de té galés, bodegones de campo y cervecerías artesanales recomendadas por Mosha.'}
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
          <span>{isEn ? 'Showing' : 'Mostrando'} <strong>{filtered.length}</strong> {isEn ? 'curated top-rated dining spots' : 'lugares seleccionados y mejor valorados'}</span>
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
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.distance}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#0f2537] leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-700 font-semibold mt-0.5">
                      {item.cuisine}
                    </p>
                  </div>

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
