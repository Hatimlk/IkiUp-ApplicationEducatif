import React, { useRef, useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import { 
  ArrowRight, 
  ArrowLeft, 
  LayoutDashboard, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Users,
  Bell,
  Search,
  Sparkles
} from 'lucide-react';

const screenshots = [
  { 
    id: 1, 
    title: "Tableau de Bord", 
    color: "from-blue-500/10 to-indigo-500/10", 
    accent: "text-blue-500",
    icon: <LayoutDashboard size={24} />,
    tag: "Aperçu"
  },
  { 
    id: 2, 
    title: "Agent Kaïa", 
    color: "from-rose-500/10 to-orange-500/10", 
    accent: "text-rose-500",
    icon: <MessageSquare size={24} />,
    tag: "IA Tutorat"
  },
  { 
    id: 3, 
    title: "Suivi des Notes", 
    color: "from-emerald-500/10 to-teal-500/10", 
    accent: "text-emerald-500",
    icon: <BarChart3 size={24} />,
    tag: "Analytics"
  },
  { 
    id: 4, 
    title: "Planning", 
    color: "from-amber-500/10 to-yellow-500/10", 
    accent: "text-amber-500",
    icon: <Calendar size={24} />,
    tag: "Organisation"
  },
  { 
    id: 5, 
    title: "Espace Social", 
    color: "from-purple-500/10 to-indigo-500/10", 
    accent: "text-purple-500",
    icon: <Users size={24} />,
    tag: "Communauté"
  },
];

export const Showcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      // Handle resize
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      el?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section id="showcase" className="relative py-32 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 transition-colors duration-500">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Interface Intuitive
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 dark:text-white mb-6">
              L'expérience <span className="text-primary italic">IkiUp.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
              Une conception centrée sur l'humain pour rendre chaque interaction fluide, calme et gratifiante.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="relative">
        {/* Navigation Buttons (Desktop) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-4 md:px-12 pointer-events-none hidden lg:flex">
          <button 
            onClick={() => scroll('left')}
            className={`p-5 rounded-full backdrop-blur-xl border transition-all pointer-events-auto ${
              canScrollLeft ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white shadow-2xl opacity-100' : 'opacity-0 scale-90 cursor-default'
            }`}
            aria-label="Scroll left"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className={`p-5 rounded-full backdrop-blur-xl border transition-all pointer-events-auto ${
              canScrollRight ? 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white shadow-2xl opacity-100' : 'opacity-0 scale-90 cursor-default'
            }`}
            aria-label="Scroll right"
          >
            <ArrowRight size={24} />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-4 sm:px-12 md:px-24 lg:px-[15%] pb-20 no-scrollbar snap-x snap-mandatory"
        >
          {screenshots.map((screen, index) => (
            <div 
              key={screen.id} 
              className="flex-shrink-0 snap-center"
            >
              <div className="relative w-[280px] md:w-[320px] group">
                {/* Phone Mockup Container */}
                <div className="relative aspect-[9/19.5] bg-slate-900 rounded-[3rem] p-3 shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1 ring-1 ring-black/10 dark:ring-white/10">
                  {/* Speaker/Camera Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>
                  
                  {/* Screen Content */}
                  <div className={`w-full h-full rounded-[2.2rem] overflow-hidden bg-white dark:bg-slate-950 relative flex flex-col`}>
                    {/* App Bar Mockup */}
                    <div className="pt-10 px-6 pb-4 flex justify-between items-center">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${screen.color} flex items-center justify-center ${screen.accent}`}>
                        {screen.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Bell size={14} className="text-slate-400" />
                      </div>
                    </div>

                    {/* Content UI Mockup */}
                    <div className="flex-1 px-6 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{screen.tag}</span>
                         <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-slate-500">Aujourd'hui</span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-slate-800 dark:text-slate-100 leading-tight">
                        {screen.title}
                      </h3>

                      <div className="space-y-3">
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 animate-pulse">
                          <div className="h-2 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full mb-3"></div>
                          <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 animate-pulse delay-75">
                          <div className="flex gap-2 items-center mb-3">
                            <div className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700"></div>
                            <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                             <div className={`h-full bg-gradient-to-r ${screen.color.replace('/10', '')} w-2/3`}></div>
                          </div>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 animate-pulse delay-150">
                           <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Nav Mockup */}
                    <div className="h-20 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-slate-50 dark:border-slate-800 flex items-center justify-around px-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300">
                        <Search size={18} />
                      </div>
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${screen.color.replace('/10', '')} shadow-lg shadow-primary/20 flex items-center justify-center text-white`}>
                        {screen.icon}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-300">
                        <Users size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rounded-[3rem]"></div>
              </div>
            </div>
          ))}
          {/* Padding End */}
          <div className="w-10 flex-shrink-0"></div>
        </div>
      </div>

      {/* Progress Bar Navigation */}
      <div className="max-w-xs mx-auto mt-8 flex flex-col items-center gap-4">
        <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.max(5, scrollProgress)}%` }}
          ></div>
        </div>
        <div className="flex gap-2">
          {screenshots.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-300 rounded-full ${
                Math.abs(scrollProgress - (i / (screenshots.length - 1)) * 100) < 15 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};