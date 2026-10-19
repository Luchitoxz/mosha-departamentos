import React from 'react';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { t } from '../data/translations';

export default function UbicacionSection({ tUbi }) {
  const data = tUbi || t.es.ubicacionSection;

  const googleMapsUrl = "https://www.google.com/maps/place/Mosha+Departamentos/@-43.107466,-71.4677729,16.42z/data=!4m9!3m8!1s0x961dbb904dcf206f:0xe8f8aba74a34a72c!5m2!4m1!1i2!8m2!3d-43.1027926!4d-71.4637045!16s%2Fg%2F11hmkq9s01";

  const distances = [
    { label: 'Centro de Trevelin / Downtown', dist: '900 m (10 min walk)' },
    { label: 'El Bodegón de Nikanor', dist: '600 m (7 min walk)' },
    { label: 'Supermercado La Anónima', dist: '900 m (2 min drive)' },
    { label: 'Campo de Tulipanes Trevelin', dist: '14 km (15 min drive)' },
    { label: 'Reserva Natural Cascadas Nant y Fall', dist: '17 km (20 min drive)' },
    { label: 'Parque Nacional Los Alerces', dist: '24 km (25 min drive)' },
    { label: 'Esquel / La Trochita Station', dist: '25 km (25 min drive)' },
    { label: 'Esquel Airport (EQS)', dist: '45 km (40 min drive)' },
  ];

  return (
    <section id="ubicacion" className="py-8 sm:py-14 bg-[#fafbfc] border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-5 sm:mb-8 max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#0284c7] uppercase">
            {data.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2537] tracking-tight mt-1">
            {data.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 sm:mt-2 leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/80 shadow-sm">
          
          {/* Left Info: Address & Action */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  {data.exactAddress}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2537] leading-tight">
                  Av. San Martín 1883
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {data.city}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {data.description}
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0f2537] hover:bg-[#1a3852] text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>{data.openMap}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Right Info: Key Distances List */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100">
            <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#0f2537]">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>{data.distancesTitle}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {distances.map((item, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-medium truncate pr-2">
                    {item.label}
                  </span>
                  <span className="font-bold text-[#0f2537] shrink-0 text-[11px]">
                    {item.dist}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
