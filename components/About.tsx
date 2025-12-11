import React, { useEffect } from 'react';
import { Reveal } from './Reveal';
import { Shield, Heart, Zap, Users, Compass, Target, Sparkles, Lightbulb, GraduationCap } from 'lucide-react';
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
      tag: "Notre ADN",
      title: "Redéfinir l'horizon",
      titleAccent: "éducatif.",
      description: "IKIUP est né d'une conviction simple : chaque élève possède un potentiel unique qui ne demande qu'à être éclairé par la bonne direction.",
      vision: "Notre Vision",
      visionP1: "Nous aidons les élèves à mieux se connaître grâce à des tests de personnalité basés sur les sciences cognitives. Nous ne nous contentons pas de donner des réponses, nous traçons des chemins.",
      visionP2: "Pour les parents, IKIUP est le pont qui manquait : une vision claire, sans stress, permettant de soutenir l'autonomie plutôt que de la surveiller.",
      visionP3: "En connectant élèves, parents et écoles, nous créons un écosystème de réussite circulaire.",
      philosophyTitle: "La Philosophie IkiUp",
      philosophyDesc: "Inspiré du concept d'Ikigai, notre nom symbolise l'ascension vers sa raison d'être.",
      commitments: "Nos Engagements Piliers",
      pillars: [
        {
          icon: <Shield size={24} />,
          title: "Sécurité & Éthique",
          desc: "Vos données scolaires sont sacrées. Nous garantissons une confidentialité totale et une conformité RGPD stricte.",
          color: "teal"
        },
        {
          icon: <Target size={24} />,
          title: "Précision de l'IA",
          desc: "Nos algorithmes sont entraînés pour guider, pas pour décider. Une IA éthique au service de l'humain.",
          color: "primary"
        },
        {
          icon: <Heart size={24} />,
          title: "Bienveillance",
          desc: "Nous luttons contre le stress scolaire en remplaçant l'incertitude par un plan d'action serein.",
          color: "rose"
        }
      ]
    },
    en: {
      tag: "Our DNA",
      title: "Redefining the",
      titleAccent: "educational horizon.",
      description: "IKIUP was born from a simple conviction: every student possesses a unique potential that just needs to be enlightened by the right direction.",
      vision: "Our Vision",
      visionP1: "We help students know themselves better through personality tests based on cognitive sciences. We don't just give answers; we map out paths.",
      visionP2: "For parents, IKIUP is the missing bridge: a clear, stress-free view that supports autonomy rather than monitoring it.",
      visionP3: "By connecting students, parents, and schools, we create a circular success ecosystem.",
      philosophyTitle: "The IkiUp Philosophy",
      philosophyDesc: "Inspired by the concept of Ikigai, our name symbolizes the ascent towards one's reason for being.",
      commitments: "Our Core Commitments",
      pillars: [
        {
          icon: <Shield size={24} />,
          title: "Security & Ethics",
          desc: "Your educational data is sacred. We guarantee total confidentiality and strict GDPR compliance.",
          color: "teal"
        },
        {
          icon: <Target size={24} />,
          title: "AI Precision",
          desc: "Our algorithms are trained to guide, not to decide. Ethical AI at the service of humans.",
          color: "primary"
        },
        {
          icon: <Heart size={24} />,
          title: "Kindness",
          desc: "We fight against school stress by replacing uncertainty with a serene action plan.",
          color: "rose"
        }
      ]
    }
  };

  const c = content[lang];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen transition-colors duration-500 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 text-center">
        <Reveal scale>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Sparkles size={14} />
            {c.tag}
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-black text-slate-900 dark:text-white mb-10 leading-tight">
            {c.title} <br/>
            <span className="text-primary italic relative inline-block">
              {c.titleAccent}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {c.description}
          </p>
        </Reveal>
      </section>

      {/* Philosophy Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
             <Reveal direction="left">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-3xl group-hover:bg-primary/30 transition-colors duration-700"></div>
                  <div className="relative bg-white dark:bg-slate-900 p-12 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-8 group-hover:rotate-12 transition-transform duration-500">
                        <Compass size={48} />
                      </div>
                      <h2 className="text-3xl font-serif font-bold mb-6 text-slate-900 dark:text-white">{c.philosophyTitle}</h2>
                      <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed">
                        {c.philosophyDesc}
                      </p>
                      
                      {/* Abstract Visual representation of IkiUp */}
                      <div className="mt-12 flex items-center gap-4">
                        <div className="w-12 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                        <div className="w-24 h-1.5 rounded-full bg-primary shadow-[0_0_15px_rgba(84,118,255,0.4)]"></div>
                        <div className="w-12 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                      </div>
                  </div>
                </div>
             </Reveal>
             <Reveal direction="right" delay={200}>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Orientation Prédictive</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{c.visionP1}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-bronze">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Harmonie Familiale</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{c.visionP2}</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo/10 flex items-center justify-center text-indigo">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Écosystème Circulaire</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{c.visionP3}</p>
                    </div>
                  </div>
                </div>
             </Reveal>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
             <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">{c.commitments}</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
             </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
            {c.pillars.map((pillar, i) => (
              <Reveal key={i} delay={i * 150} scale>
                <div className="p-10 rounded-[3rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-black/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group">
                    <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}/10 dark:bg-${pillar.color}/20 flex items-center justify-center text-${pillar.color} mb-8 group-hover:scale-110 transition-transform`}>
                        {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                        {pillar.desc}
                    </p>
                </div>
              </Reveal>
            ))}
        </div>
      </section>

      {/* Closing Quote */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-40 text-center">
         <Reveal delay={400}>
            <div className="text-slate-200 dark:text-slate-800 absolute -translate-y-20 left-1/2 -translate-x-1/2 pointer-events-none">
              <Zap size={200} strokeWidth={1} />
            </div>
            <p className="text-3xl md:text-4xl font-serif italic font-medium text-slate-900 dark:text-slate-100 mb-8 leading-relaxed relative z-10">
              "L'éducation n'est pas la préparation à la vie ; <br/>
              l'éducation est la vie même."
            </p>
            <div className="font-bold text-primary tracking-widest uppercase text-sm">John Dewey</div>
         </Reveal>
      </section>
    </div>
  );
};