import React from 'react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Apple, Play } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative rounded-[3rem] overflow-hidden bg-[#1C1917] dark:bg-black text-[#FAF8F5] px-6 py-24 md:px-24 md:py-32 text-center">
            {/* Background Gradient/Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-8">
                Prêt à améliorer votre année scolaire ?
              </h2>
              <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                Rejoignez des milliers d'élèves et de parents qui utilisent IkiUp pour clarifier le chaos et se concentrer sur l'apprentissage.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Button size="lg" variant="white" className="w-full sm:w-auto gap-3 text-text" href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <Apple size={22} className="mb-1" />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Télécharger sur</span>
                        <span className="text-sm font-bold">App Store</span>
                    </div>
                 </Button>
                 <Button size="lg" className="bg-[#333] dark:bg-[#222] text-white hover:bg-[#444] border-transparent w-full sm:w-auto gap-3" href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <Play size={20} className="fill-white border-none" />
                    <div className="flex flex-col items-start leading-none">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Disponible sur</span>
                        <span className="text-sm font-bold">Google Play</span>
                    </div>
                 </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};