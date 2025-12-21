import React from 'react';
import { GraduationCap, Users, School, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { translations, Language } from '../translations';

interface AudienceProps {
  lang?: Language;
}

export const Audience: React.FC<AudienceProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].audience;

  const cards = [
    {
      key: 'students',
      title: t.students.title,
      description: t.students.desc,
      icon: <GraduationCap size={32} />,
      theme: { bg: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-100' }
    },
    {
      key: 'parents',
      title: t.parents.title,
      description: t.parents.desc,
      icon: <Users size={32} />,
      theme: { bg: 'bg-emerald-600', text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-100' }
    },
    {
      key: 'schools',
      title: t.schools.title,
      description: t.schools.desc,
      icon: <School size={32} />,
      theme: { bg: 'bg-indigo-600', text: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-100' }
    }
  ];

  return (
    <section id="audience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
              Pensé pour <br />
              <span className="text-primary decoration-4 underline decoration-primary/20 underline-offset-4">chacun de vous.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Reveal key={index} delay={index * 100} direction="up" className="h-full">
              <div className={`group h-full flex flex-col pt-0 p-8 rounded-[2rem] bg-white dark:bg-slate-900 border-2 ${card.theme.border} dark:border-slate-800 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}>

                {/* Colored Header Bar */}
                <div className={`h-3 w-full absolute top-0 left-0 ${card.theme.bg}`}></div>

                <div className={`w-20 h-20 -mt-10 mb-6 rounded-3xl ${card.theme.bg} text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                <h3 className={`text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4`}>{card.title}</h3>

                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>

                <div className={`flex items-center gap-2 font-bold text-sm ${card.theme.text} group-hover:gap-3 transition-all`}>
                  <span>En savoir plus</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};