import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import GuiaCardsSection from './components/GuiaCardsSection';
import PracticalInfoSection from './components/PracticalInfoSection';
import PanoramicBanner from './components/PanoramicBanner';
import Footer from './components/Footer';

import LugaresView from './components/LugaresView';
import GastronomiaView from './components/GastronomiaView';
import BancosView from './components/BancosView';
import ServiciosMedicosView from './components/ServiciosMedicosView';

import Toast from './components/Toast';
import PoliticaModal from './components/PoliticaModal';
import { t } from './data/translations';

// Route hash to view mapper
const getViewFromHash = (hash) => {
  const clean = (hash || '').toLowerCase().replace(/^#/, '');
  if (clean === 'lugares') return 'lugares';
  if (clean === 'gastronomia') return 'gastronomia';
  if (clean === 'bancos' || clean === 'historicos') return 'bancos';
  if (clean === 'medicos') return 'medicos';
  return 'home';
};

const getHashFromView = (view) => {
  if (view === 'lugares') return '#lugares';
  if (view === 'gastronomia') return '#gastronomia';
  if (view === 'bancos' || view === 'historicos') return '#bancos';
  if (view === 'medicos') return '#medicos';
  return '#inicio';
};

export default function App() {
  const [lang, setLang] = useState('es'); // 'es' or 'en'
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return getViewFromHash(window.location.hash);
    }
    return 'home';
  });
  const [toastMessage, setToastMessage] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const privacyOpenRef = useRef(privacyOpen);
  privacyOpenRef.current = privacyOpen;

  const currentViewRef = useRef(currentView);
  currentViewRef.current = currentView;

  const currentT = t[lang] || t.es;

  // Real Complex Credentials & Contact
  const wifiSSID = "Mosha_Departamentos_Fibra";
  const wifiPassword = "Trevelin2026!";
  const hostPhone = "02945 64-5700";

  // Idle background prefetch for instant subpage transitions
  useEffect(() => {
    const subpageAssets = [
      './stitch/lugares-hero.webp',
      './el-refugio-pizzeria.webp',
      './banco-chubut.webp',
      './stitch/medicos-hero.webp',
      './stitch/banner-panoramico.webp',
    ];
    const prefetchAssets = () => {
      subpageAssets.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(prefetchAssets);
    } else {
      setTimeout(prefetchAssets, 1000);
    }
  }, []);

  // History & Mobile Back Button Synchronization
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 1. Ensure initial history entry has consistent state
    const currentHash = window.location.hash;
    const initialView = getViewFromHash(currentHash);
    const normalizedHash = initialView === 'home' ? (currentHash || '#inicio') : getHashFromView(initialView);

    if (!window.history.state || !window.history.state.view) {
      window.history.replaceState({ view: initialView }, '', normalizedHash);
    }

    // 2. Synchronize view on popstate (physical/gesture Back button) and hashchange
    const syncRouteFromHistory = (eventState) => {
      // If privacy modal was open, close it
      if (privacyOpenRef.current) {
        setPrivacyOpen(false);
      }

      // If Wi-Fi QR modal is popping, let PracticalInfoSection handle it
      if (window.location.hash === '#wifi-qr') {
        return;
      }

      // Determine target view from history state or URL hash
      const targetView = eventState?.view || getViewFromHash(window.location.hash) || 'home';

      setCurrentView(targetView);
      window.scrollTo(0, 0);
    };

    const handlePopState = (event) => syncRouteFromHistory(event.state);
    const handleHashChange = () => syncRouteFromHistory(window.history.state);

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Navigation handlers with History pushState
  const navigateToView = (viewName) => {
    if (currentView === viewName) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const hash = getHashFromView(viewName);
    window.history.pushState({ view: viewName, internal: true }, '', hash);
    setCurrentView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLugares = () => navigateToView('lugares');
  const handleOpenGastronomia = () => navigateToView('gastronomia');
  const handleOpenBancos = () => navigateToView('bancos');
  const handleOpenHistoricos = handleOpenBancos;
  const handleOpenMedicos = () => navigateToView('medicos');

  const handleBackToHome = () => {
    if (window.history.state?.internal) {
      window.history.back();
    } else {
      window.history.pushState({ view: 'home' }, '', '#inicio');
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Privacy modal handlers with History pushState
  const handleOpenPrivacy = () => {
    setPrivacyOpen(true);
    window.history.pushState(
      { modal: 'privacy', view: currentView },
      '',
      '#privacidad'
    );
  };

  const handleClosePrivacy = () => {
    if (window.location.hash === '#privacidad') {
      window.history.back();
    } else {
      setPrivacyOpen(false);
    }
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleSelectSection = (id) => {
    if (id === 'contacto') {
      window.open(
        'https://wa.me/5492945645700?text=Hola%20Mosha!%20Estoy%20en%20el%20departamento%20y%20quer%C3%ADa%20hacerles%20una%20consulta',
        '_blank'
      );
      return;
    }

    if (currentView !== 'home') {
      handleBackToHome();
      setTimeout(() => {
        scrollToSection(id);
      }, 150);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* SCREEN 2: LUGARES PARA VISITAR */}
      {currentView === 'lugares' && (
        <LugaresView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={handleOpenPrivacy}
        />
      )}

      {/* SCREEN 3: DÓNDE COMER */}
      {currentView === 'gastronomia' && (
        <GastronomiaView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={handleOpenPrivacy}
        />
      )}

      {/* SCREEN 4: BANCOS Y CAJEROS */}
      {(currentView === 'bancos' || currentView === 'historicos') && (
        <BancosView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={handleOpenPrivacy}
        />
      )}

      {/* SCREEN 5: SERVICIOS MÉDICOS */}
      {currentView === 'medicos' && (
        <ServiciosMedicosView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={handleOpenPrivacy}
        />
      )}

      {/* SCREEN 1: GUÍA DE HUÉSPEDES (HOME PRINCIPAL) */}
      {currentView === 'home' && (
        <>
          {/* Main Alpine Header */}
          <Navbar
            lang={lang}
            setLang={setLang}
            tNav={currentT.nav}
            onSelectSection={handleSelectSection}
          />

          <main className="flex-1">
            {/* Hero Section */}
            <HeroBanner tHero={currentT.hero} />

            {/* 4-Columns Category Cards Section */}
            <GuiaCardsSection
              lang={lang}
              tGuia={currentT.guia}
              onOpenLugares={handleOpenLugares}
              onOpenGastronomia={handleOpenGastronomia}
              onOpenBancos={handleOpenBancos}
              onOpenHistoricos={handleOpenHistoricos}
              onOpenMedicos={handleOpenMedicos}
            />

            {/* Practical Info Panels (WiFi, Contact, Care Rules) */}
            <PracticalInfoSection
              tServicios={currentT.servicios}
              wifiSSID={wifiSSID}
              wifiPassword={wifiPassword}
              hostPhone={hostPhone}
              onShowToast={triggerToast}
            />

            {/* Panoramic Mid-Page Trevelin Banner */}
            <PanoramicBanner
              eyebrow={currentT.banner.eyebrow || 'TREVELIN, CHUBUT'}
              title={currentT.banner.title || 'Naturaleza, historia y sabores únicos'}
              subtitle={currentT.banner.subtitle || 'Un destino que combina paisajes increíbles, cultura galesa, buena gastronomía y la calidez de su gente. Descubrí todo lo que Trevelin tiene para ofrecerte.'}
              buttonText={currentT.banner.btn || 'Conocé más sobre Trevelin'}
              onButtonClick={() => scrollToSection('guia')}
              isSubpage={false}
            />
          </main>

          {/* Institutional Alpine Footer */}
          <Footer
            tFooter={currentT.footer}
            onOpenPrivacy={handleOpenPrivacy}
          />
        </>
      )}

      {/* Privacy Policy & Terms Modal */}
      <PoliticaModal
        isOpen={privacyOpen}
        onClose={handleClosePrivacy}
        lang={lang}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
