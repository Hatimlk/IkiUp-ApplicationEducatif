import React, { useEffect } from 'react';
import { Language } from '../translations';

import { SEO } from './SEO';

interface LegalProps {
  lang: Language;
}

export const Legal: React.FC<LegalProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFr = lang === 'fr';

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-background min-h-screen">
      <SEO
        title={isFr ? "Mentions Légales" : "Legal Notices"}
        description={isFr ? "Mentions légales de l'application IkiUp." : "Legal notices for the IkiUp application."}
        url="https://ikiup.com/legal"
      />
      <h1 className="text-4xl font-serif font-bold text-text dark:text-white mb-12">
        {isFr ? "Mentions Légales" : "Legal Notices"}
      </h1>

      <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-text dark:text-white mb-4">1. Éditeur du site</h2>
          <p>
            {isFr
              ? "Le site IkiUp est édité par la société IkiUp Inc., société par actions simplifiée au capital de 10 000 euros."
              : "The IkiUp website is published by IkiUp Inc., a simplified joint-stock company with a capital of 10,000 euros."}
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li><strong>{isFr ? "Siège social :" : "Headquarters:"}</strong> 123 Avenue de l'Innovation, 75000 Paris, France</li>
            <li><strong>{isFr ? "Email :" : "Email:"}</strong> contact@ikiup.com</li>
            <li><strong>{isFr ? "Directeur de la publication :" : "Publication Director:"}</strong> Hatim</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text dark:text-white mb-4">2. Hébergement</h2>
          <p>
            {isFr
              ? "Le site est hébergé par Vercel Inc."
              : "The website is hosted by Vercel Inc."}
          </p>
          <p className="mt-2 text-sm">
            340 S Lemon Ave #4133 Walnut, CA 91789, USA
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text dark:text-white mb-4">3. Propriété intellectuelle</h2>
          <p>
            {isFr
              ? "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques."
              : "This entire site is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations."}
          </p>
        </section>
      </div>
    </div>
  );
};
