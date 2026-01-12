import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { Apple, Play, Mail, ArrowRight } from 'lucide-react';
import { translations, Language } from '../../lib/translations';

interface CTAProps {
  lang?: Language;
}

export const CTA: React.FC<CTAProps> = ({ lang = 'fr' }) => {
  const t = translations[lang].cta;

  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-950 text-slate-100 border border-white/5 shadow-2xl">
            {/* Background Accents Refined */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-20"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-sec rounded-full blur-[120px] opacity-10"></div>
            </div>

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                <div className="text-left">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-[10px] font-bold uppercase tracking-widest mb-8">
                    {t.tag}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight mb-8 leading-tight text-balance">
                    {t.title} <span className="text-secondary">{t.titleAccent}</span>
                  </h2>
                  <p className="text-base md:text-lg text-slate-400 mb-10 font-normal leading-relaxed max-w-xl">
                    {t.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button variant="white" size="lg" className="w-full sm:w-auto min-w-[180px] gap-3" href="https://apps.apple.com" target="_blank">
                      <Apple size={20} className="mb-0.5" />
                      <div className="flex flex-col items-start leading-tight">
                        <span className="text-[7px] uppercase font-black tracking-widest opacity-60">App Store</span>
                        <span className="text-base font-bold">Download</span>
                      </div>
                    </Button>
                    <Button variant="ghost" size="lg" className="w-full sm:w-auto min-w-[180px] gap-3 border border-white/10 text-white bg-white/5 hover:bg-white/10" href="https://play.google.com" target="_blank">
                      <Play size={18} className="fill-white mb-0.5" />
                      <div className="flex flex-col items-start leading-tight">
                        <span className="text-[7px] uppercase font-black tracking-widest opacity-60">Google Play</span>
                        <span className="text-base font-bold">Get it on</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="lg:pl-12 lg:border-l lg:border-white/10">
                  <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10">
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">
                      {t.questionTitle}
                    </h3>
                    <p className="text-slate-400 mb-8 font-normal leading-relaxed">
                      {t.questionText}
                    </p>

                    <a
                      href={`mailto:${t.email}`}
                      className="group flex items-center justify-between p-5 rounded-2xl bg-primary/10 border border-primary/20 hover:bg-primary transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg group-hover:bg-white group-hover:text-primary transition-colors">
                          <Mail size={20} />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white/80">{t.contactBtn}</div>
                          <div className="text-base font-bold text-white">{t.email}</div>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-primary group-hover:text-white transform group-hover:translate-x-1 transition-all" />
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