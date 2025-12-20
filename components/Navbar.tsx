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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    if (localStorage.theme === 'dark') {
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
          const offset = 80;
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

  const navLinks = [
    { name: t.about, href: '/about' },
    { name: t.howitworks, href: '#howitworks' },
    { name: t.features, href: '#features' },
    { name: t.pricing, href: '#pricing' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer select-none group transition-transform hover:scale-105" 
            onClick={(e) => handleLinkClick(e, '/')}
          >
            <img 
              src={LOGO_URL} 
              alt="IkiUp Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-1.5 px-1.5 py-1.5 bg-slate-100/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200/50 dark:border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[11px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all duration-200 ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:bg-white dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center bg-slate-100/50 dark:bg-slate-900/50 rounded-xl p-1 border border-slate-200/50 dark:border-white/5">
                <button 
                  onClick={() => onLangChange('fr')}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${currentLang === 'fr' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  FR
                </button>
                <button 
                  onClick={() => onLangChange('en')}
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${currentLang === 'en' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                >
                  EN
                </button>
             </div>

             <button 
               onClick={toggleTheme}
               className="p-2.5 text-slate-500 dark:text-slate-400 hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
               aria-label="Toggle Theme"
             >
               {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <Button size="sm" onClick={() => handleLinkClick({preventDefault:()=>{} } as any, '#download')}>{t.download}</Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-800"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-3 p-5 bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 rounded-3xl shadow-2xl animate-fade-in-up md:hidden overflow-hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-base font-bold p-4 rounded-2xl transition-all ${
                  (link.href === '/about' && currentPage === 'about')
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-4 mx-2"></div>
            <div className="flex items-center justify-between px-2 mb-4">
               <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
                  <button onClick={() => onLangChange('fr')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${currentLang === 'fr' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500'}`}>FR</button>
                  <button onClick={() => onLangChange('en')} className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${currentLang === 'en' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-500'}`}>EN</button>
               </div>
            </div>
            <Button className="w-full" onClick={() => handleLinkClick({preventDefault:()=>{} } as any, '#download')}>{t.download}</Button>
          </div>
        </div>
      )}
    </header>
  );
};