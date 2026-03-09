import React, { useRef, useState, useEffect } from 'react';
import { Reveal } from '../ui/Reveal';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { translations, Language } from '../../lib/translations';

import screen1 from '../../assets/1.png';
import screen2 from '../../assets/2.png';
import screen3 from '../../assets/3.png';
import screen4 from '../../assets/4.png';
import screen5 from '../../assets/5.png';

interface ShowcaseProps {
  lang?: Language;
}

const screens = [
  { id: 1, image: screen1 },
  { id: 2, image: screen2 },
  { id: 3, image: screen3 },
  { id: 4, image: screen4 },
  { id: 5, image: screen5 },
];

export const Showcase: React.FC<ShowcaseProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].showcase;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
    <section id="showcase" className="relative py-16 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-sec/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              {t.tag}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-text mb-6">
              {t.title} <span className="text-primary">{t.titleAccent}</span>
            </h2>
            <p className="text-lg text-slate-600 font-normal max-w-2xl mx-auto">
              {t.description}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative group/showcase">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-6 lg:px-12 pointer-events-none hidden lg:flex">
          <button
            onClick={() => scroll('left')}
            className={`p-4 rounded-full bg-white border border-slate-200 transition-all pointer-events-auto shadow-xl ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
          >
            <ArrowLeft size={20} className="text-text" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`p-4 rounded-full bg-white border border-slate-200 transition-all pointer-events-auto shadow-xl ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
          >
            <ArrowRight size={20} className="text-text" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-6 sm:px-20 lg:px-[25%] pb-16 no-scrollbar snap-x snap-mandatory"
        >
          {screens.map((screen) => (
            <div key={screen.id} className="flex-shrink-0 snap-center">
              <div className="relative w-[280px] sm:w-[320px] transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative aspect-[9/19.5] bg-slate-950 rounded-[3.2rem] p-2.5 shadow-2xl border border-white/10">
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-950 rounded-full z-20"></div>

                  <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    <img
                      src={screen.image}
                      alt={`App screen ${screen.id}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-20 flex-shrink-0"></div>
        </div>
      </div>

      <div className="max-w-[240px] mx-auto flex flex-col items-center gap-6">
        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.max(10, scrollProgress)}%` }}
          ></div>
        </div>
        <div className="flex gap-2">
          {screens.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 transition-all duration-300 rounded-full ${Math.abs(scrollProgress - (i / (screens.length - 1)) * 100) < 15
                ? 'w-6 bg-primary'
                : 'w-1.5 bg-slate-200'
                }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};