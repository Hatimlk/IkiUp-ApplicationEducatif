import React from 'react';
import { Reveal } from '../ui/Reveal';
import {
  Compass,
  Calendar,
  Newspaper,
  Search,
  Sparkles,
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpen,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { translations, Language } from '../../lib/translations';

interface FeaturesProps {
  lang?: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].features;

  const agendaIcons = [
    <Clock size={16} />,
    <GraduationCap size={16} />,
    <CheckCircle2 size={16} />,
    <BookOpen size={16} />,
    <Users size={16} />
  ];

  const feedIcons = [
    <Search size={14} />,
    <GraduationCap size={14} />,
    <BookOpen size={14} />,
    <Search size={14} />
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-surface dark:bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100 dark:border-blue-800">
              <Sparkles size={14} />
              {t.title}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-text dark:text-white mb-6 leading-tight">
              Un écosystème <br />
              <span className="text-primary decoration-4 underline decoration-blue-200/50 dark:decoration-blue-900/50 underline-offset-4">complet.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              {t.intro}
            </p>
          </Reveal>
        </div>

        {/* Connector Lines Layer (Visible on Desktop) */}
        <div className="hidden md:block absolute top-[300px] left-0 right-0 h-[800px] pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            {/* Path connecting 1 -> 2 */}
            <path d="M 300 200 Q 450 150 700 250" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" className="dark:stroke-slate-700" />
            {/* Path connecting 2 -> 3 */}
            <path d="M 850 400 Q 750 600 400 650" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" className="dark:stroke-slate-700" />
            {/* Path connecting 3 -> 4 */}
            <path d="M 450 750 Q 600 850 850 750" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 8" className="dark:stroke-slate-700" />
          </svg>
        </div>

        {/* Cards Grid - Compact Gap */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 md:gap-y-28 max-w-5xl mx-auto">

          {/* 1. ORIENTATION CARD (Rotated Left) */}
          <Reveal delay={0} direction="up">
            <div className="group md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative">
              <PinnedCard
                number="01"
                title={t.orientation.title}
                description={t.orientation.text}
                icon={<Compass size={28} />}
              >
                {/* Decor inside card */}
                <div className="absolute -right-4 top-10 text-white/10 rotate-12">
                  <ArrowRight size={56} strokeWidth={1} />
                </div>
              </PinnedCard>
            </div>
          </Reveal>

          {/* 2. AGENDA CARD (Rotated Right, Offset specific content) */}
          <Reveal delay={200} direction="up">
            <div className="group md:mt-12 md:rotate-3 hover:rotate-0 transition-transform duration-500 relative">
              <PinnedCard
                number="02"
                title={t.tracking.title}
                description={null} // Custom content below
                icon={<Calendar size={28} />}
              >
                <div className="space-y-3 mt-2 relative z-10">
                  <p className="text-base text-blue-50 font-medium leading-relaxed mb-6">
                    Un agenda intelligent pour tout organiser.
                  </p>
                  {t.tracking.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                      <div className="text-white">{agendaIcons[i]}</div>
                      <span className="text-sm font-bold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </PinnedCard>
            </div>
          </Reveal>

          {/* 3. NEWS FEED CARD (Rotated Right) */}
          <Reveal delay={400} direction="up">
            <div className="group md:-mt-8 md:rotate-1 hover:rotate-0 transition-transform duration-500 relative">
              <PinnedCard
                number="03"
                title={t.feed.title}
                description={t.feed.intro}
                icon={<Newspaper size={28} />}
              >
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {t.feed.items.map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/10 border border-white/20 flex flex-col gap-2 backdrop-blur-sm">
                      <div className="text-white/90">{feedIcons[i]}</div>
                      <div className="space-y-1.5 opacity-60">
                        <div className="h-1 lg:h-1.5 w-full bg-white/30 rounded-full"></div>
                        <div className="h-1 lg:h-1.5 w-2/3 bg-white/30 rounded-full"></div>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-blue-100 mt-1">{item}</span>
                    </div>
                  ))}
                </div>
              </PinnedCard>
            </div>
          </Reveal>

          {/* 4. SCHOOL SEARCH CARD (Rotated Left) */}
          <Reveal delay={600} direction="up">
            <div className="group md:mt-8 md:-rotate-2 hover:rotate-0 transition-transform duration-500 relative">
              <PinnedCard
                number="04"
                title={t.schools.title}
                description={t.schools.text}
                icon={<Search size={28} />}
              >
                <div className="mt-8 p-1.5 rounded-full bg-white/10 border border-white/20 flex items-center gap-2 shadow-sm backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform">
                    <Search size={16} />
                  </div>
                  <div className="px-2 text-xs font-bold text-blue-50 truncate">{t.schools.searchPlaceholder}</div>
                </div>
              </PinnedCard>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

// Reusable Pinned Card Component (Solid Blue Version + Fixed Pin)
const PinnedCard = ({ number, title, description, icon, children }: any) => {
  return (
    <div className="h-full relative transition-all duration-500 hover:-translate-y-2">

      {/* The Pin - Explicitly outside/top z-index to avoid clipping */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        {/* Pin Head */}
        <div className="w-4 h-4 rounded-full bg-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.3)] border-2 border-slate-300"></div>
        {/* Pin Shaft effect handled by shadow below */}
      </div>

      {/* Main Card Content Container - Clips internal background effects */}
      <div className="h-full bg-primary rounded-[2rem] p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden flex flex-col border border-white/10 group-hover:border-white/20 transition-all">

        {/* Glow Effect (Internal) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

        {/* Number Watermark */}
        <div className="absolute top-6 right-6 text-5xl font-black text-black/10 select-none font-serif z-0">
          {number}
        </div>

        {/* Content */}
        <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm">
          {React.cloneElement(icon, { size: 28 })}
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 relative z-10">
          {title}
        </h3>

        {description && (
          <p className="text-sm md:text-base text-blue-50 font-medium leading-relaxed mb-6 relative z-10">
            {description}
          </p>
        )}

        <div className="relative z-10 mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
};