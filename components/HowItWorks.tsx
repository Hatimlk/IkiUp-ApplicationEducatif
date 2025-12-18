import React from 'react';
import { Reveal } from './Reveal';
import { UserCircle2, Compass, GraduationCap, Users2, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Comprendre son profil",
      description: "Des tests basés sur les sciences cognitives pour identifier vos forces et talents naturels.",
      icon: <UserCircle2 size={32} />,
      color: "bg-primary text-white",
      shadow: "shadow-primary/30",
    },
    {
      title: "Explorer des parcours",
      description: "Connectez votre profil à plus de 500 métiers et formations certifiées adaptées à vos aspirations.",
      icon: <Compass size={32} />,
      color: "bg-secondary text-[#111111]",
      shadow: "shadow-secondary/30",
    },
    {
      title: "Suivre la scolarité",
      description: "Une vue centralisée sur les notes, devoirs et progrès pour une gestion quotidienne sans stress.",
      icon: <GraduationCap size={32} />,
      color: "bg-primary text-white",
      shadow: "shadow-primary/30",
    },
    {
      title: "Avancer ensemble",
      description: "Le pont parfait entre élèves, parents et école pour un accompagnement bienveillant.",
      icon: <Users2 size={32} />,
      color: "bg-[#111111] text-white",
      shadow: "shadow-black/20",
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-[#FDFDFF] dark:bg-[#0B1121] transition-colors duration-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-24 md:mb-32">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-ui/40 dark:bg-white/5 border border-gray-ui dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Le Parcours IkiUp
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#111111] dark:text-white mb-8 tracking-tight">
              Comment ça <span className="text-primary italic">marche ?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed opacity-80">
              Quatre étapes clés pour transformer l'expérience scolaire en une aventure sereine et réussie.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-ui/50 dark:via-white/10 to-transparent -translate-x-1/2"></div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Side */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <Reveal direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="group cursor-default">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-[2.2rem] ${step.color} ${step.shadow} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        {step.icon}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-black text-[#111111] dark:text-white mb-6">
                        {step.title}
                      </h3>
                      <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-auto">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </div>

                {/* Center Circle Indicator */}
                <div className="hidden lg:flex w-2/12 items-center justify-center relative z-20">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-gray-ui dark:border-slate-800 flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-5/12 flex justify-center">
                  <Reveal direction={index % 2 === 0 ? 'right' : 'left'} delay={200}>
                    <div className="relative group">
                      {/* Decorative Background for the step number */}
                      <div className="absolute -inset-4 bg-gray-ui/20 dark:bg-white/5 rounded-[3rem] blur-2xl group-hover:bg-primary/5 transition-all duration-700"></div>
                      
                      <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[3.5rem] border border-gray-ui dark:border-white/5 shadow-sm overflow-hidden min-w-[300px] flex items-center gap-6">
                        <div className="text-8xl font-black text-gray-ui/40 dark:text-white/5 select-none leading-none">
                          0{index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-3/4 bg-gray-ui/50 dark:bg-slate-800 rounded-full mb-3"></div>
                          <div className="h-2 w-1/2 bg-gray-ui/30 dark:bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center text-emerald">
                          <Check size={20} />
                        </div>
                      </div>
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