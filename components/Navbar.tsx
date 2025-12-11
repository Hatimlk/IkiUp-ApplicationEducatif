
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
// Fix: Added Zap to the imported icons from lucide-react
import { Menu, X, Sun, Moon, Languages, Zap } from 'lucide-react';
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
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer select-none group" onClick={(e) => handleLinkClick(e as any, '/')}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
              <Zap size={20} />
            </div>
            <span className="text-2xl font-serif font-black tracking-tighter text-slate-900 dark:text-white">
              iki<span className="text-primary italic">up</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 bg-slate-500/5 dark:bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-black/5 dark:border-white/5 shadow-inner">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             {/* Language Switcher */}
             <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-1 border border-black/5 dark:border-white/10">
                <button 
                  onClick={() => onLangChange('fr')}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${currentLang === 'fr' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => onLangChange('en')}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${currentLang === 'en' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  EN
                </button>
             </div>

             <button 
               onClick={toggleTheme}
               className="p-3 text-slate-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary rounded-xl transition-all focus:outline-none cursor-pointer border border-transparent hover:border-primary/20"
               aria-label="Toggle Dark Mode"
             >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
             <Button size="md" className="shadow-lg shadow-primary/10" onClick={scrollToDownload}>{t.download}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl transition-colors focus:outline-none border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-4 p-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-fade-in-up origin-top md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xl font-serif font-bold p-5 rounded-2xl transition-all cursor-pointer ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-4"></div>
            <div className="flex items-center justify-between px-5 mb-4">
               <div className="flex gap-2">
                  <button onClick={() => onLangChange('fr')} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${currentLang === 'fr' ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-900 text-slate-500'}`}>FR</button>
                  <button onClick={() => onLangChange('en')} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${currentLang === 'en' ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-900 text-slate-500'}`}>EN</button>
               </div>
               <button onClick={toggleTheme} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-500">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
               </button>
            </div>
            <Button className="w-full h-16 text-lg shadow-xl shadow-primary/20" onClick={scrollToDownload}>{t.download}</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
