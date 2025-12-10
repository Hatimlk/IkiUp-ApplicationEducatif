import React, { useRef, useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const screenshots = [
  { id: 1, title: "Votre Tableau de Bord", color: "bg-primary/5 dark:bg-primary/10" },
  { id: 2, title: "Discutez avec Kaïa", color: "bg-rose/5 dark:bg-rose/10" },
  { id: 3, title: "Analyse des Notes", color: "bg-emerald/5 dark:bg-emerald/10" },
  { id: 4, title: "Planning Hebdomadaire", color: "bg-secondary/10 dark:bg-bronze/10" },
  { id: 5, title: "Camarades de Classe", color: "bg-indigo/5 dark:bg-indigo/10" },
];

export const Showcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if(el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="showcase" className="py-32 bg-white dark:bg-slate-900 rounded-t-[4rem] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <Reveal>
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-text mb-6">
                Simple par design.
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-light">
                Nous avons éliminé le superflu. Ce qui reste est un outil naturel, calme et incroyablement puissant.
              </p>
            </div>
          </Reveal>
          
          <div className="flex gap-3 hidden md:flex">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border border-slate-200 dark:border-slate-700 transition-all ${
                canScrollLeft ? 'bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 text-text shadow-sm' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-700 cursor-not-allowed border-transparent'
              }`}
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border border-slate-200 dark:border-slate-700 transition-all ${
                canScrollRight ? 'bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 text-text shadow-sm' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-300 dark:text-slate-700 cursor-not-allowed border-transparent'
              }`}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-12 no-scrollbar snap-x snap-mandatory"
      >
        {screenshots.map((screen, index) => (
          <div 
            key={screen.id} 
            className="flex-shrink-0 snap-center first:pl-0"
          >
            <div className="relative w-[300px] h-[600px] bg-white dark:bg-slate-900 rounded-[3rem] border-8 border-slate-100 dark:border-slate-800 shadow-2xl dark:shadow-black/50 overflow-hidden group transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl">
              {/* Fake UI Content */}
              <div className={`w-full h-full flex flex-col ${screen.color} bg-opacity-50 transition-colors`}>
                {/* Header */}
                <div className="h-28 flex items-end p-6">
                    <h3 className="font-serif font-bold text-2xl text-slate-800 dark:text-slate-100">{screen.title}</h3>
                </div>
                {/* Body Content Placeholder */}
                <div className="flex-1 px-4 space-y-3 overflow-hidden">
                    <div className="bg-white/60 dark:bg-white/10 rounded-3xl p-4 h-32 animate-pulse mb-2"></div>
                    <div className="bg-white/60 dark:bg-white/10 rounded-3xl p-4 h-20 animate-pulse delay-75"></div>
                    <div className="bg-white/60 dark:bg-white/10 rounded-3xl p-4 h-20 animate-pulse delay-100"></div>
                    <div className="bg-white/60 dark:bg-white/10 rounded-3xl p-4 h-20 animate-pulse delay-150"></div>
                </div>
                {/* Bottom Tab Bar */}
                <div className="h-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-evenly border-t border-transparent dark:border-slate-800">
                     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400"><div className="w-5 h-5 bg-current rounded-full opacity-50"></div></div>
                     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 shadow-lg"><div className="w-5 h-5 bg-current rounded-full"></div></div>
                     <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400"><div className="w-5 h-5 bg-current rounded-full opacity-50"></div></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="w-10 flex-shrink-0"></div>
      </div>
    </section>
  );
};