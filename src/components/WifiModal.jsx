import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Wifi, Copy, Check, Smartphone } from 'lucide-react';

export default function WifiModal({ isOpen, onClose, ssid, password, onCopyToast }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Wi-Fi QR format recognized automatically by camera app on Android & iOS
  const wifiQrString = `WIFI:T:WPA;S:${ssid};P:${password};;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    onCopyToast("¡Contraseña de Wi-Fi copiada!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-sm rounded-3xl bg-slate-900 border border-white/15 p-6 shadow-2xl relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-3">
          <Wifi className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">
          Conectar al Wi-Fi
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          Apunta la cámara de tu celular a este código para unirte automáticamente a la red sin escribir la clave.
        </p>

        {/* QR Code Container */}
        <div className="p-4 bg-white rounded-2xl shadow-inner max-w-[210px] mx-auto mb-5 flex items-center justify-center">
          <QRCodeSVG
            value={wifiQrString}
            size={180}
            level="M"
            includeMargin={false}
          />
        </div>

        {/* Credentials Pill */}
        <div className="p-3 rounded-xl bg-slate-950 border border-white/10 mb-4 text-left">
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="text-slate-400 font-medium">Red:</span>
            <span className="text-white font-semibold font-mono">{ssid}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium">Clave:</span>
            <span className="text-amber-300 font-semibold font-mono">{password}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-95"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-slate-950" />
              <span>¡Copiada al portapapeles!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-950" />
              <span>Copiar contraseña</span>
            </>
          )}
        </button>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <Smartphone className="w-3.5 h-3.5" />
          <span>Compatible con iPhone y Android</span>
        </div>
      </div>
    </div>
  );
}
