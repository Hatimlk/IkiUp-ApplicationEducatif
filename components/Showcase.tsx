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
    color: "from-[#5A73E8]/10 to-[#8FA1F3]/10", 
    accent: "text-[#5A73E8]",
    icon: <LayoutDashboard size={24} />,
    tag: "Aperçu"
  },
  { 
    id: 2, 
    title: "Orientation IA", 
    color: "from-[#F6DE7A]/10 to-[#5A73E8]/10", 
    accent: "text-[#111111]",
    icon: <Search size={24} />,
    tag: "Conseil"
  },
  { 
    id: 3, 
    title: "Suivi Parents", 
    color: "from-blue-sec/10 to-primary/10", 
    accent: "text-blue-sec",
    icon: <BarChart3 size={24} />,
    tag: "Stats"
  },
  { 
    id: 4, 
    title: "Agenda Partagé", 
    color: "from-[#5A73E8]/10 to-[#E6E8EF]/50", 
    accent: "text-[#5A73E8]",
    icon: <Calendar size={24} />,
    tag: "Planning"
  },
  { 
    id: 5, 
    title: "Espace Social", 
    color: "from-[#8FA1F3]/10 to-[#5A73E8]/10", 
    accent: "text-[#8FA1F3]",
    icon: <Users size={24} />,
    tag: "Vie Scolaire"
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
      checkScroll();
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
    <section id="showcase" className="relative py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-sec/10 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={14} />
              Design Premium
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-black text-[#111111] dark:text-white mb-8">
              Une interface <span className="text-primary italic">humaine.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
              Nous avons supprimé tout le superflu pour que vous puissiez vous concentrer sur l'essentiel : apprendre.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-6 lg:px-20 pointer-events-none hidden lg:flex">
          <button 
            onClick={() => scroll('left')}
            className={`p-6 rounded-full bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800 transition-all pointer-events-auto shadow-xl ${
              canScrollLeft ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <ArrowLeft size={24} className="text-[#111111] dark:text-white" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className={`p-6 rounded-full bg-white dark:bg-slate-900 border border-gray-ui dark:border-slate-800 transition-all pointer-events-auto shadow-xl ${
              canScrollRight ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <ArrowRight size={24} className="text-[#111111] dark:text-white" />
          </button>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto px-6 sm:px-20 md:px-32 lg:px-[20%] pb-24 no-scrollbar snap-x snap-mandatory"
        >
          {screenshots.map((screen) => (
            <div key={screen.id} className="flex-shrink-0 snap-center">
              <div className="relative w-[300px] md:w-[340px] group">
                <div className="relative aspect-[9/19.5] bg-[#111111] rounded-[3.8rem] p-3 shadow-2xl transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#111111] rounded-full z-20"></div>
                  
                  <div className="w-full h-full rounded-[3rem] overflow-hidden bg-white dark:bg-slate-950 relative flex flex-col">
                    <div className="pt-14 px-7 pb-6 flex justify-between items-center">
                      <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${screen.color} flex items-center justify-center ${screen.accent}`}>
                        {screen.icon}
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gray-ui dark:bg-slate-800 flex items-center justify-center">
                        <Bell size={16} className="text-slate-400" />
                      </div>
                    </div>

                    <div className="flex-1 px-7 space-y-6">
                      <div className="flex items-center justify-between">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{screen.tag}</span>
                         <span className="text-[9px] bg-gray-ui dark:bg-slate-800 px-3 py-1 rounded-full text-slate-500 font-bold uppercase tracking-wider">Now</span>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-black text-[#111111] dark:text-white leading-tight">
                        {screen.title}
                      </h3>

                      <div className="space-y-4">
                        <div className="p-5 rounded-3xl bg-gray-ui/30 dark:bg-slate-900 border border-gray-ui dark:border-slate-800">
                          <div className="h-2 w-3/4 bg-gray-ui dark:bg-slate-700 rounded-full mb-4"></div>
                          <div className="h-2 w-1/2 bg-gray-ui/50 dark:bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="p-5 rounded-3xl bg-gray-ui/30 dark:bg-slate-900 border border-gray-ui dark:border-slate-800">
                          <div className="flex gap-3 items-center mb-4">
                            <div className="w-7 h-7 rounded-xl bg-gray-ui dark:bg-slate-700"></div>
                            <div className="h-2 w-1/4 bg-gray-ui dark:bg-slate-700 rounded-full"></div>
                          </div>
                          <div className="h-2 w-full bg-gray-ui dark:bg-slate-800 rounded-full overflow-hidden">
                             <div className={`h-full bg-primary w-2/3`}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-24 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-t border-gray-ui dark:border-slate-800 flex items-center justify-around px-8">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300">
                        <Search size={22} />
                      </div>
                      <div className={`w-14 h-14 rounded-2xl bg-primary shadow-xl shadow-primary/30 flex items-center justify-center text-white`}>
                        {screen.icon}
                      </div>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-300">
                        <Users size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-20 flex-shrink-0"></div>
        </div>
      </div>

      <div className="max-w-xs mx-auto flex flex-col items-center gap-6">
        <div className="w-full h-1.5 bg-gray-ui dark:bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.max(10, scrollProgress)}%` }}
          ></div>
        </div>
        <div className="flex gap-3">
          {screenshots.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 transition-all duration-300 rounded-full ${
                Math.abs(scrollProgress - (i / (screenshots.length - 1)) * 100) < 15 
                ? 'w-10 bg-primary' 
                : 'w-2 bg-gray-ui dark:bg-slate-800'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};