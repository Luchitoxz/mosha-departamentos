import React, { useState } from 'react';
import { Wifi, Copy, Check, QrCode, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function QuickAccess({ 
  wifiSSID, 
  wifiPassword, 
  hostPhone, 
  onOpenWifiModal, 
  onShowToast 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(wifiPassword);
    setCopied(true);
    onShowToast("¡Clave de Wi-Fi copiada!");
    setTimeout(() => setCopied(false), 2000);
  };

  const cleanPhone = hostPhone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/549${cleanPhone}?text=Hola%20Mosha%20Departamentos!%20Estoy%20hospedado%20en%20el%20complejo%20y%20quer%C3%ADa%20hacerles%20una%20consulta:`;

  return (
    <section className="px-4 max-w-2xl mx-auto space-y-3.5 mb-6">
      {/* 1. Tarjeta Principal: Wi-Fi */}
      <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-5 shadow-xl relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Wifi className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
                Conexión del Complejo
              </span>
              <h2 className="text-base font-bold text-white leading-tight">
                Red Wi-Fi
              </h2>
            </div>
          </div>

          <button
            onClick={onOpenWifiModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold border border-white/10 transition-all active:scale-95"
          >
            <QrCode className="w-3.5 h-3.5 text-amber-400" />
            <span>Ver QR</span>
          </button>
        </div>

        {/* SSID and Password Box */}
        <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-white/5 space-y-2 mb-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Nombre de Red:</span>
            <span className="font-mono font-semibold text-white">{wifiSSID}</span>
          </div>
          <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
            <span className="text-slate-400">Contraseña:</span>
            <span className="font-mono font-bold text-amber-300 tracking-wide">{wifiPassword}</span>
          </div>
        </div>

        {/* Action Buttons: Copiar y Conectar con QR */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-white/10 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>Copiar Clave</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenWifiModal}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all active:scale-95"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Escanear QR</span>
          </button>
        </div>
      </div>

      {/* 2. Tarjeta: WhatsApp Anfitrión */}
      <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                Atención al Huésped
              </span>
              <h3 className="text-base font-bold text-white leading-tight">
                WhatsApp del Anfitrión
              </h3>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            En línea
          </span>
        </div>

        <p className="text-xs text-slate-300 mb-3.5 leading-relaxed">
          ¿Necesitas asistencia con la calefacción, una toalla extra o recomendaciones locales? Estamos a un mensaje de distancia.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950 transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Escribir por WhatsApp ({hostPhone})</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
