import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b1120]/90 border-b border-white/10">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-bold text-lg">
            M
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-wider text-lg text-white uppercase">
                Mosha
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase bg-amber-500/15 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                Trevelin
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">
              Departamentos de Alquiler Temporario
            </p>
          </div>
        </div>

        {/* Quick Phone Action */}
        <a
          href="https://wa.me/5492945645700?text=Hola%20Mosha!%20Estoy%20en%20el%20departamento%20y%20quer%C3%ADa%20hacerles%20una%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-semibold transition-all active:scale-95"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
