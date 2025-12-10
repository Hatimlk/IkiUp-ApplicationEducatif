import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    content: "Enfin une application qui apaise les tensions à la maison. Je suis les devoirs de mon fils sans être constamment 'sur son dos'. C'est un vrai soulagement.",
    author: "Sophie Martin",
    role: "Maman de 2 collégiens",
    rating: 5
  },
  {
    content: "Kaïa m'a littéralement sauvé pour le Bac blanc. Les explications sont souvent plus claires que mes cours, et le planning s'adapte quand je prends du retard.",
    author: "Thomas Dubois",
    role: "Élève de Terminale",
    rating: 5
  },
  {
    content: "L'interface est magnifique et tellement fluide. C'est la première fois que je prends plaisir à organiser mes révisions. Un outil indispensable.",
    author: "Léa Benali",
    role: "Étudiante en Seconde",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-white mb-6">
                 Ils ont réussi avec IkiUp
               </h2>
               <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
                 Rejoignez une communauté d'élèves et de parents plus sereins.
               </p>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 200}>
              <div className="h-full p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 flex flex-col group cursor-default">
                <div className="mb-6 text-primary/80 dark:text-primary/60">
                  <Quote size={40} className="fill-current transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 flex-1">
                  "{t.content}"
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6">
                  <div>
                    <div className="font-bold text-text dark:text-slate-200 mb-0.5">{t.author}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.role}</div>
                  </div>
                  <div className="flex gap-0.5 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-full border border-yellow-100 dark:border-yellow-900/30">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};