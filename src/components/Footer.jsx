import React from 'react';

export default function Footer({ tFooter, onOpenPrivacy }) {
  const waText = encodeURIComponent(
    tFooter?.waMessage || 'Hola, me estoy hospedando en Punto Sur Esquel'
  );
  const waLink = `https://wa.me/5492945466058?text=${waText}`;

  return (
    <footer className="bg-[#0c1a2d] text-white border-t border-slate-800" id="contacto">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3.5 sm:py-4 lg:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          {/* Logo and Slogan */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-1 sm:gap-2.5">
            <div className="flex items-center space-x-1.5">
              <img 
                src="./punto-sur-logo.png" 
                alt="Punto Sur Esquel" 
                className="w-6 h-6 rounded-full object-cover border border-amber-400/40" 
              />
              <span className="text-sm font-extrabold tracking-[0.2em] text-white leading-none">PUNTO SUR</span>
              <span className="text-[7px] font-semibold tracking-[0.3em] text-amber-300 uppercase pl-0.5">
                ESQUEL
              </span>
            </div>
            <span className="hidden sm:inline text-slate-600 text-xs">•</span>
            <p className="text-[10px] sm:text-[11px] text-slate-400">
              {tFooter.slogan || 'Tu estadía, más simple.'}
            </p>
          </div>

          {/* Center Metadata: Location & Instagram */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs text-slate-300">
            {/* Location */}
            <div className="flex items-center space-x-1.5 text-[11px]">
              <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <span className="font-medium text-white">{tFooter.location || 'Esquel, Chubut'}</span>
            </div>

            {/* Instagram */}
            <a
              className="flex items-center space-x-1.5 hover:text-white transition group text-[11px]"
              href="https://www.instagram.com/puntosurpatagonia"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-3.5 h-3.5 text-blue-400 shrink-0 group-hover:text-pink-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{tFooter.instagramHandle || '@puntosurpatagonia'}</span>
            </a>
          </div>

          {/* WhatsApp Capsule Button */}
          <div className="flex items-center">
            <a
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-slate-700 bg-white/5 hover:bg-white/10 hover:border-slate-500 transition text-[11px] font-semibold text-white tracking-wide cursor-pointer"
              href={waLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M12.031 2C6.51 2 2.03 6.47 2.03 11.984a9.92 9.92 0 001.536 5.32L2.01 22l4.839-1.523a9.972 9.972 0 005.182 1.439h.005c5.517 0 9.997-4.47 9.997-9.983A9.97 9.97 0 0012.031 2zm0 18.272a8.27 8.27 0 01-4.223-1.154l-.303-.18-3.136.986.993-3.05-.198-.315a8.257 8.257 0 01-1.42-4.575c0-4.568 3.72-8.283 8.29-8.283a8.267 8.267 0 015.867 2.427 8.243 8.243 0 012.423 5.86c0 4.57-3.719 8.284-8.293 8.284z" />
              </svg>
              <span>{tFooter.contactTitle || 'Contactanos'}</span>
            </a>
          </div>
        </div>

        {/* Bottom Terms & Copyright */}
        <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10px] text-slate-500 text-center sm:text-left">
          <div>
            {tFooter.rights || '© 2026 Punto Sur Esquel. Esquel, Patagonia Argentina. Todos los derechos reservados.'}
          </div>
          {onOpenPrivacy && (
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-slate-400 hover:text-white transition underline cursor-pointer"
            >
              {tFooter.privacyLink || 'Términos y Política de Privacidad'}
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
