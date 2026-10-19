import React from 'react';
import { X, Flame, KeyRound, Trash2, Volume2, CigaretteOff, CheckCircle2 } from 'lucide-react';

export default function HouseRulesModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const rules = [
    {
      icon: Flame,
      title: 'Calefacción y Gas',
      desc: 'Regulá la temperatura a nivel confortable. No tapes los calefactores ni alteres las rejillas de ventilación por seguridad.',
    },
    {
      icon: KeyRound,
      title: 'Check-out y Llaves',
      desc: 'Horario de salida: 11:00 hs. Recordá apagar luces, cerrar canillas y dejar las llaves en el lugar indicado por el anfitrión.',
    },
    {
      icon: Trash2,
      title: 'Residuos y Basura',
      desc: 'Bolsas de repuesto bajo la bacha. Depositá las bolsas cerradas en los cestos del complejo para cuidar el espacio de todos.',
    },
    {
      icon: Volume2,
      title: 'Horarios de Descanso',
      desc: 'Mantené un volumen moderado de 22:00 a 08:00 hs para preservar la tranquilidad y el descanso de los demás huéspedes.',
    },
    {
      icon: CigaretteOff,
      title: 'Espacio Libre de Humo',
      desc: 'Está prohibido fumar en el interior de los departamentos. Podés hacerlo en el exterior utilizando cenicero.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl bg-white border border-slate-100 p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="mb-5">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#0284c7] uppercase">
            CONVIVENCIA & CONFORT
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f2537]">
            Cómo cuidar el departamento
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Pequeñas pautas para disfrutar tu estadía con total comodidad y seguridad.
          </p>
        </div>

        {/* Rules List */}
        <div className="space-y-3.5 mb-6">
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0f2537]">
                    {rule.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-[#0f2537] hover:bg-[#1a3852] text-white font-bold text-xs shadow-md transition-all active:scale-95 text-center"
        >
          Entendido, ¡muchas gracias!
        </button>
      </div>
    </div>
  );
}
