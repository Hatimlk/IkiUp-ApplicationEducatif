import React from 'react';
import { Page } from '../App';
import { Language } from '../translations';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

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
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-20 pb-10 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div
              className="mb-8 cursor-pointer inline-block"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              <img
                src={LOGO_URL}
                alt="IkiUp Logo"
                className="h-10 w-auto object-contain dark:brightness-0 dark:invert opacity-90 hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as any).style.display = 'none';
                  // Fallback text if image fails
                  (e.target as any).parentNode.innerHTML = '<span class="text-3xl font-serif font-bold text-slate-900 dark:text-white">iki<span class="text-primary italic">up</span></span>';
                }}
              />
            </div>
            <p className="text-slate-500 leading-relaxed font-light mb-8 max-w-sm">
              {isFr ? "Redéfinir le parcours éducatif avec intelligence et bienveillance." : "Redefining the educational journey with intelligence and kindness."}
            </p>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">{isFr ? "Produit" : "Product"}</h4>
            <ul className="space-y-4">
              <li><a href="#features" onClick={(e) => handleLinkClick(e as any, 'home', '#features')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Solution" : "Solution"}</a></li>
              <li><a href="#howitworks" onClick={(e) => handleLinkClick(e as any, 'home', '#howitworks')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Concept" : "Concept"}</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e as any, 'home', '#pricing')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "Tarifs" : "Pricing"}</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">{isFr ? "Entreprise" : "Company"}</h4>
            <ul className="space-y-4">
              <li><a href="/about" onClick={(e) => handleLinkClick(e as any, 'about')} className="hover:text-primary transition-colors cursor-pointer">{isFr ? "À Propos" : "About Us"}</a></li>
              <li><a href="mailto:contact@ikiup.com" className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2">
                {isFr ? "Contactez-nous" : "Contact Us"}
              </a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">{isFr ? "Suivez-nous" : "Follow Us"}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 text-slate-600 dark:text-slate-400">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-slate-500">
          <p>
            © {new Date().getFullYear()} IkiUp Inc. {isFr ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <div className="flex gap-6">
            <a href="/legal" onClick={(e) => handleLinkClick(e as any, 'legal')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">{isFr ? "Mentions Légales" : "Legal"}</a>
            <a href="/privacy" onClick={(e) => handleLinkClick(e as any, 'privacy')} className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">{isFr ? "Confidentialité" : "Privacy"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};