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
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-sec/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#111111] dark:text-white mb-8">
              Investir dans <span className="text-primary italic">leur futur.</span>
            </h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto mb-12">
              Une tarification claire et sans engagement pour s'adapter à votre rythme familial.
            </p>

            <div className="flex items-center justify-center gap-6 mb-12">
              <span className={`text-sm font-black uppercase tracking-widest transition-colors ${!isYearly ? 'text-[#111111] dark:text-white' : 'text-slate-400'}`}>Mensuel</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-20 h-10 rounded-full bg-gray-ui dark:bg-slate-800 p-1.5 transition-all focus:outline-none ring-1 ring-gray-ui dark:ring-slate-700 shadow-inner"
              >
                <div className={`w-7 h-7 rounded-full bg-primary shadow-xl transform transition-transform duration-300 ${isYearly ? 'translate-x-10' : 'translate-x-0'}`}></div>
              </button>
              <div className="flex items-center gap-3">
                <span className={`text-sm font-black uppercase tracking-widest transition-colors ${isYearly ? 'text-[#111111] dark:text-white' : 'text-slate-400'}`}>Annuel</span>
                <span className="bg-emerald/10 text-emerald text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  -2 mois
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <div className={`group relative h-full p-12 rounded-[3.5rem] bg-white dark:bg-slate-900 border-2 transition-all duration-500 hover:-translate-y-3 flex flex-col ${
                plan.popular 
                ? 'border-primary shadow-[0_40px_80px_-20px_rgba(90,115,232,0.15)]' 
                : 'border-gray-ui dark:border-slate-800 shadow-xl'
              }`}>
                
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.25em] shadow-lg flex items-center gap-2">
                    <Sparkles size={14} />
                    Choix Préféré
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-3xl font-serif font-bold text-[#111111] dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-base mb-6 font-light">{plan.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-ui/40 dark:bg-slate-800 rounded-full text-[11px] font-black text-slate-500 uppercase tracking-widest mb-10">
                    {plan.accounts}
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-serif font-black text-[#111111] dark:text-white">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-lg font-black text-slate-400 uppercase tracking-widest">MAD</span>
                    <span className="text-slate-400 text-sm ml-1 font-bold uppercase tracking-wider">/{isYearly ? 'An' : 'Mois'}</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-gray-ui text-slate-400'} flex items-center justify-center`}>
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 text-sm font-bold leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToDownload}
                  className={`w-full py-6 rounded-[1.8rem] font-black text-sm uppercase tracking-[0.2em] transition-all active:scale-[0.98] ${
                    plan.popular
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/40'
                    : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:opacity-90'
                  }`}
                >
                  S'abonner
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="text-center mt-16 text-slate-400 text-sm font-bold uppercase tracking-widest">
            Offre pour établissements ? 
            <a href="#" className="text-primary ml-2 hover:underline">Nous contacter</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};