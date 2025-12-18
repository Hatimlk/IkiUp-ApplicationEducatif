import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Page } from '../App';
import { Language, translations } from '../translations';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, targetId?: string) => void;
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const LOGO_URL = "https://res.cloudinary.com/duwqjda9j/image/upload/v1765907016/logo-IkiUp_o54cmh.png";

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
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
          ? 'bg-[#FAFAFA]/90 dark:bg-[#0F172A]/90 backdrop-blur-2xl border-b border-gray-ui dark:border-white/5 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer select-none group" 
            onClick={(e) => handleLinkClick(e, '/')}
          >
            <img 
              src={LOGO_URL} 
              alt="IkiUp Logo" 
              className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          <div className="hidden lg:flex items-center gap-1 bg-gray-ui/40 dark:bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-gray-ui dark:border-white/5">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] font-black uppercase tracking-widest px-6 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-[#111111]/70 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center bg-gray-ui/40 dark:bg-white/5 rounded-xl p-1 border border-gray-ui dark:border-white/10">
                <button 
                  onClick={() => onLangChange('fr')}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${currentLang === 'fr' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-[#111111]'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => onLangChange('en')}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-wider rounded-lg transition-all ${currentLang === 'en' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-[#111111]'}`}
                >
                  EN
                </button>
             </div>

             <button 
               onClick={toggleTheme}
               className="p-3 text-slate-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary rounded-xl transition-all border border-transparent hover:border-primary/20"
               aria-label="Toggle Dark Mode"
             >
               {isDark ? <Sun size={20} /> : <Sun size={20} className="fill-current" />}
             </button>
             <Button size="md" onClick={scrollToDownload}>{t.download}</Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-gray-ui/40 dark:bg-slate-900 text-[#111111] dark:text-white rounded-xl border border-gray-ui dark:border-slate-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-4 p-6 bg-[#FAFAFA] dark:bg-slate-950 border border-gray-ui dark:border-slate-800 rounded-3xl shadow-2xl animate-fade-in-up origin-top md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg font-bold p-4 rounded-xl transition-all ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary/10 text-primary' 
                    : 'text-[#111111] dark:text-slate-200 hover:bg-gray-ui/40 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-gray-ui dark:bg-slate-800 my-4"></div>
            <div className="flex items-center justify-between px-4 mb-4">
               <div className="flex gap-2">
                  <button onClick={() => onLangChange('fr')} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${currentLang === 'fr' ? 'bg-primary text-white' : 'bg-gray-ui text-slate-500'}`}>FR</button>
                  <button onClick={() => onLangChange('en')} className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${currentLang === 'en' ? 'bg-primary text-white' : 'bg-gray-ui text-slate-500'}`}>EN</button>
               </div>
               <button onClick={toggleTheme} className="p-3 bg-gray-ui rounded-xl text-slate-500">
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
               </button>
            </div>
            <Button className="w-full h-14" onClick={scrollToDownload}>{t.download}</Button>
          </div>
        </div>
      )}
    </nav>
  );
};