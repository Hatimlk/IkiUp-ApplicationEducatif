import React from 'react';
import { Reveal } from './Reveal';
import { UserCircle2, Compass, GraduationCap, Users2, Check, ArrowRight } from 'lucide-react';
import { translations, Language } from '../translations';

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
      color: "bg-secondary text-[#111111]",
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
      color: "bg-[#111111] text-white",
      shadow: "shadow-black/20",
    }
  ];

  return (
    <section id="howitworks" className="py-24 md:py-32 bg-[#FDFDFF] dark:bg-[#0B1121] transition-colors duration-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-ui/40 dark:bg-white/5 border border-gray-ui dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              {t.tag}
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#111111] dark:text-white mb-8 tracking-tight">
              {t.title} <span className="text-primary italic">{t.titleAccent}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed opacity-80">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Desktop Path Line - SVG Curved Line */}
          <svg className="hidden lg:block absolute top-[60px] left-0 w-full h-[calc(100%-120px)] pointer-events-none -z-10 text-gray-200 dark:text-gray-800" preserveAspectRatio="none">
            <path d="M 250,50 Q 600,200 950,50 T 250,350 Q 600,500 950,350 T 250,650"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="path-animation"
            />
          </svg>

          <div className="space-y-16 lg:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:mb-12 last:mb-0`}>

                {/* Visual Step Number / Icon Container */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-24 relative order-1 lg:order-none">
                  <Reveal direction={index % 2 === 0 ? 'right' : 'left'} delay={100}>
                    <div className={`relative px-8 pl-12 order-2 ${index % 2 !== 0 ? 'lg:pl-0 lg:pr-24 lg:text-right' : 'lg:pl-24 lg:text-left'} hidden lg:block`}>
                      {/* Step Number Background */}
                      <div className="text-[12rem] font-black text-gray-50 dark:text-slate-800/50 absolute -top-20 leading-none select-none -z-10 transition-colors">
                        {index + 1}
                      </div>
                    </div>
                  </Reveal>

                  <div className={`flex items-center justify-center relative z-10 ${index % 2 !== 0 ? 'lg:mr-auto lg:ml-0' : 'lg:ml-auto lg:mr-0'}`}>
                    {/* Connecting Dot on Desktop */}
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary z-20 shadow-lg 
                                         lg:left-auto lg:right-[-66px] data-[reverse=true]:lg:right-auto data-[reverse=true]:lg:left-[-66px]"
                      data-reverse={index % 2 !== 0}>
                    </div>

                    <Reveal>
                      <div className={`w-32 h-32 rounded-[2rem] ${step.color} ${step.shadow} flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}>
                        {step.icon}
                      </div>
                    </Reveal>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full lg:w-1/2 text-center ${index % 2 !== 0 ? 'lg:text-right lg:pr-24' : 'lg:text-left lg:pl-24'} order-2 lg:order-none`}>
                  <Reveal direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="relative">
                      <div className="inline-block lg:hidden text-6xl font-black text-gray-100 dark:text-slate-800 absolute -top-8 left-1/2 -translate-x-1/2 -z-10">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#111111] dark:text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 lg:inline-block">
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