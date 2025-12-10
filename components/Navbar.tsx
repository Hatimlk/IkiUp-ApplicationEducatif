import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Page } from '../App';
import { Language, translations } from '../translations';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, targetId?: string) => void;
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, currentLang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (currentPage === 'home') {
        const element = document.querySelector(href);
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
      } else {
        onNavigate('home', href);
      }
    } else if (href === '/about') {
      onNavigate('about');
    } else if (href === '/') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToDownload = () => {
    if (currentPage === 'home') {
      const element = document.getElementById('download');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate('home', '#download');
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t.about, href: '/about' },
    { name: t.features, href: '#features' },
    { name: t.showcase, href: '#showcase' },
    { name: t.pricing, href: '#pricing' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen || currentPage === 'about'
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer select-none group" onClick={(e) => handleLinkClick(e as any, '/')}>
            <span className="text-3xl font-serif font-bold tracking-tight text-text group-hover:opacity-80 transition-opacity">
              iki<span className="text-primary italic">up</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-black/5 dark:border-white/5 shadow-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-text dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
             {/* Language Switcher */}
             <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1 mr-2 border border-black/5 dark:border-white/10">
                <button 
                  onClick={() => onLangChange('fr')}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-full transition-all ${currentLang === 'fr' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => onLangChange('en')}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-full transition-all ${currentLang === 'en' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  EN
                </button>
             </div>

             <button 
               onClick={toggleTheme}
               className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
               aria-label="Toggle Dark Mode"
             >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <Button size="sm" onClick={scrollToDownload}>{t.download}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl animate-fade-in-up origin-top md:hidden">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-2xl mb-2">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 <Languages size={14} /> Langue
               </span>
               <div className="flex gap-1">
                  <button onClick={() => onLangChange('fr')} className={`px-4 py-1.5 text-xs font-bold rounded-lg ${currentLang === 'fr' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300'}`}>FR</button>
                  <button onClick={() => onLangChange('en')} className={`px-4 py-1.5 text-xs font-bold rounded-lg ${currentLang === 'en' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300'}`}>EN</button>
               </div>
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-serif font-medium py-3 px-4 rounded-2xl transition-colors cursor-pointer ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
            <div className="flex items-center justify-between px-4 py-3">
               <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Mode Sombre</span>
               <button onClick={toggleTheme} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
               </button>
            </div>
            <Button className="w-full justify-center" onClick={scrollToDownload}>{t.download} l'app</Button>
          </div>
        </div>
      )}
    </nav>
  );
};