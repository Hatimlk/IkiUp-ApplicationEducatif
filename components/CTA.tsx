import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Apple, Play, Mail, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="download" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative rounded-[4rem] overflow-hidden bg-[#0F172A] text-[#FAFAFA] border border-white/5">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
               <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-20"></div>
               <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-sec rounded-full blur-[120px] opacity-10"></div>
            </div>

            <div className="relative z-10 px-8 py-20 md:px-20 md:py-28">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side: App Download & Offers Info */}
                <div className="text-left">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                    Offres & Application
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-8 leading-tight">
                    Ouvrez la porte à leur <span className="text-secondary italic">futur.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-xl">
                    IkiUp propose différentes formules pour les familles et les établissements, afin de rendre l’accompagnement éducatif accessible et évolutif. Les détails des offres sont disponibles directement dans l’application.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                     <Button size="lg" variant="white" className="w-full sm:w-auto min-w-[200px] gap-3 h-14" href="https://apps.apple.com" target="_blank">
                        <Apple size={22} className="mb-0.5" />
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[8px] uppercase font-black tracking-widest opacity-50 mb-0.5">App Store</span>
                            <span className="text-base font-bold">Download</span>
                        </div>
                     </Button>
                     <Button size="lg" className="bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto min-w-[200px] gap-3 h-14 border border-white/10 backdrop-blur-sm" href="https://play.google.com" target="_blank">
                        <Play size={20} className="fill-white mb-0.5" />
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[8px] uppercase font-black tracking-widest opacity-50 mb-0.5">Google Play</span>
                            <span className="text-base font-bold">Get it on</span>
                        </div>
                     </Button>
                  </div>
                </div>

                {/* Right Side: Contact & Discovery */}
                <div className="lg:pl-12 lg:border-l lg:border-white/10">
                  <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white/10">
                    <h3 className="text-3xl font-serif font-black text-white mb-6">
                      Envie d’en savoir plus ?
                    </h3>
                    <p className="text-slate-300 mb-10 font-medium leading-relaxed">
                      Vous êtes parent, élève ou établissement et souhaitez découvrir IkiUp ? Contactez-nous pour échanger sur vos besoins.
                    </p>
                    
                    <a 
                      href="mailto:contact@ikiup.com" 
                      className="group flex items-center justify-between p-6 rounded-3xl bg-primary/10 border border-primary/20 hover:bg-primary transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-primary transition-colors">
                          <Mail size={24} />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/80">Nous écrire</div>
                          <div className="text-lg font-bold text-white">contact@ikiup.com</div>
                        </div>
                      </div>
                      <ArrowRight size={24} className="text-primary group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};