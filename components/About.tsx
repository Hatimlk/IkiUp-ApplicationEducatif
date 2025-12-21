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
      storyTag: "À PROPOS",
      storyTitle: "IkiUp est née d’un besoin réel.",
      storyText: "Comme beaucoup de parents, j’ai cherché comment mieux accompagner mon enfant dans son parcours scolaire et ses choix d’orientation. Les solutions que j’ai trouvées étaient peu accessibles, contraignantes ou proposées trop tard.\n\nC’est ainsi qu’est née l’idée d’IkiUp : une application pensée pour être simple, accessible à tout moment et à portée de main. Elle accompagne les enfants dans leur réflexion, aide les parents à les soutenir avec plus de justesse, et permet aux écoles de mieux comprendre les besoins des élèves afin d’adapter leur accompagnement pédagogique. IkiUp a été conçue pour structurer le parcours scolaire, offrir des repères clairs et avancer pas à pas, ensemble, dans un cadre serein et humain.",
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
      storyTag: "ABOUT US",
      storyTitle: "IkiUp was born from a real need.",
      storyText: "Like many parents, I looked for how to better support my child in their school journey and orientation choices. The solutions I found were inaccessible, restrictive, or proposed too late.\n\nThus was born the idea of IkiUp: an application designed to be simple, accessible at any time, and at hand. It supports children in their reflection, helps parents support them with greater accuracy, and allows schools to better understand the needs of students to adapt their pedagogical support. IkiUp was designed to structure the school journey, offer clear benchmarks, and move forward step by step, together, in a serene and human framework.",
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
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-32 text-center relative z-10">
        <Reveal scale>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
            {c.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-sec italic relative inline-block pb-2">
              {c.titleAccent}
              <svg className="absolute bottom-0 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 10, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            {c.description}
          </p>
        </Reveal>
      </section>

      {/* Story Section - Centered Glass Card */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-40">
        <Reveal>
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-16 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden text-center">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              {c.storyTag}
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-8">
              {c.storyTitle}
            </h2>

            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-400 font-light leading-relaxed mx-auto max-w-3xl">
              {c.storyText.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6 last:mb-0 first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:font-bold first-letter:mr-2 list-none first-letter:float-left first-letter:leading-none">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Philosophy & Vision - Symmetric Layout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">

        {/* Philosophy Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-8 mx-auto rotate-3 hover:rotate-12 transition-transform duration-500">
              <Compass size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 dark:text-white">{c.philosophyTitle}</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xl font-light leading-relaxed">
              {c.philosophyDesc}
            </p>
            {/* Simple visual separator */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary/20"></div>
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
              <div className="w-3 h-3 rounded-full bg-primary/20"></div>
            </div>
          </Reveal>
        </div>

        {/* Vision Grid - 3 Columns Symmetric */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <Reveal delay={100} direction="up">
            <div className="h-full bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald/10 flex items-center justify-center text-emerald mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Orientation Prédictive</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{c.visionP1}</p>
            </div>
          </Reveal>

          {/* Item 2 */}
          <Reveal delay={200} direction="up">
            <div className="h-full bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center relative z-10">
              {/* Highlight central element slightly */}
              <div className="absolute inset-x-0 -top-12 flex justify-center pointer-events-none -z-10 opacity-50">
                <div className="w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
              </div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center text-amber-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Harmonie Familiale</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{c.visionP2}</p>
            </div>
          </Reveal>

          {/* Item 3 */}
          <Reveal delay={300} direction="up">
            <div className="h-full bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo/10 flex items-center justify-center text-indigo">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Écosystème Circulaire</h3>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{c.visionP3}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitments Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Shield size={12} />
              Valeurs
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6">{c.commitments}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Des principes inébranlables pour construire un futur de confiance.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {c.pillars.map((pillar, i) => (
            <Reveal key={i} delay={i * 150} scale>
              <div className="p-10 rounded-[3rem] bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${pillar.color}/5 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-150`}></div>

                <div className={`w-16 h-16 rounded-2xl bg-${pillar.color}/10 dark:bg-${pillar.color}/20 flex items-center justify-center text-${pillar.color} mb-8 group-hover:rotate-6 transition-transform duration-300`}>
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
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-40 pb-20 text-center">
        <Reveal delay={400}>
          <div className="text-slate-200 dark:text-slate-800 absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
            <Zap size={250} strokeWidth={0.5} className="opacity-50" />
          </div>
          <blockquote className="relative">
            <div className="text-6xl text-primary/20 font-serif absolute -top-8 -left-4">"</div>
            <p className="text-3xl md:text-5xl font-serif italic font-medium text-slate-900 dark:text-slate-100 mb-8 leading-relaxed relative z-10">
              L'éducation n'est pas la préparation à la vie ; <br />
              <span className="text-primary">l'éducation est la vie même.</span>
            </p>
          </blockquote>
          <div className="font-bold text-slate-400 tracking-widest uppercase text-sm mt-8 border-t border-slate-200 dark:border-slate-800 inline-block px-8 py-4">John Dewey</div>
        </Reveal>
      </section>
    </div>
  );
};