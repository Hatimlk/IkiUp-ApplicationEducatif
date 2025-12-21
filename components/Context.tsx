import React from 'react';
import { Reveal } from './Reveal';
import { Compass, BarChart3, MessageCircle, ArrowRight } from 'lucide-react';

export const Context: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Le Contexte
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Pour un parcours <br />
              <span className="text-primary italic">sans obstacles.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed text-balance">
              Comprendre, suivre et accompagner un parcours scolaire demande aujourd'hui plus de clarté et de lien entre tous les acteurs.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -translate-y-1/2 -z-10"></div>

          {/* Card 1 */}
          <Reveal delay={100} direction="up">
            <div className="group h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Compass size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Orientation</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Trouver sa voie ne devrait pas être un parcours du combattant, mais une exploration éclairée.
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200} direction="up">
            <div className="group h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="w-16 h-16 rounded-2xl bg-secondary/20 text-slate-900 dark:text-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Suivi scolaire</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Centraliser les notes, les absences et l'agenda pour une vision globale et sereine.
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300} direction="up">
            <div className="group h-full p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-black/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Communication</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Rétablir le lien de confiance entre la famille et l'école grâce à des échanges fluides.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
