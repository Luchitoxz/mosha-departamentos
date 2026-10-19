import React, { useState } from 'react';
import { 
  HeartPulse, 
  Phone, 
  MapPin, 
  Navigation, 
  ShieldAlert, 
  Flame, 
  Building2, 
  ExternalLink,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';
import { t } from '../data/translations';

export default function EmergenciasSection({ tEmergencias, hostPhone }) {
  const [expanded, setExpanded] = useState(false);
  const data = tEmergencias || t.es.emergenciasSection;

  const contacts = [
    {
      id: 'hospital',
      title: data.hospital.title,
      subtitle: data.hospital.subtitle,
      tag: data.hospital.tag,
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: HeartPulse,
      iconColor: 'bg-rose-50 text-rose-600 border-rose-100',
      address: data.hospital.address,
      phone: '107',
      altPhone: '02945 48-0132',
      desc: data.hospital.desc,
      mapsQuery: 'Hospital Rural Trevelin Chubut',
    },
    {
      id: 'farmacia',
      title: data.farmacia.title,
      subtitle: data.farmacia.subtitle,
      tag: data.farmacia.tag,
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Building2,
      iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      address: data.farmacia.address,
      phone: '02945 48-0150',
      desc: data.farmacia.desc,
      mapsQuery: 'Farmacia Trevelin Chubut',
    },
    {
      id: 'policia',
      title: data.policia.title,
      subtitle: data.policia.subtitle,
      tag: data.policia.tag,
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: ShieldAlert,
      iconColor: 'bg-blue-50 text-blue-600 border-blue-100',
      address: data.policia.address,
      phone: '101',
      altPhone: '02945 48-0133',
      desc: data.policia.desc,
      mapsQuery: 'Comisaria Trevelin Chubut',
    },
    {
      id: 'bomberos',
      title: data.bomberos.title,
      subtitle: data.bomberos.subtitle,
      tag: data.bomberos.tag,
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      icon: Flame,
      iconColor: 'bg-amber-50 text-amber-600 border-amber-100',
      address: data.bomberos.address,
      phone: '100',
      altPhone: '02945 48-0100',
      desc: data.bomberos.desc,
      mapsQuery: 'Bomberos Voluntarios Trevelin Chubut',
    },
  ];

  const primaryContact = contacts[0];
  const secondaryContacts = contacts.slice(1);

  return (
    <section id="emergencias" className="py-8 sm:py-14 bg-white border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
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

        {/* 1-Tap Quick Dial Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          <a
            href="tel:107"
            className="p-3 sm:p-3.5 rounded-2xl bg-rose-50 border border-rose-100 hover:bg-rose-100/80 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 group shadow-xs"
          >
            <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider">{data.quickDial.medical}</span>
            <span className="text-xl sm:text-2xl font-black text-rose-600 font-mono group-hover:scale-105 transition-transform">107</span>
            <span className="text-[10px] text-slate-500">{data.quickDial.ambulance}</span>
          </a>

          <a
            href="tel:101"
            className="p-3 sm:p-3.5 rounded-2xl bg-blue-50 border border-blue-100 hover:bg-blue-100/80 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 group shadow-xs"
          >
            <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">{data.quickDial.police}</span>
            <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono group-hover:scale-105 transition-transform">101</span>
            <span className="text-[10px] text-slate-500">{data.quickDial.policeSub}</span>
          </a>

          <a
            href="tel:100"
            className="p-3 sm:p-3.5 rounded-2xl bg-amber-50 border border-amber-100 hover:bg-amber-100/80 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 group shadow-xs"
          >
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">{data.quickDial.fire}</span>
            <span className="text-xl sm:text-2xl font-black text-amber-600 font-mono group-hover:scale-105 transition-transform">100</span>
            <span className="text-[10px] text-slate-500">{data.quickDial.fireSub}</span>
          </a>

          <a
            href={`tel:${hostPhone.replace(/[^0-9+]/g, '')}`}
            className="p-3 sm:p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100/80 transition-all text-center flex flex-col items-center justify-center gap-1 active:scale-95 group shadow-xs"
          >
            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">{data.quickDial.host}</span>
            <span className="text-xs sm:text-sm font-black text-emerald-800 font-mono group-hover:scale-105 transition-transform truncate block max-w-full">
              {hostPhone}
            </span>
            <span className="text-[10px] text-slate-500">{data.quickDial.hostSub}</span>
          </a>
        </div>

        {/* Featured Hospital Card (Primary health facility) */}
        <div className="bg-slate-50/80 border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-600 block">
                  {primaryContact.subtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0f2537]">
                  {primaryContact.title}
                </h3>
              </div>
            </div>

            <span className="self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-bold border bg-rose-50 text-rose-700 border-rose-200">
              {primaryContact.tag}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-3">
            {primaryContact.desc}
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
            <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{primaryContact.address}</span>
          </div>

          {/* Quick Buttons for Hospital */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-slate-200/60">
            <a
              href="tel:107"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0f2537] hover:bg-[#193954] text-white font-bold text-xs shadow-xs transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{data.callButton} 107 (o 02945 48-0132)</span>
            </a>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(primaryContact.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-[#0f2537] font-semibold text-xs border border-slate-200 transition-all active:scale-95"
            >
              <Navigation className="w-3.5 h-3.5 text-blue-600" />
              <span>{data.howToGet}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Collapsible Accordion Toggle for Secondary Services */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f2537] text-xs font-bold transition-all active:scale-95 cursor-pointer border border-slate-200/80"
          >
            <span>
              {expanded 
                ? '▲ Ocultar otros servicios (Farmacias, Policía, Bomberos)' 
                : '▼ Ver farmacias de turno, comisaría y bomberos'}
            </span>
          </button>
        </div>

        {/* Secondary Services (Shown when expanded) */}
        {expanded && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-300">
            {secondaryContacts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl ${item.iconColor} border flex items-center justify-center shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            {item.subtitle}
                          </span>
                          <h4 className="text-sm font-bold text-[#0f2537] leading-tight">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{item.address}</span>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex gap-2">
                    <a
                      href={`tel:${item.phone.replace(/[^0-9]/g, '')}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#0f2537] text-white font-bold text-xs"
                    >
                      <Phone className="w-3 h-3 text-emerald-400" />
                      <span>{item.phone}</span>
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 text-[#0f2537] hover:bg-slate-200"
                      title={data.howToGet}
                    >
                      <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
