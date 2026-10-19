import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import WifiDirectSection from './components/WifiDirectSection';
import GuiaCardsSection from './components/GuiaCardsSection';
import EmergenciasSection from './components/EmergenciasSection';
import NormasSection from './components/NormasSection';
import UbicacionSection from './components/UbicacionSection';
import Footer from './components/Footer';

import LugaresView from './components/LugaresView';
import GastronomiaView from './components/GastronomiaView';
import EsencialesView from './components/EsencialesView';
import Toast from './components/Toast';
import PoliticaModal from './components/PoliticaModal';
import { t } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('es'); // 'es' or 'en'
  const [currentView, setCurrentView] = useState('home'); // 'home', 'lugares', 'gastronomia', 'esenciales'
  const [toastMessage, setToastMessage] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const currentT = t[lang] || t.es;

  // Sample credentials
  const wifiSSID = "Mosha_Departamentos_Fibra";
  const wifiPassword = "Trevelin2026!";
  const hostPhone = "02945 64-5700";

  // Navigation handlers
  const handleOpenLugares = () => {
    setCurrentView('lugares');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGastronomia = () => {
    setCurrentView('gastronomia');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEsenciales = () => {
    setCurrentView('esenciales');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 2500);
  };

  const handleSelectSection = (id) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        scrollToSection(id);
      }, 120);
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    if (id === 'contacto') {
      window.open('https://wa.me/5492945645700?text=Hola%20Mosha!%20Estoy%20en%20el%20departamento%20y%20quer%C3%ADa%20hacerles%20una%20consulta', '_blank');
      return;
    }

    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f2537] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* VISTA 1: LUGARES PARA VISITAR */}
      {currentView === 'lugares' && (
        <LugaresView lang={lang} setLang={setLang} onBack={handleBackToHome} />
      )}

      {/* VISTA 2: RESTAURANTES & BARES */}
      {currentView === 'gastronomia' && (
        <GastronomiaView lang={lang} setLang={setLang} onBack={handleBackToHome} />
      )}

      {/* VISTA 3: COMERCIOS & ESENCIALES */}
      {currentView === 'esenciales' && (
        <EsencialesView lang={lang} setLang={setLang} onBack={handleBackToHome} />
      )}

      {/* VISTA PRINCIPAL: HOME COMPLETA */}
      {currentView === 'home' && (
        <>
          {/* 1. Header Navigation Bar */}
          <Navbar 
            lang={lang} 
            setLang={setLang} 
            tNav={currentT.nav} 
            onSelectSection={handleSelectSection} 
          />

          {/* Main Page Content */}
          <main className="flex-1">
            {/* 1. Hero Section with Facade Photo and Headline (Compact on Mobile) */}
            <HeroBanner tHero={currentT.hero} />

            {/* 2. Wi-Fi & Atención al Huésped (Prioridad #1 del huésped al llegar) */}
            <WifiDirectSection
              tWifi={currentT.wifiSection}
              wifiSSID={wifiSSID}
              wifiPassword={wifiPassword}
              hostPhone={hostPhone}
              onShowToast={triggerToast}
            />

            {/* 3. Guía de Atractivos: Carrusel táctil horizontal en celular, grid en desktop */}
            <GuiaCardsSection
              tGuia={currentT.guiaCards}
              onOpenLugares={handleOpenLugares}
              onOpenGastronomia={handleOpenGastronomia}
              onOpenEsenciales={handleOpenEsenciales}
            />

            {/* 4. Hospital, Farmacias & Emergencias 24h (Compacto + Botones directos) */}
            <EmergenciasSection 
              tEmergencias={currentT.emergenciasSection} 
              hostPhone={hostPhone} 
            />

            {/* 5. Cómo cuidar el departamento & Normas (Resumen de reglas clave + Desplegable) */}
            <NormasSection tNormas={currentT.normasSection} />

            {/* 6. Ubicación & Cómo llegar (In-page) */}
            <UbicacionSection tUbi={currentT.ubicacionSection} />
          </main>

          {/* 7. Footer Institucional */}
          <Footer 
            tFooter={currentT.footer} 
            onOpenPrivacy={() => setPrivacyOpen(true)} 
          />
        </>
      )}

      {/* Privacy Policy & Terms Modal */}
      <PoliticaModal 
        isOpen={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
        lang={lang} 
      />

      {/* Feedback Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
