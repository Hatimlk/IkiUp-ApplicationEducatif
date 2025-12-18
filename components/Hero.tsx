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
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-background transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-15%] right-[-10%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[180px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-15%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[160px] animate-float"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-sec/5 rounded-full blur-[140px]"></div>
        
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#5A73E8 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <Reveal delay={0} scale>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-ui dark:border-white/10 shadow-sm mb-10 group max-w-lg lg:max-w-none hover:border-primary/30 transition-colors">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                  <Sparkles size={12} className="animate-spin-slow" />
                </span>
                <span className="text-[10px] md:text-[11px] font-bold text-slate-600 dark:text-slate-300 tracking-tight lg:tracking-wider">
                  {t.badge}
                </span>
              </div>
            </Reveal>

            <Reveal delay={150} direction="up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-[#111111] dark:text-white mb-8 leading-[1.05]">
                {t.title} <br />
                <span className="text-primary italic relative inline-block group">
                  {t.titleAccent}
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary/30 group-hover:text-primary/50 transition-colors" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={300} direction="up">
              <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {t.description}
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <Button size="lg" className="w-full sm:w-auto min-w-[210px] gap-3 h-16 shadow-2xl shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all" href="https://apps.apple.com" target="_blank">
                  <Apple size={24} className="mb-0.5" />
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-70">App Store</span>
