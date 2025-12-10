import React from 'react';
import { Reveal } from './Reveal';
import { Search, Compass, MessageSquare, Smartphone, Check, ChevronDown, Clock, Settings, User } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background grain/glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] opacity-30 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-slate-900 dark:text-white">
            Votre parcours avec IKIUP
          </h2>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Steps Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Step 1 */}
              <Reveal delay={100}>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border-2 border-primary relative group transition-all h-full shadow-xl shadow-primary/5 z-10">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <User size={20} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Découverte de soi</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">Réalisez vos tests de personnalité pour identifier vos forces.</p>
                </div>
              </Reveal>

              {/* Step 2 */}
              <Reveal delay={200}>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all h-full shadow-lg z-10">
                   <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-white mb-4">
                      <Compass size={20} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Orientation guidée</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">Explorez les parcours personnalisés recommandés par l'IA.</p>
                </div>
              </Reveal>

              {/* Step 3 */}
              <Reveal delay={300}>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all h-full shadow-lg z-10">
                   <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-white mb-4">
                      <MessageSquare size={20} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Lien Famille-École</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">Simplifiez la communication via l'agenda de liaison intelligent.</p>
                </div>
              </Reveal>

              {/* Step 4 */}
              <Reveal delay={400}>
                <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 transition-all h-full shadow-lg z-10">
                   <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-white mb-4">
                      <Smartphone size={20} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Suivi quotidien</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">Les parents suivent l'évolution de leurs enfants en un coup d'œil.</p>
                </div>
              </Reveal>

            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <Reveal delay={500} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="relative w-[320px] h-[650px] bg-white dark:bg-slate-950 rounded-[3rem] border-4 border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10 transition-colors duration-300">
                {/* Status Bar */}
                <div className="h-8 px-6 flex items-center justify-between text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-2">
                    <span>9:41</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-2.5 bg-current rounded-[1px] opacity-80"></div>
                        <div className="w-0.5 h-2.5 bg-current rounded-[1px] opacity-80"></div>
                    </div>
                </div>
                
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>

                {/* App Content */}
                <div className="p-6 pt-8 text-slate-900 dark:text-white h-full flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-medium">Test de Personnalité</h3>
                    </div>

                    {/* Question Card */}
                    <div className="bg-primary/5 p-5 rounded-[2rem] border border-primary/20 mb-6">
                        <p className="text-sm font-medium mb-4 italic">"Dans un projet de groupe, je préfère m'occuper de l'organisation plutôt que de la création."</p>
                        <div className="flex gap-2">
                            <div className="flex-1 h-1 bg-primary rounded-full"></div>
                            <div className="flex-1 h-1 bg-primary rounded-full"></div>
                            <div className="flex-1 h-1 bg-slate-200 rounded-full"></div>
                            <div className="flex-1 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                    </div>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-primary text-white shadow-lg">
                            <span className="text-sm font-bold">Pas du tout d'accord</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                             <span className="text-sm font-medium">D'accord</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                             <span className="text-sm font-medium">Tout à fait d'accord</span>
                        </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="mt-auto space-y-3 pb-8">
                        <button className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-sm font-bold flex items-center justify-center gap-2">
                            Suivant
                        </button>
                    </div>
                </div>

                {/* Home Bar */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
             </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
};