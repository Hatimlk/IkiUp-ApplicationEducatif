import React from 'react';
import { Reveal } from './Reveal';
import { GraduationCap, Users, School, ArrowRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface AudienceProps {
  lang: Language;
}

export const Audience: React.FC<AudienceProps> = ({ lang }) => {
  const t = translations[lang].audience;

  const targets = [
    {
      role: lang === 'fr' ? 'Éducation' : 'Education',
      icon: <GraduationCap size={28} />,
      title: t.students.title,
      description: t.students.desc,
      color: "bg-primary text-white shadow-lg shadow-primary/20",
      accent: "bg-primary",
      bgAccent: "bg-primary/5",
      titleColor: "text-primary"
    },
    {
      role: lang === 'fr' ? 'Famille' : 'Family',
      icon: <Users size={28} />,
      title: t.parents.title,
      description: t.parents.desc,
      color: "bg-secondary text-slate-900 shadow-lg shadow-secondary/20",
      accent: "bg-secondary",
      bgAccent: "bg-secondary/5",
      titleColor: "text-slate-900 dark:text-secondary"
    },
    {
      role: lang === 'fr' ? 'Établissement' : 'Institution',
      icon: <School size={28} />,
      title: t.schools.title,
      description: t.schools.desc,
      color: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-black/10",
      accent: "bg-primary",
      bgAccent: "bg-slate-100 dark:bg-white/5",
      titleColor: "text-slate-900 dark:text-white"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              Cibles IkiUp
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
              {t.title} <br /> <span className="text-primary italic">{t.titleAccent}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed text-balance">
              {t.description}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, i) => (
            <Reveal key={i} delay={i * 100} direction="up">
              <div className="group relative h-full bg-white dark:bg-slate-900/60 rounded-[2.5rem] p-8 lg:p-10 border border-slate-200/60 dark:border-white/5 flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${target.bgAccent}`}></div>

                <div className="relative mb-10 z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-8">
                    {target.role}
                  </div>
                  <div className={`w-20 h-20 rounded-3xl ${target.color} flex items-center justify-center transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                    {target.icon}
                  </div>
                </div>

                <div className="relative space-y-4 flex-1 z-10">
                  <h3 className={`text-2xl md:text-3xl font-serif font-bold tracking-tight leading-tight ${target.titleColor}`}>
                    {target.title}
                  </h3>

                  <div className={`w-8 h-1 bg-current opacity-10 rounded-full transition-all duration-500 group-hover:w-16 group-hover:opacity-100`}></div>

                  <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {target.description}
                  </p>
                </div>

                <div className="mt-8 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-primary transition-colors">
                    En savoir plus <ArrowRight size={16} />
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};