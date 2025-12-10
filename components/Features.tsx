import React from 'react';
import { Reveal } from './Reveal';
import { 
  Compass,
  Layout,
  MessageSquare,
  BarChart3,
  Search,
  BookOpen
} from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
            <Reveal>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text dark:text-white mb-6">
                    L'application digitale <br />
                    <span className="text-primary italic">dédiée à votre futur.</span>
                </h2>
            </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Personality Tests */}
          <div className="md:col-span-2 row-span-1 md:row-span-2 bg-primary/5 dark:bg-slate-900 rounded-4xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800">
             <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-4 shadow-sm">
                    <Search className="text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-slate-900 dark:text-slate-100">Tests de Personnalité</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm">Mieux se connaître pour mieux choisir. Nos tests psychotechniques identifient vos forces naturelles et vos centres d'intérêt.</p>
                
                {/* Visual */}
                <div className="mt-auto flex gap-4 translate-y-6 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="bg-white dark:bg-slate-950 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex-1">
                        <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Aptitudes</div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-primary"></div>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full w-[60%] bg-emerald"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary text-white p-6 rounded-3xl shadow-xl flex-1 hidden sm:block">
                        <Compass className="mb-2" size={24} />
                        <div className="text-xs font-bold opacity-80 uppercase tracking-widest">Conseil IA</div>
                        <div className="text-sm font-serif italic">"Votre profil indique une forte appétence pour les sciences humaines."</div>
                    </div>
                </div>
             </div>
          </div>

          {/* Card 2: Orientation Paths */}
          <div className="md:col-span-1 md:row-span-2 bg-emerald/5 dark:bg-emerald/10 rounded-4xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-transparent dark:border-emerald/20">
            <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-emerald/20 flex items-center justify-center mb-4 shadow-sm">
                    <Compass className="text-emerald" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-emerald dark:text-emerald-100">Parcours Personnalisés</h3>
                <p className="text-emerald-800/70 dark:text-emerald-200/70 mb-8">Recevez des recommandations d'orientation sur-mesure en fonction de vos résultats et de vos aspirations.</p>
                
                <div className="mt-auto space-y-3">
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-emerald/20 flex items-center justify-between">
                        <span className="text-sm font-medium">Ingénierie Aérospatiale</span>
                        <div className="w-2 h-2 rounded-full bg-emerald"></div>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-emerald/20 opacity-50 flex items-center justify-between">
                        <span className="text-sm font-medium">Design Graphique</span>
                        <div className="w-2 h-2 rounded-full bg-emerald"></div>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 3: School-Parent Link */}
          <div className="md:col-span-1 bg-rose/5 dark:bg-rose/10 rounded-4xl p-8 group hover:shadow-xl transition-all duration-300 border border-transparent dark:border-rose/20">
             <div className="w-12 h-12 rounded-2xl bg-white dark:bg-rose/20 flex items-center justify-center mb-4 shadow-sm">
                <Layout className="text-rose" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2 text-rose-950 dark:text-rose-100">Agenda de Liaison</h3>
            <p className="text-rose-800/70 dark:text-rose-200/70 text-sm">Le pont numérique entre l'école, les professeurs et les parents.</p>
          </div>

          {/* Card 4: Parent Visibility */}
          <div className="md:col-span-1 bg-secondary/10 dark:bg-bronze/10 rounded-4xl p-8 group hover:shadow-xl transition-all duration-300 border border-transparent dark:border-bronze/20">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-bronze/20 flex items-center justify-center mb-4 shadow-sm">
                <BarChart3 className="text-bronze dark:text-secondary" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2 text-bronze dark:text-secondary">Vision Parentale</h3>
            <p className="text-bronze/70 dark:text-secondary/70 text-sm">Une vision claire du suivi et de l'évolution de vos enfants.</p>
          </div>

          {/* Card 5: School Portal */}
          <div className="md:col-span-1 bg-indigo/5 dark:bg-indigo/10 rounded-4xl p-8 group hover:shadow-xl transition-all duration-300 border border-transparent dark:border-indigo/20">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-indigo/20 flex items-center justify-center mb-4 shadow-sm">
                <BookOpen className="text-indigo dark:text-indigo-300" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-2 text-indigo dark:text-indigo-100">Portail École</h3>
            <p className="text-indigo/70 dark:text-indigo-200/70 text-sm">Statistiques et gestion de classe pour les établissements.</p>
          </div>

        </div>
      </div>
    </section>
  );
};