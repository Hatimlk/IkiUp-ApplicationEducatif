import React from 'react';
import { Apple, Play, Sparkles, Star, Zap, TrendingUp, CheckCircle2, BookOpen, Calendar, Bell } from 'lucide-react';
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
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
                  L'école, <br/>
                  <span className="relative inline-block text-primary">
                    réinventée.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  School, <br/>
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
                {[1,2,3,4].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800"></div>
                ))}
             </div>
             <p>Utilisé par +50 établissements</p>
          </div>
        </div>

        {/* Right: The Educational Composition */}
        <div className="hidden lg:block flex-1 relative w-full h-[600px]">
           <Reveal delay={400} direction="left" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {/* Main Device */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl skew-y-[-2deg] hover:skew-y-0 transition-transform duration-700 ease-out z-20">
                  <div className="relative aspect-[9/19] bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border-[6px] border-slate-900">
                      {/* App Screen Placeholder */}
                      <div className="w-full h-full bg-slate-50 dark:bg-slate-800 relative">
                         <div className="h-40 bg-primary/10 rounded-b-[3rem]"></div>
                         <div className="px-6 -mt-12">
                            <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-700 shadow-xl flex items-center justify-center text-4xl mb-6">👋</div>
                            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded-full mb-3"></div>
                            <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-8"></div>
                            
                            <div className="space-y-3">
                               <div className="h-20 w-full bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600 p-4 flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50"></div>
                                  <div className="flex-1">
                                     <div className="h-3 w-24 bg-slate-200 dark:bg-slate-600 rounded-full mb-2"></div>
                                     <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                  </div>
                               </div>
                               <div className="h-20 w-full bg-white dark:bg-slate-700 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600 p-4 flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50"></div>
                                  <div className="flex-1">
                                     <div className="h-3 w-24 bg-slate-200 dark:bg-slate-600 rounded-full mb-2"></div>
                                     <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                  </div>
              </div>

              {/* Floating Element 1: Calendar */}
              <div className="absolute top-[20%] right-[5%] p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float z-30">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                        <Calendar size={20} />
                     </div>
                     <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Next Class</div>
                        <div className="font-bold text-slate-800 dark:text-white">History</div>
                     </div>
                  </div>
              </div>

              {/* Floating Element 2: Success Notification */}
              <div className="absolute bottom-[25%] left-[0%] p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float-delayed z-30">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <CheckCircle2 size={20} />
                     </div>
                     <div>
                        <div className="text-sm font-bold text-slate-800 dark:text-white">Devoir rendu !</div>
                        <div className="text-[10px] text-slate-400">Il y a 2 min</div>
                     </div>
                  </div>
              </div>

              {/* Floating Element 3: Books/Abstract */}
              <div className="absolute top-[15%] left-[10%] w-16 h-16 bg-blue-500 rounded-2xl rotate-12 opacity-80 blur-sm -z-10 animate-pulse"></div>
              <div className="absolute bottom-[20%] right-[15%] w-24 h-24 bg-purple-500 rounded-full opacity-60 blur-xl -z-10"></div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};
