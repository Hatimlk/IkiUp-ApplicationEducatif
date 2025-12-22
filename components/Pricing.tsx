import React from 'react';
import { Check, Sparkles, Send } from 'lucide-react';
import { Reveal } from './Reveal';
import { translations, Language } from '../translations';

interface PricingProps {
  lang?: Language;
}

const pricingConfig = [
  {
    monthlyPrice: 149,
    yearlyPrice: 1490,
    color: "primary",
    popular: false
  },
  {
    monthlyPrice: 199,
    yearlyPrice: 1990,
    color: "secondary",
    popular: true
  }
];

export const Pricing: React.FC<PricingProps> = ({ lang = 'fr' }) => {

  const t = translations[lang].pricing;

  const plans = t.plans.map((plan, index) => ({
    ...plan,
    ...pricingConfig[index]
  }));

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
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-text dark:text-white mb-6">
              Investir dans <span className="text-primary italic">leur futur.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal max-w-2xl mx-auto mb-10 text-balance">
              {t.intro}
            </p>


          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <Reveal key={index} delay={index * 100} direction="up">
              <div className={`relative h-full p-8 md:p-10 rounded-[2.5rem] bg-surface dark:bg-surface border-2 transition-all duration-300 flex flex-col ${plan.popular
                ? 'border-primary shadow-xl shadow-primary/5'
                : 'border-slate-100 dark:border-slate-800 shadow-lg'
                }`}>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1.5">
                    <Sparkles size={12} />
                    {t.mostPopular}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold text-text dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
                  <div className="inline-block px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
                    {plan.accounts}
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
                  className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all active:scale-[0.98] ${plan.popular
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90'
                    : 'bg-text dark:bg-slate-100 text-white dark:text-text hover:opacity-90'
                    }`}
                >
                  {t.choosePlan}
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="max-w-3xl mx-auto text-center bg-gray-ui dark:bg-surface/50 rounded-[2rem] p-8 md:p-12 border border-slate-100 dark:border-slate-700/50">
            <h3 className="text-2xl font-serif font-bold text-text dark:text-white mb-4">
              {t.contactTitle}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
              {t.contactText}
            </p>
            <a
              href="mailto:contact@ikiup.com"
              className="inline-flex items-center gap-2 bg-text dark:bg-white text-white dark:text-text px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Contactez-nous
              <Send size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
