import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function PracticalInfoSection({
  tServicios,
  wifiSSID = "Mosha_Departamentos_Fibra",
  wifiPassword = "Trevelin2026!",
  hostPhone = "02945 64-5700",
  onShowToast,
}) {
  const [copiedPass, setCopiedPass] = useState(false);
  const [copiedSsid, setCopiedSsid] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const wifiPayload = `WIFI:T:WPA;S:${wifiSSID};P:${wifiPassword};;`;

  const copyWifiPassword = () => {
    navigator.clipboard.writeText(wifiPassword).then(() => {
      setCopiedPass(true);
      if (onShowToast) onShowToast(tServicios.wifiCopied || '¡Contraseña copiada!');
      setTimeout(() => setCopiedPass(false), 2200);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  };

  const copyWifiSsid = () => {
    navigator.clipboard.writeText(wifiSSID).then(() => {
      setCopiedSsid(true);
      if (onShowToast) onShowToast(tServicios.wifiNetCopied || '¡Nombre de red copiado!');
      setTimeout(() => setCopiedSsid(false), 2200);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  };

  // Open & Close QR modal with browser history support for mobile back button
  const handleOpenQrModal = () => {
    setShowQrModal(true);
    // Preserve current scroll position and state
    const currentHash = window.location.hash || '#servicios';
    window.history.pushState({ modal: 'wifi-qr', prevHash: currentHash }, '', '#wifi-qr');
  };

  const handleCloseQrModal = () => {
    if (window.location.hash === '#wifi-qr') {
      window.history.back();
    } else {
      setShowQrModal(false);
    }
  };

  // Close QR modal on Escape key or mobile Back button (popstate)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseQrModal();
    };

    const handlePopState = (e) => {
      if (showQrModal) {
        setShowQrModal(false);
      }
    };

    if (showQrModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showQrModal]);

  const cleanPhone = hostPhone.replace(/[^0-9]/g, '');
  const waNumber = cleanPhone.startsWith('54') ? cleanPhone : `549${cleanPhone}`;
  const waText = encodeURIComponent(
    tServicios.waMessage || 'Hola, me estoy hospedando en Mosha Departamentos'
  );
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <section className="pb-16 lg:pb-24 bg-[#f8fafc]" id="servicios">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#1e3e62] uppercase block mb-1">
            {tServicios.sectionEyebrow || 'INFORMACIÓN PRÁCTICA'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0c1a2d] tracking-tight">
            {tServicios.sectionTitle || 'Todo para tu comodidad'}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 max-w-2xl">
            {tServicios.sectionSubtitle || 'Conectate al Wi-Fi, comunicate con el anfitrión y conocé las recomendaciones para disfrutar al máximo tu estadía.'}
          </p>
        </div>

        {/* 3 Columns Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* ========================================================= */}
          {/* Column 1: WiFi y servicios */}
          {/* ========================================================= */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start space-x-3.5 sm:space-x-4 mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center shrink-0 border border-blue-100/60">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {tServicios.wifiTitle || 'WiFi y servicios'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tServicios.wifiSubtitle || 'Conectate y disfrutá tu estadía.'}
                  </p>
                </div>
              </div>

              {/* WiFi Credentials Box */}
              <div className="space-y-3">
                {/* Red WiFi */}
                <div className="bg-slate-50/90 hover:bg-slate-100/70 rounded-xl p-3 sm:p-3.5 border border-slate-200/70 flex items-center justify-between gap-3 transition-colors">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {tServicios.wifiNet || 'Red WiFi'}
                      </span>
                      <span 
                        className="text-xs sm:text-sm font-bold text-slate-900 truncate block select-all" 
                        title={wifiSSID}
                      >
                        {wifiSSID}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={copyWifiSsid}
                    className="p-1.5 sm:p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition-colors focus:outline-none shrink-0 cursor-pointer"
                    title={tServicios.wifiNetCopy || 'Copiar red'}
                    type="button"
                  >
                    {!copiedSsid ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Password */}
                <div className="bg-slate-50/90 hover:bg-slate-100/70 rounded-xl p-3 sm:p-3.5 border border-slate-200/70 flex items-center justify-between gap-3 transition-colors">
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {tServicios.wifiPass || 'Contraseña'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide select-all block truncate">
                        {wifiPassword}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={copyWifiPassword}
                    className="p-1.5 sm:p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition-colors focus:outline-none shrink-0 cursor-pointer"
                    title={tServicios.wifiCopy || 'Copiar contraseña'}
                    type="button"
                  >
                    {!copiedPass ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* QR Modal Trigger Button */}
              <div className="mt-3">
                <button
                  type="button"
                  onClick={handleOpenQrModal}
                  className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition cursor-pointer shadow-xs group"
                >
                  <svg className="w-4 h-4 text-slate-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" strokeWidth="2" rx="1" />
                    <rect x="14" y="3" width="7" height="7" strokeWidth="2" rx="1" />
                    <rect x="14" y="14" width="7" height="7" strokeWidth="2" rx="1" />
                    <rect x="3" y="14" width="7" height="7" strokeWidth="2" rx="1" />
                  </svg>
                  <span>{tServicios.wifiQrBtn || 'Ver código QR de conexión'}</span>
                </button>
              </div>

              {/* Apartment Services / Amenities */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  {tServicios.serviciosExtraTitle || 'Equipamiento y comodidades'}
                </span>

                <div className="space-y-3 text-left">
                  {/* Horarios Check-in/out */}
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 text-slate-600 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="2" />
                        <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {tServicios.scheduleTitle || 'Horarios de estadía'}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {tServicios.checkIn || 'Check-in: 14:00 hs'} • {tServicios.checkOut || 'Check-out: 10:00 hs'}
                      </p>
                    </div>
                  </div>

                  {/* Calefacción */}
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 text-slate-600 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2c1 3 4 5 4 9a6 6 0 11-12 0c0-4 3-6 4-9 1 2 2 3 4 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {tServicios.heatingTitle || 'Calefacción y agua caliente'}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {tServicios.calefaccion || 'Caldera individual y radiadores en todos los ambientes'}
                      </p>
                    </div>
                  </div>

                  {/* Smart TV */}
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 text-slate-600 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="5" width="20" height="13" rx="2" strokeWidth="2" />
                        <path d="M8 21h8m-4-3v3" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {tServicios.tvTitle || 'Smart TV y entretenimiento'}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {tServicios.smartTv || 'Smart TV con apps habilitadas y fibra óptica'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Column 2: Contacto del dueño */}
          {/* ========================================================= */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start space-x-3.5 sm:space-x-4 mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center shrink-0 border border-blue-100/60">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {tServicios.contactoTitle || 'Contacto del dueño'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tServicios.contactoSubtitle || 'Estamos para ayudarte.'}
                  </p>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-3">
                {/* Phone Clickable Row (Guaranteed Single-Line No-Wrap) */}
                <a
                  className="group bg-slate-50/90 hover:bg-slate-100/80 rounded-xl p-3 sm:p-3.5 border border-slate-200/70 flex items-center justify-between gap-2.5 transition-colors"
                  href={`tel:${cleanPhone}`}
                  title="Llamar por teléfono"
                >
                  <div className="flex items-center space-x-3 min-w-0 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-600 group-hover:text-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {tServicios.contactoTelLabel || 'Llamadas directas'}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap group-hover:text-blue-700 transition block">
                        +54 9 2945 64-5700
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition shrink-0">
                    <span>{tServicios.contactoCallBtn || 'Llamar'}</span>
                    <svg className="w-3 h-3 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>

                {/* WhatsApp Action Button */}
                <a
                  className="w-full bg-[#0c1a2d] hover:bg-slate-900 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-between transition shadow-sm cursor-pointer group"
                  href={waLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center space-x-2.5 min-w-0 flex-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-emerald-400 shrink-0" viewBox="0 0 24 24">
                      <path d="M12.031 2C6.51 2 2.03 6.47 2.03 11.984a9.92 9.92 0 001.536 5.32L2.01 22l4.839-1.523a9.972 9.972 0 005.182 1.439h.005c5.517 0 9.997-4.47 9.997-9.983A9.97 9.97 0 0012.031 2zm0 18.272a8.27 8.27 0 01-4.223-1.154l-.303-.18-3.136.986.993-3.05-.198-.315a8.257 8.257 0 01-1.42-4.575c0-4.568 3.72-8.283 8.29-8.283a8.267 8.267 0 015.867 2.427 8.243 8.243 0 012.423 5.86c0 4.57-3.719 8.284-8.293 8.284zm4.542-6.195c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062a6.8 6.8 0 01-2-1.233c-.76-.677-1.274-1.514-1.424-1.771-.149-.249-.016-.384.108-.507.112-.112.249-.29.373-.435.125-.145.166-.249.25-.415.083-.166.041-.311-.021-.435-.062-.125-.56-1.35-.768-1.849-.203-.486-.409-.42-.56-.428l-.478-.008c-.166 0-.436.062-.664.311-.228.249-.872.852-.872 2.077s.893 2.409 1.018 2.575c.124.166 1.756 2.682 4.254 3.762.594.257 1.059.41 1.422.525.599.191 1.144.164 1.575.099.48-.072 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-semibold">{tServicios.contactoBtn || 'Enviar mensaje por WhatsApp'}</span>
                      <span className="text-[11px] text-slate-300 font-mono tracking-wide">+54 9 2945 64-5700</span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 ml-1 stroke-[2.5] text-slate-300 group-hover:text-white group-hover:translate-x-0.5 transition shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Host Support & Availability Details */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  {tServicios.supportSectionTitle || 'Atención y asistencia'}
                </span>

                <div className="space-y-3 text-left">
                  {/* Horario */}
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 text-slate-600 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" strokeWidth="2" />
                        <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {tServicios.hoursTitle || 'Horario de disponibilidad'}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {tServicios.contactoHours || 'Atención: 08:00 a 22:00 hs (Urgencias 24 hs)'}
                      </p>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 text-slate-600 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21s-8-7.5-8-12a8 8 0 1116 0c0 4.5-8 12-8 12z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="9" r="2.5" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {tServicios.locationTitle || 'Ubicación del complejo'}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {tServicios.contactoLocation || 'Trevelin, Chubut — En el centro, a pasos de la plaza'}
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Mosha+Departamentos+Trevelin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-blue-900 mt-1 transition group"
                      >
                        <span>{tServicios.directionsBtn || 'Cómo llegar en Google Maps'}</span>
                        <svg className="w-3 h-3 stroke-[2.5] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Asistencia */}
                  <div className="flex items-start space-x-3">
                    <div className="mt-0.5 text-slate-600 shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {tServicios.assistanceTitle || 'Asistencia personalizada'}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                        {tServicios.contactoNote || 'Consultas, recomendaciones turísticas o asistencia con el dpto.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Column 3: Cómo cuidar el departamento */}
          {/* ========================================================= */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start space-x-3.5 sm:space-x-4 mb-5">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center shrink-0 border border-blue-100/60">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {tServicios.normasTitle || 'Cómo cuidar el departamento'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tServicios.normasSubtitle || 'Algunas recomendaciones para una mejor experiencia.'}
                  </p>
                </div>
              </div>

              {/* Rules list items */}
              <div className="space-y-3 pt-0.5">
                {/* Rule 1 */}
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 text-slate-700 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tServicios.rule1Title || 'Mantené el orden y la limpieza'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {tServicios.rule1Desc || 'Ayudanos a que todos puedan disfrutarlo.'}
                    </p>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 text-slate-700 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tServicios.rule2Title || 'Uso responsable de agua y energía'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {tServicios.rule2Desc || 'Trevelin es un lugar único, cuidemos sus recursos.'}
                    </p>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 text-slate-700 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tServicios.rule3Title || 'No está permitido fumar'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {tServicios.rule3Desc || 'El departamento es un espacio 100% libre de humo.'}
                    </p>
                  </div>
                </div>

                {/* Rule 4 */}
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 text-slate-700 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tServicios.rule4Title || 'Respetá la tranquilidad'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {tServicios.rule4Desc || 'De 22:00 a 08:00 para una mejor convivencia.'}
                    </p>
                  </div>
                </div>

                {/* Rule 5 - No se permiten mascotas */}
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 text-slate-700 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="4" r="2" strokeWidth="2" />
                      <circle cx="18" cy="8" r="2" strokeWidth="2" />
                      <circle cx="4" cy="8" r="2" strokeWidth="2" />
                      <path d="M12 10c-3 0-5 2.5-5 5.5 0 2 1.5 3.5 3.5 3.5 1 0 1.5-.5 1.5-.5s.5.5 1.5.5c2 0 3.5-1.5 3.5-3.5 0-3-2-5.5-5-5.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tServicios.rule5Title || 'No se permiten mascotas'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {tServicios.rule5Desc || 'Para mantener el espacio en óptimas condiciones.'}
                    </p>
                  </div>
                </div>

                {/* Rule 6 - Gestioná correctamente los residuos */}
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5 text-slate-700 shrink-0">
                    <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-tight">
                      {tServicios.rule6Title || 'Gestioná correctamente los residuos'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {tServicios.rule6Desc || 'Usá los tachos correspondientes para reciclaje y basura.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* Modern Wi-Fi QR Connection Modal */}
      {/* ========================================================= */}
      {showQrModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleCloseQrModal}
        >
          <div 
            className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col items-center text-center relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Top-Right */}
            <button
              onClick={handleCloseQrModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
              title="Cerrar"
              type="button"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </svg>
            </button>

            {/* Modal Icon Badge */}
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center mb-3 border border-blue-100">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {tServicios.wifiQrTitle || 'Escaneá para conectarte'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-5 max-w-xs">
              {tServicios.wifiQrSub || 'Apuntá la cámara de tu teléfono para conectarte automáticamente a la red Wi-Fi.'}
            </p>

            {/* QR Code Container */}
            <div className="p-4 bg-white rounded-2xl shadow-inner border border-slate-200 mb-5 flex items-center justify-center">
              <QRCodeSVG value={wifiPayload} size={190} level="M" />
            </div>

            {/* Credentials Pill */}
            <div className="w-full bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-5 text-left text-xs space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">{tServicios.qrNetLabel || 'Red:'}</span>
                <span className="font-bold text-slate-900 truncate max-w-[200px] select-all">{wifiSSID}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-semibold uppercase text-[10px]">{tServicios.qrPassLabel || 'Clave:'}</span>
                <span className="font-bold text-slate-900 select-all">{wifiPassword}</span>
              </div>
            </div>

            {/* Close Button Bottom */}
            <button
              onClick={handleCloseQrModal}
              className="w-full py-2.5 px-4 bg-[#0c1a2d] hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition cursor-pointer"
              type="button"
            >
              {tServicios.qrCloseBtn || 'Cerrar'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
