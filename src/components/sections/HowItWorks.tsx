import React from 'react';
import { Reveal } from '../ui/Reveal';
import { UserCircle2, Compass, GraduationCap, Users2, ArrowRight } from 'lucide-react';
import { translations, Language } from '../../lib/translations';

interface HowItWorksProps {
  lang?: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].howitworks;

  const steps = [
    {
      title: t.steps[0].title,
      description: t.steps[0].description,
      icon: <UserCircle2 size={32} />,
      color: "bg-primary text-white",
      shadow: "shadow-primary/30",
    },
    {
      title: t.steps[1].title,
      description: t.steps[1].description,
      icon: <Compass size={32} />,
      color: "bg-secondary text-text",
      shadow: "shadow-secondary/30",
    },
    {
      title: t.steps[2].title,
      description: t.steps[2].description,
      icon: <GraduationCap size={32} />,
      color: "bg-primary text-white",
      shadow: "shadow-primary/30",
    },
    {
      title: t.steps[3].title,
      description: t.steps[3].description,
      icon: <Users2 size={32} />,
      // Changed to secondary (Yellow) to maintain visual rhythm and visibility in dark mode
      color: "bg-secondary text-text",
      shadow: "shadow-secondary/30",
    }
  ];

  return (
    <section id="howitworks" className="py-24 md:py-32 bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              {t.tag}
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-text dark:text-white mb-8 tracking-tight">
              {t.title} <span className="text-primary">{t.titleAccent}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed opacity-80">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden lg:block"></div>

          {/* Central Line - Mobile (Left Side) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 lg:hidden"></div>

          <div className="space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Side (Icon Box) */}
                <div className={`w-full lg:w-1/2 flex pl-16 lg:pl-0 ${index % 2 !== 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <Reveal direction={index % 2 === 0 ? 'right' : 'left'} delay={100}>
                    <div className={`relative group`}>


                      {/* Icon Box */}
                      <div className={`relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-[2.5rem] ${step.color} ${step.shadow} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                        {step.icon}
                      </div>

                      {/* Connector Line (Desktop) */}
                      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-px bg-slate-200 dark:bg-slate-800 w-24 
                         ${index % 2 !== 0 ? 'right-full mr-8' : 'left-full ml-8'}`}>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Central Dot */}
                <div className="absolute left-8 lg:left-1/2 top-24 lg:top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-primary z-20 shadow-lg"></div>

                {/* Content Side */}
                <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 text-left ${index % 2 !== 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <Reveal direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-text dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md lg:mx-0 lg:inline-block">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};