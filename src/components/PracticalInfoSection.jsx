import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function PracticalInfoSection({
  tServicios,
  wifiSSID = "Mosha_Departamentos_Fibra",
  wifiPassword = "Trevelin2026!",
  hostPhone = "02945 64-5700",
  onShowToast,
}) {
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const wifiPayload = `WIFI:T:WPA;S:${wifiSSID};P:${wifiPassword};;`;

  const copyWifiPassword = () => {
    navigator.clipboard.writeText(wifiPassword).then(() => {
      setCopied(true);
      if (onShowToast) onShowToast(tServicios.wifiCopied || '¡Contraseña copiada al portapapeles!');
      setTimeout(() => setCopied(false), 2500);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  };

  const cleanPhone = hostPhone.replace(/[^0-9]/g, '');
  const waNumber = cleanPhone.startsWith('54') ? cleanPhone : `549${cleanPhone}`;
  const waLink = `https://wa.me/${waNumber}?text=Hola,%20me%20estoy%20hospedando%20en%20Mosha%20Departamentos`;

  return (
    <section className="pb-16 lg:pb-24 bg-[#f8fafc]" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Column 1: WiFi y servicios */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {tServicios.wifiTitle || 'WiFi y servicios'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tServicios.wifiSubtitle || 'Conectate y disfrutá tu estadía.'}
                  </p>
                </div>
              </div>

              {/* WiFi Credentials Box */}
              <div className="space-y-4">
                {/* Red WiFi */}
                <div className="bg-slate-50/90 rounded-xl p-4 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <svg className="w-5 h-5 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        {tServicios.wifiNet || 'Red WiFi'}
                      </span>
                      <span className="text-base font-bold text-slate-900 select-all">
                        {wifiSSID}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div className="bg-slate-50/90 rounded-xl p-4 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3.5">
                    <svg className="w-5 h-5 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                        {tServicios.wifiPass || 'Contraseña'}
                      </span>
                      <span className="text-base font-bold text-slate-900 tracking-wide select-all">
                        {wifiPassword}
                      </span>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={copyWifiPassword}
                    className="p-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors focus:outline-none cursor-pointer"
                    title={tServicios.wifiCopy || 'Copiar contraseña'}
                    type="button"
                  >
                    {!copied ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* QR Toggle / Display */}
              <div className="mt-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowQr(!showQr)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100/70 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" strokeWidth="2" rx="1" />
                    <rect x="14" y="3" width="7" height="7" strokeWidth="2" rx="1" />
                    <rect x="14" y="14" width="7" height="7" strokeWidth="2" rx="1" />
                    <rect x="3" y="14" width="7" height="7" strokeWidth="2" rx="1" />
                  </svg>
                  <span>{showQr ? (tServicios.wifiQrTitle || 'Ocultar código QR') : (tServicios.wifiQrBtn || 'Escanear QR para conectar')}</span>
                </button>

                {showQr && (
                  <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center text-center animate-in fade-in duration-200">
                    <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 mb-2">
                      <QRCodeSVG value={wifiPayload} size={150} level="M" />
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {tServicios.wifiQrSub || 'Apuntá la cámara de tu teléfono para conectarte automáticamente.'}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <p
              className={`text-xs text-emerald-700 font-medium text-center mt-3 transition-opacity duration-200 ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {tServicios.wifiCopied || 'Contraseña copiada al portapapeles'}
            </p>
          </div>

          {/* Column 2: Contacto del dueño */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {tServicios.contactoTitle || 'Contacto del dueño'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tServicios.contactoSubtitle || 'Estamos para ayudarte.'}
                  </p>
                </div>
              </div>

              {/* Phone Clickable Row */}
              <a
                className="group bg-slate-50/90 hover:bg-slate-100 rounded-xl p-4 border border-slate-100 flex items-center justify-between transition-colors"
                href={`tel:${cleanPhone}`}
              >
                <div className="flex items-center space-x-3.5">
                  <svg className="w-5 h-5 text-slate-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition">
                    +54 9 2945 64-5700
                  </span>
                </div>
                <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transform group-hover:translate-x-0.5 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </a>

              {/* Support Note */}
              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                {tServicios.contactoNote || 'Consultas, asistencia durante tu estadía o cualquier duda que tengas.'}
              </p>
            </div>

            {/* WhatsApp Action Button */}
            <div className="mt-6">
              <a
                className="w-full bg-[#0c1a2d] hover:bg-slate-900 text-white font-medium py-3.5 px-5 rounded-xl flex items-center justify-center space-x-2.5 transition shadow-sm cursor-pointer"
                href={waLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* WhatsApp SVG */}
                <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.51 2 2.03 6.47 2.03 11.984a9.92 9.92 0 001.536 5.32L2.01 22l4.839-1.523a9.972 9.972 0 005.182 1.439h.005c5.517 0 9.997-4.47 9.997-9.983A9.97 9.97 0 0012.031 2zm0 18.272a8.27 8.27 0 01-4.223-1.154l-.303-.18-3.136.986.993-3.05-.198-.315a8.257 8.257 0 01-1.42-4.575c0-4.568 3.72-8.283 8.29-8.283a8.267 8.267 0 015.867 2.427 8.243 8.243 0 012.423 5.86c0 4.57-3.719 8.284-8.293 8.284zm4.542-6.195c-.249-.124-1.472-.726-1.7-.809-.228-.083-.394-.124-.56.124-.166.249-.643.809-.788.975-.145.166-.29.187-.539.062a6.8 6.8 0 01-2-1.233c-.76-.677-1.274-1.514-1.424-1.771-.149-.249-.016-.384.108-.507.112-.112.249-.29.373-.435.125-.145.166-.249.25-.415.083-.166.041-.311-.021-.435-.062-.125-.56-1.35-.768-1.849-.203-.486-.409-.42-.56-.428l-.478-.008c-.166 0-.436.062-.664.311-.228.249-.872.852-.872 2.077s.893 2.409 1.018 2.575c.124.166 1.756 2.682 4.254 3.762.594.257 1.059.41 1.422.525.599.191 1.144.164 1.575.099.48-.072 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.29z" />
                </svg>
                <span className="text-sm font-semibold">{tServicios.contactoBtn || 'Enviar mensaje por WhatsApp'}</span>
                <svg className="w-4 h-4 ml-1 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Cómo cuidar el departamento */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Header */}
              <div className="flex items-start space-x-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0c1a2d] flex items-center justify-center shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {tServicios.normasTitle || 'Cómo cuidar el departamento'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tServicios.normasSubtitle || 'Algunas recomendaciones para una mejor experiencia.'}
                  </p>
                </div>
              </div>

              {/* Rules list items matching mockup */}
              <div className="space-y-4 pt-1">
                {/* Rule 1 */}
                <div className="flex items-start space-x-3.5">
                  <div className="mt-0.5 text-slate-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {tServicios.rule1Title || 'Mantené el orden y la limpieza'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {tServicios.rule1Desc || 'Ayudanos a que todos puedan disfrutarlo.'}
                    </p>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="flex items-start space-x-3.5">
                  <div className="mt-0.5 text-slate-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {tServicios.rule2Title || 'Uso responsable de agua y energía'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {tServicios.rule2Desc || 'Trevelin es un lugar único, cuidemos sus recursos.'}
                    </p>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="flex items-start space-x-3.5">
                  <div className="mt-0.5 text-slate-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {tServicios.rule3Title || 'No está permitido fumar'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {tServicios.rule3Desc || 'El departamento es un espacio 100% libre de humo.'}
                    </p>
                  </div>
                </div>

                {/* Rule 4 */}
                <div className="flex items-start space-x-3.5">
                  <div className="mt-0.5 text-slate-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <h4 className="text-xs font-bold text-slate-900">
                      {tServicios.rule4Title || 'Respetá la tranquilidad'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {tServicios.rule4Desc || 'De 22:00 a 08:00 para una mejor convivencia.'}
                    </p>
                  </div>
                </div>

                {/* Rule 5 - No se permiten mascotas */}
                <div className="flex items-start space-x-3.5">
                  <div className="mt-0.5 text-slate-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="4" r="2" strokeWidth="2" />
                      <circle cx="18" cy="8" r="2" strokeWidth="2" />
                      <circle cx="4" cy="8" r="2" strokeWidth="2" />
                      <path d="M12 10c-3 0-5 2.5-5 5.5 0 2 1.5 3.5 3.5 3.5 1 0 1.5-.5 1.5-.5s.5.5 1.5.5c2 0 3.5-1.5 3.5-3.5 0-3-2-5.5-5-5.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      No se permiten mascotas
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Para mantener el espacio en óptimas condiciones.
                    </p>
                  </div>
                </div>

                {/* Rule 6 - Gestioná correctamente los residuos */}
                <div className="flex items-start space-x-3.5">
                  <div className="mt-0.5 text-slate-700">
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {tServicios.rule5Title || 'Gestioná correctamente los residuos'}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {tServicios.rule5Desc || 'Usá los tachos correspondientes para reciclaje y basura.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
