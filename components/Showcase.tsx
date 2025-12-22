
import React, { useRef, useState, useEffect } from 'react';
import { Reveal } from './Reveal';
import {
  ArrowRight,
  ArrowLeft,
  LayoutDashboard,
  BarChart3,
  Calendar,
  Users,
  Bell,
  Search,
  Sparkles
} from 'lucide-react';
import { translations, Language } from '../translations';

interface ShowcaseProps {
  lang?: Language;
}

const screenConfig = [
  {
    id: 1,
    color: "from-[#5A73E8]/10 to-[#8FA1F3]/10",
    accent: "text-[#5A73E8]",
    icon: <LayoutDashboard size={24} />,
  },
  {
    id: 2,
    color: "from-[#F6DE7A]/10 to-[#5A73E8]/10",
    accent: "text-slate-900",
    icon: <Search size={24} />,
  },
  {
    id: 3,
    color: "from-blue-sec/10 to-primary/10",
    accent: "text-blue-sec",
    icon: <BarChart3 size={24} />,
  },
  {
    id: 4,
    color: "from-[#5A73E8]/10 to-slate-100",
    accent: "text-primary",
    icon: <Calendar size={24} />,
  },
  {
    id: 5,
    color: "from-[#8FA1F3]/10 to-primary/10",
    accent: "text-blue-sec",
    icon: <Users size={24} />,
  },
];

export const Showcase: React.FC<ShowcaseProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].showcase;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Merge Config with Translations
  const screenshots = t.screens.map((screen, index) => ({
    ...screenConfig[index],
    ...screen
  }));

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
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
      const scrollAmount = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="showcase" className="relative py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-sec/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              {t.tag}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6">
              {t.title} <span className="text-primary italic">{t.titleAccent}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-normal max-w-2xl mx-auto">
              {t.description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative group/showcase">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-6 lg:px-12 pointer-events-none hidden lg:flex">
          <button
            onClick={() => scroll('left')}
            className={`p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all pointer-events-auto shadow-xl ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
          >
            <ArrowLeft size={20} className="text-slate-900 dark:text-white" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all pointer-events-auto shadow-xl ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
          >
            <ArrowRight size={20} className="text-slate-900 dark:text-white" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-6 sm:px-20 lg:px-[25%] pb-16 no-scrollbar snap-x snap-mandatory"
        >
          {screenshots.map((screen) => (
            <div key={screen.id} className="flex-shrink-0 snap-center">
              <div className="relative w-[280px] sm:w-[320px] transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative aspect-[9/19.5] bg-slate-950 rounded-[3.2rem] p-2.5 shadow-2xl border border-white/10">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-950 rounded-full z-20"></div>

                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 relative flex flex-col">
                    <div className="pt-12 px-6 pb-6 flex justify-between items-center">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${screen.color} flex items-center justify-center ${screen.accent}`}>
                        {screen.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                        <Bell size={14} className="text-slate-400" />
                      </div>
                    </div>

                    <div className="flex-1 px-6 space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{screen.tag}</span>
                        <span className="text-[8px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full text-slate-500 font-bold">{t.active}</span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
                        {screen.title}
                      </h3>

                      <div className="space-y-3">
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <div className="h-1.5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full mb-3"></div>
                          <div className="h-1.5 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className={`h-full bg-primary w-2/3`}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-around">
                      <Search size={18} className="text-slate-300" />
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        {screen.icon}
                      </div>
                      <Users size={18} className="text-slate-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-20 flex-shrink-0"></div>
        </div>
      </div>

      <div className="max-w-[240px] mx-auto flex flex-col items-center gap-6">
        <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.max(10, scrollProgress)}%` }}
          ></div>
        </div>
        <div className="flex gap-2">
          {screenshots.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${Math.abs(scrollProgress - (i / (screenshots.length - 1)) * 100) < 15
                ? 'w-6 bg-primary'
                : 'w-1.5 bg-slate-200 dark:bg-slate-800'
                }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};