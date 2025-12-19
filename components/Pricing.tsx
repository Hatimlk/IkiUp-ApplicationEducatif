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
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "IkiUp Famille",
    description: "L'essentiel pour un foyer serein.",
    accounts: "1 Parent + 2 Enfants",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    color: "primary",
    features: [
      "Tests de personnalité illimités",
      "Tableau de bord partagé",
      "Suivi des notes & devoirs",
      "Orientation assistée par IA",
      "Support standard"
    ]
  },
  {
    name: "IkiUp Famille XL",
    description: "Le pack complet pour toute la tribu.",
    accounts: "2 Parents + 4 Enfants",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    color: "secondary",
    popular: true,
    features: [
      "Toutes les fonctions Famille",
      "Profils IA personnalisés",
      "Analytics avancés par élève",
      "Agenda de liaison prioritaire",
      "Conseils d'experts mensuels",
      "Support VIP 24/7"
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
    <section id="pricing" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 dark:text-white mb-6">
              Investir dans <span className="text-primary italic">leur futur.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal max-w-2xl mx-auto mb-10">
              Une tarification transparente pour s'adapter à votre rythme familial.
            </p>

            <div className="flex items-center justify-center gap-4 mb-10">
              <span className={`text-xs font-bold uppercase tracking-widest ${!isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Mensuel</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-all focus:outline-none ring-offset-2 focus:ring-2 focus:ring-primary shadow-inner"
              >
                <div className={`w-5 h-5 rounded-full bg-primary shadow-md transform transition-transform duration-200 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold uppercase tracking-widest ${isYearly ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Annuel</span>
                <span className="bg-emerald/10 text-emerald text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  -2 mois
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100} direction="up">
              <div className={`relative h-full p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border-2 transition-all duration-300 flex flex-col ${
                plan.popular 
                ? 'border-primary shadow-xl shadow-primary/5' 
                : 'border-slate-100 dark:border-slate-800 shadow-lg'
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles size={12} />
                    Le plus populaire
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                  <div className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
                    {plan.accounts}
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-serif font-black text-slate-900 dark:text-white">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-base font-bold text-slate-400 uppercase tracking-wider">MAD</span>
                    <span className="text-slate-400 text-xs ml-1 font-bold">/{isYearly ? 'an' : 'mois'}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-400'} flex items-center justify-center`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToDownload}
                  className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all active:scale-[0.98] ${
                    plan.popular
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90'
                    : 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:opacity-90'
                  }`}
                >
                  Choisir ce plan
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest">
          Offre pour établissements ? 
          <a href="#" className="text-primary ml-1.5 hover:underline">Contactez-nous</a>
        </p>
      </div>
    </section>
  );
};