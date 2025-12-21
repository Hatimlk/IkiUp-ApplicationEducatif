import React from 'react';
import { Apple, Play, Sparkles, Star, Zap, TrendingUp, CheckCircle2, Target } from 'lucide-react';
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
      {/* Symmetric Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <Reveal delay={0} scale>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg mb-8 group hover:-translate-y-1 transition-transform cursor-default">
            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white shadow-md shadow-primary/20">
              <Sparkles size={12} className="group-hover:rotate-12 transition-transform" />
            </span>
            <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
              {t.badge}
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={100} direction="up">
          <h1 className="max-w-5xl mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-balance">
            {t.title} <br />
            <span className="text-primary italic relative inline-block group px-2">
              {t.titleAccent}
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
              <svg className="absolute -bottom-3 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={200} direction="up">
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-normal text-balance">
            {t.description}
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 gap-3 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30" href="https://apps.apple.com" target="_blank">
              <Apple size={22} className="mb-1" />
              <div className="flex flex-col items-start leading-tight text-left">
                <span className="text-[8px] uppercase font-black tracking-widest opacity-80">App Store</span>
                <span className="text-base font-bold">Télécharger</span>
              </div>
            </Button>
            <Button variant="white" size="lg" className="w-full sm:w-auto px-8 py-4 gap-3 border border-slate-200 dark:border-slate-800 shadow-lg" href="https://play.google.com" target="_blank">
              <Play size={20} className="fill-current mb-1" />
              <div className="flex flex-col items-start leading-tight text-left">
                <span className="text-[8px] uppercase font-black tracking-widest opacity-70">Google Play</span>
                <span className="text-base font-bold">Installer</span>
              </div>
            </Button>
          </div>
        </Reveal>

        {/* Centered Visual Element (Phone Mockup) */}
        <Reveal delay={400} direction="up" className="w-full max-w-sm lg:max-w-4xl mx-auto relative z-20">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/10 to-transparent blur-3xl -z-10"></div>

          <div className="relative transform hover:scale-[1.02] transition-transform duration-700 ease-out">
            {/* Mockup Container - Centered Phone */}
            <div className="relative w-[300px] sm:w-[340px] mx-auto bg-slate-950 rounded-[3.5rem] p-3 shadow-2xl border border-slate-800 overflow-hidden ring-1 ring-white/10 ring-offset-0">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-full z-40 flex items-center justify-center gap-1.5 pointer-events-none">
                <div className="w-16 h-4 bg-black rounded-full grid place-items-center">
                  <div className="w-10 h-1 rounded-full bg-slate-900/50"></div>
                </div>
              </div>

              <div className="relative aspect-[9/19.5] rounded-[2.8rem] overflow-hidden bg-white dark:bg-slate-900 flex flex-col">
                {/* App Internal UI Sim */}
                <div className="pt-16 px-6 pb-6 flex-1 bg-gradient-to-b from-primary/5 via-white to-white dark:via-slate-900 dark:to-slate-900">
                  <div className="flex justify-between items-center mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-700 dark:text-white">
                      <div className="w-6 h-0.5 bg-current rounded-full mb-1"></div>
                      <div className="w-4 h-0.5 bg-current rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20 font-bold text-sm">
                      S
                    </div>
                  </div>

                  <div className="mb-8 text-left">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Bon retour,</p>
                    <h3 className="text-3xl font-serif font-black text-slate-900 dark:text-white">Sarah</h3>
                  </div>

                  <div className="space-y-4">
                    {/* Card 1 */}
                    <div className="p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-black/20">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Moyenne Générale</span>
                        <TrendingUp size={16} className="text-emerald" />
                      </div>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">14.8</span>
                        <span className="text-xs font-bold text-emerald mb-1.5">+0.5</span>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-5 rounded-3xl bg-primary text-white shadow-xl shadow-primary/30 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                      <div className="relative z-10 flex gap-4 items-center">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                          <Zap size={24} className="fill-current" />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">Prochain Cours</div>
                          <div className="font-bold text-lg">Mathématiques</div>
                          <div className="text-sm opacity-90">14:00 - Salle B2</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Navbar Simulated */}
                <div className="h-20 px-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-slate-300">
                  <div className="text-primary"><div className="w-2 h-2 rounded-full bg-current mx-auto mb-1"></div></div>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-700"></div>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-700"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements (Decorations) */}
            <div className="hidden lg:block absolute top-1/3 -left-12 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float">
              <Star className="text-amber-400 fill-current" size={24} />
            </div>
            <div className="hidden lg:block absolute bottom-1/4 -right-12 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float-delayed">
              <CheckCircle2 className="text-emerald fill-emerald/20" size={24} />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};