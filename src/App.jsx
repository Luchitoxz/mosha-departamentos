import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import GuiaCardsSection from './components/GuiaCardsSection';
import PracticalInfoSection from './components/PracticalInfoSection';
import PanoramicBanner from './components/PanoramicBanner';
import Footer from './components/Footer';

import LugaresView from './components/LugaresView';
import GastronomiaView from './components/GastronomiaView';
import PuntosHistoricosView from './components/PuntosHistoricosView';
import ServiciosMedicosView from './components/ServiciosMedicosView';

import Toast from './components/Toast';
import PoliticaModal from './components/PoliticaModal';
import { t } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('es'); // 'es' or 'en'
  const [currentView, setCurrentView] = useState('home'); // 'home', 'lugares', 'gastronomia', 'historicos', 'medicos'
  const [toastMessage, setToastMessage] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const currentT = t[lang] || t.es;

  // Real Complex Credentials & Contact
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

  const handleOpenHistoricos = () => {
    setCurrentView('historicos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMedicos = () => {
    setCurrentView('medicos');
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
    if (id === 'contacto') {
      window.open(
        'https://wa.me/5492945645700?text=Hola%20Mosha!%20Estoy%20en%20el%20departamento%20y%20quer%C3%ADa%20hacerles%20una%20consulta',
        '_blank'
      );
      return;
    }

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
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      )}

      {/* SCREEN 3: DÓNDE COMER */}
      {currentView === 'gastronomia' && (
        <GastronomiaView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      )}

      {/* SCREEN 4: PUNTOS HISTÓRICOS */}
      {currentView === 'historicos' && (
        <PuntosHistoricosView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      )}

      {/* SCREEN 5: SERVICIOS MÉDICOS */}
      {currentView === 'medicos' && (
        <ServiciosMedicosView
          lang={lang}
          setLang={setLang}
          onBack={handleBackToHome}
          onOpenPrivacy={() => setPrivacyOpen(true)}
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
              tGuia={currentT.guia}
              onOpenLugares={handleOpenLugares}
              onOpenGastronomia={handleOpenGastronomia}
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

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
