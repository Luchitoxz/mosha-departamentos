import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, MessageCircle } from 'lucide-react';

export default function Navbar({ lang, setLang, tNav, onSelectSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy to update active button
      const sectionIds = ['ubicacion', 'normas', 'emergencias', 'guia', 'servicios', 'inicio'];
      const scrollPosition = window.scrollY + 130;

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

  const navLinks = [
    { id: 'inicio', label: tNav.inicio || 'Inicio' },
    { id: 'servicios', label: tNav.wifi || tNav.servicios || 'Wi-Fi' },
    { id: 'guia', label: tNav.guia || 'Guía' },
    { id: 'emergencias', label: tNav.emergencias || tNav.urgencias || 'Urgencias' },
    { id: 'normas', label: tNav.normas || (lang === 'en' ? 'Rules' : 'Normas') },
    { id: 'ubicacion', label: tNav.ubicacion || 'Ubicación' },
    { id: 'contacto', label: tNav.contacto || 'WhatsApp' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    if (onSelectSection) {
      setTimeout(() => {
        onSelectSection(id);
      }, 70);
    }
  };

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b192c]/95 backdrop-blur-md shadow-lg py-2.5 sm:py-3 border-b border-white/10' 
          : 'bg-[#0b192c]/75 backdrop-blur-md sm:bg-gradient-to-b sm:from-black/70 sm:to-transparent py-3 sm:py-4 border-b border-white/5 sm:border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Minimalist Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
          className="flex flex-col items-start group select-none text-white py-1 cursor-pointer"
        >
          <svg
            className="w-5 h-3 text-white mb-0.5 group-hover:-translate-y-0.5 transition-transform"
            viewBox="0 0 24 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2 12 12 2 22 12" />
          </svg>
          <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] leading-none uppercase font-sans">
            MOSHA
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.38em] font-medium leading-tight text-white/85 uppercase mt-0.5">
            DEPARTAMENTOS
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((item) => {
            const isActive = activeTab === item.id;
            const isContact = item.id === 'contacto';

            if (isContact) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ml-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs xl:text-sm font-semibold tracking-wide transition-all relative py-1 cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-sky-400 rounded-full transition-all" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right side controls: Language Selector + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all active:scale-95 shadow-sm cursor-pointer"
            title="Cambiar idioma / Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-sky-300" />
            <span className={lang === 'es' ? 'text-amber-300 font-extrabold' : 'text-white/70'}>ES</span>
            <span className="text-white/40">|</span>
            <span className={lang === 'en' ? 'text-amber-300 font-extrabold' : 'text-white/70'}>EN</span>
          </button>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b192c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-5 space-y-2 animate-in fade-in duration-200">
          {navLinks.map((item) => {
            const isContact = item.id === 'contacto';
            const isActive = activeTab === item.id;

            if (isContact) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 active:scale-98 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{item.label} (Anfitrión)</span>
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-2.5 text-base font-semibold border-b border-white/5 cursor-pointer ${
                  isActive ? 'text-sky-300 font-bold' : 'text-white/85'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Language selector row in mobile drawer */}
          <div className="pt-3 flex items-center justify-between text-xs text-white/80">
            <span className="font-medium flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              Idioma / Language:
            </span>
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded-full border border-white/10">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'es' ? 'bg-amber-400 text-[#0b192c] shadow' : 'text-white/70 hover:text-white'
                }`}
              >
                Español
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-amber-400 text-[#0b192c] shadow' : 'text-white/70 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
