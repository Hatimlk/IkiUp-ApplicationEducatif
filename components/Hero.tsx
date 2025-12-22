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
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-background">
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-text dark:text-white mb-8 leading-[1.1]">
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
              <Button variant="white" size="lg" className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 transition-all text-slate-700 dark:text-white dark:bg-slate-900" href="https://play.google.com" target="_blank">
                <Play size={20} className="fill-current mb-0.5" />
                <div className="flex flex-col items-start leading-none ml-2">
                  <span className="text-[9px] uppercase font-bold opacity-70">Get it on</span>
                  <span className="text-base font-bold">Google Play</span>
                </div>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Right: The Educational Composition */}
        <div className="hidden lg:flex flex-1 relative w-full h-[600px] items-center lg:justify-start justify-center pl-8">
          <Reveal delay={400} direction="left" className="relative w-full h-full flex items-center justify-center lg:justify-start">
            <div className="relative w-[380px] sm:w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/50 border-8 border-white dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-20">
              <img
                src="/hero-child.png"
                alt="Student using IkiUp"
                className="w-full h-full object-cover"
              />

              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles size={20} className="fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Succès garanti</div>
                  <div className="text-sm font-bold text-text dark:text-white">Apprendre devient un jeu</div>
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
