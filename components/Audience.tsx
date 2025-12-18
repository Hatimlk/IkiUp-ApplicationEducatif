
import React from 'react';
import { Reveal } from './Reveal';
import { GraduationCap, Users, School } from 'lucide-react';
import { Language, translations } from '../translations';

interface AudienceProps {
  lang: Language;
}

export const Audience: React.FC<AudienceProps> = ({ lang }) => {
  const t = translations[lang].audience;

  const targets = [
    {
      role: lang === 'fr' ? 'Éducation' : 'Education',
      // Fix: Changed '開uationCap' to 'GraduationCap'
      icon: <GraduationCap size={28} />,
      title: t.students.title,
      description: t.students.desc,
      color: "bg-primary text-white shadow-xl shadow-primary/30",
      accent: "bg-primary",
      bgAccent: "bg-primary/5",
      titleColor: "text-primary"
    },
    {
      role: lang === 'fr' ? 'Famille' : 'Family',
      icon: <Users size={28} />,
      title: t.parents.title,
      description: t.parents.desc,
      color: "bg-secondary text-[#111111] shadow-xl shadow-secondary/30",
      accent: "bg-secondary",
      bgAccent: "bg-secondary/5",
      titleColor: "text-[#111111] dark:text-secondary"
    },
    {
      role: lang === 'fr' ? 'Établissement' : 'Institution',
      icon: <School size={28} />,
      title: t.schools.title,
      description: t.schools.desc,
      color: "bg-[#111111] dark:bg-white text-white dark:text-[#111111] shadow-xl shadow-black/20",
      accent: "bg-primary",
      bgAccent: "bg-slate-50 dark:bg-white/5",
      titleColor: "text-slate-900 dark:text-white"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0B1121] relative transition-colors duration-500 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
            <div className="text-center mb-24">
                <div className="inline-flex items-center px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-sm">
                  Cibles IkiUp
                </div>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-[#111111] dark:text-white mb-8 tracking-tight leading-[1.1]">
                    {t.title} <span className="text-primary italic">{t.titleAccent}</span>
                </h2>
                <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed opacity-80">
                    {t.description}
                </p>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {targets.map((target, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative h-full bg-white dark:bg-slate-900/40 rounded-[4rem] p-10 md:p-14 border border-gray-ui/60 dark:border-white/5 flex flex-col transition-all duration-700 hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden">
                
                {/* Visual Accent */}
                <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full ${target.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`}></div>
                
                <div className="relative mb-12">
                   <div className="inline-block px-4 py-1.5 rounded-full bg-gray-ui/50 dark:bg-slate-800 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">
                      {target.role}
                   </div>
                   <div className={`w-20 h-20 rounded-[2.2rem] ${target.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {/* Fix: Use target.icon instead of hardcoded GraduationCap */}
                      {target.icon}
                   </div>
                </div>
                
                <div className="relative space-y-5 flex-1">
                  <h3 className={`text-3xl md:text-4xl font-serif font-black tracking-tight leading-none ${target.titleColor}`}>
                    {target.title}
                  </h3>
                  
                  {/* Divider line using Primary/Secondary accent */}
                  <div className={`w-12 h-1.5 rounded-full ${target.accent} opacity-40 transition-all duration-500 group-hover:w-20 group-hover:opacity-100`}></div>
                  
                  <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed pt-2">
                    {target.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
