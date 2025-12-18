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
    <section className="relative pt-36 pb-32 lg:pt-52 lg:pb-48 overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-[0%] left-[-10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <Reveal delay={0} scale>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800 shadow-sm mb-10 group">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white">
                  <Sparkles size={12} className="animate-spin-slow" />
                </span>
                <span className="text-[11px] font-black text-slate-600 dark:text-slate-300 tracking-[0.15em] uppercase">{t.badge}</span>
              </div>
            </Reveal>

            <Reveal delay={150} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-[#111111] dark:text-white mb-10 leading-[1.05]">
                {t.title} <br />
                <span className="text-primary italic relative inline-block">
                  {t.titleAccent}
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300} direction="up">
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                {t.description}
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <Button size="lg" className="w-full sm:w-auto min-w-[200px] gap-3" href="https://apps.apple.com" target="_blank">
                  <Apple size={22} className="mb-0.5" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] uppercase font-black tracking-widest opacity-70">App Store</span>
                    <span className="text-base font-bold">Download</span>
                  </div>
                </Button>
                <Button size="lg" variant="white" className="w-full sm:w-auto min-w-[200px] gap-3 border-2 border-gray-ui dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" href="https://play.google.com" target="_blank">
                  <Play size={20} className="fill-current mb-0.5" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] uppercase font-black tracking-widest opacity-70">Google Play</span>
                    <span className="text-base font-bold">Get it on</span>
                  </div>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-11 h-11 rounded-full border-4 border-background bg-gray-ui dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold ${i === 4 ? 'bg-primary text-white border-primary' : ''}`}>
                      {i === 4 ? '+10k' : ''}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Utilisateurs <span className="text-[#111111] dark:text-white">Actifs</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex-1 relative perspective-2000 hidden lg:block">
            <Reveal delay={400} direction="none" scale>
              <div className="relative z-20 transform-3d rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-[-5deg] transition-all duration-1000 ease-out">
                
                <div className="relative w-[340px] mx-auto bg-[#111111] rounded-[3.8rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#111111] rounded-full z-30"></div>
                  
                  <div className="relative aspect-[9/19] rounded-[3rem] overflow-hidden bg-[#FAFAFA] dark:bg-slate-950 flex flex-col">
                    <div className="pt-16 px-7 pb-6 flex-1">
                      <div className="flex justify-between items-center mb-12">
                        <div className="w-14 h-14 rounded-[1.2rem] bg-primary/10 flex items-center justify-center text-primary">
                          <Zap size={28} />
                        </div>
                        <div className="w-11 h-11 rounded-full bg-gray-ui dark:bg-slate-800 flex items-center justify-center text-slate-400">
                           <Target size={20} />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-black text-[#111111] dark:text-white mb-2">Bonjour, Sarah</h3>
                      <p className="text-slate-400 text-sm mb-12">Voici ton objectif du jour.</p>
                      
                      <div className="space-y-5">
                        <div className="p-6 rounded-[2.2rem] bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Maîtrise Math</span>
                            <span className="text-[10px] font-black text-slate-400">82%</span>
                          </div>
                          <div className="h-2.5 w-full bg-gray-ui dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[82%] rounded-full"></div>
                          </div>
                        </div>
                        
                        <div className="p-6 rounded-[2.2rem] bg-emerald/5 border border-emerald/10">
                           <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-emerald shadow-sm">
                                <CheckCircle2 size={18} />
                              </div>
                              <div className="text-sm font-black text-emerald uppercase tracking-wider">Objectif atteint</div>
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-white dark:bg-slate-950 border-t border-gray-ui dark:border-slate-800 flex justify-around">
                        {[1,2,3,4].map(i => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-primary' : 'bg-gray-ui'}`}></div>
                        ))}
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none rounded-[3.8rem]"></div>
                </div>

                <div className="absolute -right-24 top-24 z-30 animate-float">
                  <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/20 flex flex-col gap-2 min-w-[180px]">
                    <div className="flex items-center gap-2">
                       <TrendingUp size={18} className="text-emerald" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Progression</span>
                    </div>
                    <div className="text-2xl font-black text-[#111111] dark:text-white">+14%</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Cette semaine</div>
                  </div>
                </div>

                <div className="absolute -left-20 bottom-1/4 z-10 animate-float-delayed">
                   <div className="w-16 h-16 rounded-[1.5rem] bg-secondary flex items-center justify-center text-[#111111] shadow-2xl rotate-12">
                      <Star size={32} fill="currentColor" />
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