import React from 'react';
import { Reveal } from './Reveal';
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
import { translations, Language } from '../translations';

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
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-slate-950">
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Un écosystème <br />
              <span className="text-primary decoration-4 underline decoration-blue-200/50 dark:decoration-blue-900/50 underline-offset-4">complet.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. ORIENTATION CARD - Fresh Green/Teal Theme */}
          <Reveal delay={0} direction="up">
            <div className="group h-full bg-emerald-50/50 dark:bg-emerald-950/20 rounded-[2rem] p-8 md:p-12 border border-emerald-100 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 dark:bg-emerald-900/20 rounded-bl-[4rem] -mr-8 -mt-8"></div>

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-emerald-900 text-emerald-600 flex items-center justify-center shadow-md shadow-emerald-100 dark:shadow-none">
                  <Compass size={28} />
                </div>
                <div className="p-2 rounded-full bg-white dark:bg-emerald-900 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300 shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">
                {t.orientation.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
                {t.orientation.text}
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-[3px] border-emerald-50 dark:border-emerald-950 bg-slate-200 dark:bg-slate-700"></div>
                ))}
                <div className="h-10 px-3 rounded-full bg-white dark:bg-emerald-900 border-[3px] border-emerald-50 dark:border-emerald-950 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  +120
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2. AGENDA CARD - Soft Blue/Indigo Theme (Study Planner Vibe) */}
          <Reveal delay={100} direction="up">
            <div className="group h-full bg-indigo-50/50 dark:bg-indigo-950/20 rounded-[2rem] p-8 md:p-12 border border-indigo-100 dark:border-indigo-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 dark:bg-indigo-900/20 rounded-bl-[4rem] -mr-8 -mt-8"></div>

              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-indigo-900 text-indigo-600 flex items-center justify-center mb-10 shadow-md shadow-indigo-100 dark:shadow-none relative z-10">
                <Calendar size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-8 relative z-10">
                {t.tracking.title}
              </h3>
              <div className="space-y-3 relative z-10">
                {t.tracking.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800/50 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-800 flex items-center justify-center text-indigo-600">
                      {agendaIcons[i]}
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-indigo-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3. NEWS FEED CARD - Cool Grey/Newsprint Theme */}
          <Reveal delay={200} direction="up">
            <div className="group h-full bg-slate-100/50 dark:bg-slate-800/30 rounded-[2rem] p-8 md:p-12 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 dark:bg-slate-700/50 rounded-bl-[4rem] -mr-8 -mt-8"></div>

              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center mb-10 shadow-md shadow-slate-200 dark:shadow-none relative z-10">
                <Newspaper size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                {t.feed.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8 relative z-10 font-medium">
                {t.feed.intro}
              </p>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {t.feed.items.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex flex-col gap-3">
                    <div className="text-blue-500">{feedIcons[i]}</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 4. SCHOOL SEARCH CARD - Warm Amber/Orange Theme (Discovery) */}
          <Reveal delay={300} direction="up">
            <div className="group h-full bg-orange-50/50 dark:bg-orange-950/20 rounded-[2rem] p-8 md:p-12 border border-orange-100 dark:border-orange-900/50 hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 dark:bg-orange-900/20 rounded-bl-[4rem] -mr-8 -mt-8"></div>

              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-orange-900 text-orange-500 flex items-center justify-center shadow-md shadow-orange-100 dark:shadow-none">
                  <Search size={28} />
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-500 animate-pulse">
                  <MapPin size={18} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 relative z-10">
                {t.schools.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 relative z-10">
                {t.schools.text}
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-orange-900/40 border border-orange-100 dark:border-orange-800 flex items-center gap-3 relative z-10 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                  <Search size={14} />
                </div>
                <div className="text-sm font-bold text-slate-400 truncate">{t.schools.searchPlaceholder}</div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};