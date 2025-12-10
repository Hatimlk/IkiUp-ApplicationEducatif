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
      icon: <GraduationCap size={32} />,
      title: t.students.title,
      description: t.students.desc,
      color: "bg-primary text-white",
      items: t.students.items
    },
    {
      icon: <Users size={32} />,
      title: t.parents.title,
      description: t.parents.desc,
      color: "bg-rose text-white",
      items: t.parents.items
    },
    {
      icon: <School size={32} />,
      title: t.schools.title,
      description: t.schools.desc,
      color: "bg-emerald text-white",
      items: t.schools.items
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-white mb-6">
                    {t.title} <span className="text-primary italic">{t.titleAccent}</span>
                </h2>
                <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
                    {t.description}
                </p>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((target, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="p-8 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full flex flex-col group hover:shadow-2xl transition-all duration-500">
                <div className={`w-16 h-16 rounded-[1.5rem] ${target.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                    {target.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-text dark:text-white mb-4">{target.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 flex-1">{target.description}</p>
                
                <ul className="space-y-3">
                    {target.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {item}
                        </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};