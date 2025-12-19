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
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <Sparkles size={14} />
              {t.title}
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Un écosystème <br />
              <span className="text-primary italic">complet.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* 1. ORIENTATION CARD */}
          <Reveal delay={0} direction="up">
            <div className="group h-full bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:rotate-6">
                  <Compass size={32} />
                </div>
                <div className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 group-hover:text-primary transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                {t.orientation.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                {t.orientation.text}
              </p>
            </div>
          </Reveal>

          {/* 2. AGENDA CARD */}
          <Reveal delay={100} direction="up">
            <div className="group h-full bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-secondary/15 text-slate-900 dark:text-secondary flex items-center justify-center mb-10 transition-transform group-hover:rotate-6">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">
                {t.tracking.title}
              </h3>
              <div className="space-y-3">
                {t.tracking.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-primary shadow-sm">
                      {agendaIcons[i]}
                    </div>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 3. NEWS FEED CARD */}
          <Reveal delay={200} direction="up">
            <div className="group h-full bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-2xl bg-blue-sec/15 text-blue-sec flex items-center justify-center mb-10 transition-transform group-hover:rotate-6">
                <Newspaper size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3">
                {t.feed.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 mb-8">
                {t.feed.intro}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {t.feed.items.map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-blue-sec/5 border border-blue-sec/10 flex flex-col gap-2 transition-colors hover:bg-blue-sec/10">
                    <div className="text-blue-sec">{feedIcons[i]}</div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 4. SCHOOL SEARCH CARD */}
          <Reveal delay={300} direction="up">
            <div className="group h-full bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/5 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center transition-transform group-hover:rotate-6">
                  <Search size={32} />
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald/5 flex items-center justify-center text-emerald animate-pulse">
                  <MapPin size={18} />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                {t.schools.title}
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-8">
                {t.schools.text}
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald text-white flex items-center justify-center shadow-md shadow-emerald/20">
                  <Search size={14} />
                </div>
                <div className="text-sm font-bold text-slate-400 truncate">Casablanca, Écoles d'ingénieurs...</div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};