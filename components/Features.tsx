import React from 'react';
import { Reveal } from './Reveal';
import { 
  Compass,
  Layout,
  MessageSquare,
  BarChart3,
  Search,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 md:py-48 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Puissance de l'IA
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              L'avenir se construit <br />
              <span className="text-primary italic">avec clarté.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Une suite d'outils intelligents conçus pour transformer l'incertitude en parcours de réussite.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Main AI Tool */}
          <div className="md:col-span-4 row-span-1 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-10 relative overflow-hidden group border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
             <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Search size={32} />
                  </div>
                  <div className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Tests de Personnalité</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg leading-relaxed mb-12">
                  Nos algorithmes identifient vos forces naturelles et vos aspirations pour vous proposer des voies où vous excellerez.
                </p>
                
                {/* Visual Interface Mock */}
                <div className="mt-auto grid grid-cols-2 gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-3"></div>
                    <div className="h-2 w-2/3 bg-slate-50 dark:bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="bg-primary p-6 rounded-3xl shadow-xl flex flex-col justify-center">
                    <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">Recommandation</div>
                    <div className="text-white font-serif italic text-sm leading-tight">"Architecte de Systèmes"</div>
                  </div>
                </div>
             </div>
          </div>

          {/* Card 2: Personal Paths */}
          <div className="md:col-span-2 row-span-1 bg-emerald/5 dark:bg-emerald/10 rounded-[3rem] p-10 relative overflow-hidden group border border-emerald/10 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald/10">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-emerald mb-8">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-emerald-900 dark:text-emerald-100">Parcours Sur-Mesure</h3>
              <p className="text-emerald-800/60 dark:text-emerald-400 text-base leading-relaxed">
                Plus de 500 fiches métiers et formations connectées à vos résultats réels.
              </p>
              
              <div className="mt-12 space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="h-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-emerald/5 flex items-center px-4 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                    <div className="w-4 h-4 rounded-full bg-emerald/20 mr-3"></div>
                    <div className="h-2 w-24 bg-emerald/10 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 Smaller Cards */}
          <div className="md:col-span-2 bg-rose/5 dark:bg-rose/10 rounded-[3rem] p-8 border border-rose/10 group transition-all duration-500 hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-rose mb-6 group-hover:rotate-12 transition-transform">
              <Layout size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">Lien École-Famille</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Un agenda de liaison intelligent qui centralise les communications cruciales.
            </p>
          </div>

          <div className="md:col-span-2 bg-amber/5 dark:bg-amber/10 rounded-[3rem] p-8 border border-amber/10 group transition-all duration-500 hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-amber-500 mb-6 group-hover:rotate-12 transition-transform">
              <BarChart3 size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">Vision Parentale</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Tableaux de bord intuitifs pour suivre l'évolution sans micro-management.
            </p>
          </div>

          <div className="md:col-span-2 bg-indigo/5 dark:bg-indigo/10 rounded-[3rem] p-8 border border-indigo/10 group transition-all duration-500 hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-indigo mb-6 group-hover:rotate-12 transition-transform">
              <BookOpen size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3 dark:text-white">Portail Établissement</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Outils d'analyse globale pour les directeurs et professeurs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};