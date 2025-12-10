import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Language } from './translations';

export type Page = 'home' | 'about';

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
    } else if (page === 'about') {
      window.scrollTo(0, 0);
    }
  };

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={navigateTo} 
        currentLang={language} 
        onLangChange={toggleLanguage} 
      />
      <main>
        {currentPage === 'home' ? <Home lang={language} /> : <About lang={language} />}
      </main>
      <Footer onNavigate={navigateTo} lang={language} />
    </div>
  );
}

export default App;