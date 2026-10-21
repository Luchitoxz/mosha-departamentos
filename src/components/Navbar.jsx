import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function Navbar({ lang, setLang, tNav, onSelectSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['contacto', 'servicios', 'guia', 'inicio'];
      const scrollPosition = window.scrollY + 120;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (onSelectSection) {
      onSelectSection(id);
    }
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c1a2d]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-white/10'
          : 'bg-gradient-to-b from-[#0c1a2d]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Logo - Google Stitch Alpine Design */}
        <a
          aria-label="Mosha Departamentos"
          className="flex flex-col items-start group cursor-pointer"
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('inicio');
          }}
        >
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-6 h-6 text-white stroke-[1.75] transition-transform group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 10.5L12 3l9 7.5M5.25 8.75V20.25a.75.75 0 00.75.75h12a.75.75 0 00.75-.75V8.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-extrabold tracking-[0.25em] text-white">MOSHA</span>
          </div>
          <span className="text-[9px] font-semibold tracking-[0.38em] text-slate-200 uppercase pl-0.5">
            DEPARTAMENTOS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/90">
          <button
            onClick={() => handleNavClick('inicio')}
            className={`cursor-pointer transition-colors duration-200 ${
              activeTab === 'inicio'
                ? 'relative py-1 text-white font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white rounded-full'
                : 'hover:text-white'
            }`}
          >
            {tNav.inicio || 'Inicio'}
          </button>

          <button
            onClick={() => handleNavClick('guia')}
            className={`cursor-pointer transition-colors duration-200 ${
              activeTab === 'guia'
                ? 'relative py-1 text-white font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white rounded-full'
                : 'hover:text-white'
            }`}
          >
            {tNav.guia || 'Guía'}
          </button>

          <button
            onClick={() => handleNavClick('servicios')}
            className={`cursor-pointer transition-colors duration-200 ${
              activeTab === 'servicios'
                ? 'relative py-1 text-white font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white rounded-full'
                : 'hover:text-white'
            }`}
          >
            {tNav.servicios || 'Servicios'}
          </button>

          <button
            onClick={() => handleNavClick('contacto')}
            className={`cursor-pointer transition-colors duration-200 ${
              activeTab === 'contacto'
                ? 'relative py-1 text-white font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white rounded-full'
                : 'hover:text-white'
            }`}
          >
            {tNav.contacto || 'Contacto'}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-xs font-semibold tracking-wider text-white transition-all cursor-pointer shadow-sm"
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobile Buttons (Lang + Hamburger) */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/30 bg-white/10 text-xs font-semibold text-white cursor-pointer"
          >
            <Globe className="w-3 h-3" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            aria-label="Abrir menú"
            className="text-white p-2 rounded-lg hover:bg-white/10 transition cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1a2d]/98 backdrop-blur-md px-5 pt-3 pb-6 border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 text-sm font-medium text-white">
            <button
              onClick={() => handleNavClick('inicio')}
              className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 transition cursor-pointer text-left"
            >
              <span>{tNav.inicio || 'Inicio'}</span>
              <span className="text-xs text-slate-400">01</span>
            </button>
            <button
              onClick={() => handleNavClick('guia')}
              className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 transition cursor-pointer text-left"
            >
              <span>{tNav.guia || 'Guía de Huéspedes'}</span>
              <span className="text-xs text-slate-400">02</span>
            </button>
            <button
              onClick={() => handleNavClick('servicios')}
              className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 transition cursor-pointer text-left"
            >
              <span>{tNav.servicios || 'WiFi & Servicios'}</span>
              <span className="text-xs text-slate-400">03</span>
            </button>
            <button
              onClick={() => handleNavClick('contacto')}
              className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 transition cursor-pointer text-left"
            >
              <span>{tNav.contacto || 'Contacto / WhatsApp'}</span>
              <span className="text-xs text-emerald-400">● Online</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
