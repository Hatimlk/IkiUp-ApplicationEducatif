import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';
import { Footer } from './components/Footer';
import { Language } from './translations';

import { HelmetProvider } from 'react-helmet-async';

export type Page = 'home' | 'about' | 'legal' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('fr');

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
      case 'legal': return <Legal lang={language} />;
      case 'privacy': return <Privacy lang={language} />;
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