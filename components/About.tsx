import React, { useEffect } from 'react';
import { Reveal } from './Reveal';
import { Shield, Heart, Zap, Users, Compass } from 'lucide-react';
import { Language } from '../translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    fr: {
      title: "IKIUP : L'éducation",
      titleAccent: "orientée vers l'avenir.",
      description: "IKIUP est une application digitale dédiée à l'orientation scolaire et au suivi éducatif. Nous aidons les élèves à se découvrir et les parents à s'impliquer sereinement.",
      vision: "Notre Vision",
      visionP1: "Elle aide les élèves à mieux se connaître grâce à des tests de personnalité pointus, propose des parcours d'orientation personnalisés, et offre aux parents une vision claire du suivi et de l'évolution de leurs enfants.",
      visionP2: "L'application intègre aussi un agenda de liaison école-professeur-parents, pour simplifier la communication quotidienne.",
      visionP3: "IKIUP s'adresse à trois publics essentiels : les élèves, les parents, et les écoles.",
      commitments: "Nos Engagements"
    },
    en: {
      title: "IKIUP: Education",
      titleAccent: "focused on the future.",
      description: "IKIUP is a digital application dedicated to school orientation and educational tracking. We help students discover themselves and parents to be involved peacefully.",
      vision: "Our Vision",
      visionP1: "It helps students know themselves better through advanced personality tests, offers personalized career paths, and gives parents a clear view of their children's progress.",
      visionP2: "The app also features a school-teacher-parent communication log to simplify daily interactions.",
      visionP3: "IKIUP serves three essential audiences: students, parents, and schools.",
      commitments: "Our Commitments"
    }
  };

  const c = content[lang];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
        <Reveal>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-text dark:text-white mb-8">
                {c.title} <br/>
                <span className="text-primary italic">{c.titleAccent}</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                {c.description}
            </p>
        </Reveal>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
             <Reveal delay={100}>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-[3rem] aspect-square overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo/20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl">
                        <Compass size={48} className="text-primary animate-pulse" />
                    </div>
                </div>
             </Reveal>
             <Reveal delay={200}>
                <h2 className="text-3xl font-serif font-bold mb-6 text-text dark:text-white">{c.vision}</h2>
                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    <p>{c.visionP1}</p>
                    <p>{c.visionP2}</p>
                    <p>{c.visionP3}</p>
                </div>
             </Reveal>
        </div>
      </section>

      {/* Values Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
             <h2 className="text-3xl font-serif font-bold mb-12 text-center text-text dark:text-white">{c.commitments}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100}>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all h-full">
                    <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                        <Shield size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-text dark:text-white">{lang === 'fr' ? 'Sécurité' : 'Security'}</h3>
                    <p className="text-slate-500 dark:text-slate-400">
                        {lang === 'fr' ? 'La communication école-parent est sécurisée.' : 'School-parent communication is secure.'}
                    </p>
                </div>
            </Reveal>
            {/* Additional blocks omitted for brevity but they follow the same pattern */}
        </div>
      </section>
    </div>
  );
};