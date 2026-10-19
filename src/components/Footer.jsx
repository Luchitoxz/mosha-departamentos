import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { t } from '../data/translations';

export default function Footer({ tFooter, onOpenPrivacy }) {
  const data = tFooter || t.es.footer;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isEn = data.rights && data.rights.toLowerCase().includes('rights');

  return (
    <footer className="bg-[#0b192c] text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-white/10 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start select-none">
              <svg
                className="w-5 h-3 text-white mb-0.5"
                viewBox="0 0 24 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="2 12 12 2 22 12" />
              </svg>
              <span className="text-xl font-bold tracking-[0.2em] leading-none uppercase font-sans">
                MOSHA
              </span>
              <span className="text-[8px] tracking-[0.38em] font-medium leading-tight text-white/80 uppercase mt-0.5">
                DEPARTAMENTOS
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-xs pt-1 font-light">
              {data.tagline}
            </p>
          </div>

          {/* Quick Contact & Address */}
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{data.address}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{data.contact}: <strong>02945 64-5700</strong></span>
            </div>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer active:scale-95"
            >
              {data.backToTop}
            </button>
          </div>
        </div>

        {/* Bottom copyright & privacy row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <span>© {new Date().getFullYear()} Mosha Departamentos. {data.rights}</span>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrivacy}
              className="text-slate-300 hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              {isEn ? 'Privacy & Terms' : 'Privacidad & Términos'}
            </button>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1">
              {data.craftedFor}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
