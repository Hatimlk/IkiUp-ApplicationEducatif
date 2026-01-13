import React, { useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import { Shield, Heart, Target, Lightbulb, Users, GraduationCap, Compass } from 'lucide-react';
import { Language, translations } from '../../lib/translations';

import { SEO } from '../ui/SEO';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[lang].about;

  const pillarsConfig = [
    {
      icon: <Shield size={24} />,
      color: "teal",
      classes: {
        bg: "bg-gradient-to-br from-teal-500 to-teal-600",
        shadow: "shadow-teal-500/30",
        overlay: "from-teal-500/5",
        blur: "bg-teal-500/10",
        iconBg: "bg-teal-50 dark:bg-teal-900/20",
        iconText: "text-teal-600 dark:text-teal-400",
        border: "border-teal-100 dark:border-teal-900/50"
      }
    },
    {
      icon: <Target size={24} />,
      color: "primary",
      classes: {
        bg: "bg-gradient-to-br from-violet-500 to-violet-600",
        shadow: "shadow-violet-500/30",
        overlay: "from-violet-500/5",
        blur: "bg-violet-500/10",
        iconBg: "bg-violet-50 dark:bg-violet-900/20",
        iconText: "text-violet-600 dark:text-violet-400",
        border: "border-violet-100 dark:border-violet-900/50"
      }
    },
    {
      icon: <Heart size={24} />,
      color: "rose",
      classes: {
        bg: "bg-gradient-to-br from-pink-500 to-pink-600",
        shadow: "shadow-pink-500/30",
        overlay: "from-pink-500/5",
        blur: "bg-pink-500/10",
        iconBg: "bg-pink-50 dark:bg-pink-900/20",
        iconText: "text-pink-600 dark:text-pink-400",
        border: "border-pink-100 dark:border-pink-900/50"
      }
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen transition-colors duration-500 overflow-hidden">
      <SEO
        title={lang === 'fr' ? "À Propos" : "About Us"}
        description={lang === 'fr'
          ? "Découvrez l'histoire et la mission d'IkiUp, la plateforme qui réinvente le parcours scolaire."
          : "Discover the story and mission of IkiUp, the platform reinventing the educational journey."}
        url="https://ikiup.com/about"
        lang={lang}
      />
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Story Section - Centered Glass Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-40">
        <Reveal>
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] p-6 sm:p-8 md:p-16 border border-white/20 dark:border-white/5 shadow-2xl shadow-indigo/5 relative overflow-hidden text-center group hover:shadow-indigo/10 transition-all duration-500">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none -z-10"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/15 transition-colors duration-700"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/15 transition-colors duration-700"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-10 border border-primary/20">
              {t.storyTag}
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-10 tracking-tight">
              {t.storyTitle}
            </h1>

            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 font-medium leading-relaxed mx-auto max-w-3xl">
              {t.story.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 last:mb-0 first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Philosophy & Vision - Centered Compact Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-40">
        <Reveal>
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white p-6 sm:p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">

            {/* Dynamic Backgrounds */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/15 transition-colors duration-700"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-500/30 transition-colors duration-700"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale mix-blend-overlay"></div>

            {/* Large Decorative Watermark */}
            <div className="absolute -right-10 -bottom-20 text-white/5 rotate-12 transform scale-100 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 ease-out">
              <Compass size={250} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between items-start gap-8">
              <div className="w-full">
                {/* Icon with smoother glass effect */}
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white mb-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <Compass size={32} strokeWidth={1.5} />
                </div>

                {/* Title with better hierarchy */}
                <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-[0.9] tracking-tighter text-white drop-shadow-sm">
                  {t.philosophyTitle}
                </h2>

                {/* Description with improved readability and flow */}
                <div className="flex gap-6 items-start">
                  <div className="w-1 h-20 bg-gradient-to-b from-white/40 to-transparent rounded-full shrink-0 mt-2"></div>
                  <p className="text-blue-50 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl text-shadow-sm opacity-90">
                    {t.philosophyDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Commitments Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Shield size={12} />
              Valeurs
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-text dark:text-white mb-6">{t.commitments}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Des principes inébranlables pour construire un futur de confiance.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {t.pillars.map((pillar, i) => {
            const config = pillarsConfig[i];
            return (
              <Reveal key={i} delay={i * 100} scale>
                <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-3 flex flex-col h-full group relative overflow-hidden">

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.classes.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className={`absolute top-0 right-0 w-48 h-48 ${config.classes.blur} rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150`}></div>

                  <div className={`w-20 h-20 rounded-2xl ${config.classes.bg} flex items-center justify-center text-white mb-8 shadow-lg ${config.classes.shadow} group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10`}>
                    {config.icon}
                  </div>

                  <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white group-hover:text-primary transition-colors relative z-10">{pillar.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium relative z-10">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div >
  );
};