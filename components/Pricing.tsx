import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

interface PricingPlan {
  name: string;
  description: string;
  accounts: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  color: string;
  accentColor: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "IkiUp Famille",
    description: "Pack famille standard",
    accounts: "1 parent + jusqu'à 2 enfants",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    color: "indigo",
    accentColor: "text-indigo",
    features: [
      "Fonctionnalités Premium+ incluses",
      "Tableau de bord familial complet",
      "Planning partagé intelligent",
      "Accès IA Kaïa (profil familial)",
      "Support prioritaire"
    ]
  },
  {
    name: "IkiUp Famille XL",
    description: "Pack famille élargie",
    accounts: "2 parents + jusqu'à 4 enfants",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    color: "teal",
    accentColor: "text-teal",
    popular: true,
    features: [
      "Toutes les fonctions Famille XL",
      "IA nominative pour chaque enfant",
      "Analytics familiaux détaillés",
      "Dashboard multi-enfants avancé",
      "Formation personnalisée offerte",
      "Support ultra-prioritaire 24/7"
    ]
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const scrollToDownload = () => {
    const element = document.getElementById('download');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-teal/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-text dark:text-white mb-6">
              Investissez dans leur <span className="text-primary italic">réussite.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto mb-12">
              Des offres transparentes conçues pour s'adapter à chaque foyer.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-text dark:text-white' : 'text-slate-400'}`}>Mensuel</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 rounded-full bg-slate-100 dark:bg-slate-800 p-1 transition-colors focus:outline-none ring-1 ring-slate-200 dark:ring-slate-700"
                aria-label="Toggle pricing"
              >
                <div className={`w-6 h-6 rounded-full bg-primary shadow-lg transform transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-text dark:text-white' : 'text-slate-400'}`}>Annuel</span>
                <span className="bg-emerald/10 text-emerald text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider">
                  -2 mois offerts
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <div className={`group relative h-full p-8 rounded-[3rem] bg-white dark:bg-slate-900 border-2 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                plan.popular 
                ? 'border-primary shadow-2xl shadow-primary/10 dark:shadow-primary/5' 
                : 'border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20'
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                    <Sparkles size={12} />
                    Le plus populaire
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{plan.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-8">
                    {plan.accounts}
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-serif font-bold text-text dark:text-white transition-all">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-xl font-bold text-slate-400 uppercase">MAD</span>
                    <span className="text-slate-400 text-sm ml-1 font-medium">/{isYearly ? 'an' : 'mois'}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start group/item">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-${plan.color}/10 dark:bg-${plan.color}/20 flex items-center justify-center text-${plan.color} group-hover/item:scale-110 transition-transform`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToDownload}
                  className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-[0.98] ${
                    plan.popular
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:bg-primary/90'
                    : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'
                  }`}
                >
                  Commencer maintenant
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="text-center mt-12 text-slate-400 text-sm font-medium">
            Besoin d'un tarif sur-mesure pour votre établissement ? 
            <a href="#" className="text-primary ml-1 hover:underline">Contactez notre équipe école</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
};