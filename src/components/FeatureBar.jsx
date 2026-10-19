import React from 'react';
import { Compass, Home, MapPin, ShieldCheck } from 'lucide-react';

export default function FeatureBar({ tBar = {}, onSelectFeature }) {
  const features = [
    {
      id: 'recomendaciones',
      title: tBar.recTitle || "Recomendaciones locales",
      desc: tBar.recDesc || "Lugares para visitar, comer y disfrutar.",
      icon: (
        <div className="w-10 h-10 rounded-full border-2 border-[#0f2537] flex items-center justify-center shrink-0">
          <Compass className="w-5 h-5 text-[#0f2537]" strokeWidth={2} />
        </div>
      ),
    },
    {
      id: 'informacion',
      title: tBar.infoTitle || "Información útil",
      desc: tBar.infoDesc || "WiFi, servicios y contactos importantes.",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <Home className="w-6 h-6 text-[#0f2537]" strokeWidth={2} />
        </div>
      ),
    },
    {
      id: 'zona',
      title: tBar.zonaTitle || "Conocé la zona",
      desc: tBar.zonaDesc || "Puntos históricos, actividades y más.",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6 text-[#0f2537]" strokeWidth={2} />
        </div>
      ),
    },
    {
      id: 'experiencia',
      title: tBar.expTitle || "Una mejor experiencia",
      desc: tBar.expDesc || "Todo lo que necesitás para una estadía cómoda y segura.",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6 text-[#0f2537]" strokeWidth={2} />
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white border-b border-slate-100 py-6 sm:py-8 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {features.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectFeature && onSelectFeature(item.id)}
              className="flex items-center gap-3.5 cursor-pointer group p-2 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              {item.icon}
              <div>
                <h3 className="text-sm font-bold text-[#0f2537] leading-snug group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-normal mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
