import React from 'react';
import { Apple, Play, Sparkles, Star, Zap, TrendingUp, CheckCircle2, BookOpen, Calendar, Bell, Users, Clock } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Educational Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Soft Ambient Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left relative z-20">
          {/* Badge */}
          <Reveal delay={0} scale>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 transition-transform hover:scale-105 cursor-default">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                {lang === 'fr' ? 'La référence scolaire' : 'The School Standard'}
              </span>
            </div>
          </Reveal>

          {/* Title - Clean Academic Serif */}
          <Reveal delay={100} direction="up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              {lang === 'fr' ? (
                <>
                  L'école, <br />
                  <span className="relative inline-block text-primary">
                    réinventée.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  School, <br />
                  <span className="text-primary">Reimagined.</span>
                </>
              )}
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={200} direction="up">
            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
              {t.description}
            </p>
          </Reveal>

          {/* Action Buttons - Solid & Clear */}
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all" href="https://apps.apple.com" target="_blank">
                <Apple size={22} className="mb-1" />
                <div className="flex flex-col items-start leading-none ml-2">
                  <span className="text-[9px] uppercase font-bold opacity-80">Download on</span>
                  <span className="text-base font-bold">App Store</span>
                </div>
              </Button>
              <Button variant="white" size="lg" className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 transition-all text-slate-700 dark:text-white" href="https://play.google.com" target="_blank">
                <Play size={20} className="fill-current mb-0.5" />
                <div className="flex flex-col items-start leading-none ml-2">
                  <span className="text-[9px] uppercase font-bold opacity-70">Get it on</span>
                  <span className="text-base font-bold">Google Play</span>
                </div>
              </Button>
            </div>
          </Reveal>

          {/* Trust Indicators */}
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800"></div>
              ))}
            </div>
            <p>Utilisé par +50 établissements</p>
          </div>
        </div>

        {/* Right: The Educational Composition */}
        <div className="hidden lg:block flex-1 relative w-full h-[600px]">
          <Reveal delay={400} direction="left" className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-full h-full">

            {/* Central Hub: Dashboard Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[380px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[2.5rem] p-6 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border border-white/40 dark:border-slate-800 ring-1 ring-slate-200/50 dark:ring-slate-800 z-20 animate-float-slow">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl shadow-sm">👋</div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wide">Bonjour,</div>
                    <div className="text-lg font-bold text-slate-800 dark:text-white">Thomas</div>
                  </div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl relative border border-slate-100 dark:border-slate-700">
                  <Bell size={20} className="text-slate-400" />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-800"></div>
                </div>
              </div>

              {/* Activity Graph Placeholder */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 mb-6 border border-slate-100 dark:border-slate-700">
                <div className="flex justify-between items-end h-24 gap-2 px-1">
                  {[40, 60, 45, 75, 50, 85, 65].map((h, i) => (
                    <div key={i} className="w-full bg-indigo-100 dark:bg-indigo-900/30 rounded-t-md relative group overflow-hidden">
                      <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md transition-all duration-1000 group-hover:bg-indigo-600"></div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20 transition-transform hover:scale-105 duration-300">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-2xl mb-1">16.5</div>
                  <div className="text-emerald-600/60 dark:text-emerald-400/60 text-[10px] font-bold uppercase tracking-wide">Moyenne</div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 transition-transform hover:scale-105 duration-300">
                  <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl mb-1">-2h</div>
                  <div className="text-blue-600/60 dark:text-blue-400/60 text-[10px] font-bold uppercase tracking-wide">Absences</div>
                </div>
              </div>
            </div>

            {/* Satellite 1: Top Right - Grade Notification */}
            <div className="absolute top-[12%] -right-[2%] p-3 pl-4 pr-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float z-30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800 dark:text-white">Note reçue</div>
                <div className="text-xs text-slate-500 font-medium">Mathématiques: <span className="text-emerald-600 font-bold">18/20</span></div>
              </div>
            </div>

            {/* Satellite 2: Bottom Left - Next Class */}
            <div className="absolute bottom-[20%] left-[0%] p-3 pl-4 pr-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float-delayed z-30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                <Clock size={24} />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-orange-500 tracking-wide">Dans 15 min</div>
                <div className="font-bold text-slate-800 dark:text-white">Histoire-Geo</div>
              </div>
            </div>

            {/* Satellite 3: Mid Right - Parent Message */}
            <div className="absolute top-[65%] -right-[8%] p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 animate-float z-10 scale-90 rotate-3 transition-transform hover:rotate-0 hover:scale-100 duration-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Users size={18} />
                </div>
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 pr-2">
                  Réunion parents-profs...
                </div>
              </div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>

          </Reveal>
        </div>

      </div >
    </section >
  );
};
