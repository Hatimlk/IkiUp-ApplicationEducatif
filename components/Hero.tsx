import React from 'react';
import { Apple, Play, Sparkles, Star, Zap, TrendingUp, CheckCircle2, Target, MousePointer2 } from 'lucide-react';
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
      {/* Refined Dynamic Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[5%] left-[-10%] w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <Reveal delay={0} scale>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg mb-8 group">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                  <Sparkles size={12} className="group-hover:rotate-12 transition-transform" />
                </span>
                <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                  {t.badge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100} direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-balance">
                {t.title} <br />
                <span className="text-primary italic relative inline-block group">
                  {t.titleAccent}
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></span>
                  <svg className="absolute -bottom-3 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200} direction="up">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.description}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
                <Button variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 gap-3" href="https://apps.apple.com" target="_blank">
                  <Apple size={22} className="mb-1" />
                  <div className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[8px] uppercase font-black tracking-widest opacity-80">App Store</span>
                    <span className="text-base font-bold">Télécharger</span>
                  </div>
                </Button>
                <Button variant="white" size="lg" className="w-full sm:w-auto px-8 py-4 gap-3 border border-slate-200" href="https://play.google.com" target="_blank">
                  <Play size={20} className="fill-current mb-1" />
                  <div className="flex flex-col items-start leading-tight text-left">
                    <span className="text-[8px] uppercase font-black tracking-widest opacity-70">Google Play</span>
                    <span className="text-base font-bold">Installer</span>
                  </div>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[9px] font-bold ${i === 4 ? 'bg-primary text-white border-primary shadow-md' : ''}`}>
                      {i === 4 ? '+10k' : ''}
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald"></span>
                  </span>
                  Utilisateurs <span className="text-slate-900 dark:text-white">en direct</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex-1 relative perspective-2000 hidden lg:block">
            <Reveal delay={400} direction="none" scale>
              <div className="relative z-20 transform-3d rotate-y-[-8deg] hover:rotate-y-[0deg] transition-all duration-1000 ease-out">
                
                {/* Modern Phone Mockup Refined */}
                <div className="relative w-[320px] mx-auto bg-slate-950 rounded-[3.5rem] p-3 shadow-2xl border border-white/10 overflow-hidden">
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-full z-40 flex items-center justify-center gap-1.5">
                     <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                     <div className="w-8 h-1 rounded-full bg-slate-800"></div>
                  </div>
                  
                  <div className="relative aspect-[9/19.5] rounded-[2.8rem] overflow-hidden bg-white dark:bg-slate-900 flex flex-col">
                    {/* App Internal UI Sim */}
                    <div className="pt-16 px-6 pb-6 flex-1 bg-gradient-to-b from-primary/5 to-transparent">
                      <div className="flex justify-between items-center mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                          <Zap size={24} />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                           <Target size={18} />
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-2xl font-serif font-black text-slate-900 dark:text-white mb-1 leading-none">Sarah,</h3>
                        <p className="text-slate-500 text-xs font-medium">Tes objectifs du jour</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Réussite Scolaire</span>
                            <span className="text-[9px] font-bold text-slate-400">82%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[82%] rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="p-5 rounded-3xl bg-emerald/5 border border-emerald/10 flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-emerald shadow-sm">
                             <CheckCircle2 size={20} />
                           </div>
                           <div>
                             <div className="text-[9px] font-bold text-emerald uppercase tracking-widest">Objectif Atteint</div>
                             <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Devoirs terminés</div>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-20 px-6 border-t border-slate-100 dark:border-slate-800 flex justify-around items-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        <div className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements with better depth */}
                <div className="absolute -right-20 top-24 z-30 animate-float">
                  <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-slate-200/50 dark:border-white/10 min-w-[180px]">
                    <div className="flex items-center gap-2 mb-2">
                       <TrendingUp size={16} className="text-emerald" />
                       <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Progression</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 dark:text-white">+14.5%</div>
                  </div>
                </div>

                <div className="absolute -left-16 bottom-24 z-10 animate-float-delayed">
                   <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-slate-900 shadow-xl rotate-6 hover:scale-110 transition-transform">
                      <Star size={28} fill="currentColor" />
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