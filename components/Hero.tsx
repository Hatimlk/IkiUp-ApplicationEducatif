
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
    <section className="relative pt-36 pb-32 lg:pt-52 lg:pb-48 overflow-hidden bg-background transition-colors duration-500">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-[0%] left-[-15%] w-[800px] h-[800px] bg-secondary/15 rounded-full blur-[140px] animate-float"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left">
            <Reveal delay={0} scale>
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800 shadow-xl mb-12 group">
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                  <Sparkles size={14} className="group-hover:rotate-12 transition-transform" />
                </span>
                <span className="text-[10px] md:text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                  {t.badge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={150} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter text-[#111111] dark:text-white mb-10 leading-[0.95]">
                {t.title} <br />
                <span className="text-primary italic relative inline-block group cursor-default">
                  {t.titleAccent}
                  <span className="absolute bottom-2 left-0 w-0 h-4 bg-primary/10 -z-10 transition-all duration-700 group-hover:w-full"></span>
                  <svg className="absolute -bottom-3 left-0 w-full h-4 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300} direction="up">
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {t.description}
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-16">
                <Button size="lg" className="w-full sm:w-auto min-w-[220px] gap-4" href="https://apps.apple.com" target="_blank">
                  <Apple size={24} className="mb-1" />
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-70 mb-1">App Store</span>
                    <span className="text-lg font-bold">Télécharger</span>
                  </div>
                </Button>
                <Button size="lg" variant="white" className="w-full sm:w-auto min-w-[220px] gap-4 border-2 border-gray-ui dark:border-slate-700" href="https://play.google.com" target="_blank">
                  <Play size={22} className="fill-current mb-1" />
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-70 mb-1">Google Play</span>
                    <span className="text-lg font-bold">Installer</span>
                  </div>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black ${i === 4 ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30' : ''}`}>
                      {i === 4 ? '+10k' : ''}
                    </div>
                  ))}
                </div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                  Utilisateurs <span className="text-[#111111] dark:text-white">Actifs en direct</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex-1 relative perspective-2000 hidden lg:block">
            <Reveal delay={400} direction="none" scale>
              <div className="relative z-20 transform-3d rotate-y-[-12deg] rotate-x-[6deg] hover:rotate-y-[-2deg] hover:rotate-x-[2deg] transition-all duration-1000 ease-out">
                
                {/* Modern iPhone Mockup */}
                <div className="relative w-[360px] mx-auto bg-[#111111] rounded-[4rem] p-3.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_80px_150px_-30px_rgba(0,0,0,0.8)] border border-white/10">
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#111111] rounded-full z-40 flex items-center justify-center gap-1.5 px-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                     <div className="w-10 h-1 rounded-full bg-slate-800"></div>
                  </div>
                  
                  <div className="relative aspect-[9/19] rounded-[3.2rem] overflow-hidden bg-white dark:bg-slate-950 flex flex-col">
                    {/* App Internal UI */}
                    <div className="pt-20 px-8 pb-8 flex-1">
                      <div className="flex justify-between items-center mb-10">
                        <div className="w-16 h-16 rounded-[1.8rem] bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                          <Zap size={32} />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-900 border border-gray-ui dark:border-slate-800 flex items-center justify-center text-slate-400">
                           <Target size={22} />
                        </div>
                      </div>
                      
                      <div className="mb-10">
                        <h3 className="text-3xl font-serif font-black text-[#111111] dark:text-white mb-2 leading-tight">Sarah,</h3>
                        <p className="text-slate-400 text-sm font-medium">Prête pour ton test d'orientation ?</p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-7 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800 shadow-sm group/card cursor-pointer hover:border-primary/30 transition-all">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.15em]">Profil Scolaire</span>
                            <span className="text-[10px] font-black text-slate-400">82%</span>
                          </div>
                          <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[82%] rounded-full shadow-[0_0_10px_rgba(90,115,232,0.4)]"></div>
                          </div>
                        </div>
                        
                        <div className="p-7 rounded-[2.5rem] bg-emerald/5 border border-emerald/10 flex items-center gap-5">
                           <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-emerald shadow-sm">
                             <CheckCircle2 size={24} />
                           </div>
                           <div>
                             <div className="text-[10px] font-black text-emerald uppercase tracking-widest mb-1">Objectif atteint</div>
                             <div className="text-sm font-bold text-slate-700 dark:text-slate-300">Devoirs terminés</div>
                           </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Mockup */}
                    <div className="p-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-t border-gray-ui dark:border-slate-800 flex justify-around">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(90,115,232,0.6)]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-ui dark:bg-slate-800"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-ui dark:bg-slate-800"></div>
                    </div>
                  </div>
                  
                  {/* Glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none rounded-[4rem]"></div>
                </div>

                {/* Floating Elements (UX Visual Proof) */}
                <div className="absolute -right-28 top-32 z-30 animate-float">
                  <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-2xl p-7 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white/20 flex flex-col gap-3 min-w-[200px]">
                    <div className="flex items-center gap-3">
                       <TrendingUp size={20} className="text-emerald" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Progression</span>
                    </div>
                    <div className="text-3xl font-black text-[#111111] dark:text-white">+14.5%</div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 4 ? 'bg-emerald' : 'bg-slate-100 dark:bg-slate-700'}`}></div>)}
                    </div>
                  </div>
                </div>

                <div className="absolute -left-24 bottom-32 z-10 animate-float-delayed">
                   <div className="w-20 h-20 rounded-[2rem] bg-secondary flex items-center justify-center text-[#111111] shadow-2xl rotate-12 group cursor-pointer hover:scale-110 transition-transform">
                      <Star size={36} fill="currentColor" />
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                         <MousePointer2 size={14} className="text-primary fill-primary" />
                      </div>
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
