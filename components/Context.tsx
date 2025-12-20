import React from 'react';
import { Reveal } from './Reveal';
import { Compass, BarChart3, MessageCircle } from 'lucide-react';

export const Context: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#FDFDFF] dark:bg-[#0B1121]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-ui/40 dark:bg-white/5 border border-gray-ui dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Le Contexte
            </div>
            <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-medium leading-relaxed text-balance">
              Comprendre, suivre et accompagner un parcours scolaire demande aujourd'hui plus de clarté et de lien entre tous les acteurs.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal delay={100} direction="up">
            <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-black/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Orientation</h3>
            </div>
          </Reveal>

          <Reveal delay={200} direction="up">
            <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-black/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/15 text-slate-900 dark:text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Suivi scolaire</h3>
            </div>
          </Reveal>

          <Reveal delay={300} direction="up">
            <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-black/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-sec/15 text-blue-sec flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Communication école-famille</h3>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
