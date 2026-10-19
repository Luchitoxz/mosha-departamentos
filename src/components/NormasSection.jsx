import React, { useState } from 'react';
import { Flame, KeyRound, Trash2, Volume2, CigaretteOff, CheckCircle2, Clock } from 'lucide-react';
import { t } from '../data/translations';

export default function NormasSection({ tNormas }) {
  const [expanded, setExpanded] = useState(false);
  const data = tNormas || t.es.normasSection;

  const quickRules = [
    {
      icon: KeyRound,
      color: 'bg-purple-50 text-purple-600',
      title: data.checkout?.title || 'Check-out',
      badge: data.checkout?.badge || 'Hasta 11:00 hs',
    },
    {
      icon: Volume2,
      color: 'bg-blue-50 text-blue-600',
      title: data.silencio?.title || 'Descanso',
      badge: data.silencio?.badge || '22:00 a 08:00 hs',
    },
    {
      icon: Flame,
      color: 'bg-amber-50 text-amber-600',
      title: data.calefaccion?.title || 'Calefacción',
      badge: data.calefaccion?.badge || 'Confort seguro',
    },
    {
      icon: CigaretteOff,
      color: 'bg-rose-50 text-rose-600',
      title: data.humo?.title || 'Sin humo',
      badge: data.humo?.badge || '100% No fumar',
    },
  ];

  const normas = [
    {
      icon: Flame,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
      title: data.calefaccion?.title || 'Calefacción y Gas',
      badge: data.calefaccion?.badge || 'Confort Cordillerano',
      desc: data.calefaccion?.desc || '',
    },
    {
      icon: KeyRound,
      color: 'bg-purple-50 text-purple-600 border-purple-100',
      title: data.checkout?.title || 'Check-out y Llaves',
      badge: data.checkout?.badge || 'Hasta las 11:00 hs',
      desc: data.checkout?.desc || '',
    },
    {
      icon: Trash2,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      title: data.residuos?.title || 'Manejo de Residuos',
      badge: data.residuos?.badge || 'Cuidado Ambiental',
      desc: data.residuos?.desc || '',
    },
    {
      icon: Volume2,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
      title: data.silencio?.title || 'Horarios de Descanso',
      badge: data.silencio?.badge || '22:00 a 08:00 hs',
      desc: data.silencio?.desc || '',
    },
    {
      icon: CigaretteOff,
      color: 'bg-rose-50 text-rose-600 border-rose-100',
      title: data.humo?.title || 'Espacio Libre de Humo',
      badge: data.humo?.badge || '100% Sin Humo',
      desc: data.humo?.desc || '',
    },
  ];

  return (
    <section id="normas" className="py-8 sm:py-14 bg-white border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
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

        {/* Compact Key Rules Card (Always visible, clean & fast) */}
        <div className="bg-slate-50/80 rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {quickRules.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={i} className="p-3.5 bg-white rounded-2xl border border-slate-200/70 shadow-xs flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${r.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-[#0f2537] truncate">{r.title}</span>
                    <span className="block text-[11px] font-semibold text-slate-500 truncate">{r.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Late Check-out Prompt Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-white rounded-2xl border border-slate-200/70">
            <div className="flex items-center gap-2.5 text-center sm:text-left">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span className="text-xs text-slate-600 font-medium">
                ¿Necesitás horario especial de check-out según tus vuelos?
              </span>
            </div>
            <a
              href="https://wa.me/5492945645700?text=Hola%20Mosha!%20Quer%C3%ADa%20consultar%20por%20la%20posibilidad%20de%20late%20check-out"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0f2537] hover:bg-[#1a3852] text-white font-bold text-xs text-center transition-all active:scale-95 shrink-0"
            >
              {data.lateCheckout.button}
            </a>
          </div>
        </div>

        {/* Collapsible Accordion Toggle for Detailed Rules */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0f2537] text-xs font-bold transition-all active:scale-95 cursor-pointer border border-slate-200/80"
          >
            <span>
              {expanded 
                ? '▲ Ocultar detalle de normas' 
                : '▼ Ver normas completas y cuidado del depto'}
            </span>
          </button>
        </div>

        {/* Detailed Normas (Shown when expanded) */}
        {expanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-300">
            {normas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl ${item.color} border flex items-center justify-center shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0f2537] mb-1.5">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{data.cooperation}</span>
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
