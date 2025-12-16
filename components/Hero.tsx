import React from 'react';
import { Apple, Play, Sparkles, Star, ShieldCheck, Zap, TrendingUp, CheckCircle2, Target } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-36 pb-32 lg:pt-52 lg:pb-48 overflow-hidden">
      {/* Premium Background Layering */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[0%] left-[-10%] w-[700px] h-[700px] bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[140px] animate-float"></div>
        
        {/* Animated Noise Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none contrast-150" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Text Content Area */}
          <div className="flex-1 text-center lg:text-left">
            <Reveal delay={0} scale>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-sm mb-8 group transition-all hover:border-primary/30">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                  <Sparkles size={12} className="animate-spin-slow" />
                </span>
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300 tracking-wide uppercase">{t.badge}</span>
              </div>
            </Reveal>

            <Reveal delay={150} direction="up" className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.05]">
                {t.title} <br />
                <span className="text-primary italic relative inline-block">
                  {t.titleAccent}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300} direction="up" className="animate-fade-in-up">
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                {t.description}
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button size="lg" className="w-full sm:w-auto min-w-[180px] gap-3 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform" href="https://apps.apple.com" target="_blank">
                  <Apple size={22} />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">App Store</span>
                  </div>
                </Button>
                <Button size="lg" variant="white" className="w-full sm:w-auto min-w-[180px] gap-3 border border-slate-200 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white hover:scale-105 transition-transform" href="https://play.google.com" target="_blank">
                  <Play size={20} className="fill-current" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Google Play</span>
                  </div>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex items-center justify-center lg:justify-start gap-6 opacity-50">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-200 dark:bg-slate-800" />
                  ))}
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  <span className="text-slate-900 dark:text-white font-black">+10k</span> utilisateurs actifs
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3D Visual Mockup Area */}
          <div className="flex-1 relative perspective-2000 hidden lg:block">
            <Reveal delay={400} direction="none" scale>
              <div className="relative z-20 transform-3d rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-[0deg] transition-all duration-1000 ease-out">
                
                {/* Main Phone */}
                <div className="relative w-[340px] mx-auto bg-slate-950 rounded-[3.5rem] p-3 shadow-[20px_40px_80px_-15px_rgba(0,0,0,0.5)] dark:shadow-[20px_40px_80px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
                  
                  <div className="relative aspect-[9/19] rounded-[2.8rem] overflow-hidden bg-white dark:bg-slate-950 flex flex-col">
                    {/* App Internal UI */}
                    <div className="pt-14 px-6 pb-6">
                      <div className="flex justify-between items-center mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          <Zap size={24} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                           <Target size={18} />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-2">Bonjour, Sarah</h3>
                      <p className="text-slate-400 text-sm mb-10">Voici ton objectif du jour.</p>
                      
                      <div className="space-y-4">
                        <div className="p-5 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/50">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Maîtrise Math</span>
                            <span className="text-[10px] font-black text-slate-400">82%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[82%] rounded-full shadow-[0_0_10px_rgba(84,118,255,0.5)]"></div>
                          </div>
                        </div>
                        
                        <div className="p-5 rounded-[2rem] bg-emerald/5 border border-emerald/10">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-emerald">
                                <CheckCircle2 size={16} />
                              </div>
                              <div className="text-xs font-bold text-emerald-800 dark:text-emerald-400">Révision Terminée</div>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto p-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800/50 grid grid-cols-4 gap-4">
                        {[1,2,3,4].map(i => (
                          <div key={i} className={`h-1.5 rounded-full ${i === 1 ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
                        ))}
                    </div>
                  </div>
                  
                  {/* Subtle Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none rounded-[3.5rem]"></div>
                </div>

                {/* Floating Elements for 3D depth */}
                <div className="absolute -right-20 top-20 z-30 animate-float">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/20 flex flex-col gap-2 min-w-[160px]">
                    <div className="flex items-center gap-2">
                       <TrendingUp size={16} className="text-emerald" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Performance</span>
                    </div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">+14%</div>
                    <div className="text-[10px] font-bold text-slate-500">Cette semaine</div>
                  </div>
                </div>

                <div className="absolute -left-16 bottom-1/4 z-10 animate-float-delayed">
                   <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-bronze shadow-2xl rotate-12">
                      <Star size={24} fill="currentColor" />
                   </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
