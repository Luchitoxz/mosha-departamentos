import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export default function PoliticaModal({ isOpen, onClose, lang = 'es' }) {
  if (!isOpen) return null;

  const isEn = lang === 'en';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0f2537]">
                {isEn ? 'Privacy Policy & Terms' : 'Política de Privacidad y Términos'}
              </h3>
              <p className="text-xs text-slate-500">
                {isEn ? 'Punto Sur Esquel • Digital Guest Guide' : 'Punto Sur Esquel • Guía Digital del Huésped'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          
          {/* Point 1: Zero Tracking */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0f2537]">
              <EyeOff className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isEn ? '1. Zero Personal Data Collection' : '1. Sin Recolección de Datos Personales'}</span>
            </div>
            <p>
              {isEn
                ? 'This web application is a static, informational guest guide. We do not require user accounts, do not store cookies for commercial profiling, and do not collect payment or identity information.'
                : 'Esta aplicación web es una guía informativa estática para huéspedes. No requiere cuentas de usuario, no almacena cookies de perfil publicitario ni recopila información bancaria o de identidad.'}
            </p>
          </div>

          {/* Point 2: WhatsApp & Communications */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0f2537]">
              <Lock className="w-4 h-4 text-sky-600 shrink-0" />
              <span>{isEn ? '2. Direct Communications via WhatsApp' : '2. Comunicación Directa vía WhatsApp'}</span>
            </div>
            <p>
              {isEn
                ? 'Links to WhatsApp open the messaging service directly on your device. All interactions with the host are private and governed by standard WhatsApp LLC end-to-end encryption and terms.'
                : 'Los enlaces a WhatsApp abren el servicio de mensajería directamente en tu dispositivo. Cualquier conversación con el anfitrión es privada y está protegida bajo el cifrado de extremo a extremo de WhatsApp LLC.'}
            </p>
          </div>

          {/* Point 3: External Recommendations */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0f2537]">
              <FileText className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{isEn ? '3. Courtesy Local Recommendations' : '3. Recomendaciones Locales y Cortesía'}</span>
            </div>
            <p>
              {isEn
                ? 'Dining, sightseeing, and emergency contact details are provided as a helpful courtesy. Opening hours, seasonal availability, and prices are determined independently by each local provider or public authority.'
                : 'La información de restaurantes, paseos y números de emergencia se brinda como un servicio de cortesía. Los horarios de apertura, disponibilidad por temporada y tarifas son fijados de forma independiente por cada prestador.'}
            </p>
          </div>

          {/* Point 4: House Rules */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0f2537]">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>{isEn ? '4. House Rules and Peaceful Stay' : '4. Convivencia y Cuidado del Complejo'}</span>
            </div>
            <p>
              {isEn
                ? 'Guests are kindly asked to observe the 100% smoke-free policy, quiet night hours (10:00 PM to 08:00 AM), and check-out schedule (until 10:00 AM) to preserve quality and comfort for everyone.'
                : 'Se solicita a los huéspedes respetar el espacio 100% libre de humo, el horario de silencio nocturno (22:00 a 08:00 hs) y el horario de check-out (hasta las 10:00 hs) para garantizar el confort de todos.'}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0f2537] hover:bg-[#1a3854] text-white text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer shadow-sm text-center"
          >
            {isEn ? 'Understood' : 'Entendido'}
          </button>
        </div>
      </div>
    </div>
  );
}
