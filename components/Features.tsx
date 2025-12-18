import React from 'react';
import { Reveal } from './Reveal';
import { 
  Compass,
  Calendar,
  Newspaper,
  Search,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { translations, Language } from '../translations';

interface FeaturesProps {
  lang?: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].features;

  const featureCards = [
    {
      title: t.orientation.title,
      description: t.orientation.desc,
      icon: <Compass size={32} />,
      color: "bg-primary/10",
      iconColor: "text-primary",
      delay: 0
    },
    {
      title: t.tracking.title,
      description: t.tracking.desc,
      icon: <Calendar size={32} />,
      color: "bg-secondary/15",
      iconColor: "text-[#111111] dark:text-secondary",
      delay: 100
    },
    {
      title: t.feed.title,
      description: t.feed.desc,
      icon: <Newspaper size={32} />,
      color: "bg-blue-sec/15",
      iconColor: "text-blue-sec",
      delay: 200
    },
    {
      title: t.schools.title,
      description: t.schools.desc,
      icon: <Search size={32} />,
      color: "bg-emerald/10",
      iconColor: "text-emerald",
      delay: 300
    }
  ];

  return (
    <section id="features" className="py-32 md:py-48 relative overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] opacity-40"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              <Sparkles size={14} />
              {t.title}
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#111111] dark:text-white mb-8 tracking-tight leading-tight">
              L'accompagnement <br />
              <span className="text-primary italic">réinventé.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCards.map((card, idx) => (
            <Reveal key={idx} delay={card.delay} direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className="group relative bg-white dark:bg-slate-900/40 rounded-[3.5rem] p-10 md:p-14 border border-gray-ui dark:border-white/5 transition-all duration-700 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-start text-left overflow-hidden">
                {/* Hover Accent */}
                <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`}></div>
                
                <div className="relative z-10 flex w-full justify-between items-start mb-12">
                  <div className={`w-20 h-20 rounded-[2.2rem] ${card.color} ${card.iconColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    {card.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-gray-ui dark:border-white/10 flex items-center justify-center text-slate-300 dark:text-slate-600 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                    <ArrowUpRight size={22} />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111] dark:text-white mb-4">
                    {card.title}
                  </h3>
                  <div className="w-12 h-1 bg-primary/20 rounded-full mb-6 group-hover:w-20 transition-all duration-500"></div>
                  <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Decorative background element for the card */}
                <div className="absolute bottom-[-10%] right-[-5%] text-slate-100 dark:text-white/5 select-none font-serif font-black text-9xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                  0{idx + 1}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};