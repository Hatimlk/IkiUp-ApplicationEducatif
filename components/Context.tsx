import React from 'react';
import { Target, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Context = () => {
  return (
    <section className="py-24 bg-background border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 relative z-10">

          {/* 1. The Challenge */}
          <Reveal delay={0} direction="right" className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500/5 blur-3xl transform group-hover:scale-105 transition-transform duration-700 rounded-full"></div>
              <div className="relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-red-100 dark:hover:border-red-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 dark:bg-red-900/10 rounded-bl-[3rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500 flex items-center justify-center mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-xl font-serif font-black text-text dark:text-white mb-3">La dispersion</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Trop d'outils, trop de canaux, aucune vision d'ensemble. L'information se perd.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Arrow Connector */}
          <div className="hidden md:flex flex-col items-center justify-center text-slate-300 dark:text-slate-700 z-10">
            <div className="w-16 h-[2px] bg-current"></div>
            <ArrowRight size={24} className="absolute ml-12 text-slate-400" />
          </div>

          {/* 2. The Solution */}
          <Reveal delay={200} direction="left" className="flex-1 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl transform group-hover:scale-105 transition-transform duration-700 rounded-full"></div>
              <div className="relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all hover:border-emerald-100 dark:hover:border-emerald-900 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 dark:bg-emerald-900/10 rounded-bl-[3rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center mb-6">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-serif font-black text-text dark:text-white mb-3">La concentration</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Tout centralisé. Notes, orientation, et communication en un seul endroit clair.
                </p>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
