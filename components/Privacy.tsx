import React, { useEffect } from 'react';
import { Language } from '../translations';

interface PrivacyProps {
  lang: Language;
}

export const Privacy: React.FC<PrivacyProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFr = lang === 'fr';

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-background min-h-screen">
      <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-12">
        {isFr ? "Politique de Confidentialité" : "Privacy Policy"}
      </h1>

      <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Protection des données</h2>
          <p>
            {isFr
              ? "Conformément au Règlement Général sur la Protection des Données (RGPD), IkiUp s'engage à assurer la protection, la confidentialité et la sécurité des données personnelles des utilisateurs."
              : "In accordance with the General Data Protection Regulation (GDPR), IkiUp is committed to ensuring the protection, confidentiality, and security of users' personal data."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Collecte des données</h2>
          <p className="mb-4">
            {isFr ? "Nous collectons les données suivantes :" : "We collect the following data:"}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{isFr ? "Données d'identité (Nom, Prénom)" : "Identity data (Name, Surname)"}</li>
            <li>{isFr ? "Données de contact (Email, Téléphone)" : "Contact data (Email, Phone)"}</li>
            <li>{isFr ? "Données scolaires (pour le fonctionnement de l'application)" : "School data (for application functionality)"}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Utilisation des données</h2>
          <p>
            {isFr
              ? "Vos données sont utilisées uniquement dans le cadre de l'utilisation de l'application IkiUp, pour vous fournir des services d'orientation et de suivi scolaire personnalisés. Elles ne sont jamais vendues à des tiers."
              : "Your data is used solely within the context of using the IkiUp application, to provide you with personalized orientation and school tracking services. They are never sold to third parties."}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Vos droits</h2>
          <p>
            {isFr
              ? "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à : contact@ikiup.com"
              : "You have the right to access, rectify, and delete your data. To exercise this right, contact us at: contact@ikiup.com"}
          </p>
        </section>
      </div>
    </div>
  );
};
