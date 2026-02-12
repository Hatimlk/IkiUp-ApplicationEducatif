import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Sparkles, Search, Lightbulb, Trophy } from 'lucide-react';
import { FcNews, FcConferenceCall, FcAdvertising, FcShare } from 'react-icons/fc';
import { translations, Language } from '../../lib/translations';

// Images
import feature01 from '../../assets/images/features/01.png';
import feature02 from '../../assets/images/features/02.png';
import feature03 from '../../assets/images/features/03.png';
import feature04 from '../../assets/images/features/04.png';

interface FeaturesProps {
  lang?: Language;
}

export const Features: React.FC<FeaturesProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].features;

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden bg-surface dark:bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
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

        {/* Features Stack */}
        <div className="flex flex-col gap-12 md:gap-20">

          {/* Feature 01 */}
          <Reveal delay={0} direction="up">
            <div className="max-w-4xl mx-auto w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/10 hover:scale-[1.01] transition-transform duration-500 relative h-[300px] md:h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={feature01} alt={t.orientation.title} className="w-full h-full object-cover" />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-white/40 dark:bg-black/20" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col items-center justify-between text-center">

                {/* Top Section */}
                <div className="w-full flex justify-between items-start">
                  <div className="text-5xl md:text-7xl font-black text-blue-600/80 font-serif">01</div>
                  <div className="flex-1 mt-2">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2 max-w-2xl mx-auto leading-tight">
                      {t.orientation.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 text-sm md:text-base font-medium">
                      {t.orientation.subtitle}
                    </p>
                  </div>
                  {/* Spacer to balance the 01 */}
                  <div className="w-16 md:w-20"></div>
                </div>

                {/* Bottom Steps Section */}
                <div className="mt-auto w-full max-w-3xl glass-panel rounded-2xl p-4 md:p-6 backdrop-blur-md bg-blue-50/40 dark:bg-blue-900/20 border border-blue-100/50 dark:border-blue-700/30 shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">

                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-blue-400/50 -z-10 transform -translate-y-1/2"></div>


                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-2 relative z-10 group">
                      <div className="text-sm md:text-base font-black text-blue-900 dark:text-blue-100 uppercase tracking-wider">{t.orientation.steps[0].title}</div>
                      <div className="h-1 w-12 bg-blue-500 rounded-full mb-1"></div>
                      <div className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight bg-white dark:bg-blue-950 px-3 py-1 rounded-full shadow-sm border border-blue-100 dark:border-blue-800">
                        {t.orientation.steps[0].description}
                      </div>
                    </div>

                    {/* Icon 1 */}
                    <div className="p-2 rounded-full bg-yellow-100/80 text-yellow-600 shadow-lg glow-yellow animate-pulse-slow">
                      <Lightbulb size={20} className="fill-current" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center gap-2 relative z-10 group">
                      <div className="text-sm md:text-base font-black text-blue-900 dark:text-blue-100 uppercase tracking-wider">{t.orientation.steps[1].title}</div>
                      <div className="h-1 w-12 bg-purple-500 rounded-full mb-1"></div>
                      <div className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight bg-white dark:bg-blue-950 px-3 py-1 rounded-full shadow-sm border border-blue-100 dark:border-blue-800">
                        {t.orientation.steps[1].description}
                      </div>
                    </div>

                    {/* Icon 2 */}
                    <div className="p-2 rounded-full bg-orange-100/80 text-orange-600 shadow-lg glow-orange">
                      <Trophy size={20} />
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-2 relative z-10 group">
                      <div className="text-sm md:text-base font-black text-blue-900 dark:text-blue-100 uppercase tracking-wider">{t.orientation.steps[2].title}</div>
                      <div className="h-1 w-12 bg-emerald-500 rounded-full mb-1"></div>
                      <div className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-tight bg-white dark:bg-blue-950 px-3 py-1 rounded-full shadow-sm border border-blue-100 dark:border-blue-800">
                        {t.orientation.steps[2].description}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </Reveal>

          {/* Feature 02 */}
          <Reveal delay={200} direction="up">
            <div className="max-w-4xl mx-auto w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/10 hover:scale-[1.01] transition-transform duration-500 relative h-[300px] md:h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={feature02} alt={t.tracking.title} className="w-full h-full object-cover" />
                {/* Overlay - adjusting opacity for readability while keeping image visible */}
                <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-900/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-white/40 dark:bg-black/10" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col">

                {/* Header Section */}
                <div className="flex items-start justify-between w-full mb-4">
                  <div className="text-5xl md:text-7xl font-black text-blue-600/80 font-serif">02</div>
                  <div className="flex-1 text-center mt-2 px-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-1 leading-tight">
                      {t.tracking.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 text-sm md:text-base font-medium">
                      {t.tracking.subtitle}
                    </p>
                  </div>
                  {/* Spacer to balance the 02 */}
                  <div className="w-16 md:w-20"></div>
                </div>

                {/* Badges Container - Using absolute positioning for 'scattered' look relative to container */}
                <div className="relative flex-1 w-full">

                  {/* Badge 1: Emplois du temps - Top Leftish */}
                  <div className="absolute top-[10%] left-[5%] md:left-[10%] transform -rotate-2 hover:scale-105 transition-transform duration-300">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500 text-white font-black text-[10px] md:text-sm shadow-lg border-2 border-white/50 backdrop-blur-sm whitespace-nowrap">
                      {t.tracking.items[0]}
                    </span>
                  </div>

                  {/* Badge 2: Notes & évaluations - Middle Left */}
                  <div className="absolute top-[40%] left-[-2%] md:left-[2%] transform rotate-1 hover:scale-105 transition-transform duration-300">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900 text-white font-black text-[10px] md:text-sm shadow-lg border-2 border-white/50 backdrop-blur-sm whitespace-nowrap">
                      {t.tracking.items[1]}
                    </span>
                  </div>

                  {/* Badge 3: Accès enseignants... - Bottom Left */}
                  <div className="absolute bottom-[10%] left-[0%] md:left-[5%] transform -rotate-1 hover:scale-105 transition-transform duration-300">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500 text-white font-black text-[10px] md:text-sm shadow-lg border-2 border-white/50 backdrop-blur-sm whitespace-nowrap">
                      {t.tracking.items[4]} {/* Using item 4 (Acces) here for layout balance */}
                    </span>
                  </div>


                  {/* Badge 4: Absences & Présences - Top Right */}
                  <div className="absolute top-[15%] right-[2%] md:right-[10%] transform rotate-2 hover:scale-105 transition-transform duration-300">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500 text-white font-black text-[10px] md:text-sm shadow-lg border-2 border-white/50 backdrop-blur-sm whitespace-nowrap">
                      {t.tracking.items[2]}
                    </span>
                  </div>

                  {/* Badge 5: Remarques pédagogiques - Middle Right */}
                  <div className="absolute top-[50%] right-[-2%] md:right-[5%] transform -rotate-2 hover:scale-105 transition-transform duration-300">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-900 text-white font-black text-[10px] md:text-sm shadow-lg border-2 border-white/50 backdrop-blur-sm whitespace-nowrap">
                      {t.tracking.items[3]}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </Reveal>

          {/* Feature 03 */}
          <Reveal delay={400} direction="up">
            <div className="max-w-4xl mx-auto w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/10 hover:scale-[1.01] transition-transform duration-500 relative h-[300px] md:h-[400px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img src={feature03} alt={t.feed.title} className="w-full h-full object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-900/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-white/40 dark:bg-black/10" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col">

                {/* Header Section */}
                <div className="flex items-start justify-between w-full mb-4">
                  <div className="text-5xl md:text-7xl font-black text-blue-600/80 font-serif">03</div>
                  <div className="flex-1 text-center mt-2 px-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-1 leading-tight">
                      {t.feed.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-200 text-sm md:text-base font-medium">
                      {t.feed.intro}
                    </p>
                  </div>
                  {/* Spacer to balance the 03 */}
                  <div className="w-16 md:w-20"></div>
                </div>


                {/* Cards Container */}
                <div className="relative flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center content-center px-4">

                  {/* Card 1: Actualités */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow">
                      {/* Subtle highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-100/50 opacity-50"></div>

                      <FcNews size={56} className="relative z-10 drop-shadow-sm" />

                      {/* Notification Badge */}
                      <div className="absolute top-4 right-4 w-3.5 h-3.5 bg-red-500 rounded-full border-[3px] border-white dark:border-slate-800 shadow-sm z-20"></div>
                    </div>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20">
                      {t.feed.items[0]}
                    </span>
                  </div>

                  {/* Card 2: Communauté */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 mt-8 md:mt-16">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow">
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-100/50 opacity-50"></div>
                      <FcConferenceCall size={56} className="relative z-10 drop-shadow-sm" />
                    </div>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20">
                      {t.feed.items[1]}
                    </span>
                  </div>

                  {/* Card 3: Publications */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow">
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-100/50 opacity-50"></div>
                      <FcAdvertising size={56} className="relative z-10 drop-shadow-sm" />
                    </div>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20">
                      {t.feed.items[2]}
                    </span>
                  </div>

                  {/* Card 4: Partage */}
                  <div className="flex flex-col items-center gap-3 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 mt-8 md:mt-16">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden group-hover:shadow-2xl transition-shadow">
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-slate-100/50 opacity-50"></div>
                      <FcShare size={56} className="relative z-10 drop-shadow-sm" />
                      {/* Notification Badge */}
                      <div className="absolute top-3 rignt-3 w-6 h-6 bg-orange-400 rounded-full border-[3px] border-white dark:border-slate-800 flex items-center justify-center text-[10px] font-black text-white shadow-sm z-20 absolute top-3 right-3">
                        1
                      </div>
                    </div>
                    <span className="text-sm font-black text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-black/40 px-3 py-1 rounded-full backdrop-blur-md shadow-sm border border-white/20">
                      {t.feed.items[3]}
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/10 hover:scale-[1.01] transition-transform duration-500 relative h-[300px] md:h-[400px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={feature04} alt={t.schools.title} className="w-full h-full object-cover" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-blue-100/30 dark:bg-blue-900/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-white/40 dark:bg-black/10" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col">

              {/* Header Section */}
              <div className="flex items-start justify-between w-full mb-4">
                <div className="text-5xl md:text-7xl font-black text-blue-600/80 font-serif">04</div>
                {/* Top Right Checkmark */}
                <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Central Content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center -mt-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2 leading-tight max-w-2xl">
                  {t.schools.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-200 text-sm md:text-base font-medium mb-8">
                  {t.schools.subtitle}
                </p>

                {/* Search Interface Simulation */}
                <div className="w-full max-w-lg relative group">

                  {/* Search Bar */}
                  <div className="bg-blue-500 rounded-full py-3 px-6 md:py-4 md:px-8 shadow-xl flex items-center relative z-20 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-medium text-sm md:text-lg flex-1 text-center">
                      {t.schools.searchPlaceholder}
                    </span>
                    {/* Floating Search Icon */}
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-400 p-2 rounded-full shadow-lg border-2 border-white/30">
                      <Search className="text-white w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                    </div>
                  </div>

                  {/* Dropdown / Choices Simulation */}
                  <div className="w-[90%] mx-auto -mt-4 pt-8 pb-4 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-b-3xl border border-white/20 shadow-lg flex flex-col gap-2 px-4 relative z-10">
                    {t.schools.items.map((item, i) => (
                      <div key={i} className="bg-blue-100/80 dark:bg-blue-900/60 py-2 px-4 rounded-full text-blue-900 dark:text-blue-100 text-sm font-medium text-left opacity-90">
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Hand/Phone Decorative Element (Optional - simulated with icon if needed, but keeping generally clean) */}
                  <div className="absolute -left-12 -bottom-10 rotate-12 bg-blue-600 w-24 h-40 rounded-3xl border-4 border-slate-800 shadow-2xl z-30 hidden md:flex items-center justify-center overflow-hidden">
                    <div className="bg-slate-900 w-full h-full opacity-50"></div>
                    <div className="absolute bg-orange-400 w-8 h-8 rounded-full -left-4 top-10 border-2 border-white"></div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};