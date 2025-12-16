import React from 'react';
import { Page } from '../App';
import { Language } from '../translations';

interface FooterProps {
    onNavigate: (page: Page, targetId?: string) => void;
    lang: Language;
}

// Latest logo URL provided
const LOGO_URL = "https://res.cloudinary.com/duwqjda9j/image/upload/v1765907016/logo-IkiUp_o54cmh.png";

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, page: Page, targetId?: string) => {
    e.preventDefault();
    onNavigate(page, targetId);
  };

  const isFr = lang === 'fr';

  return (
    <footer className="bg-white dark:bg-slate-950 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-20">
            <div className="col-span-2 md:col-span-4">
                <div 
                  className="mb-6 cursor-pointer inline-block" 
                  onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({top:0, behavior:'smooth'})}}
                >
                  <img 
                    src={LOGO_URL} 
                    alt="IkiUp Logo" 
                    className="h-10 w-auto object-contain transition-opacity hover:opacity-80"
                    onError={(e) => {
                      (e.target as any).style.display = 'none';
                      (e.target as any).nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden text-3xl font-serif font-bold tracking-tight text-text">
                    iki<span className="text-primary italic">up</span>
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                    {isFr ? "Rendre la gestion de l'éducation fluide, intelligente et connectée pour tous." : "Making education management smooth, intelligent and connected for everyone."}
                </p>
            </div>
            
            <div className="md:col-start-7 md:col-span-2">
                <h4 className="font-bold text-text mb-6">{isFr ? "Produit" : "Product"}</h4>
                <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                    <li><a href="#features" onClick={(e) => handleLinkClick(e as any, 'home', '#features')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Fonctionnalités" : "Features"}</a></li>
                    <li><a href="#howitworks" onClick={(e) => handleLinkClick(e as any, 'home', '#features')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Agent Kaïa" : "Kaïa Agent"}</a></li>
                    <li><a href="#pricing" onClick={(e) => handleLinkClick(e as any, 'home', '#pricing')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Tarifs" : "Pricing"}</a></li>
                </ul>
            </div>

            <div className="md:col-span-2">
                <h4 className="font-bold text-text mb-6">{isFr ? "Entreprise" : "Company"}</h4>
                <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                    <li><a href="/about" onClick={(e) => handleLinkClick(e as any, 'about')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "À propos" : "About"}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Blog" : "Blog"}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Carrières" : "Careers"}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Contact" : "Contact"}</a></li>
                </ul>
            </div>

            <div className="md:col-span-2">
                <h4 className="font-bold text-text mb-6">{isFr ? "Légal" : "Legal"}</h4>
                <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                    <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Confidentialité" : "Privacy"}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Conditions" : "Terms"}</a></li>
                    <li><a href="#" className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Cookies" : "Cookies"}</a></li>
                </ul>
            </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 font-medium">
                © {new Date().getFullYear()} IkiUp Inc. {isFr ? "Tous droits réservés." : "All rights reserved."}
            </p>
            <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </div>
                <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};