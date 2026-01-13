import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Home } from './Home';
import { About } from './components/sections/About';

import { Footer } from './components/layout/Footer';
import { Language } from './lib/translations';

import { HelmetProvider } from 'react-helmet-async';

export type Page = 'home' | 'about';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    // Remove trailing hash if present (fixes clean URL issue)
    if (window.location.hash === '#') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const navigateTo = (page: Page, targetId?: string) => {
    setCurrentPage(page);

    if (page === 'home' && targetId) {
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home lang={language} />;
      case 'about': return <About lang={language} />;

      default: return <Home lang={language} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
          currentLang={language}
          onLangChange={toggleLanguage}
        />
        <main>
          {renderPage()}
        </main>
        <Footer onNavigate={navigateTo} lang={language} />
      </div>
    </HelmetProvider>
  );
}

export default App;