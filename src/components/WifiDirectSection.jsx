import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Wifi, Copy, Check, MessageCircle, ArrowUpRight, Smartphone } from 'lucide-react';

export default function WifiDirectSection({ tWifi = {}, wifiSSID, wifiPassword, hostPhone, onShowToast }) {
  const [copied, setCopied] = useState(false);

  const copyMsg = tWifi.copied || "¡Contraseña copiada al portapapeles!";

  const handleCopy = () => {
    navigator.clipboard.writeText(wifiPassword);
    setCopied(true);
    if (onShowToast) onShowToast(copyMsg);
    setTimeout(() => setCopied(false), 2200);
  };

  const cleanPhone = hostPhone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/549${cleanPhone}?text=Hola%20Mosha%20Departamentos!%20Estoy%20hospedado%20en%20el%20complejo%20y%20quer%C3%ADa%20hacerles%20una%20consulta:`;
  const wifiQrString = `WIFI:T:WPA;S:${wifiSSID};P:${wifiPassword};;`;

  const eyebrow = tWifi.eyebrow || "CONEXIÓN & ATENCIÓN AL HUÉSPED";
  const title = tWifi.title || "Wi-Fi y Contacto Directo";
  const subtitle = tWifi.subtitle || "Conectate al instante a nuestra red de fibra óptica y comunicate directamente con el anfitrión ante cualquier necesidad.";

  return (
    <section id="servicios" className="py-8 sm:py-14 bg-[#f8fafc] border-b border-slate-100 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-5 sm:mb-8 max-w-2xl">
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#0284c7] uppercase">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f2537] tracking-tight mt-1">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 sm:mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-7">
          
          {/* Card 1: Wi-Fi con QR */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-blue-600">
                      {tWifi.wifiSpeed}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f2537] leading-tight">
                      {tWifi.wifiCardTitle}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {tWifi.internetActive}
                </span>
              </div>

              {/* Flex area: QR + Credentials */}
              <div className="flex items-center gap-4 sm:gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-4 sm:mb-6">
                {/* QR Code */}
                <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-xs border border-slate-200 shrink-0 text-center">
                  <div className="sm:hidden">
                    <QRCodeSVG
                      value={wifiQrString}
                      size={95}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <QRCodeSVG
                      value={wifiQrString}
                      size={125}
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    <Smartphone className="w-2.5 h-2.5 text-blue-600" />
                    <span>{tWifi.scanCamera}</span>
                  </div>
                </div>

                {/* Credentials */}
                <div className="flex-1 min-w-0 space-y-2 text-left">
                  <div>
                    <span className="block text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      {tWifi.networkName}
                    </span>
                    <span className="text-xs sm:text-base font-bold text-[#0f2537] font-mono select-all truncate block">
                      {wifiSSID}
                    </span>
                  </div>

                  <div className="pt-1.5 border-t border-slate-200/70">
                    <span className="block text-[10px] sm:text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      {tWifi.password}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-blue-600 font-mono select-all tracking-wide break-all block">
                      {wifiPassword}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0f2537] hover:bg-[#1b3a54] text-white font-bold text-xs shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">{tWifi.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>{tWifi.copyPassword}</span>
                </>
              )}
            </button>
          </div>

          {/* Card 2: WhatsApp Anfitrión */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-emerald-600">
                      {tWifi.hostTitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f2537] leading-tight">
                      {tWifi.hostCardTitle}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {tWifi.online}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal line-clamp-2 sm:line-clamp-none">
                {tWifi.hostDesc}
              </p>

              {/* Contact Pill */}
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 mb-4 flex items-center justify-between gap-2">
                <div>
                  <span className="block text-[10px] sm:text-[11px] text-emerald-800 font-bold uppercase tracking-wider">
                    {tWifi.directLine}
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-[#0f2537] font-mono">
                    {hostPhone}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  <span>{tWifi.fastResponse}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-950/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{tWifi.chatButton}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
