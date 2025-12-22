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

      {/* Bento Grid: Philosophy & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

          {/* Philosophy - Spans 2 cols (or full on mobile) */}
          <div className="md:col-span-2 row-span-2">
            <Reveal className="h-full">
              <div className="h-full bg-slate-900 text-white p-10 md:p-14 rounded-[3rem] relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 rotate-3 group-hover:rotate-12 transition-transform duration-500">
                      <Compass size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">{c.philosophyTitle}</h2>
                    <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-md">
                      {c.philosophyDesc}
                    </p>
                  </div>
                  {/* Decorative lines at bottom */}
                  <div className="mt-12 flex items-center gap-2 opacity-50">
                    <div className="h-1 w-12 bg-white/20 rounded-full"></div>
                    <div className="h-1 w-24 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Vision Item 1: Orientation - Vertical block */}
          <div className="md:col-span-1 row-span-2">
            <Reveal delay={100} className="h-full" direction="left">
              <div className="h-full bg-emerald/5 dark:bg-emerald/10 p-10 rounded-[3rem] flex flex-col items-center text-center justify-center border border-emerald/10 hover:border-emerald/30 transition-colors duration-500 relative group overflow-hidden">
                <div className="absolute inset-0 bg-emerald/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-[3rem] origin-center"></div>
                <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full shadow-lg shadow-emerald/10 flex items-center justify-center text-emerald mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Orientation Prédictive</h3>
                <p className="text-slate-500 dark:text-slate-400 font-light relative z-10">{c.visionP1}</p>
              </div>
            </Reveal>
          </div>

          {/* Vision Item 2: Harmonie - Large horizonal or small square - keeping neat square */}
          <div className="md:col-span-1">
            <Reveal delay={200} className="h-full" direction="up">
              <div className="h-full bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl flex flex-col justify-center items-start hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-500 mb-4 group-hover:rotate-6 transition-transform">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Harmonie</h3>
                <p className="text-sm text-slate-500 font-light line-clamp-3">{c.visionP2}</p>
              </div>
            </Reveal>
          </div>

          {/* Vision Item 3: Ecosystem - Fill remaining */}
          <div className="md:col-span-2">
            <Reveal delay={300} className="h-full" direction="up">
              <div className="h-full bg-gradient-to-r from-indigo/5 to-purple-500/5 dark:from-indigo/10 dark:to-purple-900/10 p-8 rounded-[2.5rem] border border-indigo/10 flex items-center gap-8 group hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="shrink-0 w-20 h-20 bg-indigo text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo/30 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={40} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Écosystème Circulaire</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-light">{c.visionP3}</p>
                </div>
              </div>
            </Reveal>
          </div>

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
    </div>
  );
};