import React from 'react';
import { Apple, Play, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-32 pb-56 lg:pt-48 lg:pb-64 overflow-hidden">
        {/* Abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose/20 dark:bg-rose/10 rounded-full blur-[120px] opacity-60 translate-x-1/3 -translate-y-1/4 transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/4 transition-colors duration-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-100 dark:border-slate-800 shadow-sm mb-8 hover:scale-105 transition-transform cursor-default">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                    <Sparkles size={12} />
                </span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{t.badge}</span>
            </div>
            </Reveal>

            <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-text dark:text-white mb-8 leading-[1.1]">
                {t.title} <br />
                <span className="italic text-primary">{t.titleAccent}</span>
            </h1>
            </Reveal>

            <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                {t.description}
            </p>
            </Reveal>

            <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <Button size="lg" className="w-full sm:w-auto min-w-[180px] gap-2" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <Apple size={20} className="-mt-1" />
                    {t.appStore}
                </Button>
                <Button size="lg" variant="white" className="w-full sm:w-auto min-w-[180px] gap-2 dark:bg-slate-800 dark:text-white dark:border dark:border-slate-700 dark:hover:bg-slate-700 dark:shadow-none" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <Play size={18} className="fill-current -mt-1" />
                    {t.googlePlay}
                </Button>
            </div>
            </Reveal>
        </div>

        {/* Floating Cards UI Mockup */}
        <div className="relative mt-12 max-w-5xl mx-auto h-[400px] md:h-[600px]">
             {/* Central Phone */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 w-[280px] md:w-[350px]">
                 <div className="relative bg-white dark:bg-slate-950 rounded-[3rem] border-8 border-white dark:border-slate-800 shadow-2xl shadow-primary/10 dark:shadow-black/50 overflow-hidden aspect-[9/19] animate-float transition-colors duration-300 ring-1 ring-slate-900/5 dark:ring-white/10">
                    <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-primary/10 dark:from-primary/20 to-transparent pointer-events-none"></div>
                    
                    {/* Mock UI Content */}
                    <div className="p-6 pt-12 flex flex-col h-full bg-white dark:bg-slate-950">
                        <div className="flex justify-between items-center mb-8">
                             <div>
                                <h3 className="text-2xl font-serif font-bold text-slate-800 dark:text-slate-100">{lang === 'fr' ? 'Test d\'Orientation' : 'Orientation Test'}</h3>
                                <p className="text-sm text-slate-400">{lang === 'fr' ? 'Découvrez vos talents' : 'Discover your talents'}</p>
                             </div>
                        </div>

                        <div className="space-y-4">
                            {/* Orientation Card */}
                            <div className="p-4 rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
                                <p className="text-xs font-bold text-primary mb-2 uppercase">{lang === 'fr' ? 'Profil Psychologique' : 'Psychological Profile'}</p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">{lang === 'fr' ? 'Dominante : Créatif' : 'Dominant: Creative'}</p>
                                <div className="flex gap-2">
                                    <div className="flex-1 h-1.5 bg-primary rounded-full"></div>
                                    <div className="flex-1 h-1.5 bg-primary/30 rounded-full"></div>
                                    <div className="flex-1 h-1.5 bg-primary/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Nav */}
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md flex justify-around items-center border-t border-slate-50 dark:border-slate-800">
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                            <Sparkles size={18} />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};