import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Home } from './Home';
// Lazy load secondary pages
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const PrivacyPolicy = lazy(() => import('./components/sections/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const NotFound = lazy(() => import('./components/sections/NotFound').then(module => ({ default: module.NotFound })));

import { Footer } from './components/layout/Footer';
import { Language } from './lib/translations';
import { LoadingSkeleton } from './components/ui/LoadingSkeleton';
import { BackToTop } from './components/ui/BackToTop';
import { CookieConsent } from './components/ui/CookieConsent';


export type Page = 'home' | 'about' | 'privacy' | '404';

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
      case 'privacy': return <PrivacyPolicy lang={language} />;
      case '404': return <NotFound lang={language} onGoHome={() => navigateTo('home')} />;
      default: return <Home lang={language} />;
    }
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
        <Suspense fallback={<LoadingSkeleton />}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer onNavigate={navigateTo} lang={language} />
      <BackToTop />
      <CookieConsent lang={language} onNavigatePrivacy={() => navigateTo('privacy')} />
    </div>
  );
}

export default App;