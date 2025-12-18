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
    <section id="features" className="py-32 md:py-48 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-sec/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Intelligence Scolaire
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#111111] dark:text-white mb-8 tracking-tight">
              Tout pour votre <br />
              <span className="text-primary italic">réussite.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Une éducation augmentée par l'IA pour transformer chaque défi en une opportunité de croissance.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          
          <div className="md:col-span-4 row-span-1 bg-white dark:bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden group border border-gray-ui dark:border-slate-800 transition-all duration-500 hover:shadow-2xl">
             <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-gray-ui dark:bg-slate-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Search size={32} />
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif font-bold mb-4 text-[#111111] dark:text-white">Tests de Personnalité</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg leading-relaxed mb-12">
                  Explorez vos talents cachés grâce à nos analyses comportementales basées sur l'Ikigai.
                </p>
                
                <div className="mt-auto grid grid-cols-2 gap-6 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                  <div className="bg-gray-ui/40 dark:bg-slate-950 p-6 rounded-3xl border border-gray-ui dark:border-slate-800">
                    <div className="flex gap-2 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-ui"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-ui"></div>
                    </div>
                    <div className="h-2 w-full bg-gray-ui dark:bg-slate-800 rounded-full mb-3"></div>
                    <div className="h-2 w-2/3 bg-gray-ui/60 dark:bg-slate-900 rounded-full"></div>
                  </div>
                  <div className="bg-primary p-7 rounded-3xl shadow-xl flex flex-col justify-center">
                    <div className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-3">Profil Suggéré</div>
                    <div className="text-white font-serif italic text-lg leading-tight">"Futur Innovateur"</div>
                  </div>
                </div>
             </div>
          </div>

          <div className="md:col-span-2 row-span-1 bg-secondary rounded-[3rem] p-12 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#111111] flex items-center justify-center text-secondary mb-10">
                <Compass size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-[#111111]">Parcours Guidés</h3>
              <p className="text-[#111111]/70 text-base leading-relaxed">
                Connectez vos aspirations à plus de 500 métiers et formations certifiées.
              </p>
              
              <div className="mt-12 space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="h-12 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center px-5 border border-white/20">
                    <div className="w-4 h-4 rounded-full bg-[#111111]/10 mr-4"></div>
                    <div className="h-1.5 w-28 bg-[#111111]/10 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-gray-ui dark:border-slate-800 group transition-all duration-500 hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-sec/10 flex items-center justify-center text-blue-sec mb-8 group-hover:rotate-12 transition-transform">
              <MessageSquare size={26} />
            </div>
            <h4 className="text-xl font-bold mb-4 text-[#111111] dark:text-white">Lien Famille-École</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Un agenda intelligent qui simplifie les échanges entre tous les acteurs.
            </p>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-gray-ui dark:border-slate-800 group transition-all duration-500 hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:rotate-12 transition-transform">
              <BarChart3 size={26} />
            </div>
            <h4 className="text-xl font-bold mb-4 text-[#111111] dark:text-white">Tableau de Bord</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Visualisez les progrès en temps réel sans intrusion, pour plus de confiance.
            </p>
          </div>

          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-gray-ui dark:border-slate-800 group transition-all duration-500 hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-[#111111] mb-8 group-hover:rotate-12 transition-transform">
              <BookOpen size={26} />
            </div>
            <h4 className="text-xl font-bold mb-4 text-[#111111] dark:text-white">Portail École</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Outils d'administration et d'analyse pour les chefs d'établissement.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};