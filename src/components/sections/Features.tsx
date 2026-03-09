import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Sparkles, Compass, Calendar, Newspaper, Search, Lightbulb, TrendingUp, Target, Presentation, MessageCircle, Link as LinkIcon, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { translations, Language } from '../../lib/translations';

interface FeaturesProps {
  lang?: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].features;

  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[25%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl opacity-50 dark:opacity-20" />
        <div className="absolute -bottom-[25%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-t from-blue-400/10 to-transparent blur-3xl opacity-50 dark:opacity-20" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold uppercase tracking-widest mb-5 transition-all hover:border-primary/50">
              <Sparkles size={12} className="text-primary animate-pulse" />
              {t.title}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
              Un écosystème <br className="block md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                complet.
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.intro}
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Layout - Asymmetric 2-row layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">

          {/* Row 1: Card 1 (wide) + Card 2 (narrow) */}

          {/* Card 1: Orientation - Wide */}
          <Reveal delay={100} direction="up" className="md:col-span-2 group">
            <div className="bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/50 rounded-2xl p-5 md:p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 hover:border-primary/20 dark:hover:border-primary/20">

              <div className="mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-primary flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 group-hover:rotate-6 transition-transform">
                  <Compass size={20} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 relative z-10">
                {t.orientation.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-5 relative z-10">
                {t.orientation.subtitle}
              </p>

              <div className="mt-auto flex flex-col gap-2 relative z-10">
                {[
                  { icon: Lightbulb, bg: 'bg-emerald-50 dark:bg-emerald-900/20', color: 'text-emerald-600 dark:text-emerald-400', title: 'DÉCOUVRIR', subtitle: 'TESTS : INTÉRETS & FORCES' },
                  { icon: Target, bg: 'bg-blue-50 dark:bg-blue-900/20', color: 'text-blue-600 dark:text-blue-400', title: 'ORIENTER', subtitle: 'GUIDANCE PERSONNALISÉE' },
                  { icon: TrendingUp, bg: 'bg-purple-50 dark:bg-purple-900/20', color: 'text-purple-600 dark:text-purple-400', title: 'AVANCER', subtitle: 'OBJECTIFS CLAIRS' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 group/step hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.bg} ${item.color} group-hover/step:scale-110 transition-transform`}>
                      <item.icon size={15} strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">{item.title}</div>
                      <div className="text-[10px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2: Tracking - Narrow */}
          <Reveal delay={200} direction="up" className="md:col-span-1 group">
            <div className="bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/50 rounded-2xl p-5 md:p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 hover:border-blue-500/20 dark:hover:border-blue-500/20">

              <div className="mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-blue-500 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 md:group-hover:-rotate-6 transition-transform">
                  <Calendar size={20} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 relative z-10">
                {t.tracking.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4 relative z-10">
                {t.tracking.subtitle}
              </p>

              <div className="mt-auto space-y-2 relative z-10">
                {t.tracking.items.map((item: string, i: number) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                      <CheckCircle size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Row 2: Card 3 (narrow) + Card 4 (wide) */}

          {/* Card 3: Feed - Narrow */}
          <Reveal delay={300} direction="up" className="md:col-span-1 group">
            <div className="bg-slate-50/80 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/50 rounded-2xl p-5 md:p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 hover:border-indigo-500/20 dark:hover:border-indigo-500/20">

              <div className="mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 text-indigo-500 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                  <Newspaper size={20} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 relative z-10">{t.feed.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 flex-1 relative z-10 leading-relaxed">{t.feed.intro}</p>

              <div className="flex flex-wrap gap-1.5 relative z-10 mt-auto">
                {t.feed.items.map((item: string, i: number) => {
                  const icons = [Presentation, Users, MessageCircle, LinkIcon];
                  const Icon = icons[i % icons.length];
                  return (
                    <div key={i} className="flex items-center gap-1.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg text-[11px] font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                      <Icon size={12} className="text-indigo-500" />
                      {item}
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Card 4: Schools - Wide */}
          <Reveal delay={400} direction="up" className="md:col-span-2 group">
            <div className="bg-primary hover:bg-[#3f41a8] text-white rounded-2xl p-5 md:p-6 flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 cursor-default">

              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

              <div className="mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 group-hover:-rotate-12 transition-transform">
                  <Search size={20} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-lg font-bold mb-1.5 relative z-10 text-white">{t.schools.title}</h3>
              <p className="text-xs text-white/70 mb-4 flex-1 relative z-10 font-medium leading-relaxed">{t.schools.subtitle}</p>

              <div className="relative z-10 mt-auto flex flex-col gap-2">
                <div className="w-full bg-white text-slate-800 hover:text-primary transition-colors rounded-xl py-2.5 px-4 flex items-center justify-between shadow-sm cursor-pointer group/search">
                  <div className="flex-1 font-semibold text-xs">
                    {t.schools.searchPlaceholder}
                  </div>
                  <ArrowRight size={14} className="group-hover/search:translate-x-1 transition-transform" />
                </div>
                <div className="flex gap-2 justify-center">
                  {t.schools.items.map((item: string, i: number) => (
                    <div key={i} className="flex-1 text-center bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-colors text-white rounded-lg py-1.5 px-2 cursor-pointer font-semibold text-[11px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};