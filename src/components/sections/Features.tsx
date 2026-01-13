import React from 'react';
import { Reveal } from '../ui/Reveal';
import {
  Compass,
  Calendar,
  Newspaper,
  Search,
  ArrowUpRight,
  Sparkles,
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpen,
  MapPin,
  Clock
} from 'lucide-react';
import { translations, Language } from '../../lib/translations';

interface FeaturesProps {
  lang?: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].features;

  const agendaIcons = [
    <Clock size={16} />,
    <GraduationCap size={16} />,
    <CheckCircle2 size={16} />,
    <BookOpen size={16} />,
    <Users size={16} />
  ];

  const feedIcons = [
    <Search size={14} />,
    <GraduationCap size={14} />,
    <BookOpen size={14} />,
    <Search size={14} />
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-surface dark:bg-background">
      {/* Educational Dot Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100 dark:border-blue-800">
              <Sparkles size={14} />
              {t.title}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-text dark:text-white mb-6 leading-tight">
              Un écosystème <br />
              <span className="text-primary decoration-4 underline decoration-blue-200/50 dark:decoration-blue-900/50 underline-offset-4">complet.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. ORIENTATION CARD */}
          <Reveal delay={0} direction="up">
            <div className="group h-full bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-900 dark:to-slate-900/50 rounded-[2.5rem] p-8 md:p-10 border border-slate-200/60 dark:border-slate-800 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-primary flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
                {t.orientation.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
                {t.orientation.text}
              </p>
            </div>
          </Reveal>

          {/* 2. AGENDA CARD */}
          <Reveal delay={100} direction="up">
            <div className="group h-full bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-900 dark:to-slate-900/50 rounded-[2.5rem] p-8 md:p-10 border border-slate-200/60 dark:border-slate-800 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-none transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-primary flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Calendar size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-8 group-hover:text-primary transition-colors">
                {t.tracking.title}
              </h3>
              <div className="space-y-3 flex-grow">
                {t.tracking.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 hover:border-primary/20 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 group/item backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover/item:text-primary group-hover/item:bg-primary/5 transition-colors">
                      {agendaIcons[i]}
                    </div>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3. NEWS FEED CARD */}
          <Reveal delay={200} direction="up">
            <div className="group h-full bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-slate-800/40 dark:to-slate-900/40 rounded-[2.5rem] p-8 md:p-10 border border-blue-100 dark:border-slate-700 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 dark:bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-primary flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10">
                <Newspaper size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4 relative z-10 group-hover:text-primary transition-colors">
                {t.feed.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 relative z-10 font-medium leading-relaxed">
                {t.feed.intro}
              </p>
              <div className="grid grid-cols-2 gap-3 relative z-10 mt-auto">
                {t.feed.items.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-blue-100/50 dark:border-slate-700/50 backdrop-blur-sm flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
                    <div className="text-primary/80">{feedIcons[i]}</div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                      <div className="h-1.5 w-2/3 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mt-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 4. SCHOOL SEARCH CARD */}
          <Reveal delay={300} direction="up">
            <div className="group h-full bg-gradient-to-br from-primary/[0.03] to-primary/[0.08] dark:from-primary/10 dark:to-primary/5 rounded-[2.5rem] p-8 md:p-10 border border-primary/10 dark:border-primary/20 hover:border-primary/20 hover:shadow-[0_8px_30px_rgb(90,115,232,0.1)] transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-800 text-primary flex items-center justify-center shadow-sm border border-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <Search size={24} />
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                  <MapPin size={18} />
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4 relative z-10 group-hover:text-primary transition-colors">
                {t.schools.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                {t.schools.text}
              </p>
              <div className="mt-auto p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-primary/10 dark:border-primary/20 flex items-center gap-2 relative z-10 shadow-sm cursor-pointer hover:shadow-md hover:border-primary/30 transition-all group/search">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-sm group-hover/search:scale-105 transition-transform">
                  <Search size={18} />
                </div>
                <div className="px-2 text-xs font-bold text-slate-400 dark:text-slate-500 truncate">{t.schools.searchPlaceholder}</div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};