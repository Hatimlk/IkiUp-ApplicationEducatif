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
  Bell,
  MapPin,
  Clock,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import { translations, Language } from '../translations';

interface FeaturesProps {
  lang?: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].features;

  const agendaIcons = [
    <Clock size={18} />,
    <GraduationCap size={18} />,
    <CheckCircle2 size={18} />,
    <BookOpen size={18} />,
    <Users size={18} />
  ];

  const feedIcons = [
    <School size={16} />,
    <GraduationCap size={16} />,
    <MessageSquare size={16} />,
    <Search size={16} />
  ];

  function School({ size }: { size: number }) {
    return <Search size={size} />; // Fallback since original lucide import might not have it or use simple Search
  }

  return (
    <section id="features" className="py-32 md:py-48 relative overflow-hidden bg-background transition-colors duration-500">
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
              Un écosystème <br />
              <span className="text-primary italic">complet.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              {t.intro}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* 1. ORIENTATION CARD */}
          <Reveal delay={0} direction="left">
            <div className="group relative bg-white dark:bg-slate-900/40 rounded-[3.5rem] p-10 md:p-14 border border-gray-ui dark:border-white/5 transition-all duration-700 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-start overflow-hidden h-full">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>
              
              <div className="relative z-10 flex w-full justify-between items-start mb-12">
                <div className="w-20 h-20 rounded-[2.2rem] bg-primary/10 text-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Compass size={32} />
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-ui dark:border-white/10 flex items-center justify-center text-slate-300 dark:text-slate-600 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111] dark:text-white mb-6 leading-tight">
                  {t.orientation.title}
                </h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {t.orientation.text}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 2. AGENDA CARD */}
          <Reveal delay={100} direction="right">
            <div className="group relative bg-white dark:bg-slate-900/40 rounded-[3.5rem] p-10 md:p-14 border border-gray-ui dark:border-white/5 transition-all duration-700 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-start overflow-hidden h-full">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-secondary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>
              
              <div className="relative z-10 flex w-full justify-between items-start mb-12">
                <div className="w-20 h-20 rounded-[2.2rem] bg-secondary/15 text-[#111111] dark:text-secondary flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Calendar size={32} />
                </div>
              </div>

              <div className="relative z-10 w-full">
                <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111] dark:text-white mb-10 leading-tight">
                  {t.tracking.title}
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {t.tracking.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-ui/30 dark:bg-slate-800/50 border border-gray-ui/50 dark:border-white/5 transition-all group-hover:border-secondary/30">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-primary dark:text-secondary shadow-sm">
                        {agendaIcons[i]}
                      </div>
                      <span className="text-sm font-bold text-[#111111] dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3. NEWS FEED CARD */}
          <Reveal delay={200} direction="left">
            <div className="group relative bg-white dark:bg-slate-900/40 rounded-[3.5rem] p-10 md:p-14 border border-gray-ui dark:border-white/5 transition-all duration-700 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-start overflow-hidden h-full">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-blue-sec/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>
              
              <div className="relative z-10 flex w-full justify-between items-start mb-12">
                <div className="w-20 h-20 rounded-[2.2rem] bg-blue-sec/15 text-blue-sec flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Newspaper size={32} />
                </div>
              </div>

              <div className="relative z-10 w-full">
                <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111] dark:text-white mb-4 leading-tight">
                  {t.feed.title}
                </h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-10">
                  {t.feed.intro}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {t.feed.items.map((item, i) => (
                    <div key={i} className="p-5 rounded-3xl bg-blue-sec/5 border border-blue-sec/10 flex flex-col gap-3 transition-all hover:bg-blue-sec/10">
                      <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-blue-sec">
                        {feedIcons[i]}
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#111111] dark:text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* 4. SCHOOL SEARCH CARD */}
          <Reveal delay={300} direction="right">
            <div className="group relative bg-white dark:bg-slate-900/40 rounded-[3.5rem] p-10 md:p-14 border border-gray-ui dark:border-white/5 transition-all duration-700 hover:shadow-[0_50px_100px_-30px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col items-start overflow-hidden h-full">
              <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"></div>
              
              <div className="relative z-10 flex w-full justify-between items-start mb-12">
                <div className="w-20 h-20 rounded-[2.2rem] bg-emerald/10 text-emerald flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <Search size={32} />
                </div>
                <div className="flex gap-2">
                   <div className="w-10 h-10 rounded-full bg-emerald/5 flex items-center justify-center text-emerald animate-pulse">
                      <MapPin size={18} />
                   </div>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-black text-[#111111] dark:text-white mb-6 leading-tight">
                  {t.schools.title}
                </h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {t.schools.text}
                </p>
              </div>

              {/* Decorative element */}
              <div className="mt-10 w-full relative h-16 rounded-2xl bg-gray-ui/20 dark:bg-slate-800/30 overflow-hidden flex items-center px-6">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-emerald text-white flex items-center justify-center">
                     <Search size={14} />
                   </div>
                   <div className="text-sm font-bold text-slate-400">Casablanca, Écoles d'ingénieurs...</div>
                 </div>
                 <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent"></div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};